/**
 * Data for analysis animation visualizations
 */

export const patternRecognitionData = {
  ldlTrend: [
    {
      month: -6,
      value: 145,
      label: '6mo ago',
      date: '2024-05-01'
    },
    {
      month: -3,
      value: 165,
      label: '3mo ago',
      date: '2024-08-01'
    },
    {
      month: 0,
      value: 180,
      label: 'Now',
      date: '2024-11-01'
    }
  ],
  estradiolTrend: [
    {
      month: -6,
      value: 45,
      label: '6mo ago',
      date: '2024-05-01'
    },
    {
      month: -3,
      value: 28,
      label: '3mo ago',
      date: '2024-08-01'
    },
    {
      month: 0,
      value: 15,
      label: 'Now',
      date: '2024-11-01'
    }
  ],
  correlation: {
    coefficient: 0.92,
    pValue: 0.001,
    significance: 'strong inverse correlation'
  }
};

export const riskModelingData = {
  scenarios: [
    {
      id: 'no-action',
      name: 'No Intervention',
      path: 'M 50 200 Q 250 100, 455 80',
      color: '#888888',
      opacity: 0.5,
      strokeDasharray: '5,5',
      strokeWidth: 3,
      delay: 0,
      label: {
        text: 'No Action',
        position: { x: 500, y: 80 }
      }
    },
    {
      id: 'statin',
      name: 'Statin 20mg',
      path: 'M 50 200 Q 250 140, 455 150',
      color: '#3b82f6',
      opacity: 1,
      strokeWidth: 3,
      delay: 200,
      glow: true,
      label: {
        text: 'Statin',
        position: { x: 500, y: 150 }
      }
    },
    {
      id: 'hrt',
      name: 'HRT 0.5mg',
      path: 'M 50 200 Q 250 210, 455 220',
      color: '#f59e0b',
      opacity: 1,
      strokeWidth: 3,
      delay: 400,
      glow: true,
      label: {
        text: 'HRT',
        position: { x: 500, y: 220 }
      }
    },
    {
      id: 'combined',
      name: 'HRT + Lifestyle',
      path: 'M 50 200 Q 250 260, 455 290',
      color: '#10b981',
      opacity: 1,
      strokeWidth: 4,
      delay: 600,
      glow: true,
      recommended: true,
      label: {
        text: 'HRT + Lifestyle',
        position: { x: 500, y: 290 }
      }
    }
  ],
  centralPoint: {
    x: 50,
    y: 200,
    radius: 8,
    label: 'Current State'
  }
};

export const evidenceSynthesisData = {
  cohort: {
    totalCases: 2347,
    demographics: {
      ageRange: '48-54',
      avgAge: 51,
      stage: 'perimenopausal',
      condition: 'elevated LDL'
    },
    dataSource: 'Mayo Clinic 7-year longitudinal dataset'
  },
  confidence: {
    steps: [
      {
        value: 78,
        timestamp: 1500,
        label: 'Initial pattern analysis',
        description: 'Baseline cohort matching'
      },
      {
        value: 82,
        timestamp: 2500,
        label: 'Risk model validation',
        description: 'Intervention outcome prediction'
      },
      {
        value: 87,
        timestamp: 3500,
        label: 'Guideline cross-reference',
        description: 'Clinical evidence validation'
      }
    ],
    final: 87,
    grade: 'High confidence'
  },
  guidelines: [
    {
      name: 'Mayo Clinic 2024',
      relevance: 'high',
      citation: 'HRT and Cardiovascular Risk'
    },
    {
      name: 'NAMS 2024',
      relevance: 'high',
      citation: 'Perimenopausal Management'
    },
    {
      name: 'WHI Reanalysis 2023',
      relevance: 'medium',
      citation: 'Hormone Therapy Timing'
    }
  ]
};

export const statusMessagesData = [
  {
    id: 1,
    phase: 1,
    text: 'Pattern Recognition',
    completedText: 'Pattern Recognition Complete',
    activeText: 'Detecting correlation patterns...',
    description: 'Analyzing relationship between cholesterol and hormone levels'
  },
  {
    id: 2,
    phase: 2,
    text: 'Risk Modeling',
    completedText: 'Risk Modeling Complete',
    activeText: 'Simulating interventions...',
    description: 'Modeling outcomes for four intervention scenarios'
  },
  {
    id: 3,
    phase: 3,
    text: 'Evidence Synthesis',
    completedText: 'Evidence Synthesis Complete',
    activeText: 'Cross-referencing 2,347 similar cases...',
    description: 'Validating recommendations against cohort data'
  }
];

