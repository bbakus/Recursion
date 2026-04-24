# RogueCode Implementation Plan

## Purpose

This document turns `build.md` into a practical plan of attack. The goal is to break the project into small, manageable steps so we can move from concept to first playable build without losing the larger vision.

## Planning Principles

- keep the first version small and playable
- prefer deterministic systems over clever but hard-to-debug ones
- build the shell before expanding content
- validate one loop before widening scope
- end each phase in a stable, runnable state

## Current Starting Point

- `build.md` exists and gives us the design direction
- `plan.md` now acts as the delivery roadmap
- the frontend app exists but is still mostly blank
- the frontend currently does not build cleanly
- backend Python files are placeholders
- content JSON files are placeholders
- there is no game loop implemented yet

## MVP Target

The first playable milestone should include:

- one class
- one build blueprint
- one act
- a small branching map
- one real encounter type
- deterministic seeded generation
- a live preview
- validation feedback
- a final launch review or boss check

## Phase 1: Repair The Base App

### Goal

Get the existing frontend into a clean, stable state so it can support real work.

### Tasks

- fix the missing `reportWebVitals` issue or remove the import
- make sure `npm run build` passes
- make sure `npm start` launches a usable shell
- replace the empty app screen with a temporary placeholder home screen

### Done When

- the frontend builds successfully
- the app renders without errors
- we have a stable place to start feature work

## Phase 2: Lock The MVP Scope

### Goal

Turn open architecture questions into concrete build decisions.

### Tasks

- confirm the first playable target is a single-page artifact
- choose the first class for MVP
- choose the first build blueprint for MVP
- decide that Python is represented through authored systems only for MVP
- decide the first version will not depend on persistence or accounts

### Done When

- the big scope questions are no longer blocking implementation
- the repo has one clear MVP direction

## Phase 3: Create The Project Skeleton

### Goal

Set up a code structure that matches the architecture doc without overengineering it.

### Tasks

- organize the frontend into feature-oriented folders
- add directories for game state, content, map, encounter, preview, and shared UI
- add directories for assets and theme styling
- sketch the backend module roles even if implementation stays light at first

### Done When

- the folder structure matches the shape of the project we want to build
- future code has obvious places to live

## Phase 4: Define Content Shapes

### Goal

Create the data contracts before we start generating runs or rendering content.

### Tasks

- define the shape for classes
- define the shape for encounters
- define the shape for build blueprints
- define the shape for themes and styling packages
- define the shape for seeds and debug presets

### Done When

- the main content types are clearly described
- we can build systems against known structures instead of guesses

## Phase 5: Seed The Content Files

### Goal

Put real starter content into the empty JSON files.

### Tasks

- add one class entry
- add one blueprint entry
- add a few encounter entries
- add one styling or theme package
- add one debug seed example

### Done When

- `backend/json/*.json` are no longer empty
- the project has enough authored content to drive a first slice

## Phase 6: Add Backend Models

### Goal

Make the backend content layer understandable even before it becomes fully active.

### Tasks

- define basic schema models in `backend/models.py`
- document how each JSON file maps to a model
- prepare `backend/api.py` and `backend/main.py` for later use

### Done When

- backend content contracts are visible in code
- there is a clean bridge between data files and runtime systems

## Phase 7: Build The Temporary Home Screen

### Goal

Replace the blank frontend with a simple starting screen.

### Tasks

- add a title
- add a short game premise
- add a start run button
- add placeholder navigation to future screens

### Done When

- the app feels like a game project instead of an empty scaffold

## Phase 8: Build The Run Setup Screen

### Goal

Let the player define the starting conditions for a run.

### Tasks

- add class selection UI
- add difficulty selection UI
- add optional seed input
- show the selected blueprint or a placeholder for it

### Done When

- a player can start a run from clear inputs

## Phase 9: Create Core Run State

### Goal

Establish the main state model that survives across the run.

### Tasks

- define run state shape
- define player resource fields like Stability and TechDebt
- define current act, node, encounter, and rewards state
- define the evolving build-state buckets

