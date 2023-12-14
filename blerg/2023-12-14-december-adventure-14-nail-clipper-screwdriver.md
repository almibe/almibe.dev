---
title: December Adventure Day 14 - Nail Clipper Screwdriver
date: 2023-12-14
---

I've spent the past couple of days rethinking how I publish websites.
I've been using Astro which is nice, but anytime I don't touch it for a while I have to relearn the Astro-isms.
And a lot of the Astro-isms I struggle with the most exist for features I'm not making use of.
So I've decided to play around with making my own static site generator again.
This time I've decided to leverage vite as much as humanly possible and do as little work on my own.

If you can see this post, it's working!

<small>(assuming you aren't reading it from github or my office computer)</small>

I've never written a vite or rollup plugin before, but I do have experience using them so that was helpful.
The documentation is good but having to jump between the vite and rollup docs was a little annoying when I was trying to figure out which methods I needed to implement.
Since I'm doing something kind of out of the ordinary I can't complain too much.
After some experimentation I finally figured out what seemed like a good way to integrate with vite.
I do all of my initial processing in `buildStart` and keep track of all of the html fils I generate.
I then pass the list of html files to the rollup configuration's `input` parameter.
From there it's just a normal vite build.

Eventually I'll need to mess with the `handleHotUpdate` method if I want to implement dev/watch support,
but for now it builds fast enough < 500ms and I'm not really debugging any style or code right now.

My next step is to move it into it's own package and start to use it on some of my other websites.
