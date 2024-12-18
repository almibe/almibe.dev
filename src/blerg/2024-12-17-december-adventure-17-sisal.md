---
title: December Adventure Day 17 - More Plans for Sisal
tags: [blerg, post]
date: 2024-12-17
---

Spent some time experimenting with the collections api and a couple of plugin apis in 11ty.
I did some basic proof of concepts using the `addCollection` method and I'm pretty happy with the results.

The next thing I need to figure out is how to get the data from Ligature into the system.
I was thinking about having a separate config file, but instead I'm going to work on adding Wander files as data sources.
I'm going to approach this first by simply running the Wander scripts in the data directory and translating the result of each script to a JavaScript ojbect.
