# NodeRail · HCS Canonical Index Update
**Field:** Human Capacity Science (`NR-20260224-HCS-001`)  
**Update date:** 2026-03-19  
**Author:** Gao Kabubi  

---

## Measurement Nodes Added (v0.1.0)

| Node ID | Title | Type | Status | Linked Field |
|---|---|---|---|---|
| `NR-20260319-HCS-002` | Emotional Residue | measurement | draft | NR-20260224-HCS-001 |
| `NR-20260319-HCS-003` | Cognitive Load | measurement | draft | NR-20260224-HCS-001 |
| `NR-20260319-HCS-004` | Digital Fatigue | measurement | draft | NR-20260224-HCS-001 |
| `NR-20260319-HCS-005` | Capacity Windows | measurement | draft | NR-20260224-HCS-001 |
| `NR-20260319-HCS-006` | Capacity-Relative Time | measurement | draft | NR-20260224-HCS-001 |
| `NR-20260319-HCS-007` | Human Bandwidth Index (HBI) | measurement | draft | NR-20260224-HCS-001 |

---

## Dependency Graph

```
NR-20260224-HCS-001
Human Capacity Science (Field)
│
├── NR-20260319-HCS-002  Emotional Residue
│     └── Input to: HBI (HCS-007), Capacity Windows (HCS-005)
│
├── NR-20260319-HCS-003  Cognitive Load
│     └── Input to: HBI (HCS-007), Capacity Windows (HCS-005)
│
├── NR-20260319-HCS-004  Digital Fatigue
│     └── Input to: HBI (HCS-007), Capacity Windows (HCS-005)
│
├── NR-20260319-HCS-005  Capacity Windows
│     └── Derived from: HBI composite (HCS-007)
│     └── Input to: Capacity-Relative Time (HCS-006)
│
├── NR-20260319-HCS-006  Capacity-Relative Time
│     └── Derived from: Capacity Windows (HCS-005) + HBI (HCS-007)
│
└── NR-20260319-HCS-007  Human Bandwidth Index (HBI)  ← Core Metric
      └── Composite of: CL (HCS-003) + ER (HCS-002) + DF (HCS-004)
      └── Outputs: Capacity Window state (HCS-005)
```

---

## HCS Field Node Update

The following update should be applied to `NR-20260224-HCS-001` (field node canonical registry):

```yaml
canonical:
  constructs:
    - NR-20260319-HCS-002  # Emotional Residue
    - NR-20260319-HCS-003  # Cognitive Load
    - NR-20260319-HCS-004  # Digital Fatigue
    - NR-20260319-HCS-005  # Capacity Windows
    - NR-20260319-HCS-006  # Capacity-Relative Time
    - NR-20260319-HCS-007  # Human Bandwidth Index (HBI)
  frameworks: []           # coming soon
  measurements:
    - NR-20260319-HCS-007  # HBI — core instrument
  projects: []             # coming soon
```

---

## Shared Properties Across All Six Nodes

| Property | Value |
|---|---|
| `field` | NR-20260224-HCS-001 |
| `field_name` | Human Capacity Science |
| `created_by` | Gao Kabubi |
| `maintainer` | Gao Kabubi |
| `version` | 0.1.0 |
| `status` | draft |
| `evidence_level` | practitioner-derived |
| `permitted_use` | open-exploration |
| `license` | CC-BY-4.0 |
| `created_at` | 2026-03-19 |

---

## Next Steps (Canonical Roadmap)

1. **Framework nodes** — Intervention design framework; Capacity-Informed Scheduling framework
2. **Pilot validation study design** — HBI measurement instrument validation (n ≥ 50, within-person)
3. **Student project pathway** — how AGA Academy / Johns Hopkins student work enters the graph
4. **Contribution standard** — what "field-quality" means for HCS nodes
5. **NodeRail publication** — submit nodes to noderail.org for DOI assignment
