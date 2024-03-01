---
title: Growing Sisal - pt 2
date: 2024-02-29
---

Hello, my messing around with digital gardens has a name now, everyone's favorite gardending twine, Sisal!
(sorry Jute fans)

Today I'd like to start by coding up some example data and processing it.
Yesterday I made up this as a possible example.

```
</blog/blog1.md> <contains> "This is some *markdown* text."
```

Let's improve on that a little as a starting off spot.
No need for the file extension, the Identifier for the document can just be the path.
`contains` is pretty file centric and doesn't mention what it contains so we can probably fix that as well.

```
</blog/blog1.md> isa <blog-article>,
</blog/blog1.md> isa <markdown-doc>,
</blog/blog1.md> <content> "This is some *markdown* text."
```
or

```
</blog/blog1.md> {
    isa [ <blog-article>, <markdown-doc> ],
    <content> "This is some *markdown* text." }
```

Now I can produce blog articles for the site by querying for <blog-articles> and I could also have blog articles use multiiple formats.

## Setting up Sisal

Since Sisal is working closely with vite to produce a website, I've decided to start work on this project in TypeScript.
I'm going to add it to the [ligature-web](https://github.com/almibe/ligature-web) project which contains all of the TypeScript projects related to Ligature.

On the Ligature side I'm going to be using [ligature-scala](https://github.com/almibe/ligature-scala) since it's the version I'm currently developing.
It shouldn't matter though since I'm planning on accessing Ligature via [ZeroMQ](https://zeromq.org/) and the Bend scripting language (Bend is a language for working with Ligature), so its specific implementation won't matter.
At first, I plan on just hard coding queries in TypeScript to hit the endpoint and we'll where it goes from there.
