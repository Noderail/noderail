# Measurement Node Template (v0.1)

> **How to use this template:** Copy this file, rename it to your measurement slug (e.g., `my-index.md`), and fill in each section. Delete all instructional text in italics before publishing.

---

## YAML Frontmatter (required)

```yaml
---
node_id: NR-YYYYMMDD-001
node_type: measurement
title: "Your Measurement Title"
status: draft
version: "0.1"
license: CC-BY-4.0
created_by: "Your Name"
created_at: YYYY-MM-DD
maintainer: "Your Name"
field: "Field Name"
tags: []
lineage:
  parents: []
  adopted_from: []
  forked_from: []
  children: []
citation:
  cite_as: "LastName, F. (YYYY). Title. NodeRail. https://noderail.org/..."
  doi: ""
  url: "https://noderail.org/..."
measurement:
  construct: ""
  validation_status: concept
  intended_use: []
---
```

---

## Cite As

> LastName, F. (YYYY). *Title*. NodeRail. https://noderail.org/...

---

## Lineage Block (human-readable)

| Field | Value |
|---|---|
| **Node type** | Measurement |
| **Field** | *(field name)* |
| **Author(s)** | *(your name)* |
| **Version** | v0.1 |
| **Status** | Draft / Pilot / Validated / Contested / Deprecated |
| **Lane** | Experimental / Official |
| **Origin node** | *(node_id if forked or adapted, otherwise "Original")* |
| **Forked from** | *(node_id if applicable, otherwise "—")* |
| **Adopted from** | *(external source if adapted, otherwise "—")* |

---

## Construct Measured

*(Which construct from the field's construct map does this instrument measure?)*

---

## Purpose

*(Why does this measurement exist? What decision or insight does it enable?)*

---

## Instrument Type

*(Survey / rubric / index / behavioral proxy / composite / other)*

---

## Intended Use

- **Personal:** *(yes / no)*
- **Team:** *(yes / no)*
- **Org:** *(yes / no)*
- **Research:** *(yes / no)*

---

## Items and Indicators

*(List the items, questions, or behavioral indicators.)*

---

## Scoring Method

*(Explain how scores are calculated and interpreted.)*

---

## Validation Status

> **Draft / Pilot / Validated / Contested / Deprecated**

*(Describe the current evidence base.)*

---

## Ethics and Misuse Guardrails

- **What not to infer from scores:**
- **Not used for:**
- **Privacy notes:**
- **Known risks:**

---

## Evidence

- **Pilot results:**
- **Replications:**
- **Case studies:**

---

## Related Nodes

- **Parent field:**
- **Frameworks that use this measurement:**
- **Related measurements:**

---

## Changelog

- **v0.1 —** *(initial publication, YYYY-MM-DD)*
