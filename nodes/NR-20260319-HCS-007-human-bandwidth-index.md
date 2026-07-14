---
node_id: NR-20260319-HCS-007
node_type: measurement
title: Human Bandwidth Index (HBI)
field: NR-20260224-HCS-001
field_name: Human Capacity Science
version: 0.2.0
status: draft
created_by: Gao Kabubi
created_at: 2026-03-19
updated_at: 2026-07-11
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
  cite_as: "Kabubi, G. (2026). Human Bandwidth Index — HBI (HCS Measurement Node v0.2.0). NodeRail. NR-20260319-HCS-007."
  url: https://noderail.org
---

# Human Bandwidth Index (HBI)

**Construct Type:** Measurement Node · **Core Metric**  
**Field:** Human Capacity Science  
**Version:** v0.2.0 · Draft  
**Evidence Level:** Practitioner-Derived  
**Permitted Use:** Open Exploration  

---

## What changed in v0.2.0 (reconciliation release, 2026-07-11)

This release reconciles the public node with the internal HCS measurement canon. Four substantive changes:

1. **Scale & polarity.** HBI now reads **0–100, capacity-side** (higher = more available bandwidth). v0.1.0 published a 0–5 load-side composite (higher = worse). A bandwidth index should read as bandwidth; nothing named HBI ships load-side. Arithmetic mapping from the v0.1.0 form: `HBI_v0.2 ≈ 100 × (1 − load_v0.1 / 5)`.
2. **Four zones, not three windows.** The capacity-state scheme is now **Open · Narrow · Closed · Critical** (adds Critical below Closed). Numeric zone boundaries are an internal implementation parameter, and interpretation is **within-person** — "low for you," against your own history — never a comparison between people.
3. **No published weights.** v0.1.0's equal weighting (and any alternative fixed weighting) is demoted to an **implementation-profile parameter**, provisional pending a pre-registered study on existing self-report traffic that will also test additive vs. interaction scoring forms.
4. **Lineage hygiene.** Sibling nodes drop ego-depletion research as support (replication-contested; retained only as annotated adjacent lineage).

Alternate name note: some HCS working documents used **HCI (Human Capacity Index)** for this instrument family. HCI is retired — read HCI as HBI.

---

## Definition

A private, individual-level index of a person's available capacity — reflecting what they can take on, process, and deliver at a given moment. HBI is best understood as a **family of models rather than one universal number**: one definition, many estimators (self-report pulse, survey estimate, telemetry-derived), each an implementation profile of this node.

HBI is a **formative index of convenience** — a self-tracking heuristic that summarizes capacity-relevant signals so a person can compare their present state against their own history. It does not claim to measure a validated latent psychological quantity.

**The theory triad** (what drains capacity): cognitive load · emotional residue · **contextual friction**.
**The instrument pillars** (what HBI self-report can reach): cognitive load · emotional residue · **digital fatigue** — digital fatigue is the *in-person depletion state* the environment produces; contextual friction is *environment-side* and is measured by design audit (capacity leakage mapping / workflow analysis), not by self-report.

**Extended model:** The three pillars capture the downstream effects of sleep quality, traumatic events, interpersonal friction, and environmental stressors — without requiring invasive data collection. HBI measures at the **capacity layer**, not the cause layer.

---

## Why the HBI Is the Core HCS Metric

The HBI answers the most operationally important question in Human Capacity Science:

> **What can this person actually do right now?**

Not what they are skilled at. Not what they are motivated to do. Not what is on their calendar. What they can actually do — given their current capacity state.

Most performance measurement systems work backwards from output: they observe what was produced and infer the capacity state from the result. The HBI inverts this. It measures capacity first — making it possible to anticipate output quality, notice capacity strain before it becomes visible, and time interventions when they will actually land.

The HBI is also privacy-preserving by design. It does not ask *why* capacity is low. It does not require disclosure of emotional content, health information, or personal circumstances. It measures at the capacity surface — the felt experience of available bandwidth — and treats the cause as the individual's own to address or not.

---

## Architecture: The Three-Pillar Model

```
┌─────────────────────────────────────────────────────┐
│                 HUMAN BANDWIDTH INDEX                │
│               (0–100 · capacity-side)               │
│  ┌─────────────┐ ┌─────────────┐ ┌──────────────┐  │
│  │  Cognitive  │ │  Emotional  │ │   Digital    │  │
│  │    Load     │ │   Residue   │ │   Fatigue    │  │
│  │  (CL score) │ │  (ER score) │ │  (DF score)  │  │
│  └──────┬──────┘ └──────┬──────┘ └──────┬───────┘  │
│         └───────────────┴───────────────┘           │
│                         │                           │
│              HBI Composite Score                    │
│                         │                           │
│               Capacity Zone State                   │
│        (Open / Narrow / Closed / Critical)          │
└─────────────────────────────────────────────────────┘
```

Each pillar captures a distinct but interacting form of capacity drain. Together they produce a composite score that reflects the person's current available bandwidth.

**On "interacting":** the HCS founding hypothesis holds that capacity drains **cascade** — the presence of one tends to produce or amplify the others. A purely additive composite cannot express that claim. Whether interaction terms add explanatory power over an additive form is an open, pre-registerable empirical question (see Validity Notes) — not an assumption this node is entitled to.

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

## Measurement Approach (v0.2)

### Method: Three-Pillar Pulse (Privacy-First Self-Report)

