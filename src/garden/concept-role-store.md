---
title: Concept-Role Stores
date: 2024-10-01
tags: [garden, post, design]
---

*this document is a very rough draft*

A Concept-Role Store is an extension on triple stores inspired by Description Logic.
It is made up of two stores that work together internally, a Concept store and a Role store.

## Role Store

The role store is a normal triple store.
It stores two elements as an ordered pair and the role that connects them as each entry.

## Concept Store

The concept store tracks which elements extend which concepts.
For example you could say that 11 extends the concept Int, circle extends the concept shape, sally extends the concept dog.
These are often called "is-a" relationships.
One oddity of the concept store is that you can also say explicitly that an element doesn't extend a concept.
This is to aid in reasoning since you need to be able to record this information to find clashes.

## How does this compare to a Knowledge Base in Description Logic?

In Description Logic, a Knowledge Base is made up a TBox and an ABox.
Concept-Role Stores do not explicitly model TBoxes at all and are limited to normalized views of ABoxes.
The idea behind this is that a Concept-Role store can be used as the underlying store for more complex systems.
