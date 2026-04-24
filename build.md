# RogueCode Build Architecture

## Purpose

This document defines the recommended architecture for the first playable version of the roguelite. The goal is to make each run feel like shipping a weird, expressive mini product through code encounters rather than solving disconnected puzzles.

After we agree on this shape, we will derive a `plan.md` that breaks implementation into concrete milestones.

## Core Fantasy

The player is a code-mage exploring a seeded level tree. Each route changes how a frontend build evolves. Encounters are code challenges that modify a living project. By the end of a run, the player has assembled a complete mini app, site, or interactive toy with a distinct visual identity.

One run should answer this question:

"What did I build, and how did my path through the tree change it?"

## World Premise And Tone

The cleanest thematic frame is a living repository-forest where software grows from seeds into branches, structures, and blooms.

Recommended premise:

- every run begins from a `Seed`, a latent build blueprint with its own theme and potential
- unfinished or unstable builds are threatened by `The Drift`, a magical corruption made of broken layouts, mismatched data, brittle logic, and architectural decay
- the player is a `Branchrunner`, a code-mage who enters unstable seeds and guides them toward a successful launch
- each route through the tree shapes the build's final form, so the run is both a dungeon crawl and a product delivery arc

Recommended tone:

- imaginative, playful, lightly haunted, and creative
- bugs are mischievous or dangerous, but not shameful
- the game should never imply that struggling to code means the player is failing as a person
- bosses represent project-threatening forces and neglected systems, not smug gatekeepers or evil senior engineers

This keeps the fantasy coherent with the procedural tree structure while staying welcoming instead of cynical.

## Design Pillars

- One run equals one coherent artifact, not a bag of unrelated puzzles.
- Encounters should feel visual whenever possible: layout, animation, state, rendering, responsiveness, data display.
- Route choice must change future encounters, rewards, and the final build profile.
- The game should be deterministic from a seed so runs are replayable and debuggable.
- Classes should shape how a run approaches problems, not just recolor the same actions.
- Content should be data-driven so new challenges, items, themes, and build templates can be added without rewriting engine logic.

## Friendly-By-Design Philosophy

This game should feel inviting even when it is challenging. The fantasy is not "prove you deserve to code." The fantasy is "ship something cool with magical support, improvisation, and a little chaos."

That means the design should bias toward momentum, clarity, and recovery:

- required goals are clearly separated from bonus goals
- common items are genuinely helpful, not filler trash
- partial success should usually advance the run with a cost instead of hard-failing it
- feedback should explain what was missing in plain language
- class powers should create alternate paths to success, not exclusive expert shortcuts
- validators should reward progress and structure, not punish style preferences

The player should regularly feel helped by their toolkit. Rarity should mostly control how dramatic or run-defining an effect is, not whether the player gets support at all.

## Visual Direction: Playable 16-Bit Workshop

The frontend should not look like a generic coding dashboard with fantasy labels attached. The strongest direction is a playful 16-bit workshop aesthetic: part pixel-art spellbook, part retro IDE, part living forest terminal.

Recommended visual principles:

- use a limited palette per build theme so each run feels authored and readable
- favor chunky UI framing, pixel borders, iconography, and tile-like panels over flat modern SaaS cards
- treat the map, encounter screen, and preview shell as game spaces, not admin screens
- use expressive pixel or retro-inspired display typography for headings, paired with a highly legible body face
- keep animations simple, readable, and frame-like: blinking cursors, shimmer, hover bob, panel reveal, sprite flicker
- preserve accessibility and clarity even when the art direction is stylized

The target feeling is "cozy magical dev terminal from an alternate 16-bit era," not pure nostalgia for its own sake.

## 16-Bit Asset Strategy

If we want the frontend to feel consistently 16-bit, we should architect around reusable asset families instead of hand-making one-off decorations.

Recommended asset families:

- `Tiles`: panel edges, corners, fills, dividers, banners, map path segments
- `Sprites`: class portraits, bosses, enemies, relics, consumables, cursors, effects
- `Icons`: route symbols, resource markers, validation states, file tabs, difficulty badges
- `Backdrops`: parallax or layered scene art for menus, map biomes, and boss arenas
- `FX`: sparkles, scanlines, bloom pips, corruption overlays, failure cracks, success bursts
- `Portrait Frames`: reusable dialogue or info panel surrounds for classes, bosses, and events