### Done When

- the run can be represented as structured state instead of loose component logic

## Phase 10: Add Seeded Random Helpers

### Goal

Make the game deterministic and replayable.

### Tasks

- implement seed parsing
- implement a seeded random utility
- add helpers for weighted selection
- verify the same seed gives the same results

### Done When

- generation behavior is deterministic
- debugging specific runs becomes practical

## Phase 11: Generate The First Map

### Goal

Create a small branching route structure for the first act.

### Tasks

- define a simple node model
- generate a short act map from a seed
- support a few node types such as encounter, patch, and reward
- visualize the route in a simple way

### Done When

- a run has a navigable path instead of a linear placeholder

## Phase 12: Build The Encounter Screen Shell

### Goal

Create the main play surface for a code challenge.

### Tasks

- add an encounter header
- show the objective summary
- show editable file or surface areas
- show required goals and bonus goals
- add submit and retreat or back controls

### Done When

- the encounter screen can host real gameplay

## Phase 13: Choose The First Encounter Family

### Goal

Narrow the first playable challenge to one specific kind of problem.

### Tasks

- choose between layout, interaction, or another clear starter family
- define what the player is allowed to edit
- define what the encounter is trying to teach or test
- define pass, partial success, and fail expectations

### Done When

- one encounter type has clear design rules

## Phase 14: Author The First Playable Encounter

### Goal

Create one full encounter from content to UI.

### Tasks

- write the starter code or starter state
- write the objective text
- write the required checks
- write the bonus checks
- connect it to one map node

### Done When

- one encounter can be loaded and played end to end

## Phase 15: Build The First Validation Pass

### Goal

Make encounter resolution fair and understandable.

### Tasks

- implement deterministic checks for the first encounter
- return pass, partial success, or fail
- show which required goals succeeded
- show which goals were missed

### Done When

- players get clear feedback instead of guesswork

## Phase 16: Apply Encounter Outcomes

### Goal

Connect encounter results back into the run.

### Tasks

- add reward handling on success
- add small penalties on failure or partial success
- update Stability, TechDebt, or BuildScore
- move the player back to the run flow after resolution

### Done When

- encounters have consequences and the run can continue

## Phase 17: Add The First Live Preview

### Goal

Let players see the build evolve as they work.

### Tasks

- render a live preview pane
- wire encounter edits into the preview
- keep the preview scoped to safe, known surfaces

### Done When

- the encounter feels visual and responsive

## Phase 18: Add Mobile And Desktop Views

### Goal

Support the responsive side of the game fantasy early.

### Tasks

- add desktop preview mode
- add mobile preview mode
- let the player switch between them
- make sure validators can read the intended viewport context later

### Done When

- responsive testing is part of the encounter experience

## Phase 19: Implement The First Class

### Goal

Make class choice affect play in a real way.

### Tasks

- add one class passive
- add one active ability
- add one starting relic or helper
- add one class-specific fallback edge during partial failure

### Done When

- the chosen class changes how the player approaches the same challenge

## Phase 20: Add Basic Resources

### Goal

Introduce light run pressure without overcomplicating the MVP.

### Tasks

- track Stability
- track Bandwidth or equivalent class ability resource
- track Insight if needed for simple rewards
- track TechDebt

### Done When

- the run has stakes and recovery pressure

## Phase 21: Add Route Tags

### Goal

Make paths represent different development styles.

### Tasks

- tag encounters with route categories
- tag rewards with route synergy
- record player route leaning during the act

### Done When

- route identity exists in the data and state model

## Phase 22: Add Encounter Bias By Route

### Goal

Make earlier choices influence later content.

### Tasks

- weight future encounter selection by route history
- adjust reward selection by route leaning
- reflect route emphasis in the evolving build state

### Done When

- runs diverge based on player path, not only on seed

## Phase 23: Add A Small Reward Pool

### Goal

Make post-encounter rewards part of the loop.

### Tasks

