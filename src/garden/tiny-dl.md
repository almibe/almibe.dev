---
title: tiny-dl
date: 2024-09-18
tags: [garden, post, design]
---

*this document is a very rough draft*

tiny-dl is a set of libraries for working with Description Logic.
The main implementation is in F# currently.
See https://github.com/almibe/ligature-fs/src/tiny-dl/ and https://github.com/almibe/tiny-dl/.
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

| Name  | Type    | Values                          |
| ----- | ------- | ------------------------------- |
| ∆     | Domain  | { _01, #1452, "Ashley's bend" } |
| Knot  | Concept | { _01 }                         |
| ABoK  | Concept | { #1452 }                       |
| Name  | Concept | { "Ashley's bend" }             |
| abok  | Role    | { (_01, #1452) }                |
| named | Role    | { (_01, "Ashley's bend") }      |

Below is work in progress fake ebnf for the syntax

```
Name: [0-9a-zA-Z-_]+
AtomicConcept: Name
Role: Name
Invididual: Name
UnaryPredicate: Individual ':' AtomicConcept
BinaryPredicate: '(' Individual ',' Individual ')' ':' Role
ConceptDefinition: AtomicConcept '≡' ConceptExpression
ConceptInclusion: AtomicConcept '⊑' ConceptExpression
ConceptDisjunction: ConceptExpression '⊔' ConceptExpression
ConceptConjunction: ConceptExpression '⊓' ConceptExpression
ExistenialRestriction: '∃' Role '.' ConceptExpression
ValueRestriction: '∀' Role '.' ConceptExpression
Negation: '¬' ConceptExpression
ConceptExpression: ConceptDefinition | ConceptInclusion
Expression: UnaryPredicate | BinaryPredicate | ConceptExpression
Script: (Expression ',')*
```

## API

...
