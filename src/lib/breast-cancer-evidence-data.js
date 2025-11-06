/**
 * Evidence data for breast cancer use case
 */

export const breastCancerCohortMetrics = {
  cohortSize: 4183,
  dataSource: 'Mayo 2018-2024',
  successRate: 76.8
};

export const breastCancerScenarioNames = {
  noAction: 'No Action',
  vaginalEstrogen: 'Vaginal Estrogen',
  ssri: 'SSRI',
  standardHrt: 'Standard HRT',
  fezolinetant: 'Fezolinetant',
  combined: 'Fezo + CBT-I'
};

export const breastCancerClinicalStudies = [
  {
    id: 'skylight-1',
    name: 'SKYLIGHT-1',
    year: 2023,
    citation: 'Neal-Perry G, et al. Lancet 2023',
    type: 'Phase 3 RCT',
    finding: 'Fezolinetant 45mg reduced moderate-to-severe VMS by 62% at 12 weeks',
    details: [
      'N=501 postmenopausal women with ≥7 moderate-to-severe VMS/day',
      'Primary endpoint: mean change in VMS frequency and severity at 12 weeks',
      'Fezolinetant 45mg: -62% reduction in VMS frequency',
      'Placebo: -34% reduction in VMS frequency',
      'Difference from placebo: -28% (p<0.001)',
      'No serious adverse events related to study drug',
      'No hepatotoxicity signals in phase 3 trials'
    ]
  },
  {
    id: 'skylight-2',
    year: 2023,
    citation: 'Johnson KA, et al. Menopause 2023',
    type: 'Phase 3 RCT Extension',
    finding: 'Sustained efficacy through 52 weeks, no oncologic safety signals',
    details: [
      'N=453 women continued to 52 weeks',
      'Sustained VMS reduction maintained at 52 weeks',
      'No increase in breast cancer incidence',
      'No increase in endometrial thickness',
      'Liver enzyme monitoring: <2% ALT elevation >3x ULN',
      'Sleep quality improvement sustained (PSQI scores)'
    ]
  },
  {
    id: 'cbt-i-vms',
    name: 'CBT-I for VMS',
    year: 2022,
    citation: 'McCurry SM, et al. JAMA Intern Med 2022',
    type: 'Randomized Controlled Trial',
    finding: 'CBT-I reduced hot flash interference with sleep by 50%',
    details: [
      'N=106 perimenopausal women with insomnia and VMS',
      'CBT-I: 8 weekly sessions',
      'Hot flash interference with sleep: -50% vs control',
      'Sleep quality (PSQI): 4.2-point improvement',
      'Effect maintained at 6-month follow-up',
      'No adverse effects'
    ]
  },
  {
    id: 'whims',
    name: 'WHI Re-analysis',
    year: 2023,
    citation: 'Manson JE, et al. JAMA 2023',
    type: 'Long-term Follow-up',
    finding: 'HRT contraindicated in women with breast cancer risk factors',
    details: [
      '20-year follow-up of WHI participants',
      'Estrogen + progestin: HR 1.26 for breast cancer (95% CI 1.10-1.45)',
      'Risk highest in women with family history (HR 1.58)',
      'Absolute risk increase: 8 additional cases per 10,000 person-years',
      'Benefits do not outweigh risks in high-risk women'
    ]
  }
];

export const breastCancerGuidelines = [
  {
    organization: 'NAMS',
    year: 2024,
    title: 'Nonhormonal Management of Menopause-Associated Vasomotor Symptoms',
    recommendation: 'Fezolinetant is effective for VMS in women who cannot or prefer not to use hormone therapy',
    level: 'Grade A',
    details: [
      'First-line for women with breast cancer history or high risk',
      'Effective alternative to hormone therapy',
      'Liver function monitoring recommended',
      'Generally well-tolerated'
    ]
  },
  {
    organization: 'ASCO',
    year: 2023,
    title: 'Management of Vasomotor Symptoms in Survivors of Breast Cancer',
    recommendation: 'Non-hormonal options preferred for women with breast cancer history or high risk',
    level: 'Strong recommendation',
    details: [
      'Avoid systemic hormone therapy in breast cancer survivors',
      'Consider SSRIs, SNRIs, or neurokinin-3 antagonists',
      'CBT-I for sleep disturbance',
      'Lifestyle modifications (exercise, weight management)'
    ]
  },
  {
    organization: 'FDA',
    year: 2023,
    title: 'Fezolinetant (Veozah) Approval',
    recommendation: 'Approved for treatment of moderate to severe vasomotor symptoms due to menopause',
    level: 'Regulatory approval',
    details: [
      'First-in-class neurokinin-3 receptor antagonist',
      'Non-hormonal mechanism of action',
      'Liver enzyme monitoring required',
      'Contraindications: severe hepatic impairment'
    ]
  }
];

export const breastCancerMechanismData = {
  title: 'How Fezolinetant Works',
  subtitle: 'Non-hormonal pathway targeting the thermoregulatory center',
  sections: [
    {
      heading: 'The Root Cause',
      content: [
        'Declining estrogen levels during perimenopause destabilize the hypothalamic thermoregulatory center',
        'This leads to inappropriate activation of heat dissipation mechanisms',
        'Result: hot flashes, night sweats, and sleep disruption'
      ]
    },
    {
      heading: 'Neurokinin-3 (NK3) Pathway',
      content: [
        'NK3 receptors in the hypothalamus play a key role in thermoregulation',
        'During menopause, increased neurokinin B signaling through NK3 receptors triggers hot flashes',
        'Fezolinetant selectively blocks NK3 receptors, preventing this cascade'
      ]
    },
    {
      heading: 'Why Non-Hormonal Matters',
      content: [
        'Does not increase estrogen levels (no breast cancer risk)',
        'Does not affect endometrial tissue',
        'Safe for women with contraindications to hormone therapy',
        'Addresses the symptom without systemic hormonal effects'
      ]
    },
    {
      heading: 'CBT-I Synergy',
      content: [
        'Cognitive behavioral therapy for insomnia (CBT-I) addresses sleep architecture',
        'Reduces hot flash interference with sleep independent of frequency',
        'Improves sleep latency, efficiency, and quality',
        'Combined approach: Fezolinetant reduces VMS frequency, CBT-I improves sleep despite remaining VMS'
      ]
    },
    {
      heading: 'Why Not HRT in This Case?',
      content: [
        'Patient has 14.2% 5-year breast cancer risk (elevated)',
        'Strong family history: mother and sister with breast cancer',
        'HRT would increase risk by ~30% (to 18.5%)',
        'Risk-benefit ratio unfavorable despite excellent symptom control',
        'Non-hormonal approach maintains oncologic safety'
      ]
    }
  ]
};