// ============================================
// BREAST CANCER USE CASE DATA
// ============================================

export const breastCancerPatternRecognitionData = {
  // Hot flashes trend (increasing severity)
  hotFlashesTrend: [
    {
      month: -6,
      value: 8,
      label: '6mo ago',
      date: '2024-05-01'
    },
    {
      month: -3,
      value: 14,
      label: '3mo ago',
      date: '2024-08-01'
    },
    {
      month: 0,
      value: 22,
      label: 'Now',
      date: '2024-11-01'
    }
  ],
  // Breast cancer risk (static high level - the constraint)
  breastCancerRiskTrend: [
    {
      month: -6,
      value: 14.2,
      label: '6mo ago',
      date: '2024-05-01'
    },
    {
      month: -3,
      value: 14.2,
      label: '3mo ago',
      date: '2024-08-01'
    },
    {
      month: 0,
      value: 14.2,
      label: 'Now',
      date: '2024-11-01'
    }
  ],
  correlation: {
    message: 'Safety constraint detected: High breast cancer risk limits HRT options',
    significance: 'high breast cancer risk limits treatment options'
  }
};

export const breastCancerRiskModelingData = {
  scenarios: [
    {
      id: 'no-action',
      name: 'No Intervention',
      path: 'M 50 200 Q 250 90, 455 80',
      color: '#888888',
      opacity: 0.5,
      strokeDasharray: '5,5',
      strokeWidth: 3,
      delay: 0,
      label: {
        text: 'No Action',
        position: { x: 500, y: 80 }
      }
    },
    {
      id: 'vaginal-estrogen',
      name: 'Low-Dose Vaginal Estrogen',
      path: 'M 50 200 Q 250 140, 455 130',
      color: '#60a5fa',
      opacity: 1,
      strokeWidth: 3,
      delay: 200,
      glow: false,
      label: {
        text: 'Vaginal Estrogen',
        position: { x: 500, y: 130 }
      }
    },
    {
      id: 'ssri',
      name: 'SSRI (Paroxetine 7.5mg)',
      path: 'M 50 200 Q 250 190, 455 180',
      color: '#3b82f6',
      opacity: 1,
      strokeWidth: 3,
      delay: 400,
      glow: true,
      label: {
        text: 'SSRI',
        position: { x: 500, y: 180 }
      }
    },
    {
      id: 'standard-hrt',
      name: 'Standard HRT (Contraindicated)',
      path: 'M 50 200 Q 250 235, 455 230',
      color: '#ef4444',
      opacity: 1,
      strokeWidth: 3,
      strokeDasharray: '10,5',
      delay: 600,
      glow: false,
      contraindicated: true,
      label: {
        text: 'Standard HRT',
        position: { x: 500, y: 230 }
      }
    },
    {
      id: 'fezolinetant',
      name: 'Fezolinetant 45mg',
      path: 'M 50 200 Q 250 275, 455 280',
      color: '#a855f7',
      opacity: 1,
      strokeWidth: 4,
      delay: 800,
      glow: true,
      recommended: false,
      label: {
        text: 'Fezolinetant',
        position: { x: 500, y: 280 }
      }
    },
    {
      id: 'combined',
      name: 'Combined Approach',
      path: 'M 50 200 Q 250 320, 455 330',
      color: '#10b981',
      opacity: 1,
      strokeWidth: 4,
      delay: 1000,
      glow: true,
      recommended: true,
      label: {
        text: 'Fezo + CBT-I',
        position: { x: 500, y: 330 }
      }
    }
  ],
  centralPoint: {
    x: 50,
    y: 200,
    radius: 8,
    label: 'Current State'
  }
};

export const breastCancerEvidenceSynthesisData = {
  cohort: {
    totalCases: 4183,
    demographics: {
      ageRange: '45-52',
      avgAge: 48,
      stage: 'perimenopausal',
      condition: 'high breast cancer risk, severe VMS'
    },
    dataSource: 'Multi-center registry (Mayo, MSK, Dana-Farber 2019-2024)'
  },
  confidence: {
    steps: [
      {
        value: 78,
        timestamp: 1500,
        label: 'Safety assessment',
        description: 'Baseline cancer risk evaluation'
      },
      {
        value: 82,
        timestamp: 2500,
        label: 'Non-hormonal efficacy',
        description: 'Symptom relief without oncologic risk'
      },
      {
        value: 85,
        timestamp: 3500,
        label: 'Guideline cross-reference',
        description: 'NAMS 2024 + oncology consensus'
      }
    ],
    final: 85,
    grade: 'High confidence'
  },
  guidelines: [
    {
      name: 'NAMS 2024',
      relevance: 'high',
      citation: 'Nonhormonal Management of VMS'
    },
    {
      name: 'ASCO 2023',
      relevance: 'high',
      citation: 'VMS in High-Risk Women'
    },
    {
      name: 'SKYLIGHT Trials 2024',
      relevance: 'high',
      citation: 'Fezolinetant Efficacy & Safety'
    }
  ]
};

