/**
 * Data for Head-to-Head Comparison query type
 * "Compare HRT versus statin for this patient"
 */

export const headToHeadData = {
  // Scorecard summary
  scorecard: {
    statin: {
      wins: 3,
      categories: ['LDL reduction', 'Contraindications', 'Cost']
    },
    hrt: {
      wins: 7,
      categories: [
        'HDL improvement',
        'Root cause',
        'Symptom relief',
        'QoL',
        'Bone protection',
        'Cognitive benefits',
        'CV risk'
      ]
    },
    ties: 2,
    tieCategories: ['Side effects', 'Speed of effect'],
    winner: "HRT + Lifestyle has broader benefit profile for Sarah"
  },

  // Comprehensive comparison table
  comparisonTable: [
    {
      metric: "LDL REDUCTION",
      statin: [
        { text: "180 → 115 mg/dL", highlight: true },
        { text: "36% reduction", highlight: false }
      ],
      hrt: [
        { text: "180 → 125 mg/dL", highlight: true },
        { text: "31% reduction", highlight: false }
      ],
      winner: "statin"
    },
    {
      metric: "HDL IMPROVEMENT",
      statin: [
        { text: "52 → 56 mg/dL", highlight: true },
        { text: "+8%", highlight: false }
      ],
      hrt: [
        { text: "52 → 70 mg/dL", highlight: true },
        { text: "+35%", highlight: false }
      ],
      winner: "hrt"
    },
    {
      metric: "ROOT CAUSE",
      statin: [
        { iconType: "x", text: "No", highlight: false },
        { text: "Treats symptom", highlight: false }
      ],
      hrt: [
        { iconType: "check", text: "Yes", highlight: true },
        { text: "Restores hormones", highlight: false }
      ],
      winner: "hrt"
    },
    {
      metric: "SYMPTOM RELIEF",
      statin: [
        { iconType: "x", text: "No impact", highlight: false },
        { text: "18 → 18/day", highlight: false }
      ],
      hrt: [
        { iconType: "check", text: "85% reduction", highlight: true },
        { text: "18 → 2/day", highlight: false }
      ],
      winner: "hrt"
    },
    {
      metric: "QUALITY OF LIFE",
      statin: [
        { text: "→ Neutral", highlight: false },
        { text: "5.0 → 4.9/10", highlight: false },
        { iconType: "alert", text: "Slight decline", highlight: false }
      ],
      hrt: [
        { iconType: "check", text: "+68% improvement", highlight: true },
        { text: "5.0 → 8.4/10", highlight: false }
      ],
      winner: "hrt"
    },
    {
      metric: "BONE PROTECTION",
      statin: [
        { iconType: "x", text: "No effect", highlight: false },
        { text: "-2.1% loss/year", highlight: false }
      ],
      hrt: [
        { iconType: "check", text: "+1.1% gain", highlight: true },
        { text: "vs -2.1% loss", highlight: false }
      ],
      winner: "hrt"
    },
    {
      metric: "COGNITIVE BENEFITS",
      statin: [
        { iconType: "x", text: "No impact", highlight: false }
      ],
      hrt: [
        { iconType: "check", text: "+60% improvement", highlight: true }
      ],
      winner: "hrt"
    },
    {
      metric: "CARDIOVASCULAR RISK",
      statin: [
        { text: "12.5 → 7.8%", highlight: true },
        { text: "-38% reduction", highlight: false }
      ],
      hrt: [
        { text: "12.5 → 6.8%", highlight: true },
        { text: "-46% reduction", highlight: false }
      ],
      winner: "hrt"
    },
    {
      metric: "SIDE EFFECTS",
      statin: [
        { iconType: "alert", text: "Myalgia (8%)", highlight: false },
        { text: "Fatigue (5%)", highlight: false }
      ],
      hrt: [
        { iconType: "alert", text: "Breast tenderness", highlight: false },
        { text: "(12%, usually mild)", highlight: false }
      ],
      winner: "tie"
    },
    {
      metric: "CONTRAINDICATIONS",
      statin: [
        { text: "Few", highlight: true }
      ],
      hrt: [
        { text: "Breast CA, VTE hx", highlight: false }
      ],
      winner: "statin"
    },
    {
      metric: "SPEED OF EFFECT",
      statin: [
        { text: "4-6 weeks", highlight: true }
      ],
      hrt: [
        { text: "2-4 weeks (symptoms)", highlight: false },
        { text: "3-6 months (lipids)", highlight: false }
      ],
      winner: "tie"
    },
    {
      metric: "ANNUAL COST",
      statin: [
        { text: "$480", highlight: true }
      ],
      hrt: [
        { text: "$720", highlight: false }
      ],
      winner: "statin"
    }
  ],

  // Spider chart data
  spiderChart: {
    dimensions: [
      {
        label: "LDL Reduction",
        statinValue: 10,
        hrtValue: 8.6,
        description: "Statin: 36% | HRT: 31%"
      },
      {
        label: "HDL Increase",
        statinValue: 3,
        hrtValue: 10,
        description: "Statin: +8% | HRT: +35%"
      },
      {
        label: "Root Cause",
        statinValue: 0,
        hrtValue: 10,
        description: "Statin: No | HRT: Yes"
      },
      {
        label: "Symptom Relief",
        statinValue: 0,
        hrtValue: 10,
        description: "Statin: 0% | HRT: 85%"
      },
      {
        label: "QoL Impact",
        statinValue: 0,
        hrtValue: 10,
        description: "Statin: -2% | HRT: +68%"
      },
      {
        label: "Bone Health",
        statinValue: 0,
        hrtValue: 10,
        description: "Statin: No effect | HRT: +1.1%"
      },
      {
        label: "Cognitive",
        statinValue: 0,
        hrtValue: 9,
        description: "Statin: No impact | HRT: +60%"
      },
      {
        label: "CV Risk ↓",
        statinValue: 8,
        hrtValue: 10,
        description: "Statin: -38% | HRT: -46%"
      }
    ],
    insight: "HRT provides broader benefit profile. Statin is a 'single target' intervention."
  },

  // Trade-offs
  tradeoffs: {
    statin: {
      gains: [
        "Stronger LDL reduction",
        "Lower cost ($480 vs $720)",
        "Fewer contraindications",
        "Faster lipid improvement"
      ],
      giveUps: [
        "Symptom relief",
        "QoL improvement",
        "Bone protection",
        "Cognitive benefits",
        "Root cause fix",
        "HDL boost"
      ]
    },
    hrt: {
      gains: [
        "Multi-system benefits",
        "Symptom relief (85%)",
        "QoL improvement (+68%)",
        "Bone protection (+1.1%)",
        "Cognitive boost (+60%)",
        "Root cause treatment",
        "HDL increase (+35%)"
      ],
      giveUps: [
        "Max LDL reduction",
        "Lower cost",
        "Fewer restrictions"
      ]
    }
  },

  // Patient-specific recommendation
  patientSpecificRecommendation: {
    treatment: "HRT + Lifestyle",
    reasoning: "HRT + Lifestyle is the better choice because:",
    reasons: [
      "She has significant symptoms impacting daily life",
      "Her LDL isn't dangerously high (180 vs >190)",
      "She's in the ideal timing window (<10yr menopause)",
      "No contraindications present",
      "She needs multi-system support, not just lipids"
    ]
  }
};

// Follow-up queries specific to head-to-head comparison
export const headToHeadFollowUpQueries = [
  "What's the best intervention for rising LDL?",
  "Should I prescribe a statin?",
  "Can she take HRT safely?",
  "What's her cardiovascular risk?"
];
