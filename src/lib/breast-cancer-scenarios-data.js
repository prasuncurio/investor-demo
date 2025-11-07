/**
 * Breast cancer use case intervention scenarios data
 */

export const breastCancerScenarios = {
  'no-action': {
    id: 'no-action',
    name: 'No Intervention',
    description: 'Current trajectory without treatment',
    colorScheme: 'gray',
    isRecommended: false,
    contraindicated: false,
    confidenceScore: null,
    outcomes: {
      hotFlashes: {
        baseline: 22,
        month12: 28,
        changePercent: 27
      },
      breastCancerRisk: {
        baseline: '14.2%',
        month12: '14.2%',
        changePercent: 0,
        isStatic: true
      },
      sleepQuality: {
        baseline: 3.2,
        month12: 2.4,
        changePercent: -25,
        scale: 10
      },
      qualityOfLife: {
        baseline: 4.1,
        month12: 3.0,
        changePercent: -27,
        scale: 10
      },
      mood: {
        baseline: 5.2,
        month12: 4.5,
        changePercent: -13,
        scale: 10
      },
      annualCost: 0
    },
    benefits: [],
    considerations: [
      'Worsening hot flashes (up to 28/day)',
      'Continued sleep disruption',
      'Declining quality of life',
      'Mood impact from symptom burden'
    ]
  },

  'vaginal-estrogen': {
    id: 'vaginal-estrogen',
    name: 'Low-Dose Vaginal Estrogen',
    description: 'Local estrogen for vaginal symptoms only',
    colorScheme: 'blue',
    isRecommended: false,
    contraindicated: false,
    confidenceScore: 72,
    outcomes: {
      hotFlashes: {
        baseline: 22,
        month12: 20,
        changePercent: -9
      },
      breastCancerRisk: {
        baseline: '14.2%',
        month12: '14.2%',
        changePercent: 0,
        isStatic: true,
        note: 'Minimal systemic absorption'
      },
      sleepQuality: {
        baseline: 3.2,
        month12: 4.1,
        changePercent: 28,
        scale: 10
      },
      qualityOfLife: {
        baseline: 4.1,
        month12: 5.2,
        changePercent: 27,
        scale: 10
      },
      mood: {
        baseline: 5.2,
        month12: 5.8,
        changePercent: 12,
        scale: 10
      },
      annualCost: 420
    },
    benefits: [
      'Safe with minimal systemic absorption',
      'Addresses vaginal symptoms',
      'No impact on breast cancer risk',
      'Improves related quality of life'
    ],
    considerations: [
      'Minimal effect on hot flashes',
      'Does not address systemic VMS',
      'Local application required',
      'Not sufficient for severe symptoms'
    ]
  },

  'ssri': {
    id: 'ssri',
    name: 'SSRI',
    description: 'Paroxetine 7.5mg (Brisdelle)',
    colorScheme: 'blue',
    isRecommended: false,
    contraindicated: false,
    confidenceScore: 75,
    outcomes: {
      hotFlashes: {
        baseline: 22,
        month12: 14,
        changePercent: -36
      },
      breastCancerRisk: {
        baseline: '14.2%',
        month12: '14.2%',
        changePercent: 0,
        isStatic: true,
        note: 'No oncologic impact'
      },
      sleepQuality: {
        baseline: 3.2,
        month12: 5.4,
        changePercent: 69,
        scale: 10
      },
      qualityOfLife: {
        baseline: 4.1,
        month12: 5.8,
        changePercent: 41,
        scale: 10
      },
      mood: {
        baseline: 5.2,
        month12: 6.8,
        changePercent: 31,
        scale: 10
      },
      annualCost: 480
    },
    benefits: [
      'Moderate hot flash reduction (36%)',
      'Mood improvement',
      'Better sleep quality',
      'Safe with breast cancer history',
      'FDA-approved for VMS'
    ],
    considerations: [
      'Less effective than hormonal options',
      'Potential side effects (nausea, dry mouth)',
      'May interact with tamoxifen',
      'Does not prevent bone loss'
    ]
  },

  'standard-hrt': {
    id: 'standard-hrt',
    name: 'Standard HRT',
    description: 'Estradiol 0.5mg + Progesterone (CONTRAINDICATED)',
    colorScheme: 'red',
    isRecommended: false,
    contraindicated: true,
    confidenceScore: null,
    contraindicationReason: 'High breast cancer risk (14.2% 5-year risk, strong family history)',
    outcomes: {
      hotFlashes: {
        baseline: 22,
        month12: 4,
        changePercent: -82,
        note: 'Expected efficacy (not prescribed due to contraindication)'
      },
      breastCancerRisk: {
        baseline: '14.2%',
        month12: '18.5%',
        changePercent: 30,
        isStatic: false,
        warning: true,
        note: 'Unacceptable risk increase - contraindication confirmed'
      },
      sleepQuality: {
        baseline: 3.2,
        month12: 8.2,
        changePercent: 156,
        scale: 10,
        note: 'Expected efficacy (not prescribed due to contraindication)'
      },
      qualityOfLife: {
        baseline: 4.1,
        month12: 8.5,
        changePercent: 107,
        scale: 10,
        note: 'Expected efficacy (not prescribed due to contraindication)'
      },
      mood: {
        baseline: 5.2,
        month12: 8.1,
        changePercent: 56,
        scale: 10,
        note: 'Expected efficacy (not prescribed due to contraindication)'
      },
      annualCost: 540
    },
    benefits: [
      'Most effective for hot flashes (in low-risk patients)',
      'Best quality of life improvement (in low-risk patients)',
      'Comprehensive symptom relief (not applicable here due to cancer risk)'
    ],
    considerations: [
      'CONTRAINDICATED: High breast cancer risk',
      '30% increase in 5-year BC risk (14.2% → 18.5%)',
      'Strong family history makes HRT unsafe',
      'Risk far exceeds benefit - alternative approach required'
    ]
  },

  'fezolinetant': {
    id: 'fezolinetant',
    name: 'Fezolinetant',
    description: 'Veozah 45mg (NK3 receptor antagonist)',
    colorScheme: 'purple',
    isRecommended: false,
    contraindicated: false,
    confidenceScore: 82,
    outcomes: {
      hotFlashes: {
        baseline: 22,
        month12: 7,
        changePercent: -68
      },
      breastCancerRisk: {
        baseline: '14.2%',
        month12: '14.2%',
        changePercent: 0,
        isStatic: true,
        note: 'Non-hormonal mechanism'
      },
      sleepQuality: {
        baseline: 3.2,
        month12: 6.9,
        changePercent: 116,
        scale: 10
      },
      qualityOfLife: {
        baseline: 4.1,
        month12: 7.2,
        changePercent: 76,
        scale: 10
      },
      mood: {
        baseline: 5.2,
        month12: 7.1,
        changePercent: 37,
        scale: 10
      },
      annualCost: 6240
    },
    benefits: [
      'Highly effective hot flash reduction (68%)',
      'Non-hormonal mechanism',
      'No breast cancer risk increase',
      'Significant sleep improvement',
      'Major quality of life gains',
      'SKYLIGHT trial efficacy data'
    ],
    considerations: [
      'High cost ($6,240/year)',
      'Requires liver function monitoring',
      'Relatively new medication (2023)',
      'May take 4-8 weeks for full effect',
      'Does not prevent bone loss'
    ]
  },

  'combined': {
    id: 'combined',
    name: 'Combined Approach',
    description: 'Fezolinetant + CBT-I + Lifestyle',
    colorScheme: 'green',
    isRecommended: true,
    contraindicated: false,
    confidenceScore: 85,
    outcomes: {
      hotFlashes: {
        baseline: 22,
        month12: 5,
        changePercent: -77
      },
      breastCancerRisk: {
        baseline: '14.2%',
        month12: '14.2%',
        changePercent: 0,
        isStatic: false,
        note: 'Lifestyle modifications (exercise, weight)'
      },
      sleepQuality: {
        baseline: 3.2,
        month12: 8.1,
        changePercent: 153,
        scale: 10
      },
      qualityOfLife: {
        baseline: 4.1,
        month12: 8.2,
        changePercent: 100,
        scale: 10
      },
      mood: {
        baseline: 5.2,
        month12: 7.8,
        changePercent: 50,
        scale: 10
      },
      annualCost: 6720
    },
    benefits: [
      'Best hot flash reduction (77%)',
      'Optimal sleep improvement (CBT-I synergy)',
      'Breast cancer risk reduction through lifestyle',
      'Highest quality of life improvement',
      'Non-hormonal and safe',
      'Addresses multiple symptom domains',
      'Supported by SKYLIGHT + CBT-I trials'
    ],
    considerations: [
      'Requires commitment to CBT-I (8 weeks)',
      'Highest cost option',
      'Lifestyle changes need sustained effort',
      'Liver monitoring required for fezolinetant',
      'May need nutritionist/sleep specialist referrals'
    ],
    evidenceBase: {
      cohortSize: 4183,
      successRate: 76.8,
      dataSource: 'Mayo 2018-2024'
    }
  }
};