Recommended visual system rules:

- each theme should define a small palette, not unlimited color freedom
- items and bosses should be readable first, detailed second
- encounter UI should be composed from reusable pixel-chrome components
- responsive layouts should scale cleanly without blurring or collapsing the pixel treatment

This is important for scope. A reusable kit of borders, tiles, icons, and sprite slots will carry the look much further than drawing every screen as bespoke art.

## Recommended MVP Shape

For the first playable version, the run should build a single frontend artifact inside a controlled web sandbox.

Recommended editable surfaces for MVP:

- `component` or `view` file for structure and interaction
- `styles` file for layout, color, animation, and responsiveness
- `logic` file for lightweight state and behavior
- `data` file for structured input used by the build

This lets us make visual, testable encounters without immediately supporting unrestricted execution across multiple runtimes.

## Run Loop

1. The player chooses a class, difficulty, and optional seed.
2. The generator creates a build blueprint.
3. The player moves through a branching node tree across several acts.
4. Each node presents a code encounter, event, shop, or recovery choice.
5. Successful encounters modify the current build state and grant rewards.
6. Partial success may add tech debt or reduce stability instead of ending the run.
7. The run ends with a launch or boss evaluation that scores the assembled build.
8. Meta progression unlocks new classes, items, templates, and harder content.

## Build Blueprint Model

Every run starts from a generated build blueprint. This is the anchor that keeps the run coherent.

Each blueprint should define:

- `productType`: landing page, interactive gallery, mini dashboard, catalog, visualizer, profile site, tool UI
- `theme`: cozy forest, retro terminal, neon market, scholarly archive, strange biotech, etc.
- `coreDataShape`: flat list, nested tree, timeline, cards, stats, categories
- `mandatoryMilestones`: features the run must complete to win
- `preferredTags`: which route styles fit this build best
- `finalEvaluationWeights`: what the boss cares about most

Example blueprint directions:

- Treehouse Atlas: nested data explorer with strong responsive navigation
- Potion Bazaar: catalog UI with filters, hover states, and visual flair
- Relic Dashboard: data-heavy control panel with charts or status components
- Bug Shrine: haunted microsite with animation, surprises, and scripted events

## Seeded Tree And Route Pressure

The tree should not just determine rewards. It should determine development strategy.

Recommended route axes:

- `Style`: visual polish, layout, animation, typography, theming
- `Interaction`: events, state, filters, toggles, input handling
- `Data`: structured content, transformations, rendering from source data
- `Architecture`: refactors, reusable components, systemization, cleanup

How route choice affects the run:

- It changes the weighted pool of future encounters.
- It changes item and relic drops.
- It changes the kind of starter code the player sees.
- It changes the evaluation weights on the final build.
- It can unlock route-specific boss modifiers.

Example:

If the player keeps leaning into `Data`, later encounters are more likely to add nested JSON, list rendering, and transform utilities. If they keep leaning into `Style`, later encounters emphasize layout, breakpoints, motion, and visual composition.

## Acts

A clean starting structure is four acts plus a final launch:

1. Scaffold: establish the base UI and first required feature.
2. Expansion: add core systems tied to the chosen route.
3. Specialization: push harder class and route synergies.
4. Polish: responsiveness, cleanup, accessibility, tuning.
5. Launch: final boss or build review.

This gives the run a software-delivery arc instead of a random dungeon arc.

## Threats, Enemies, And Bosses

This game does not need traditional combat enemies in every node. The better model is that encounters are personified build problems, anomalies, and hostile project conditions.

Recommended threat taxonomy:

- `Glitches`: common low-tier problems like missing structure, broken selectors, bad assumptions, or simple interaction bugs
- `Blights`: stronger corruptions that warp a system such as responsiveness, state flow, or data rendering
- `Elites`: named anomalies with mutators, rarer rewards, and more dangerous failure penalties
- `Bosses`: final launch threats that punish what the player neglected across the run

Example encounter-flavored enemy concepts:

