---
title: Encoding Description Logic in Ligature
date: 2024-09-14
tags: [garden, post, design]
---

*this document is a very rough draft*

This document explains my current thoughts on encoding Description Logic (specifically tiny-dl) in Ligature and Wander.

DL Notation

```
Cat ≡ ∃weighs.Weight ⊓ ∃dob.Date
```

Wander Notation

```
(≡ Cat (⊓ (∃ weighs Weight) (∃ dob Date)))
```

Ligature Notation

```
{
  ≡ Cat _01
  _01 : ⊓
  _01 arg _02
  _01 arg _03
  _02 : ∃
  _02 role weighs
  _02 concept Weight
  _03 : ∃
  _03 role dob
  _03 concept Date
}
```
