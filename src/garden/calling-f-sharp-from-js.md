---
title: Calling F# from JS
date: 2024-08-09
tags: [garden, post]
---

## Intro

Fable is a project that allows you to compile F# code for targets other than dotnet.
I've been using it to produce JS code for Ligature + Wander.
It works really well.
However, an issue with compiling to JS from a language that isn't based on JS is that the results are not always easy to use from JS.
You end up with a lot of arrays of data that are acting as tuples to represent discriminated unions and other artifacts of cross compiling.

One solution is to just not use JS at all but that locks you into writing all your code in F# and having to cross compile constantly.
This also means if you want to use a JS library you'll be in charge of making it usable from F#.
What I would prefer instead is building a library in F# and using it from JS like it was any other JS library.
I want Fable and F# to just be an implementation detail like if a project used a functional library internally but exposed a traditional JS interface.

I've tried a couple of approaches to solving this problem and I'd like go over them.

## TypeScript Focused Solution

The first approach involves compiling your fable code to JS or TS and then writing a module in TypeScript that defines the types you want to work with and exposes a TypeScript api.
This was the first approach I tried and I used it for quite a while.
It works fine, but you end up with fragile TypeScript code that is also kind of tedious to write.
A lot of the code is converting the array/tuples I mentioned above to data structures that are easier to work with.
Since, I'm still experimenting with my data model and api so it makes this approach even more annoying since I'm frequently breaking things.

(The 1.5 approach I thought about but didn't actually experiment with is using JSON to communicate between F# and JS.
This wouldn't have worked well in my case since I need to pass functions around too not just data.)

## F# Focused Solution

The second approach is much more F# focused and uses Fable's core and a couple slightly obscure F# feature.
With this approach I want to write F# functions that are meant to only be called from JS and never from F#.
Instead of returning something F# likes (ADTs), we'll return something that is more palitable from JS (objects).

In very simple cases you can just return an anonymous record.
Fable translates these into pretty much what you would expect.

```f#
{|
  Hello = "World"
|}
```

```javascript
{
  Hello: "World"
}
```

Arrays also work as you would expect (note: avoid returning Lists since they end up being linked lists in JS).

```f#
[| "Hello"; "World" |]
```

```javascript
[ "Hello", "World" ]
```

Arrays and annonymous records work well too as long as all of your records are the same.

```f#
[|
  {| Hello = "World" |}
  {| Hello = "Anna" |}
|]
```

```js
[
 { Hello: "World" },
 { Hello: "Anna"}
]
```

However, type safety rears its ugly head if you try something like this thought:

```f#
[|
  {| Hello = "World" |}
  {| Hey = "Planet" |}
|]
```

In F# we would represent this with a type that can be either Hello or Hey.
In JS we just want this to be a thing without any extra effort.
This is where Fable's API and an even more obscure F# feature than annonynous records comes into play.

### Dynamic Operators + createEmpty

Dynamic Operators are an interesting feature of F#, because they have no implementations in the standard library.
Fable implements them for their JS interop types, and they help solve the problem with mixing types in Arrays.
Basically when we create an array instead of using annonymous records we want to use createEmpty to make a dynamic object and then use F#'s dynamic operators to set values on that object.

```f#
let hello = createEmpty
let hey = createEmpty

hello?Hello <- "World"
hey?Hey <- "Planet"

[| hello; hey |]
```

```js
[
  { Hello: "World" },
  { Hey: "Planet" }
|]
```