- `Overflow Moths`: layout and spacing problems that spill beyond intended bounds
- `Null Wisps`: missing data and empty-state anomalies
- `Breakpoint Beetles`: responsive bugs that only emerge under viewport pressure
- `Event Gremlins`: interaction failures, ghost clicks, and broken handlers
- `Schema Vines`: tangled nested data and malformed structures
- `Debt Leeches`: corruptions that feed on unresolved shortcuts

Bosses should feel like project-ending crises rather than villain monologues.

Recommended boss pool:

- `Breakpoint Leviathan`: punishes weak responsiveness, spacing, and layout resilience
- `Regression Hydra`: punishes brittle interaction logic and neglected behavior
- `The Hollow Schema`: punishes poor data structure and rendering assumptions
- `The Silent Auditorium`: punishes weak semantics, accessibility, and clarity
- `Tech Debt Colossus`: punishes instability, shortcuts, and neglected cleanup

Boss selection should be biased by:

- the run's blueprint
- the player's route choices
- the systems the player neglected
- the amount of accumulated TechDebt

## Classes

The most natural first roster for a frontend-first roguelite is:

| Class | Primary Language | Identity | Route Bias |
| --- | --- | --- | --- |
| Typewright | JavaScript or TypeScript | Interaction, components, state, event-driven systems | Interaction, Architecture |
| Pyromancer | Python | Data shaping, generators, helpers, transformation-heavy play | Data, Architecture |
| Cascade Alchemist | CSS | Layout, motion, responsiveness, visual dominance | Style, Polish |
| Template Smith | HTML or JSX | Structure, semantics, scaffolding, accessibility | Style, Interaction |

Why this roster:

- It stays close to the "frontendish and visual" goal.
- It gives us distinct playstyles without inventing detached fantasy languages.
- CSS and HTML or JSX are immediately valuable in visual encounters.
- Python can matter through data-driven and generator-style systems even before we add unrestricted Python execution.

## Class Mechanics

Each class should have the same chassis:

- one passive ability
- one active ability with a limited run resource
- one starting relic
- one weighted encounter bias
- one fallback strength during partial failure

Example first-pass identities:

- Typewright
  - Passive: first interaction-related validation failure per encounter is softened
  - Active: auto-stub one event handler or state path
  - Starting relic: Hot Reload Sigil
- Pyromancer
  - Passive: reveals sample transformed output and one hidden edge case
  - Active: transmute or reshape input data once per act
  - Starting relic: Script Familiar
- Cascade Alchemist
  - Passive: stronger baseline scoring on layout and responsiveness goals
  - Active: lock in one breakpoint or style objective for the node
  - Starting relic: CSS Potion Belt
- Template Smith
  - Passive: semantic and accessibility goals have reduced penalty
  - Active: generate a starter scaffold for the current node
  - Starting relic: Skeleton Forge

## Class Specialization Trees

Classes should be easy to start and interesting to deepen. For MVP, each class can have a small specialization tree with two or three unlockable branches rather than a giant skill web.

Recommended structure:

- players choose a class at run start
- during a run, they unlock one or two branch perks tied to that class
- branches amplify a playstyle without invalidating the base kit
- later meta progression can unlock additional branch nodes

Suggested branch directions:

- Typewright
  - `Event Binder`: stronger input and interaction tooling
  - `State Weaver`: improved state recovery and reactive effects
  - `Component Architect`: bonuses for reusable structure and cleanup
- Pyromancer
  - `Data Shaper`: stronger transforms, filters, and derived outputs
  - `Generator Sage`: can conjure starter data or reshape encounter inputs
  - `Debug Seer`: sees edge cases, failures, and hidden validation hints
- Cascade Alchemist
  - `Layout Witch`: excels at spacing, alignment, and breakpoint repair
  - `Motion Brewer`: gains animation and transition-focused bonuses
  - `Token Gardener`: grows strong theme systems and design tokens
- Template Smith
  - `Semantic Mason`: structure and accessibility are easier to satisfy
  - `Scaffold Forger`: begins encounters with stronger starter markup
  - `A11y Warden`: better recovery from structural and usability failures

These branches should feel like "how I solve problems" rather than "which damage color I do."

## Items, Abilities, And Rewards