export const breastCancerStatusMessagesData = [
  {
    id: 1,
    phase: 1,
    text: 'Safety Assessment',
    completedText: 'Safety Assessment Complete',
    activeText: 'Evaluating breast cancer risk constraint...',
    description: 'Analyzing high breast cancer risk as treatment constraint'
  },
  {
    id: 2,
    phase: 2,
    text: 'Treatment Pathways',
    completedText: 'Treatment Pathways Complete',
    activeText: 'Simulating non-hormonal interventions...',
    description: 'Modeling six intervention scenarios prioritizing safety'
  },
  {
    id: 3,
    phase: 3,
    text: 'Evidence Validation',
    completedText: 'Evidence Validation Complete',
    activeText: 'Cross-referencing 4,183 high-risk cases...',
    description: 'Validating safety and efficacy in similar patients'
  }
];

// ============================================
// MECHANISM QUERY TYPE DATA
// ============================================

export const mechanismStatusMessagesData = [
  {
    id: 1,
    phase: 1,
    text: 'Pattern Recognition',
    completedText: 'Pattern Recognition Complete',
    activeText: 'Detecting temporal correlation patterns...',
    description: 'Analyzing inverse relationship between biomarkers'
  },
  {
    id: 2,
    phase: 2,
    text: 'Pathway Analysis',
    completedText: 'Pathway Analysis Complete',
    activeText: 'Tracing biological mechanism...',
    description: 'Mapping hormonal pathway to cholesterol regulation'
  },
  {
    id: 3,
    phase: 3,
    text: 'Cohort Validation',
    completedText: 'Cohort Validation Complete',
    activeText: 'Validating against 2,347 similar cases...',
    description: 'Verifying pattern consistency across cohort'
  }
];

// ============================================
// BINARY DECISION QUERY TYPE DATA
// ============================================

export const binaryDecisionStatusMessagesData = [
  {
    id: 1,
    phase: 1,
    icon: 'scale',
    text: 'Risk-Benefit Analysis',
    completedText: 'Risk-Benefit Complete',
    activeText: 'Modeling statin vs alternatives...',
    description: 'Weighing efficacy against root cause treatment'
  },
  {
    id: 2,
    phase: 2,
    icon: 'clipboard-check',
    text: 'Guidelines Review',
    completedText: 'Guidelines Review Complete',
    activeText: 'Checking contraindications... Reviewing NAMS recommendations...',
    description: 'Validating against clinical guidelines'
  }
];

// ============================================
// HEAD-TO-HEAD COMPARISON QUERY TYPE DATA
// ============================================

export const headToHeadStatusMessagesData = [
  {
    id: 1,
    phase: 1,
    icon: 'git-branch',
    text: 'Dual Pathway Simulation',
    completedText: 'Dual Pathways Complete',
    activeText: 'Running parallel simulations...',
    description: 'Modeling effects of both treatments simultaneously'
  },
  {
    id: 2,
    phase: 2,
    icon: 'bar-chart-3',
    text: 'Comparative Analysis',
    completedText: 'Comparative Analysis Complete',
    activeText: 'Scoring tradeoffs...',
    description: 'Analyzing: Efficacy, Safety, QoL, Cost, Multi-system benefits'
  }
];

// ============================================
// SUPPLEMENT SAFETY ASSESSMENT QUERY TYPE DATA
// ============================================

export const supplementAssessmentStatusMessagesData = [
  {
    id: 1,
    phase: 1,
    icon: 'shield-check',
    text: 'Safety Profile Assessment',
    completedText: 'Safety Assessment Complete',
    activeText: 'Evaluating oncologic safety...',
    description: 'Screening for breast cancer risk, hormone content, drug interactions'
  },
  {
    id: 2,
    phase: 2,
    icon: 'microscope',
    text: 'Evidence Synthesis',
    completedText: 'Evidence Synthesis Complete',
    activeText: 'Analyzing trial data...',
    description: 'Reviewing RCTs, meta-analyses, and observational studies'
  },
  {
    id: 3,
    phase: 3,
    icon: 'target',
    text: 'Personalized Matching',
    completedText: 'Recommendation Ready',
    activeText: 'Matching to patient profile...',
    description: 'Considering symptom severity, risk factors, and preferences'
  }
];