Each pillar is scored using a brief probe battery (see individual construct nodes):
- **Cognitive Load:** NR-20260319-HCS-003
- **Emotional Residue:** NR-20260319-HCS-002
- **Digital Fatigue:** NR-20260319-HCS-004

**Composite scoring:** HBI is a formative composite of the three pillar scores, expressed on a 0–100 capacity-side scale (higher = more available bandwidth). **Component weighting is an implementation-profile parameter, not part of this canonical definition.** No fixed weighting (equal or otherwise) is published or claimed; weighting is provisional pending the pre-registered study described in Validity Notes, which also tests whether an additive form is sufficient or interaction terms are required.

**Capacity zones:**

| Zone | Capacity state |
|---|---|
| **Open** | High availability — protect it |
| **Narrow** | Moderate constraint |
| **Closed** | Low availability |
| **Critical** | Severely depleted — recovery mode |

Zone names (and display colors) are public vocabulary. **Numeric zone boundaries are internal implementation parameters** and are interpreted **within-person, against the individual's own adaptive baseline** ("low for you") — never as between-person comparisons or universal cut-scores. No norming, invariance, or between-person comparability is claimed.

### Single-Item Fast Check (Rapid Pulse)

> "Right now, my bandwidth — my available capacity to think, feel, and work — is at: [Full / Partial / Depleted]"

Fast Check maps to: Full = Open · Partial = Narrow · Depleted = Closed/Critical

---

## HBI as a System, Not a Score

The HBI is designed to function as a system across three time horizons:

| Horizon | Measurement | Purpose |
|---|---|---|
| **Real-time** | In-the-moment pulse (1–3 min) | Task readiness, meeting entry, reset trigger |
| **Daily** | Morning, midday, end-of-day check-in | Workday design, scheduling alignment |
| **Longitudinal** | Weekly/monthly pattern tracking | Capacity trend identification, chronic drain detection |

The score at any single point is useful. The pattern across time — your number against your own history — is where the system becomes most useful.

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
| **Emotional Residue** | Core HBI pillar; often the invisible driver of score movement |
| **Digital Fatigue** | Core HBI pillar; primary driver of afternoon score degradation |
| **Contextual Friction** | Theory-triad member; environment-side, measured by design audit, not by this instrument |
| **Capacity Windows** | HBI composite score is the primary input to zone state determination |
| **Capacity-Relative Time** | HBI score is the load profile input to effective time calculation |

---

## Intervention Signals by Zone

| Zone | Recommended Response |
|---|---|
| **Open** | Protect the window; schedule high-demand work here |
| **Narrow** | Micro/meso reset; monitor load additions; offload non-essential tasks |
| **Closed** | Macro reset required; reduce demands; communicate if appropriate |
| **Critical** | Full recovery mode; no high-demand work; escalate if organisational support needed |

---

## Ethics and Safeguards

- HBI scores belong exclusively to the individual who generates them
- Organisations may only access aggregated, anonymised, opt-in team data for workload design purposes
- HBI must never be used for performance ranking, compensation decisions, or disciplinary action
- Individuals must always be able to decline HBI measurement without penalty
- The system must never prompt the individual to explain or disclose the cause of their score
- HBI data must never be sold or shared with third parties without explicit individual consent
- No between-person ranking: zone boundaries are within-person baselines, and any surface that compares individuals violates this node

---

## Validity Notes (v0.2)

The HBI is the primary original measurement instrument of Human Capacity Science. It is practitioner-derived, grounded in 108+ customer discovery interviews, and informed by adjacent empirical literature across cognitive load theory, affect science, and digital wellbeing research. It is explicitly a **formative index of convenience**, pre-empirical, and makes no latent-variable, norming, or between-person comparability claims.

**Scheduled first study (pre-registration intended):** item analysis and factor structure on existing self-report traffic (target n ≥ 300); test-retest subset; convergent validity against a public-domain single-item fatigue rating; **incremental-validity head-to-head vs. a single item** (if HBI adds nothing over one question, the composite is not retained); additive vs. interaction scoring forms (the founding-hypothesis test).

**Evidence base:** Practitioner observation, qualitative interview synthesis, adjacent peer-reviewed literature  
**Validation status:** Original HCS instrument — pre-empirical; the pre-registered study above is the highest-priority roadmap item

---

## v0.2 Roadmap

- [ ] Finalise three-pillar probe battery with subscale items
- [ ] Pre-register and run the existing-traffic psychometric study (n ≥ 300), including the single-item head-to-head and additive-vs-interaction test
- [ ] Design pilot validation study (within-person, n ≥ 50, multi-week)
- [ ] Establish within-person adaptive-baseline method for zone interpretation
- [ ] Establish test-retest reliability benchmarks
- [ ] Publish HBI scoring methodology for open community review

---

## Version history

- **v0.2.0 (2026-07-11)** — Reconciliation release: 0–100 capacity-side scale (was 0–5 load-side); four zones Open/Narrow/Closed/Critical (was three windows); weights demoted to implementation-profile parameter (no published weighting); formative-index framing; within-person baseline interpretation; triad/pillar distinction stated; HCI name retired into HBI.
- **v0.1.0 (2026-03-19)** — Initial node: three-pillar model, 0–5 load-side equal-weight composite, three windows.

---

## Citation

> Kabubi, G. (2026). *Human Bandwidth Index — HBI* (HCS Measurement Node v0.2.0). NodeRail. NR-20260319-HCS-007. https://noderail.org
