---
title: December Adventure Day 4 - Wander
tags: blerg
date: 2023-12-04
---

Did some refactoring today to work on getting Wander and Ligature working together again.
Also did some code changes.
The biggest was how Wander's ASTs are formed.
I'm tired so the pseudo code below might have some typos, but basically I'm using Scala collections more
and it makes the AST a bit more modular and easier to work with.
Below Seq's are regular Scala collections and every other name is a case of an Expression enum.

```
let id \x -> x,
id (id "hello")
```

```scala
Grouping(
  Seq(
    Let("id", Lambda("x", Seq(Name("x")))),
    Application(
      Seq(
        Name("id"),
        Grouping(
          Seq(
            Name("id"),
            String("Hello")
          )
        )
      )
    )
  )
)
```

```scala
Seq(
  Seq(
    Let("id", Lambda("x", Seq(Name("x"))))
  ),
  Seq(
    Name("id"),
    Grouping(
      Seq(
        Name("id"),
        String("hello")
      )
    )
  )
)
```

Next I will be working on getting LigatureInterpreter in better shape.
