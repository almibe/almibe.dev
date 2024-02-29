---
title: Growing a Digitial Garden...ing Tool? pt 1
date: 2024-02-28
---

## Intro

As I've been getting back into writing online and making progress on software tools like [Ligature](https://ligature.dev) and [the vite plugin](https://github.com/almibe/nail-clipper-screwdriver) used to generate [this site](https://almibe.dev/blerg/2023-12-14-december-adventure-14-nail-clipper-screwdriver), I've been curious about how I could combine these interests.
I've decided to directly combine them and start working on a digital gardening tool to replace how I'm creating this website currently.

I should state up front what my goals are for this work.
I've been wanting to expand this website beyond just some developer notes for a while.
Besides blog updates I would like to do some other writing on computer history and also use this website to distribute JavaScript utilty applications.
While the websites I work on aren't particularly complex, becuase of how I like to compose projects and I because usually involve one or three beefy JS libraries (that might hate each other) I often run into a number of hurdles that pile up when I'm working on frontend projects.
In general I've found vite to be the solution to a lot of my problems related to this which is why nail-clipper-screwdriver is a vite plugin.
I feel that a focus on building ontop of existing frontend tooling (vite) while using a rich graph and scripting language for constructing content (Ligature + scripting languages) will be very useful.

I plan on documenting this process on this blog as it transforms from being based on markdown files to a personally more useful website backed by Ligature's data model.

## Getting Started

Ligature is still being developed itself.
This work is an early application for Ligature.
In fact most of this early work will be figuring out what still needs to be added to Ligature in order for me to begin work on anything else.
Although now that I think about I should be able to get started on a very simple first pass of this idea immediately.

A very simple first pass would involve replicating the content from this blog that currently resides in markdown files into Ligature.
So a file named /blog/blog1.md would be stored in Ligature as

```
</blog/blog1.md> <contains> "This is some *markdown* text."
```

The code that generated the blog from the file system could now just read the markdown from Ligature.
I think that gives me enough to do for a bit!
