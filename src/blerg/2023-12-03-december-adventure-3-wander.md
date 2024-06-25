---
title: December Adventure Day 3 - Wander
tags: blerg
date: 2023-12-03
---

Hello, yesterday I made it so the scripting language I've been working on has pluggable interpreters.
I also made a dummy implementation that always returns `nothing`.

```scala
class EpsilonInterpreter extends Interpreter {
  def eval(
      expression: Expression,
      environment: Environment
  ): Either[WanderError, (WanderValue, Environment)] =
    Right(WanderValue.Nothing, environment)
}
```

Today I'm working on refactoring out the code that works with Ligature from Wander and into it's own project.
After today hopefully Wander and Ligature will have no dependencies on each other and all of that code will exist in the `LigatureEnvironment`.

---

I managed to get the major refactoring complete today and updated some of my testing tool to allow for switching between interpreters.
Next I'm going to start focusing on getting the semantics of the invididual interpreters worked out.