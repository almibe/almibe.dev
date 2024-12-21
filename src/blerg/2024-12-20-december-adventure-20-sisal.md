---
title: December Adventure Day 20 - Sisal
tags: [blerg, post]
date: 2024-12-20
---

Today I started working on supporting Wander templates in Sisal.
I initally tried this a different way, where you would return a network from a script and the network would include all off the information for a template.
That was a little tedious even if it had some benefits.
Instead this time I'm using commands that are registered from JS (a feature I'm still finishing up but a working version exists).
These commands allow you to write to a buffer that is used as the final output for the template.