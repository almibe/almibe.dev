---
title: December Adventure Day 2 - Wander
tags: [blerg, post]
date: 2023-12-02
---

I had some other plans for today, but I don't feel like messing with frontend stuff and I got an idea I wanted to try out with Wander.
Wander is a scripting language I've been working on that tries to focus on having a minimal functional core and is intended to be ran from within a host application.
Trying to make a simple and flexible language can take many forms, and I want to be able to experiment.
Since I have a general idea of what I what the language to look like I'm not too worried about changes to the tokens.
I'm also fairly sure that I want only a limited number of expression types and only one way to define functions.
This means I can basically just generate a generic AST and pass it off to invidiual interpreters to do the final bit of processing and evaluation.

Here is what my first draft of what the trait looks like, it just wraps the eval function I was already using.

```scala
trait Interpreter:
  def eval(
      expression: Expression,
      environment: Environment
  ): Either[WanderError, (WanderValue, Environment)]
```

The other changes I made was I added a reference to the Interpreter being used to the Environment and I removed some expression types from the AST.
The expressions I removed were ones that were more specific cases of a general case.

The two interpreters I'm working on currently are one that is trying to be more general and one that acts more like a DSL for working with [Ligature](https://ligature.dev).
