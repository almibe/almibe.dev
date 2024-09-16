---
title: tiny-dl
date: 2024-09-16
tags: [garden, post, design]
---

*this document is a very rough draft*

tiny-dl is a set of libraries for working with Description Logic.
The main implementation is in F# currently.
It is very new and experimental so expect apis or the entire goal of the project to change.

tiny-dl is being designed with two modes of interaction in mind.
The first is via a small scripting language based on DL syntax.
The second is via an api in the native language.

## Scripts

tiny-dl scripts allow you to write out a knowledge base and generate an interpretation of it.
Below is a sample tiny-dl script.

```
Knot ≡ ∃abok.ABoK ⊓ ∃named.Name,
(_01, #1452): abok,
(_01, "Ashley's bend"): named
```

When this script is ran the following interpretation is generated.

| Name  | Values                          |
| ----- | ------------------------------- |
| ∆     | { _01, #1452, "Ashley's bend" } |
| Knot  | { _01 }                         |
| ABoK  | { #1452 }                       |
| Name  | { "Ashley's bend" }             |
| abok  | { (_01, #1452) }                |
| named | { (_01, "Ashley's bend") }      |

## API

...