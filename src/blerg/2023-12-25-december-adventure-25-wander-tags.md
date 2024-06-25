---
title: December Adventure Day 25 - Wander Tags
tags: blerg
date: 2023-12-25
---

For the past two days I've been starting work on implementing Tags in Wander.
Tags are functions from a single argument to a Bool.
Tags are used to validate preconditions and postconditions for binding values and working with functions.
Below I create a Tag function called Zero and use it with two bindings.
Core.Int and Core.Bool themselves are Tags that ship with Wander.

```
Zero: Int -> Bool = \i -> Core.eq i 0,

z: Zero = 0, -- happy
z: Zero = 1  -- error
```

I have over half the cases where you could put tags working, but I have a feeling it will take a while to catch all the corners.
After getting the initial mechanics in place I'm going to start on a library to help build complex Tags.
