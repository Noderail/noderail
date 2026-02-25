# The Intellectual Continuity Problem Index

**Version:** 0.1 &nbsp;·&nbsp; **Maintainer:** NodeRail &nbsp;·&nbsp; **Status:** Draft

This index documents the recurring failure modes that cause intellectual work to fragment, reset, or disappear. Each entry is a named, defined problem. NodeRail is designed to prevent all of them.

---

## Why Name These Problems?

Most organisations experience these failure modes constantly but do not have names for them. Without names, the problems cannot be diagnosed, measured, or fixed. This index gives them names.

---

## The Nine Failure Modes

### 1. Concept Drift

**Definition:** The gradual, untracked shift in the meaning of a term or construct across documents, teams, or time.

**How it happens:** A term gets used in slightly different ways by different people. No one updates the definition. Over months or years, the same word means different things to different parts of the organisation. Decisions get made on incompatible assumptions.

**Where it appears most:** Cross-functional teams, long-running research programs, organisations that have grown through acquisition, any field that lacks a governed glossary.

**NodeRail response:** Canonical definitions with version histories and named stewards.

---

### 2. Documentation Debt

**Definition:** The accumulated gap between the work that has been done and the work that has been properly documented.

**How it happens:** Teams move fast. Documentation is treated as a secondary task. The gap between what was done and what is recorded grows until the knowledge is effectively lost. Future team members inherit outputs without the reasoning that produced them.

**Where it appears most:** Fast-moving startups, research labs under publication pressure, consulting projects with tight timelines.

**NodeRail response:** Structured node templates that make documentation a first-class act, not an afterthought.

---

### 3. Founder Dependency

**Definition:** Critical knowledge lives only in one person's head.

**How it happens:** The person who built a system, defined a framework, or developed a methodology never externalises the reasoning. When they leave, the work cannot be continued without starting over. The organisation loses not just a person but an entire body of reasoning.

**Where it appears most:** Early-stage organisations, research groups built around a single PI, consulting firms where expertise is personal rather than institutional.

**NodeRail response:** Stewardship metadata and lineage tracking that make knowledge transferable by design.

---

### 4. Duplicate Definitions

**Definition:** The same construct gets defined differently in different documents, with no canonical version.

**How it happens:** Two teams independently define the same term for their own purposes. Neither knows the other exists. Both definitions circulate. People cite them interchangeably without realising they are different. The field fragments.

**Where it appears most:** Large organisations with siloed teams, interdisciplinary research, fields that are growing faster than their governance.

**NodeRail response:** Canonical definition system with explicit conflict detection via the `conflicts-with` link type.

---

### 5. Dead Docs

**Definition:** Documents that exist but are no longer maintained, linked, or trusted.

**How it happens:** A document is created, used briefly, and then forgotten. It remains accessible but no one knows if it is current. People find it through search and act on outdated information. The document creates false confidence without adding continuity.

**Where it appears most:** Wikis, shared drives, any system where documents are created freely but never reviewed or retired.

**NodeRail response:** Stewardship requirements and evidence badges (Draft, Pilot, Validated, Contested, Deprecated) that make the status of every node explicit.

---

### 6. Knowledge Fragmentation

**Definition:** Intellectual work is scattered across chat threads, email, slides, and wikis with no connective structure.

**How it happens:** Work happens in the fastest available tool. Insights live in Slack. Decisions live in email. Frameworks live in decks. None of these are connected. Retrieval is impossible at scale. The organisation cannot build on its own thinking.

**Where it appears most:** Everywhere. This is the default state of most organisations.

**NodeRail response:** Structured nodes with explicit link types that connect related work across tools and time.

---

### 7. Version Confusion

**Definition:** Multiple versions of a framework or model circulate without clear lineage.

**How it happens:** A framework gets updated. The new version is shared but the old version is not retired. Both circulate. People cite different versions without knowing they disagree. The framework loses credibility because no one knows which version is current.

**Where it appears most:** Consulting frameworks, academic models, any methodology that evolves over time.

**NodeRail response:** Version lineage and the `supersedes` link type, which makes the relationship between versions explicit and traceable.

---

### 8. Context Loss at Handoff

**Definition:** When a project changes hands, the reasoning behind decisions is lost.

**How it happens:** A project is handed from one person or team to another. The outputs transfer. The reasoning does not. The new owner inherits a set of decisions without the thinking that produced them. They cannot evaluate whether those decisions are still valid.

**Where it appears most:** Consulting engagements, academic supervision handoffs, organisational restructuring, any project that spans more than one team or tenure.

**NodeRail response:** Lineage metadata and the Continuation Hook in Project nodes, which require the author to document the reasoning and the next steps explicitly.

---

### 9. Capstone Waste

**Definition:** Students and researchers produce high-quality work that gets graded or reviewed, then archived and forgotten.

**How it happens:** A student completes a capstone project. It is assessed. It receives a grade. It is filed. The next cohort starts from scratch on a related problem, unaware that the work was already done. The institution loses compounding value every semester.

**Where it appears most:** Universities, research programmes, any institution with cohort-based learning.

**NodeRail response:** The Project node type with a required Continuation Hook, which explicitly documents what the next person should build on.

---

## How to Use This Index

This index is a diagnostic tool. If your organisation or field experiences any of these failure modes, NodeRail is designed to address them.

[See how NodeRail works →](/how) &nbsp;·&nbsp; [Request Access →](/access) &nbsp;·&nbsp; [Read the Glossary →](/glossary)
