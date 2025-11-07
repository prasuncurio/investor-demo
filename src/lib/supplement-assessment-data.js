/**
 * Data for Supplement Safety Assessment query
 * "Are there non-prescription supplements that could help without hormones?"
 */

export const supplementsData = {
  'relizen': {
    id: 'relizen',
    name: 'Relizen',
    description: 'Swedish Pollen Extract (Femal)',
    colorScheme: 'green',
    isRecommended: true,
    contraindicated: false,
    confidenceScore: 82,
    category: 'Recommended',

    outcomes: {
      hotFlashes: {
        baseline: 22,
        month12: 13,
        changePercent: -41,
        unit: 'per day'
      },
      severityScore: {
        baseline: 8.5,
        month12: 5.9,
        changePercent: -31,
        scale: 10
      },
      sleepQuality: {
        baseline: 3.2,
        month12: 4.8,
        changePercent: 50,
        scale: 10
      },
      qualityOfLife: {
        baseline: 4.1,
        month12: 5.9,
        changePercent: 44,
        scale: 10
      },
      mood: {
        baseline: 5.2,
        month12: 6.1,
        changePercent: 17,
        scale: 10
      },
      annualCost: 480
    },

    safety: {
      breastCancerRisk: {
        status: 'safe',
        message: 'No estrogenic activity - safe for high BC risk',
        detail: 'Non-hormonal mechanism confirmed'
      },
      drugInteractions: {
        status: 'safe',
        message: 'No significant interactions',
        detail: 'Compatible with tamoxifen and other medications'
      }
    },

    evidence: {
      rctCount: 3,
      totalParticipants: 892,
      metaAnalyses: 1,
      evidenceQuality: 'High',
      keyFinding: 'Reduced VMS by 41% vs placebo (p=0.003)'
    },

    benefits: [
      'Non-hormonal mechanism - safe with breast cancer risk',
      'Moderate efficacy (41% VMS reduction)',
      'Evidence-based with published RCTs',
      'Well-tolerated (adverse events <5%)',
      'Safe in breast cancer survivors',
      'Effect maintained through 12 months'
    ],

    considerations: [
      'Takes 2-4 weeks to see full effect',
      'Requires daily adherence',
      'Stop if pollen allergy symptoms develop',
      'Less effective than prescription options'
    ],

    prescribing: {
      dose: '160 mg once daily',
      timing: 'Morning with food',
      duration: 'Trial for 3 months minimum'
    }
  },

  'black-cohosh': {
    id: 'black-cohosh',
    name: 'Black Cohosh',
    description: 'Cimicifuga racemosa',
    colorScheme: 'blue',  // Using blue for caution instead of amber
    isRecommended: false,
    contraindicated: false,
    confidenceScore: 65,
    category: 'Use with Caution',

    outcomes: {
      hotFlashes: {
        baseline: 22,
        month12: 16,
        changePercent: -27,
        unit: 'per day',
        note: 'Inconsistent across studies'
      },
      severityScore: {
        baseline: 8.5,
        month12: 6.8,
        changePercent: -20,
        scale: 10,
        note: 'Variable response'
      },
      sleepQuality: {
        baseline: 3.2,
        month12: 4.0,
        changePercent: 25,
        scale: 10
      },
      qualityOfLife: {
        baseline: 4.1,
        month12: 4.8,
        changePercent: 17,
        scale: 10
      },
      mood: {
        baseline: 5.2,
        month12: 5.6,
        changePercent: 8,
        scale: 10
      },
      annualCost: 240
    },

    safety: {
      breastCancerRisk: {
        status: 'unclear',
        message: 'Conflicting data on breast cancer safety',
        detail: 'Some in vitro studies suggest estrogenic activity'
      },
      drugInteractions: {
        status: 'caution',
        message: 'Potential CYP450 interactions',
        detail: 'May interact with tamoxifen'
      },
      hepatotoxicity: {
        status: 'caution',
        message: 'Rare hepatotoxicity cases reported',
        detail: 'Requires baseline and 3-month LFTs'
      }
    },

    evidence: {
      rctCount: 12,
      totalParticipants: 3127,
      metaAnalyses: 3,
      evidenceQuality: 'Mixed',
      keyFinding: 'Modest benefit over placebo (SMD -0.34)'
    },

    benefits: [
      'Lower cost than prescription options',
      'Some evidence of efficacy',
      'Generally well-tolerated'
    ],

    considerations: [
      'Uncertain breast cancer safety profile',
      'Possible tamoxifen interaction',
      'Modest and inconsistent efficacy',
      'Hepatotoxicity risk (though rare)',
      'Requires liver function monitoring',
      'Better alternatives available (Relizen)'
    ],

    prescribing: {
      dose: '20-40 mg twice daily (standardized extract)',
      timing: 'Morning and evening',
      duration: 'Trial for 2-3 months'
    }
  },

  'soy-isoflavones': {
    id: 'soy-isoflavones',
    name: 'Soy Isoflavones',
    description: 'Genistein, Daidzein',
    colorScheme: 'blue',  // Using blue for caution
    isRecommended: false,
    contraindicated: false,
    confidenceScore: 58,
    category: 'Use with Caution',

    outcomes: {
      hotFlashes: {
        baseline: 22,
        month12: 17,
        changePercent: -23,
        unit: 'per day',
        note: 'Ethnic variability'
      },
      severityScore: {
        baseline: 8.5,
        month12: 7.2,
        changePercent: -15,
        scale: 10,
        note: 'Depends on equol producer status'
      },
      sleepQuality: {
        baseline: 3.2,
        month12: 3.8,
        changePercent: 19,
        scale: 10
      },
      qualityOfLife: {
        baseline: 4.1,
        month12: 4.6,
        changePercent: 12,
        scale: 10
      },
      mood: {
        baseline: 5.2,
        month12: 5.5,
        changePercent: 6,
        scale: 10
      },
      annualCost: 300
    },

    safety: {
      breastCancerRisk: {
        status: 'controversial',
        message: 'Estrogenic concerns with high BC risk',
        detail: 'NAMS/ASCO recommend caution in high-risk patients'
      },
      drugInteractions: {
        status: 'caution',
        message: 'Tamoxifen interaction concern',
        detail: 'May compete at estrogen receptors'
      }
    },

    evidence: {
      rctCount: 19,
      totalParticipants: 4364,
      metaAnalyses: 5,
      evidenceQuality: 'Moderate',
      keyFinding: 'Small reduction in VMS frequency (-1.4/day)'
    },

    benefits: [
      'Generally well-tolerated',
      'Some evidence in specific populations'
    ],

    considerations: [
      'Contains phytoestrogens - concern with 14.2% BC risk',
      'NAMS and ASCO recommend caution',
      'Potential tamoxifen interaction',
      'Effects modest and variable',
      'Depends on equol producer status (30-50% of Western women)',
      'Not appropriate for Jennifer'
    ],

    prescribing: {
      dose: '40-80 mg/day (isoflavone content)',
      timing: 'Once or twice daily with meals',
      duration: 'Trial for 3 months'
    }
  },

  'not-recommended': {
    id: 'not-recommended',
    name: 'Not Recommended',
    description: 'Red Clover, Dong Quai, Evening Primrose',
    colorScheme: 'red',
    isRecommended: false,
    contraindicated: true,
    confidenceScore: null,
    category: 'Not Recommended',
    contraindicationReason: 'Lack of evidence and/or safety concerns for high breast cancer risk patients',

    supplements: [
      {
        name: 'Red Clover',
        reason: 'Contains phytoestrogens (isoflavones)',
        evidence: 'Cochrane review: no significant benefit vs placebo',
        safety: 'Uncertain safety with high BC risk'
      },
      {
        name: 'Dong Quai',
        reason: 'No RCT evidence for VMS',
        evidence: 'Only one RCT (N=71): no benefit vs placebo',
        safety: 'Avoid - uncertain hormonal activity'
      },
      {
        name: 'Evening Primrose Oil',
        reason: 'No credible evidence for hot flashes',
        evidence: 'RCTs show no benefit; high placebo response',
        safety: 'No oncologic concern but ineffective'
      }
    ],

    outcomes: {
      hotFlashes: {
        baseline: 22,
        month12: 21,
        changePercent: -5,
        unit: 'per day',
        note: 'No meaningful benefit'
      },
      annualCost: 360
    },

    considerations: [
      'Lack of credible RCT evidence',
      'Uncertain breast cancer safety profiles',
      'Better alternatives available',
      'Risk-benefit ratio unfavorable'
    ]
  }
};

