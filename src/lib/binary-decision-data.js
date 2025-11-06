/**
 * Data for Binary Decision query type - "Should I prescribe a statin?"
 */

export const binaryDecisionData = {
  // Direct answer section
  answer: {
    verdict: "Not as first-line therapy",
    reasoning: "For Sarah specifically, starting with HRT is the better clinical decision.",
    confidence: 87,
    qualifiedAnswer: true // Not a simple yes/no
  },

  // Why not statin first
  whyNotStatin: [
    {
      number: 1,
      title: "Treats symptom, not cause",
      details: [
        "Her LDL is rising due to estrogen deficiency",
        "Statin lowers LDL but doesn't restore hormonal balance"
      ]
    },
    {
      number: 2,
      title: "Misses multi-system benefits",
      details: [
        "No relief for hot flashes (18/day)",
        "No improvement in sleep quality",
        "No bone protection (-2.1%/yr loss)",
        "Minimal QoL impact"
      ]
    },
    {
      number: 3,
      title: "Comparable CV risk reduction available",
      details: [
        "HRT provides similar cardiovascular protection in her age group"
      ]
    }
  ],

  // Better approach section
  betterApproach: {
    treatment: "HRT + Lifestyle",
    outcomes: [
      { metric: "LDL", change: "180 → 125 mg/dL (-31%)", positive: true },
      { metric: "Hot flashes", change: "85% reduction", positive: true },
      { metric: "QoL", change: "+68% improvement", positive: true },
      { metric: "Bone", change: "Protected (+1.1% vs -2.1%)", positive: true },
      { metric: "CV risk", change: "-46% reduction", positive: true }
    ],
    followUp: "If LDL remains >130 mg/dL at 6 months: ADD low-dose statin at that point"
  },

  // Evidence comparison
  evidenceComparison: {
    cohortSize: 2347,
    hrtFirst: {
      successRate: "78%",
      avgLDLReduction: "-42 mg/dL",
      statinAdditionRate: "Only 15%",
      sentiment: "positive"
    },
    statinOnly: {
      avgLDLReduction: "-63 mg/dL (better)",
      symptomaticRate: "92% still symptomatic at 12 months",
      hrtRequestRate: "68% later requested HRT anyway",
      sentiment: "neutral"
    }
  },

  // When statin appropriate
  statinAppropriate: [
    "HRT contraindicated (history of breast CA, VTE)",
    "Patient refuses HRT",
    "LDL remains elevated after 6 months of HRT",
    "Baseline LDL >190 mg/dL (Sarah: 180)",
    "Known familial hypercholesterolemia"
  ],

  // Decision tree data
  decisionTree: {
    root: {
      label: "Sarah (Age 55)",
      subtitle: "LDL 180, Perimenopausal",
      position: { x: 400, y: 50 }
    },
    paths: {
      statin: {
        label: "START STATIN",
        color: "blue",
        nodes: [
          {
            timepoint: "3 Mo",
            metrics: { ldl: 125, symptoms: "Same", qol: "-2%" },
            position: { x: 250, y: 200 }
          },
          {
            timepoint: "6 Mo",
            metrics: { ldl: 120, symptoms: "Same", qol: "-2%" },
            position: { x: 250, y: 300 }
          },
          {
            timepoint: "12 Mo",
            metrics: { ldl: 115, symptoms: "Same", qol: "-2%", bone: "-2%" },
            position: { x: 250, y: 400 },
            note: "Patient still symptomatic, Requests HRT anyway (68%)"
          }
        ]
      },
      hrt: {
        label: "START HRT",
        color: "amber",
        nodes: [
          {
            timepoint: "3 Mo",
            metrics: { ldl: 155, symptoms: "-60%", qol: "+45%" },
            position: { x: 550, y: 200 }
          },
          {
            timepoint: "6 Mo",
            metrics: { ldl: 140, symptoms: "-80%", qol: "+60%" },
            position: { x: 550, y: 300 }
          },
          {
            timepoint: "12 Mo",
            metrics: { ldl: 135, symptoms: "-85%", qol: "+68%", bone: "+1%" },
            position: { x: 550, y: 400 },
            decision: {
              condition: "LDL still >130?",
              no: { rate: "85%", action: "Continue HRT" },
              yes: { rate: "15%", action: "Add statin low-dose" }
            }
          }
        ]
      }
    },
    convergence: {
      label: "OPTIMAL OUTCOME",
      position: { x: 400, y: 480 }
    },
    insight: "Most patients end up on HRT eventually. Starting there saves time and improves outcomes."
  }
};

// Follow-up queries specific to binary decision
export const binaryDecisionFollowUpQueries = [
  "See HRT recommendation details",
  "Compare all treatment options",
  "Check HRT contraindications",
  "What's her cardiovascular risk?"
];
