# RogueCode MVP Scope

## Purpose

This document locks the major scope decisions for the first playable version of RogueCode. The goal is to remove ambiguity so implementation can move forward without reopening foundational questions every step of the way.

## Core MVP Shape

The first playable version will be:

- a single-page web experience
- frontend-first
- deterministic from a seed
- built around one complete run loop
- local-only for now, with no account or persistence requirements

## Locked Decisions

### 1. First Build Target

The first build target is a single-page artifact.

Why:

- it keeps the preview and validation model simpler
- it still supports layout, interaction, styling, and data rendering challenges
- it is enough surface area to prove the core fantasy without introducing routing complexity

### 2. First Class

The first playable class is `Typewright`.

Why:

- it maps cleanly to interaction, state, and component behavior
- it is easy to communicate to the player
- it pairs well with a frontend-first MVP
- it gives us a strong baseline for active abilities and validation feedback

### 3. First Blueprint

The first blueprint is `Potion Bazaar`.

Working fantasy:

- a strange magical catalog UI
- item cards, filters, featured sections, and visual identity
- enough structure to support style, interaction, and data encounters

Why:

- it is naturally visual
- it supports clear single-page goals
- it gives us obvious encounter hooks such as filtering, layout repair, card rendering, and responsive polish

### 4. Python In MVP

Python will not be a live runtime in the first playable version.

Instead:

- Python is represented through authored systems and content planning only
- live encounters focus on safe, known frontend surfaces first

Why:

- it avoids front-loading the hardest runtime problem
- it keeps the first validation loop simpler
- it still leaves room to add constrained Python later

### 5. Persistence

The first playable version will not depend on saved runs, profiles, or accounts.

Instead:

- run state can live entirely in memory
- seeds can be typed or shared manually later if useful

Why:

- it keeps the first slice focused on the run loop itself
- persistence can be added once the loop is proven fun

### 6. First Encounter Direction

The first encounter family should bias toward `interaction` with light `style` support.

Likely examples:

- make a filter control work
- wire a category toggle
- fix item card state behavior

Why:

- this complements `Typewright`
- it gives quick feedback in a live preview
- it is easier to validate than more subjective visual-only tasks

## What The MVP Must Prove

Before expanding scope, the project needs to prove:

- one run feels coherent from setup to launch
- route choice changes the build enough to be noticeable
- one encounter can be clearly validated
- the live preview makes edits feel satisfying
- the class choice affects how the player solves a problem

## What The MVP Explicitly Does Not Include

- multiplayer
- arbitrary code execution
- multi-page routing as a core requirement
- broad language support
- meta progression as a dependency for fun
- backend-heavy systems that are not required for the first run

## Immediate Build Implications

Because these decisions are now locked:

- early frontend work should optimize for one-page preview and encounter flow
- content modeling should start with `Typewright` and `Potion Bazaar`
- the first encounter data can center on item lists, filters, and card rendering
- backend work should stay lightweight until the run loop needs more support