Items should feel like development tools, cursed shortcuts, and magical project resources.

Recommended item types:

- `Consumables`: one-use effects during or before an encounter
- `Relics`: persistent run modifiers
- `Datasets`: inject new content structures or unlock special challenge branches
- `Snippets`: partial code helpers or starter modules
- `Curses`: strong upside with long-term penalties

Recommended rarity philosophy:

- `Common`: practical, dependable, and run-saving
- `Uncommon`: more conditional but stronger synergy
- `Rare`: swingy or build-defining
- `Legendary`: run-warping effects with major upside or complexity

Example item ideas:

- CSS Potion: automatically satisfies one visual polish objective
- Tree Dataset: injects nested sample data and boosts Data-tag rewards
- Flexbox Compass: reveals responsive constraints before the encounter starts
- Lint Familiar: exposes one hidden validation rule
- Refactor Hammer: removes one stack of tech debt after a successful node
- Ghost Cursor: grants one safe retry after viewing failure feedback
- Design Token Satchel: adds a stronger theme system to the current build

Common items should often do things like:

- reveal one hidden requirement
- generate starter structure
- fix one responsive issue
- clean or reshape input data
- reduce TechDebt after a partial success
- soften one failed validation rule

## Core Run Resources

Recommended first-pass resources:

- `Stability`: health equivalent; lost on failed or partial encounters
- `Bandwidth`: spent on active abilities
- `Insight`: currency for shops, rerolls, and reveal effects
- `TechDebt`: persistent penalties that make later encounters harsher
- `BuildScore`: tracks final evaluation strength across the run

These should stay lightweight in MVP. The point is to create tension, not simulation overload.

## Difficulty Model

Difficulty should represent project pressure, environmental corruption, and tighter recovery margins, not just raw punishment.

Recommended difficulty ladder:

- `Prototype`: generous recovery, fewer elite threats, clearer starter support, forgiving final review
- `Studio`: intended baseline, balanced resources, normal route pressure
- `Launch Week`: stronger elites, tighter recovery economy, stricter milestone demands
- `Driftstorm`: high corruption, harsher TechDebt pressure, more dangerous boss modifiers, rare recovery windows

Difficulty should mainly change:

- how much starter help the player receives
- how harsh failure penalties and TechDebt become
- how many bonus complications an encounter can roll
- how punishing the final launch review is
- how often elites, curses, and severe route modifiers appear

Even at high difficulty, required goals should still be legible. Hard mode should test adaptation and planning, not concealment.

## Encounter Structure

Each encounter should define:

- objective summary
- editable files
- starter code
- acceptance criteria
- optional bonus goals
- route tags
- class affinities
- reward pool
- failure penalties

Challenge families for MVP:

- layout encounter
- responsive repair
- component composition
- state and interaction
- data rendering
- style reskin
- refactor and cleanup
- accessibility pass
- bugfix under pressure

## Validation Philosophy

The game should not depend on subjective judging for core progression.

Preferred validator stack:

- DOM assertions
- snapshot or structural checks
- data shape validation
- CSS property or layout rule checks where feasible
- responsive viewport checks
- optional bonus lint-style checks

This keeps the game deterministic and fair.

## Technical Architecture

### Frontend

Recommended direction:

- migrate the current CRA app to Vite early
- move to TypeScript early if we want the engine and content contracts to stay maintainable
- keep the game client as the primary shell for map flow, run state, encounter UI, and preview
- build the shell around a reusable pixel UI kit instead of one-off screen styling

Suggested frontend domains:

- `game/engine`: seed logic, reducers, run simulation, reward application
- `game/content`: content loaders and selectors
- `features/map`: route tree and node selection
- `features/encounter`: code challenge screen and criteria display
- `features/preview`: live desktop and mobile preview panes
- `features/meta`: unlocks, loadouts, seed history
- `styles`: global theme and shell styling
- `assets`: sprite sheets, tile sheets, portraits, icons, and themed visual packs

Recommended frontend presentation rules:

- use CSS variables for palette swaps and theme tokens
- treat sprite rendering and pixel scaling as first-class concerns
- keep panel chrome, buttons, tabs, and windows in reusable themed components
- allow the live code preview to sit inside the same visual language as the game shell without making it unreadable

