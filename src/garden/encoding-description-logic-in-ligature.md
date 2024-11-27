---
title: Encoding Description Logic in Ligature
date: 2024-11-26
tags: [garden, post, design]
---

*this document is a very rough draft*

This document explains my current thoughts on encoding Description Logic in Ligature and Wander through the tiny-dl project.

## Terms

DL Notation

```
Cat ≡ ∃weighs.Weight ⊓ ∃dob.Date
```

Wander API

```
-- encoded S-expression style
(≡ Cat (⊓ (∃ weighs Weight) (∃ dob Date))),

-- dsl-ier
describe Cat (weighs . Weight) (dob . Date),

-- either could result in the following network
{
  Cat : tiny-dl:ConceptName,
  Weight : tiny-dl:ConceptName,
  Date : tiny-dl:ConceptName,
  weighs : tiny-dl:RoleName,
  dob : tiny-dl:RoleName,
  weighs . Weight,
  dob . Date,
  Cat ∃ weighs,
  Cat ∃ dob
}

```