// Follow-up queries
export const supplementFollowUpQueries = [
  'How long should she try Relizen before considering prescription options?',
  'Can she combine Relizen with lifestyle modifications?',
  'What are the prescription alternatives if supplements don\'t work?',
  'Show me the clinical evidence for Relizen'
];

// Key insights
export const supplementKeyInsights = [
  {
    type: 'success',
    text: '<strong>Relizen (Swedish pollen)</strong> has the best evidence and safety profile for high breast cancer risk patients'
  },
  {
    type: 'warning',
    text: '<strong>Avoid soy and black cohosh</strong> - estrogenic concerns and potential tamoxifen interactions'
  },
  {
    type: 'info',
    text: '<strong>Realistic expectations</strong>: Supplements provide modest benefit (20-40% reduction); prescription options more effective if needed'
  },
  {
    type: 'info',
    text: '<strong>Trial period</strong>: 3 months to assess efficacy; reassess if inadequate response'
  }
];

// Patient-specific recommendation
export const patientRecommendation = {
  supplement: 'Relizen',
  reasoning: 'Relizen is the best choice for Jennifer because:',
  reasons: [
    'Non-hormonal mechanism safe with 14.2% breast cancer risk',
    'Moderate efficacy (41% reduction) appropriate for her symptoms',
    'High-quality RCT evidence (N=892)',
    'Well-tolerated with minimal adverse effects',
    'Can combine with lifestyle modifications for additive benefit'
  ],
  alternativeApproach: 'If symptoms remain severe after 3-month trial, consider prescription options (Fezolinetant, SSRI) with stronger evidence'
};
