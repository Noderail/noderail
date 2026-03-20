---
node_id: NR-20260319-HCS-007
node_type: measurement
title: Human Bandwidth Index (HBI)
field: NR-20260224-HCS-001
field_name: Human Capacity Science
version: 0.1.0
status: draft
created_by: Gao Kabubi
created_at: 2026-03-19
maintainer: Gao Kabubi
license: CC-BY-4.0
evidence_level: practitioner-derived
permitted_use: open-exploration
tags:
  - HBI
  - human-bandwidth-index
  - capacity-measurement
  - real-time-capacity
  - composite-score
  - cognitive-load
  - emotional-residue
  - digital-fatigue
  - bandwidth
lineage:
  parents:
    - NR-20260224-HCS-001
  adopted_from: []
  forked_from: []
  children: []
related_nodes:
  - NR-20260319-HCS-002
  - NR-20260319-HCS-003
  - NR-20260319-HCS-004
  - NR-20260319-HCS-005
  - NR-20260319-HCS-006
citation:
  cite_as: "Kabubi, G. (2026). Human Bandwidth Index — HBI (HCS Measurement Node v0.1.0). NodeRail. NR-20260319-HCS-007."
  url: https://noderail.org
---

# Human Bandwidth Index (HBI)

**Construct Type:** Measurement Node · **Core Metric**  
**Field:** Human Capacity Science  
**Version:** v0.1.0 · Draft  
**Evidence Level:** Practitioner-Derived  
**Permitted Use:** Open Exploration  

---

## Definition

A real-time measurement of a person's available capacity — reflecting what they can take on, process, and deliver at any given moment.

**Core pillars:** Cognitive Load · Emotional Residue · Digital Fatigue

**Extended model:** These three pillars capture the downstream effects of sleep quality, traumatic events, interpersonal friction, and environmental stressors — without requiring invasive data collection. HBI measures at the **capacity layer**, not the cause layer.

---

## Why the HBI Is the Core HCS Metric

The HBI answers the most operationally important question in Human Capacity Science:

> **What can this person actually do right now?**

Not what they are skilled at. Not what they are motivated to do. Not what is on their calendar. What they can actually do — given their current capacity state.

Most performance measurement systems work backwards from output: they observe what was produced and infer the capacity state from the result. The HBI inverts this. It measures capacity first — making it possible to predict output quality, prevent capacity failure before it becomes visible, and time interventions when they will actually land.

The HBI is also privacy-preserving by design. It does not ask *why* capacity is low. It does not require disclosure of emotional content, health information, or personal circumstances. It measures at the capacity surface — the felt experience of available bandwidth — and treats the cause as the individual's own to address or not.

---

## Architecture: The Three-Pillar Model

```
┌─────────────────────────────────────────────────────┐
│                 HUMAN BANDWIDTH INDEX                │
│                                                     │
│  ┌─────────────┐ ┌─────────────┐ ┌──────────────┐  │
│  │  Cognitive  │ │  Emotional  │ │   Digital    │  │
│  │    Load     │ │   Residue   │ │   Fatigue    │  │
│  │  (CL score) │ │  (ER score) │ │  (DF score)  │  │
│  └──────┬──────┘ └──────┬──────┘ └──────┬───────┘  │
│         └───────────────┴───────────────┘           │
│                         │                           │
│              HBI Composite Score                    │
│                         │                           │
│              Capacity Window State                  │
│          (Open / Narrow / Closed)                   │
└─────────────────────────────────────────────────────┘
```

Each pillar captures a distinct but interacting form of capacity drain. Together they produce a composite score that reflects the person's current available bandwidth.

---

## What HBI Captures Without Asking

The three-pillar structure is chosen specifically because Cognitive Load, Emotional Residue, and Digital Fatigue are **downstream integrators** of a wide range of upstream causes:

| Upstream cause | Captured via |
|---|---|
| Poor sleep | Elevated Cognitive Load + Digital Fatigue |
| Difficult conversation | Elevated Emotional Residue |
| Back-to-back meetings | Elevated Cognitive Load + Emotional Residue |
| Long screen sessions | Elevated Digital Fatigue |
| Unresolved conflict | Elevated Emotional Residue |
| High task volume | Elevated Cognitive Load |
| Grief or personal trauma | Elevated Emotional Residue + Cognitive Load |
| Environmental noise/stress | Elevated Cognitive Load + Digital Fatigue |

This means HBI can detect reduced capacity without requiring the individual to disclose sensitive personal information. The system does not need to know *what happened* — only *what is available*.

---

## Measurement Approach (v0.1)

### Method: Three-Pillar Pulse (Privacy-First Self-Report)

Each pillar is scored using a brief probe battery (see individual construct nodes):
- **Cognitive Load:** NR-20260319-HCS-003
- **Emotional Residue:** NR-20260319-HCS-002
- **Digital Fatigue:** NR-20260319-HCS-004

