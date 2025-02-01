---
title: Expressing Network Models as Documents
date: 2024-01-31
tags: [garden, post, design, data-modeling, sisal]
---

*this document is a very rough draft*

As I'm making progress on sisal, an 11ty plugin for working with Ligature's data model, I've been working on a problem of how to integrate Ligature's data model with 11ty's (in this case 11ty's data model is really just JavaScript's).
Ideally I want to be able to write Wander scripts that allows me to work with Ligature's data model internally and produce something that can be easily used by 11ty to produce websites.
I decided to try to fit within 11ty's conventions as much as possible, so Wander files that produce data should work similarly to how JavaScript files that supply data work.

[https://www.11ty.dev/docs/data-js/]

One difference is that since Wander is stack based instead of exporting data it uses the convention of exporting the value left on the stack after running the script.
I've decided also by convention to expect a json string literal as the result.
Ligature's data model can't directly model JSON so representing it as a json string at the boundary lets us be precise in what we hand off.

With that background now we can start to think about producing data that is usuable from JavaScript from Wander.

Let's start with some very basic metadata in a network.

```wander
{ article1 title "Bah",
  article1 author "Sheep",
  article2 title "Bork",
  article2 author "Dog" } 
```

If we wanted to express this in JSON we'd probably want to return an array with two objects, one for each article.
In Wander to create a JSON string there is the to-json action that expects an encoded Quote to represent the JSON value.
For example.

```wander
[object "a" "b" "c" [array] "d" [object "a" "b"]] to-json display-stack
```

produces

```
 → "{\"a\":\"b\"\"c\":[]\"d\":{\"a\":\"b\"}}"
```

Finally to get from the Network to a Quote that can be used to create JSON we can use the query Action.
The query Action reads three Terms from the Stack, the network to search, the pattern to search for, and the template to create results, and pushes the result on the Stack as a Quote.

```wander
{ article1 title "Bah",
  article1 author "Sheep",
  article2 title "Bork",
  article2 author "Dog" } 
{?article title ?title, ?article author ?author} 
[object "id" ?article "title" ?title "author" ?author] query
[array] prepend to-json
display-stack
```

```
 → "[{\"id\":\"article2\",\"title\":\"Bork\",\"author\":\"Dog\"},{\"id\":\"article1\",\"title\":\"Bah\",\"author\":\"Sheep\"}]"
```
