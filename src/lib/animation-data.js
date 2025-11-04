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
      path: 'M 50 200 Q 200 100, 500 80',
      color: 'hsl(var(--muted-foreground))',
      opacity: 0.5,
      strokeDasharray: '5,5',
      strokeWidth: 3,
      delay: 0,
      label: {
        text: 'No Action',
        position: { x: 500, y: 70 }
      }
    },
    {
      id: 'statin',
      name: 'Statin 20mg',
      path: 'M 50 200 Q 200 160, 500 140',
      color: 'hsl(var(--chart-2))',
      opacity: 1,
      strokeWidth: 3,
      delay: 200,
      glow: true,
      label: {
        text: 'Statin',
        position: { x: 500, y: 130 }
      }
    },
    {
      id: 'hrt',
      name: 'HRT 0.5mg',
      path: 'M 50 200 Q 200 240, 500 220',
      color: 'hsl(var(--chart-1))',
      opacity: 1,
      strokeWidth: 3,
      delay: 400,
      glow: true,
      label: {
        text: 'HRT',
        position: { x: 500, y: 210 }
      }
    },
    {
      id: 'combined',
      name: 'HRT + Lifestyle',
      path: 'M 50 200 Q 200 280, 500 300',
      color: 'hsl(var(--chart-3))',
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
        timestamp: 800,
        label: 'Initial pattern analysis',
        description: 'Baseline cohort matching'
      },
      {
        value: 82,
        timestamp: 1300,
        label: 'Risk model validation',
        description: 'Intervention outcome prediction'
      },
      {
        value: 87,
        timestamp: 1800,
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
