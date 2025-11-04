/**
 * Intervention scenarios data for comparison dashboard
 */

export const interventionScenarios = {
  'no-action': {
    id: 'no-action',
    name: 'No Intervention',
    description: 'Current trajectory without treatment',
    colorScheme: 'gray',
    isRecommended: false,
    confidenceScore: null,
    interventionDetails: null,
    outcomes: {
      ldl: {
        baseline: 180,
        month3: 194,
        month6: 201,
        month12: 208,
        change: '+28',
        changePercent: 16
      },
      hdl: {
        baseline: 52,
        month12: 48,
        change: '-4',
        changePercent: -8
      },
      qualityOfLife: {
        baseline: 5.0,
        month12: 3.8,
        change: '-1.2',
        changePercent: -24
      },
      vasomotorSymptoms: {
        baseline: 18,
        month12: 24,
        trend: 'worsening'
      },
      boneDensity: {
        change: '-2.1%',
        trend: 'declining'
      },
      cvRisk: {
        baseline: '12.5%',
        month12: '15.8%',
        change: '+3.3%',
        changePercent: 26
      },
      annualCost: 0
    },
    benefits: [],
    considerations: [
      'Continued LDL elevation increases CV risk',
      'Worsening vasomotor symptoms',
      'Accelerating bone loss',
      'Declining quality of life'
    ]
  },

  statin: {
    id: 'statin',
    name: 'Statin 20mg',
    description: 'Atorvastatin 20mg daily',
    colorScheme: 'blue',
    isRecommended: false,
    confidenceScore: 82,
    interventionDetails: {
      medication: 'Atorvastatin 20mg',
      frequency: 'Once daily',
      route: 'Oral'
    },
    outcomes: {
      ldl: {
        baseline: 180,
        month3: 130,
        month6: 120,
        month12: 115,
        change: '-65',
        changePercent: -36
      },
      hdl: {
        baseline: 52,
        month12: 54,
        change: '+2',
        changePercent: 4
      },
      qualityOfLife: {
        baseline: 5.0,
        month12: 4.9,
        change: '-0.1',
        changePercent: -2
      },
      vasomotorSymptoms: {
        baseline: 18,
        month12: 18,
        trend: 'unchanged'
      },
      boneDensity: {
        change: '-2.1%',
        trend: 'declining'
      },
      cvRisk: {
        baseline: '12.5%',
        month12: '7.8%',
        change: '-4.7%',
        changePercent: -38
      },
      annualCost: 480
    },
    benefits: [
      'Significant LDL reduction (36%)',
      'Strong CV risk reduction',
      'Well-studied safety profile',
      'Cost-effective'
    ],
    considerations: [
      'Does not address hormonal root cause',
      'No symptom relief',
      'Continued bone loss',
      'Potential muscle pain side effects'
    ]
  },

  hrt: {
    id: 'hrt',
    name: 'HRT 0.5mg',
    description: 'Low-dose hormone replacement therapy',
    colorScheme: 'purple',
    isRecommended: false,
    confidenceScore: 78,
    interventionDetails: {
      medication: 'Estradiol 0.5mg + Progesterone 100mg',
      frequency: 'Once daily',
      route: 'Oral or transdermal'
    },
    outcomes: {
      ldl: {
        baseline: 180,
        month3: 158,
        month6: 143,
        month12: 135,
        change: '-45',
        changePercent: -25
      },
      hdl: {
        baseline: 52,
        month12: 65,
        change: '+13',
        changePercent: 25
      },
      qualityOfLife: {
        baseline: 5.0,
        month12: 8.1,
        change: '+3.1',
        changePercent: 62
      },
      vasomotorSymptoms: {
        baseline: 18,
        month12: 4,
        trend: 'significant improvement',
        changePercent: -78
      },
      boneDensity: {
        change: '+0.6%',
        trend: 'protected'
      },
      cvRisk: {
        baseline: '12.5%',
        month12: '7.9%',
        change: '-4.6%',
        changePercent: -37
      },
      annualCost: 540
    },
    benefits: [
      'Addresses hormonal root cause',
      'Significant symptom relief (78%)',
      'Bone density protection',
      'Major QoL improvement (+62%)',
      'HDL increase (+25%)'
    ],
    considerations: [
      'Moderate LDL reduction (may need supplement)',
      'Requires endometrial protection',
      'Annual mammogram monitoring',
      'Contraindicated in some conditions'
    ]
  },

  combined: {
    id: 'combined',
    name: 'HRT + Lifestyle',
    description: 'Hormone therapy with Mediterranean diet and exercise',
    colorScheme: 'green',
    isRecommended: true,
    confidenceScore: 87,
    interventionDetails: {
      medication: 'Estradiol 0.5mg + Progesterone 100mg',
      frequency: 'Once daily',
      route: 'Oral or transdermal',
      lifestyle: [
        'Mediterranean diet pattern',
        '150 min/week moderate aerobic exercise',
        'Resistance training 2x/week'
      ]
    },
    outcomes: {
      ldl: {
        baseline: 180,
        month3: 152,
        month6: 135,
        month12: 125,
        change: '-55',
        changePercent: -31
      },
      hdl: {
        baseline: 52,
        month12: 70,
        change: '+18',
        changePercent: 35
      },
      qualityOfLife: {
        baseline: 5.0,
        month12: 8.4,
        change: '+3.4',
        changePercent: 68
      },
      vasomotorSymptoms: {
        baseline: 18,
        month12: 2,
        trend: 'significant improvement',
        changePercent: -89
      },
      boneDensity: {
        change: '+1.1%',
        trend: 'improved'
      },
      cvRisk: {
        baseline: '12.5%',
        month12: '6.8%',
        change: '-5.7%',
        changePercent: -46
      },
      annualCost: 720
    },
    benefits: [
      'Best combined outcomes across all metrics',
      'Optimal LDL reduction (-31%) to target',
      'Highest HDL improvement (+35%)',
      'Maximum symptom relief (89%)',
      'Best bone health (+1.1%)',
      'Greatest CV risk reduction (-46%)'
    ],
    considerations: [
      'Requires lifestyle commitment',
      'Slightly higher cost',
      'Same HRT monitoring requirements'
    ],
    evidenceBase: {
      cohortSize: 2347,
      successRate: 78.3,
      dataSource: 'Mayo Clinic 7-year longitudinal dataset'
    }
  }
};

// Follow-up query suggestions based on context
export const followUpQueries = {
  general: [
    'Why is HRT + Lifestyle recommended?',
    'What are the risks of hormone therapy?',
    'Show me the clinical evidence',
    'How does cost compare across options?'
  ],
  afterRecommendation: [
    'Generate the clinical note',
    'What monitoring is needed?',
    'When should we see improvement?',
    'Can we combine statin with HRT later?'
  ]
};