- add a few common items
- add one recovery-focused reward
- add one build-shaping reward
- add a simple reward choice UI

### Done When

- rewards create short-term and mid-run decisions

## Phase 24: Add The First Patch Or Recovery Node

### Goal

Support the friendly, recovery-focused tone described in `build.md`.

### Tasks

- create a non-combat recovery node
- allow one resource repair or TechDebt reduction
- show that the run can recover from mistakes

### Done When

- the game loop supports momentum instead of pure punishment

## Phase 25: Build The Final Review Screen

### Goal

Create the structure for the end-of-run evaluation.

### Tasks

- add a launch review layout
- show the final build summary
- show the run summary
- show key strengths and neglected areas

### Done When

- the run has a real ending screen

## Phase 26: Add The First Final Evaluation Logic

### Goal

Judge the full run, not just the last encounter.

### Tasks

- score a few dimensions like functionality, style, and responsiveness
- factor in route choices and unresolved TechDebt
- return a run outcome such as full success or partial success

### Done When

- the run resolves in a way that reflects what the player actually built

## Phase 27: Add The First Visual System

### Goal

Move away from placeholder styling and toward the intended game identity.

### Tasks

- define CSS variables for palettes and spacing
- pick a starter visual direction
- style the shell screens consistently

### Done When

- the app stops feeling like default React scaffolding

## Phase 28: Build The UI Kit

### Goal

Create reusable visual building blocks for the shell.

### Tasks

- make panels
- make buttons
- make tabs
- make badges
- make framed windows or containers

### Done When

- new screens can be styled from shared components instead of one-off CSS

## Phase 29: Add The First Art Pass

### Goal

Introduce just enough art to establish tone.

### Tasks

- add one class portrait or placeholder portrait style
- add one boss or anomaly visual
- add one map or backdrop treatment

### Done When

- the game has atmosphere, not just layout

## Phase 30: Expand Content Carefully

### Goal

Increase replay value only after the core loop works.

### Tasks

- add more encounters in the supported family
- add at least one more blueprint or theme
- add more debug seeds

### Done When

- the vertical slice is replayable enough to evaluate design quality

## Phase 31: Add Lightweight Backend Endpoints

### Goal

Use the backend where it helps without making it the bottleneck.

### Tasks

- expose content loading if needed
- expose seed generation if needed
- keep the frontend able to work with local content during iteration

### Done When

- backend support exists where useful but does not slow early development

## Phase 32: Add Tests And Debug Tools

### Goal

Make iteration safer as systems start interacting.

### Tasks

- add tests for seeded generation
- add tests for encounter validation
- add debug seeds and fixtures
- add simple development shortcuts for jumping into a run state

### Done When

- we can reproduce and verify important game states quickly

## Phase 33: MVP Quality Pass

### Goal

Tune the first playable slice until it feels coherent.

### Tasks

- tighten confusing UI
- improve failure feedback
- reduce unfair validations
- make sure the run length feels reasonable
- make sure the player usually understands what to do next

### Done When

- the MVP is something we can play, assess, and build on confidently

## Immediate Next Steps

The best short-term order from here is:

1. complete Phase 1 and get the frontend building
2. complete Phase 2 and lock the MVP scope
3. complete Phases 3 through 6 and create the project and content skeleton
4. complete Phases 7 through 18 and get one encounter playable with preview
5. complete Phases 19 through 26 and turn it into a real run
6. complete Phases 27 through 33 and make it feel like RogueCode

## Things To Avoid Early

- arbitrary code execution
- multiplayer
- too many classes before one class feels good
- too many encounter families before one encounter is fun
- backend-heavy architecture before frontend gameplay exists
- polishing dozens of screens before the run loop works

## Definition Of A Good First Sprint

A strong first sprint would finish:

- Phase 1
- Phase 2
- Phase 3
- Phase 4
- Phase 5

That would give us:

- a working frontend build
- a clearer MVP direction
- a usable code structure
- defined content contracts
- real starter content to build against
