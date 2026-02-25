# NodeRail Continuity Standard v0.1

**Version:** 0.1 &nbsp;·&nbsp; **Maintainer:** NodeRail &nbsp;·&nbsp; **Status:** Draft &nbsp;·&nbsp; **Published:** 2026-02-25

A lightweight public standard for structuring intellectual work so it can compound over time. Any node published on NodeRail must meet these requirements to qualify as continuity-grade intellectual infrastructure.

---

## Why a Standard?

Intellectual continuity does not happen by accident. It requires structure. Without a minimum standard, nodes become indistinguishable from ordinary documents: unversioned, uncited, and unlinked. The NodeRail Continuity Standard defines the minimum requirements for a piece of intellectual work to be genuinely continuity-grade.

---

## The Six Requirements

### Requirement 1: Node Metadata

Every node must declare the following metadata fields:

| Field | Description |
|---|---|
| `node_id` | A unique, permanent identifier |
| `node_type` | One of: Field, Framework, Measurement, Project |
| `title` | A clear, unambiguous title |
| `status` | One of: Draft, Pilot, Validated, Contested, Deprecated |
| `created_by` | The name of the original author |
| `created_at` | The date of first publication |
| `version` | The current version number |
| `license` | The license under which the node is published |

**Why:** Without metadata, a node cannot be cited, tracked, or governed. Metadata is the minimum condition for intellectual continuity.

---

### Requirement 2: Canonical Definition

Every construct or term introduced in a node must have a canonical definition. A canonical definition must include:

- A clear, precise statement of meaning
- A named owner (the person or organisation responsible for maintaining it)
- A version number
- A change log entry for any update

**Why:** Without canonical definitions, terms drift. Concept drift is one of the most common and costly forms of intellectual continuity failure.

---

### Requirement 3: Version Lineage

Every node must declare its lineage. Lineage includes:

- **Parent nodes:** The nodes this work directly builds on
- **Adopted sources:** External works that were incorporated
- **Forked origins:** The specific node version this was forked from (if applicable)

Lineage cannot be empty without explicit justification. A node with no lineage must include a statement explaining why it is a genuine origin point.

**Why:** Without lineage, credit is lost and work cannot be built upon coherently. Lineage is the mechanism by which intellectual work compounds.

---

### Requirement 4: Change Log

Every version update must include a change note that explains:

- What changed
- Why it changed
- Who made the change

Silent updates — changes made without a corresponding change note — are not permitted.

**Why:** Silent updates destroy intellectual continuity. They make it impossible to understand how a concept evolved or why decisions were made.

---

### Requirement 5: Link Relations

Nodes that depend on, support, conflict with, or supersede other nodes must declare those relationships explicitly using NodeRail link types:

| Link Type | When to use |
|---|---|
| `supports` | This node provides evidence or reasoning that strengthens another node |
| `depends-on` | This node requires another node to be valid or useful |
| `conflicts-with` | This node contradicts or is in tension with another node |
| `supersedes` | This node replaces a previous node |

**Why:** Without explicit link relations, the connective tissue of a field is invisible. Nodes become isolated documents rather than a compounding body of knowledge.

---

### Requirement 6: Stewardship

Every node must have a named steward: a person or organisation responsible for its maintenance. Stewardship requirements:

- A steward must be named at publication
- Stewardship can be transferred but cannot be vacant
- A node whose steward is unreachable for more than 12 months may be flagged for community stewardship review

**Why:** A node without a steward is at risk of becoming a dead doc. Stewardship is the mechanism that keeps intellectual work alive.

---

## Applying the Standard

The NodeRail Continuity Standard is applied through the node templates. Each template includes all required metadata fields and prompts for lineage, link relations, and stewardship.

[Field Constitution Template →](/template-field-constitution) &nbsp;·&nbsp; [Framework Node Template →](/template-framework-node) &nbsp;·&nbsp; [Measurement Node Template →](/template-measurement-node) &nbsp;·&nbsp; [Project Node Template →](/template-project-node)

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 0.1 | 2026-02-25 | Initial publication. Six requirements defined. |

---

*The NodeRail Continuity Standard is itself a node on NodeRail. It is subject to the same versioning, lineage, and stewardship requirements it defines.*