### Visual Asset Pipeline

The art pipeline should be simple enough for us to iterate quickly while preserving a coherent 16-bit look.

Recommended MVP asset approach:

- create a small base UI kit first: frame pieces, buttons, tabs, window chrome, icons, cursor states
- create one starter class portrait set and one starter boss sprite
- create one map biome and one encounter backdrop family
- use sprite sheets where repeating assets make sense
- store theme metadata separately from bitmap assets so palettes and styling can evolve without repainting every screen

Recommended asset directory direction:

- `rogue-code/src/assets/ui`: chrome pieces, buttons, tabs, frames, cursors
- `rogue-code/src/assets/sprites`: classes, enemies, bosses, items, effects
- `rogue-code/src/assets/tiles`: map and panel tile sets
- `rogue-code/src/assets/backgrounds`: menu scenes, biomes, launch backdrops
- `rogue-code/src/assets/fonts`: pixel or retro display fonts licensed for app use

Recommended implementation details:

- prefer integer scaling for pixel assets where possible
- set image rendering rules deliberately so assets stay crisp
- define a small animation system for sprite idles, hover effects, corruption pulses, and reward reveals
- keep bitmap assets for atmosphere, but let layout and most interface composition stay code-driven

This balance matters. We want handcrafted charm without turning every new screen into a full art production task.

### Sandbox

Recommended MVP sandbox:

- isolated preview iframe for HTML, JSX, CSS, and lightweight JS behavior
- validation runner separated from UI concerns
- desktop and mobile viewport tabs for responsive checks

### REPL-Like Sandbox Architecture

The player experience should feel like working inside friendly live coding REPLs, even if the underlying system is constrained for safety and determinism.

Recommended interpretation of "just run REPLs":

- HTML, JSX, CSS, JavaScript, and JSON get fast live-edit behavior with immediate preview
- encounter definitions decide which surfaces are editable for a given node
- validators run against a known contract for those surfaces
- players see quick iteration and feedback, not heavy compile rituals

This gives us the live coding fantasy without requiring unrestricted execution across every runtime on day one.

Important recommendation:

Do not begin with arbitrary code execution on the backend.

The first version should run controlled, template-based encounters with known editable surfaces. That makes validation, safety, and debugging dramatically simpler.

### Python Support

Python should be a first-class class fantasy from the beginning, but the runtime support can be phased:

- Phase 1: Python encounters act like constrained data and helper REPLs for transforms, generators, and authored utility logic
- Phase 2: introduce richer in-browser Python execution through a tool like Pyodide if the core loop proves fun

This avoids front-loading the hardest technical risk before we know the game loop is working.

### Backend

The existing `backend` directory is a good home for content models and procedural generation services.

Recommended backend role:

- seed-based run generation
- content loading from JSON
- validation metadata and encounter definitions
- saved run or meta progression later if needed

Recommended files:

- `backend/main.py`: app bootstrap
- `backend/api.py`: endpoints for seed generation and content retrieval
- `backend/models.py`: schema models for build templates, encounters, classes, rewards
- `backend/json/*.json`: authored content pools

MVP note:

The frontend can read local JSON directly at first if that lets us build faster. The backend becomes more important once we want save data, richer generation, or sharable seeds.

## Content Model

The current JSON files already hint at a solid data-driven setup:

- `character-data.json`: class definitions, passives, actives, starting loadouts
- `challenge-data.json`: encounter templates, tags, criteria, rewards
- `build.json`: build blueprints and final evaluation weights
- `styling.json`: themes, palettes, spacing systems, typography packages
- `seed.json`: saved seeds, generation presets, or debug cases

Useful data shape ideas:

- every encounter has tags like `style`, `responsive`, `data`, `boss`, `elite`
- every class has `primaryLanguage`, `routeWeights`, and `starterRelics`
- every build blueprint has `requiredMilestones` and `preferredRouteBias`
- every item has `rarity`, `triggerTiming`, `effectType`, and `synergyTags`
- every theme package has `palette`, `fontPair`, `uiFrameSet`, `iconSet`, and `backgroundSet`
- every boss or enemy can reference `spriteSheet`, `idleAnimation`, and `blightEffects`
- every class can reference `portrait`, `mapToken`, and `specializationIconSet`

