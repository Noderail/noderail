---
node_id: NR-20260319-HCS-005
node_type: construct
title: Capacity Windows
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
  - capacity-windows
  - open-capacity
  - narrow-capacity
  - closed-capacity
  - performance-timing
  - capacity-state
  - bandwidth
  - scheduling
lineage:
  parents:
    - NR-20260224-HCS-001
  adopted_from: []
  forked_from: []
  children: []
citation:
  cite_as: "Kabubi, G. (2026). Capacity Windows (HCS Measurement Node v0.2.0). NodeRail. NR-20260319-HCS-005."
  url: https://noderail.org
---

# Capacity Windows

**Construct Type:** Measurement Node  
**Field:** Human Capacity Science  
**Version:** v0.2.0 · Draft  
**Evidence Level:** Practitioner-Derived  
**Permitted Use:** Open Exploration  

---

## Definition

The available state of a person's ability to perform at any given moment — shaped by the combined influence of Digital Fatigue, Emotional Residue, Cognitive Load, and interpersonal friction. Four zones exist:

- **Open:** Optimal output is available
- **Narrow:** Reduced output; the individual is functioning below potential
- **Closed:** Minimal productive output available
- **Critical:** Severely depleted; recovery is the only appropriate mode

*(v0.2.0 note: earlier drafts used a three-window scheme; some HCS working documents used a Protected / Stable / Strained / Overdrawn state scheme. Both are retired into the four-zone scheme above — read Protected≈Open, Stable≈Narrow, Strained≈Closed, Overdrawn≈Critical. "Overdrawn" survives in HCS vocabulary as a construct/narrative term for the depleted end, not as a zone label.)*

**Key insight:** Performance failure is often not a skill or motivation problem — it is a timing problem.

---

## Why This Construct Matters

Most performance systems are designed as if all time blocks are equivalent. They schedule high-stakes meetings, complex deliverables, and critical decisions without accounting for whether the people involved are in a state to actually deliver. Capacity Windows makes the invisible visible: at any given moment, a person's window state determines what is actually possible — regardless of what is scheduled or expected.

The Capacity Windows construct reframes underperformance from a character question to a capacity question. It shifts the intervention from motivation (trying harder) to timing (doing the right thing at the right capacity state).

---

## The Four Zones

### Open Window
- HBI reflects low composite load across Cognitive Load, Emotional Residue, and Digital Fatigue
- Individual can access full range of cognitive and emotional capabilities
- Complex thinking, creative work, high-stakes decisions, and deep learning are all available
- Optimal scheduling zone for work that requires full bandwidth

### Narrow Window
- HBI reflects moderate composite load — one or more pillars are elevated
- Individual is functioning but below peak capability
- Errors are more likely in complex tasks; nuanced social reading is reduced
- Appropriate scheduling zone: routine tasks, low-stakes meetings, collaborative synthesis (not origination)
- Intervention: targeted reset to restore to Open, or task offloading

### Closed Window
- HBI reflects high composite load — significant depletion across one or more pillars
- Attempts to perform high-demand tasks produce disproportionate effort with poor output
- Risk of error, miscommunication, and conflict is elevated
- Macro reset indicated; productive forcing is counterproductive and capacity-damaging
- Appropriate response: recovery, not demand

### Critical Window
- HBI reflects severe depletion — capacity is effectively unavailable
- No high-demand work; full recovery mode
- Escalate if organisational support is needed; continuing to push at this state converts strain into harm

---

## Measurement Approach (v0.2)

### Method: Composite Scoring from HBI Pillars

Capacity Window state is derived from the Human Bandwidth Index (HBI) composite score, which aggregates Cognitive Load, Emotional Residue, and Digital Fatigue ratings.

**Zone determination (v0.2):** Zone state is derived from the HBI composite (0–100, capacity-side — see NR-20260319-HCS-007 v0.2.0). **Numeric zone boundaries are internal implementation parameters**, interpreted **within-person against the individual's own adaptive baseline** ("low for you") — never as universal cut-scores or between-person comparisons.

### Method: Direct State Self-Assessment

As a stand-alone check-in alternative:

**Single-item prompt:**
> "Right now, my capacity to do my best work feels: [Open / Narrow / Closed / Critical]"

