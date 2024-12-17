---
title: Encoding Description Logic in Ligature
date: 2024-12-16
tags: [garden, post, design]
---

*this document is a very rough draft*

This document explains my current thoughts on encoding Description Logic in Ligature and Wander through the tiny-dl project.

## Terms

DL Notation

```
Cat ⊑ Pet
Dog ⊑ Pet
Pet ≡ ∃weighs.Weight ⊓ ∃dob.Date
```

Wander API

```
is-subconcept Cat Animal,
is-subconcept Dog Animal,
describe Cat (weighs . Weight) (dob . Date),
```

Ligature Model

```
{
  Cat subconcept-of Animal,
  Dog subconcept-of Animal,
  Animal : tiny-dl:ConceptName,
  Weight : tiny-dl:ConceptName,
  Date : tiny-dl:ConceptName,
  weighs : tiny-dl:RoleName,
  dob : tiny-dl:RoleName,
  weighs . Weight,
  dob . Date,
  Animal ∃ weighs,
  Animal ∃ dob
}

```