## Procedural Generation Model

Recommended generation order:

1. Choose a build blueprint from the seed.
2. Choose a theme and styling package.
3. Generate the route tree for the acts.
4. Apply class-based bias to encounter pools.
5. Track route decisions as tags on the evolving build state.
6. Use missing milestones plus route tags to choose future encounters.
7. Generate rewards based on scarcity, synergy, and act difficulty.
8. Generate the final launch review from what the run emphasized or neglected.

This lets the run feel authored and procedural at the same time.

## Evolving Build State

The build should persist through the entire run as structured state, not just as score.

Recommended build-state buckets:

- `structure`: layout pattern, component count, page sections
- `style`: theme tokens, motion level, visual complexity
- `interaction`: filters, toggles, navigation, form behavior
- `data`: sources, nesting level, derived views
- `quality`: responsiveness, accessibility, maintainability
- `debt`: instability or unresolved shortcuts

Each encounter modifies one or more of these buckets.

## Boss And Final Evaluation

The final encounter should evaluate the whole build, not a random standalone test.

Good final review dimensions:

- functionality
- visual identity
- responsiveness
- data correctness
- accessibility
- maintainability

The boss can emphasize the dimensions the player neglected. A Style-heavy run might face a brutal functionality review. A Data-heavy run might be pushed on polish and responsiveness.

## Run Outcomes And Terms

The game should use consistent language for what a run means. Because the world is seed-and-branch based, the outcome terms can reinforce the theme.

Recommended run-state terms:

- `Seed`: the generated start state for a run
- `Branch`: a route choice through the level tree
- `Patch`: a recovery or maintenance node
- `Blight`: a corruption modifier or elite problem state
- `Launch`: the final review or boss encounter

Recommended outcome terms:

- `Bloomed Build`: full win; the project launches successfully and joins the living archive
- `Archived Prototype`: soft loss or partial success; the build did not fully launch, but enough was learned or salvaged to preserve rewards
- `Withered Run`: hard loss; Stability collapses or a critical milestone failure causes the build to fall apart

This is especially important for the friendly tone. Not every non-perfect run should feel like total death. `Archived Prototype` gives us a graceful middle state that still grants progression.

## Meta Progression

Recommended unlock tracks:

- new classes
- new build blueprints
- new themes and style packages
- new item pools
- higher difficulty modifiers
- elite or cursed encounter sets

Meta progression should expand possibility space, not simply inflate numbers.

## MVP Boundaries

To keep the first version buildable, the MVP should avoid these traps:

- no multiplayer
- no freeform editing of arbitrary project files
- no server-side arbitrary code execution
- no AI-only judging for core win conditions
- no attempt to support every language equally on day one
- no giant content explosion before one run is actually fun

MVP should still preserve the welcoming feel:

- frequent helpful consumables
- understandable failure feedback
- small but meaningful class branches
- live preview that feels responsive and playful

## Recommended First Milestones

- create a single playable run with one class, one blueprint, one act, and one boss
- support one live preview with desktop and mobile layouts
- implement deterministic seeded encounter selection
- build one reusable 16-bit UI kit and one starter asset pack
- ship a small item pool with obvious, fun effects
- prove that route choice changes the resulting build
- then expand class roster, content volume, and runtime complexity

## Open Decisions To Resolve Next

- Do we want the first build target to be a single-page app only, or a small multi-screen artifact?
- Do we want Python live in the sandbox immediately as a constrained data REPL, or only represented through authored helper systems in MVP?
- Do we want classes to be strictly language-bound, or language-plus-role hybrids with specialization branches?
- Do we want the final build exported or saved in early versions, or keep it run-local until the loop is fun?

## Recommendation Summary

The safest and strongest architecture is:

- frontend-first
- seed-driven
- data-authored
- visual by default
- built around a reusable 16-bit asset pipeline
- class-distinct
- welcoming and recovery-friendly
- procedurally biased by route tags
- REPL-like in player experience
- validated through deterministic checks

If we follow that, we can make the game feel novel early without getting trapped by the hardest runtime problems before the fun is proven.
