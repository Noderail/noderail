# NodeRail Glossary

The vocabulary of intellectual continuity infrastructure. These terms are canonical on NodeRail: each has an owner (NodeRail), a version number, and a change log.

**Version:** 0.1 &nbsp;·&nbsp; **Maintainer:** NodeRail &nbsp;·&nbsp; **Status:** Draft

---

## Intellectual Continuity

The property of a body of knowledge that allows it to be extended, built upon, and cited over time without losing its lineage, definitions, or authorship trail. Intellectual continuity is the opposite of documentation debt, concept drift, and knowledge fragmentation.

**Related terms:** Version Lineage, Continuity Debt, Stewardship

---

## Node

A structured, citable unit of intellectual work on NodeRail. Each node has a type (Field, Framework, Measurement, or Project), a version history, a permanent identifier, and an explicit lineage. Nodes are the atomic unit of intellectual continuity on NodeRail.

**Related terms:** Field Infrastructure, Link Type, Version Lineage

---

## Canonical Definition

The authoritative, versioned definition of a term or construct within a field. A canonical definition has an owner, a version number, and a change log. Without a canonical definition, a term is subject to concept drift.

**Related terms:** Concept Drift, Stewardship, Taxonomy Drift

---

## Concept Drift

The gradual, untracked shift in the meaning of a term or construct across documents, teams, or time. Concept drift is one of the most common and costly forms of intellectual continuity failure. It is prevented by maintaining canonical definitions with version histories.

**Related terms:** Canonical Definition, Taxonomy Drift, Continuity Debt

---

## Version Lineage

The traceable chain of versions of a node, from its origin to its current state. Version lineage preserves the authorship trail and allows anyone to see how a concept evolved, who contributed to it, and what changed between versions.

**Related terms:** Node, Intellectual Continuity, Stewardship

---

## Field Infrastructure

The structured system of definitions, governance, contribution standards, and citation norms that allows a field of knowledge to grow coherently over time. Field infrastructure is what separates a discipline from a collection of loosely related documents.

**Related terms:** Node, Stewardship, Canonical Definition

---

## Taxonomy Drift

The gradual misalignment of a classification system as new terms are added without governance. Taxonomy drift is related to concept drift but applies to the structure of categories, not just individual terms. It is prevented by maintaining a governed glossary.

**Related terms:** Concept Drift, Canonical Definition, Field Infrastructure

---

## Link Type

The explicit relationship between two nodes. NodeRail supports four link types:

| Link Type | Meaning |
|---|---|
| `supports` | This node provides evidence or reasoning that strengthens another node |
| `depends-on` | This node requires another node to be valid or useful |
| `conflicts-with` | This node contradicts or is in tension with another node |
| `supersedes` | This node replaces a previous node |

Links are directional and versioned.

**Related terms:** Node, Version Lineage

---

## Stewardship

The responsibility for maintaining, updating, and governing a node over time. A steward is not necessarily the original author, but is accountable for the node's continuity. Stewardship can be transferred but cannot be vacant. A node without a steward is at risk of becoming a dead doc.

**Related terms:** Field Infrastructure, Canonical Definition, Dead Doc

---

## Continuity Debt

The accumulated gap between the intellectual work that has been done and the work that has been properly documented, versioned, and linked. Continuity debt compounds over time: the longer it goes unaddressed, the harder it becomes to reconstruct the reasoning behind decisions.

**Related terms:** Documentation Debt, Intellectual Continuity, Concept Drift

---

## Additional Terms (Problem Index)

The following terms describe failure modes that NodeRail is designed to prevent. They are defined in the [Problem Index](/).

| Term | Brief Definition |
|---|---|
| **Documentation Debt** | Work accumulates faster than it gets documented |
| **Founder Dependency** | Critical knowledge lives only in one person's head |
| **Dead Docs** | Documents that exist but are no longer maintained or trusted |
| **Knowledge Fragmentation** | Intellectual work scattered across tools with no connective structure |
| **Version Confusion** | Multiple versions of a framework circulate without clear lineage |
| **Context Loss at Handoff** | Reasoning behind decisions is lost when a project changes hands |
| **Capstone Waste** | Student work gets graded and archived, never built upon |

---

*This glossary is a living document. Terms will be added and refined as NodeRail evolves. To propose a term, [request access](/access) and submit a node.*
