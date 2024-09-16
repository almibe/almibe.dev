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
Note that is contains two visable sections separated by `---`.
The first part is the TBox that defines the Concepts and Roles of the knowledge base.
Below it is the ABox that defines domain of the interpretation.

```
Cat ≡ ∃weighs.Weight ⊓ ∃dob.Date
---
betty weighs 11lbs
betty dob 2/11/2021
```

When this script is ran the following interpretation is generated.

| Name   | Values                      |
| ------ | --------------------------- |
| ∆      | { betty, 11lbs, 2/11/2021 } |
| Cat    | { betty }                   |
| Weight | { 11lbs }                   |
| Date   | { 2/11/2021 }               |
| weighs | (betty, 11lbs)              |
| dob    | (betty, 2/11/2021)          |

## API

...