**Composite Scoring (v0.1 — equal weighting):**

> HBI = (CL score + ER score + DF score) ÷ 3

*Note: Weighted pillar scoring (e.g., situationally elevated ER receiving higher weight) is a v0.2 development item.*

**HBI Score Ranges:**

| Score | Capacity State | Capacity Window |
|---|---|---|
| 0.0–1.5 | High availability | Open |
| 1.6–3.0 | Moderate constraint | Narrow |
| 3.1–5.0 | Low availability | Closed |

### Single-Item Fast Check (Rapid Pulse)

> "Right now, my bandwidth — my available capacity to think, feel, and work — is at: [Full / Partial / Depleted]"

Fast Check maps to: Full = Open · Partial = Narrow · Depleted = Closed

---

## HBI as a System, Not a Score

The HBI is designed to function as a system across three time horizons:

| Horizon | Measurement | Purpose |
|---|---|---|
| **Real-time** | In-the-moment pulse (1–3 min) | Task readiness, meeting entry, reset trigger |
| **Daily** | Morning, midday, end-of-day check-in | Workday design, scheduling alignment |
| **Longitudinal** | Weekly/monthly pattern tracking | Capacity trend identification, chronic drain detection |

The score at any single point is useful. The pattern across time is where the system becomes most powerful.

---

## The Capacity Layer vs. The Cause Layer

This distinction is foundational to HBI design:

**Cause layer:** Why capacity is low (a difficult relationship, a bad night's sleep, grief, a traumatic event)  
**Capacity layer:** What is currently available — regardless of cause

HBI measures the capacity layer. This is a deliberate ethics and privacy decision. The cause of reduced capacity is the individual's own. The capacity state — what they can and cannot take on right now — is what the system needs to respond to.

This makes HBI:
- **Non-invasive:** No biometric data, no surveillance, no cause disclosure required
- **Actionable:** Regardless of cause, the response options are the same (reset, reduce load, reschedule)
- **Dignifying:** The individual is not required to explain or justify their capacity state

---

## Relationship to Other HCS Constructs

| Construct | Relationship |
|---|---|
| **Cognitive Load** | Core HBI pillar; primary driver of score |
| **Emotional Residue** | Core HBI pillar; often the invisible driver of score elevation |
| **Digital Fatigue** | Core HBI pillar; primary driver of afternoon score degradation |
| **Capacity Windows** | HBI composite score is the primary input to Window state determination |
| **Capacity-Relative Time** | HBI score is the load profile input to effective time calculation |

---

## Intervention Signals by HBI Range

| HBI Range | Recommended Response |
|---|---|
| 0.0–1.5 (Open) | Protect the window; schedule high-demand work here |
| 1.6–2.5 (Low Narrow) | Micro reset; monitor load additions carefully |
| 2.6–3.0 (High Narrow) | Meso reset indicated; offload non-essential tasks |
| 3.1–4.0 (Low Closed) | Macro reset required; reduce demands; communicate if appropriate |
| 4.1–5.0 (High Closed) | Full recovery mode; no high-demand work; escalate if organisational support needed |

---

## Ethics and Safeguards

- HBI scores belong exclusively to the individual who generates them
- Organisations may only access aggregated, anonymised, opt-in team data for workload design purposes
- HBI must never be used for performance ranking, compensation decisions, or disciplinary action
- Individuals must always be able to decline HBI measurement without penalty
- The system must never prompt the individual to explain or disclose the cause of their score
- HBI data must never be sold or shared with third parties without explicit individual consent

---

## Validity Notes (v0.1)

The HBI is the primary original measurement instrument of Human Capacity Science. It is practitioner-derived, grounded in 108+ customer discovery interviews, and informed by adjacent empirical literature across cognitive load theory, affect science, and digital wellbeing research. The three-pillar model and composite scoring approach require empirical validation.

**Evidence base:** Practitioner observation, qualitative interview synthesis, adjacent peer-reviewed literature  
**Validation status:** Original HCS instrument — pre-empirical; pilot validation study is the highest priority roadmap item

---

## v0.1 Roadmap

- [ ] Finalise three-pillar probe battery with subscale items
- [ ] Design pilot validation study (within-person, n ≥ 50, multi-week)
- [ ] Calibrate HBI thresholds for Capacity Window state boundaries
- [ ] Develop weighted pillar scoring model for v0.2
- [ ] Establish test-retest reliability benchmarks
- [ ] Publish HBI scoring methodology for open community review

---

## Citation

> Kabubi, G. (2026). *Human Bandwidth Index — HBI* (HCS Measurement Node v0.1.0). NodeRail. NR-20260319-HCS-007. https://noderail.org
