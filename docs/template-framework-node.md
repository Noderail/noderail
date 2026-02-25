# Framework Node Template (v0.1)

> **How to use this template:** Copy this file, rename it to your framework slug (e.g., `my-framework.md`), and fill in each section. A Framework Node is a reusable method, model, or operational playbook inside a field. Delete all instructional text in italics before publishing.

---

## YAML Frontmatter (required)

Copy this block to the very top of your file, above all other content:

```yaml
---
node_id: NR-YYYYMMDD-001        # Format: NR-[date]-[sequence]. e.g. NR-20260301-001
node_type: framework
title: "Your Framework Title"
status: draft                   # draft | published | deprecated
version: "0.1"
license: CC-BY-4.0              # recommended default

created_by: "Your Name"
created_at: YYYY-MM-DD
maintainer: "Your Name"

field: "Field Name"             # the field this node belongs to
tags: []                        # e.g. [cognition, measurement, workplace]

lineage:
  parents: []                   # node_ids this directly extends or builds on
  adopted_from: []              # external works adapted (paper, repo, URL)
  forked_from: []               # node_id if explicitly forked from another node
  children: []                  # filled in later as others extend this node

citation:
  cite_as: "LastName, F. (YYYY). Title. NodeRail. https://noderail.org/..."
  doi: ""                       # filled in after Zenodo release
  url: "https://noderail.org/..."
---
```

---

## Cite As

> LastName, F. (YYYY). *Title*. NodeRail. https://noderail.org/...

*(Copy the `cite_as` value from your frontmatter here as a blockquote. This makes the citation visible to readers without them needing to inspect the metadata.)*

---

## Lineage Block (human-readable)

| Field | Value |
|---|---|
| **Node type** | Framework |
| **Field** | *(field name)* |
| **Author(s)** | *(your name)* |
| **Version** | v0.1 |
| **Status** | Draft / Pilot / Validated / Contested / Deprecated |
| **Lane** | Experimental / Official |
| **Origin node** | *(node_id if forked or adapted, otherwise "Original")* |
| **Forked from** | *(node_id if applicable, otherwise "—")* |
| **Adopted from** | *(external source if adapted, otherwise "—")* |

---

## One-Line Summary

*(What does this framework do in one sentence?)*

---

## Problem It Addresses

*(What specific problem or gap does this framework solve? Be concrete.)*

---

## When to Use This Framework

*(Describe the conditions, contexts, or triggers that indicate this framework is appropriate.)*

---

## When NOT to Use This Framework

*(Explicitly state the boundaries. What situations is this framework not designed for?)*

---

## Inputs

*(What does a user need to bring to this framework? Data, context, prior knowledge, etc.)*

---

## Steps / Process

1. *(Step 1)*
2. *(Step 2)*
3. *(Step 3)*

*(Add or remove steps as needed. Keep each step action-oriented.)*

---

## Outputs

*(What does the framework produce? What does a user have at the end?)*

---

## Failure Modes and Limitations

*(What are the known ways this framework can go wrong? What are its boundaries?)*

---

## Evidence Basis

- **Type of evidence:** *(literature / field practice / case study / expert review)*
- **Key references:** *(links or citations)*
- **Validation status:** *(concept / pilot / validated)*

---

## Related Nodes

- **Parent field:** *(link to Field Node)*
- **Related frameworks:** *(links to other Framework Nodes)*
- **Measurements used:** *(links to Measurement Nodes)*

---

## Changelog

- **v0.1 —** *(initial publication, YYYY-MM-DD)*