Followed by optional: "What's most contributing to that?"

**Three-item diagnostic:**
- "I have the mental space I need for the work in front of me." (1–5)
- "My energy for this task matches what the task requires." (1–5)
- "I feel ready to bring my full capability to this right now." (1–5)

Item-to-zone mapping is an internal implementation parameter (within-person calibration).

---

## The Timing Principle

The Capacity Windows construct encodes a core HCS operating principle:

> **The right task at the wrong capacity state produces worse outcomes than a simpler task at the right capacity state.**

This has direct implications for:

- **Meeting scheduling:** High-stakes negotiations and creative brainstorms should not be scheduled at the end of high-meeting days
- **Feedback delivery:** Interpersonally complex conversations require Open Windows on both sides
- **Decision-making:** Consequential decisions made in Closed Windows carry elevated risk of error
- **Learning:** New information taken in during a Closed Window is unlikely to be retained or integrated

---

## Relationship to Other HCS Constructs

| Construct | Relationship |
|---|---|
| **Cognitive Load** | Primary driver of Window state; high load alone can close a window |
| **Emotional Residue** | Contributes to Window narrowing; unresolved residue reliably reduces available state |
| **Digital Fatigue** | Cumulative digital engagement drives window closure across a workday |
| **Human Bandwidth Index (HBI)** | HBI composite score is the primary measurement input for Window state |
| **Capacity-Relative Time** | Capacity Windows define the qualitative character of each time block in Capacity-Relative Time |

---

## Interpersonal Friction as a Fourth Input

In addition to the three HBI pillars, the definition of Capacity Windows explicitly includes **interpersonal friction** as a capacity state modifier. Difficult relationships, unresolved conflict, and trust deficits in team environments impose a persistent background load that narrows windows — even when the three core HBI pillars are individually moderate.

This dimension is not yet formally scored in HBI v0.1 but is tracked qualitatively.

---

## Intervention by Window State

| State | Intervention |
|---|---|
| **Open** | Protect the window — avoid introducing unnecessary load; schedule high-value work here |
| **Narrow** | Targeted micro or meso reset; offload non-essential tasks; avoid adding new load |
| **Closed** | Macro reset required; do not attempt high-demand work; communicate capacity state to relevant stakeholders if appropriate |

---

## Ethics and Safeguards

- Window state is individual data — never shared without consent
- Closed Window must never be used as grounds for performance management
- Managers and leaders must not use Window visibility to surveil effort or availability
- Organisations that make Window state visible must commit to supportive, not punitive, response protocols
- Individuals always retain the right to not share their current Window state

---

## Validity Notes (v0.1)

Capacity Windows is an original HCS construct without direct precedent in the literature. Adjacent theoretical support comes from research on ultradian rhythms and performance cycles (Kleitman; Peretz Lavie) and human factors research on decision degradation under load. Ego-depletion research (Baumeister et al., 1998) is noted as adjacent lineage only — it is replication-contested and HCS does not rest on it. The four-zone model (Open / Narrow / Closed / Critical) is practitioner-derived, grounded in 108+ customer discovery interviews.

**Evidence base:** Practitioner observation, qualitative interview synthesis, adjacent peer-reviewed literature  
**Validation status:** Original HCS construct — pre-empirical; pilot study design is a roadmap item

---

## v0.2 Roadmap

- [ ] Calibrate within-person zone baselines through pilot data
- [ ] Validate single-item self-assessment against HBI composite
- [ ] Develop interpersonal friction measurement for Window state integration
- [ ] Publish Window state × task-type matching framework

---

## Citation

> Kabubi, G. (2026). *Capacity Windows* (HCS Measurement Node v0.2.0). NodeRail. NR-20260319-HCS-005. https://noderail.org

---

## Version history

- **v0.2.0 (2026-07-11)** — Reconciliation release: four zones (adds Critical); zone boundaries internal + within-person baselines; HBI input now 0–100 capacity-side; Protected/Stable/Strained/Overdrawn scheme retired-with-merge-note; ego-depletion citation annotated as contested adjacent lineage.
- **v0.1.0 (2026-03-19)** — Initial node: three windows with load-side thresholds.