export const breastCancerFollowUpQueries = {
  general: [
    'Why is Fezolinetant + CBT-I recommended?',
    'What makes HRT unsafe in this case?',
    'Show me the clinical evidence for Fezolinetant',
    'How effective is CBT-I for hot flashes?',
    'Are there non-prescription supplements that could help?'
  ],
  afterRecommendation: [
    'Generate the clinical note',
    'What monitoring is needed for Fezolinetant?',
    'How do I refer for CBT-I?',
    'Can we add vaginal estrogen to this plan?',
    'What about non-prescription alternatives?'
  ]
};

export const breastCancerKeyInsights = [
  {
    type: 'success',
    text: '<strong>Fezolinetant + CBT-I</strong> provides optimal symptom relief while maintaining oncologic safety'
  },
  {
    type: 'success',
    text: '<strong>Non-hormonal approach</strong> addresses VMS without increasing breast cancer risk (14.2% maintained)'
  },
  {
    type: 'success',
    text: '<strong>Multi-modal benefits</strong>: 77% hot flash reduction, 153% sleep improvement, 100% QoL increase'
  },
  {
    type: 'warning',
    text: '<strong>Standard HRT contraindicated</strong>: Would increase 5-year BC risk from 14.2% to 18.5% (unacceptable)'
  },
  {
    type: 'info',
    text: 'CBT-I adds minimal cost ($480) but provides significant sleep architecture improvement beyond medication alone'
  }
];
