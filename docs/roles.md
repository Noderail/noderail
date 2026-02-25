# Who Uses NodeRail

NodeRail has three distinct roles. Understanding which role you occupy shapes how you interact with the platform.

---

## The Three Roles

### 1. Field Founder / Maintainer

A Field Founder creates and stewards a Field Node — the canonical home for a body of knowledge. The Founder sets the field's scope, constructs, evidence standards, ethics charter, and governance rules. In v0.1, all fields are founder-maintained, meaning the Founder is the primary steward of what counts as official content within their field.

**What a Field Founder does:**
- Publishes the Field Constitution (the canonical governance document)
- Defines the core constructs, scope, and evidence standards for the field
- Maintains the field's registries (frameworks, measurements, projects)
- Reviews and approves nodes that seek Official status within the field
- Publishes the first nodes to establish the field's intellectual foundation

**Who this is for:** Researchers, practitioners, or academics who are building or formalising a new field, sub-field, or discipline. NodeRail's first Field Founder is Gao Kabubi, founder of Human Capacity Science (HCS).

---

### 2. Contributor

A Contributor publishes nodes — Frameworks, Measurements, or Projects — linked to an existing field. Contributors extend the field's intellectual infrastructure without needing to create a new field from scratch. Every node a Contributor publishes is attributed to them permanently, with full lineage preserved.

**What a Contributor does:**
- Publishes Framework, Measurement, or Project Nodes under a field
- Links their work to parent nodes using the lineage metadata schema
- Fills in the Continuation Hook on Project Nodes so others can build forward
- Forks or extends existing nodes with full attribution back to the origin
- Proposes nodes for Official status within a field

**Who this is for:** PhD students, researchers, practitioners, and students who have intellectual work — a framework, an instrument, a project — that deserves a permanent, citable home. No institutional affiliation is required.

---

### 3. Reader

A Reader discovers, cites, and extends work on NodeRail. Readers do not need to publish anything to get value from the platform. They can browse nodes, cite them in their own work, and use the lineage graph to trace the intellectual history of any idea.

**What a Reader does:**
- Discovers nodes through the field index, search, or direct links
- Cites nodes using the "Cite as" block on each node
- Forks or extends nodes (which transitions them to Contributor status)
- Evaluates the lineage of a node to understand its intellectual provenance

**Who this is for:** Anyone who consumes, cites, or builds on intellectual work — students writing dissertations, researchers conducting literature reviews, practitioners looking for validated frameworks, or anyone curious about a field.

---

## Role Transitions

Roles are not fixed. A Reader becomes a Contributor the moment they publish a node. A Contributor becomes a Field Founder the moment they create a new field. The platform does not gate these transitions — they are determined by what you publish.

| Action | Role |
|---|---|
| Browse and cite nodes | Reader |
| Publish a Framework, Measurement, or Project Node | Contributor |
| Create and maintain a Field Constitution | Field Founder |

---

## Lineage and Attribution Across Roles

Regardless of role, every node on NodeRail carries the same lineage metadata:

| Metadata field | Purpose |
|---|---|
| `created_by` | The person who originally created this node |
| `maintainer` | The person currently responsible for maintaining it |
| `lineage.parents` | Node IDs this node directly extends or builds on |
| `lineage.adopted_from` | External works (papers, repos) this node adapts |
| `lineage.forked_from` | The node ID this was explicitly forked from |
| `lineage.children` | Nodes that have extended this one (filled in over time) |
| `citation.cite_as` | The human-readable citation string for this node |

This schema ensures that no matter who extends, forks, or adopts a node, the original contributor retains permanent, visible credit.

---

## Getting Started

- **Field Founders:** Start with the [Field Constitution Template](/template-field-constitution)
- **Contributors:** Start with the [Framework](/template-framework-node), [Measurement](/template-measurement-node), or [Project](/template-project-node) Node Template
- **Readers:** Start with [What is NodeRail?](/what-is-noderail) or browse the [HCS Founder Field](/hcs/)
- **All roles:** [Join NodeRail](/access.html) to submit your first node
