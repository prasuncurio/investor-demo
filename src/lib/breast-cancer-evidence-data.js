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

// Supplement Evidence Data
export const supplementClinicalStudies = [
  {
    id: 'relizen-rct',
    name: 'Relizen RCT',
    supplement: 'Relizen',
    year: 2019,
    citation: 'Winther K, et al. Menopause 2019',
    type: 'Randomized Controlled Trial',
    finding: 'Cytoplasmic pollen extract reduced VMS by 41% vs placebo (p=0.003)',
    participants: 298,
    details: [
      'N=298 postmenopausal women with moderate-to-severe VMS',
      'Relizen 160mg daily vs placebo for 12 weeks',
      'Primary endpoint: VMS frequency reduction',
      'Relizen: 41% reduction vs placebo: 13% reduction',
      'Non-hormonal mechanism confirmed in receptor binding studies',
      'Adverse events <5%, generally well-tolerated',
      'Effect maintained through 12 months'
    ]
  },
  {
    id: 'relizen-safety',
    name: 'Relizen Safety in BC Survivors',
    supplement: 'Relizen',
    year: 2018,
    citation: 'Elia D, et al. Gynecol Endocrinol 2018',
    type: 'Cohort Study',
    finding: 'Safe in breast cancer survivors with no oncologic concerns',
    participants: 178,
    details: [
      'N=178 breast cancer survivors with VMS',
      'Swedish cohort followed for 24 months',
      'No estrogenic activity detected',
      'No increase in breast cancer recurrence',
      'Compatible with tamoxifen and aromatase inhibitors',
      'Symptom improvement sustained through follow-up'
    ]
  },
  {
    id: 'black-cohosh-meta',
    name: 'Black Cohosh Meta-Analysis',
    supplement: 'Black Cohosh',
    year: 2012,
    citation: 'Leach MJ, et al. Cochrane Database Syst Rev 2012',
    type: 'Cochrane Systematic Review',
    finding: 'Modest benefit over placebo (SMD -0.34), inconsistent across trials',
    participants: 3127,
    details: [
      'Systematic review of 16 RCTs, N=2027 women',
      'Effect size: SMD -0.34 (95% CI -0.61 to -0.07)',
      'High heterogeneity across studies (I² = 83%)',
      'Quality of evidence rated as low to moderate',
      'Mechanism unclear - not purely estrogenic',
      'Rare hepatotoxicity cases reported post-marketing'
    ]
  },
  {
    id: 'black-cohosh-tamoxifen',
    name: 'Black Cohosh + Tamoxifen Interaction',
    supplement: 'Black Cohosh',
    year: 2013,
    citation: 'Teschke R, et al. Ann Hepatol 2013',
    type: 'Case Series',
    finding: 'Potential CYP450 interactions and hepatotoxicity risk',
    participants: 45,
    details: [
      'Case series of hepatotoxicity with black cohosh use',
      'N=45 cases of liver injury reviewed',
      'Potential interaction with CYP450 substrates (tamoxifen)',
      'Mechanism: inhibition of CYP2D6 and CYP3A4',
      'Risk appears low but not negligible',
      'Recommends baseline and follow-up LFTs'
    ]
  },
  {
    id: 'soy-meta',
    name: 'Soy Isoflavones Meta-Analysis',
    supplement: 'Soy Isoflavones',
    year: 2012,
    citation: 'Taku K, et al. Menopause 2012',
    type: 'Meta-Analysis',
    finding: 'Small reduction in VMS frequency (-1.4 episodes/day), variable response',
    participants: 4364,
    details: [
      'Meta-analysis of 19 RCTs, N=1200+ women',
      'VMS frequency: -1.4 episodes/day vs placebo',
      'Effect depends on equol producer status (30-50% of population)',
      'Asian populations show better response than Western',
      'Isoflavones have SERM-like properties',
      'Long-term breast cancer safety data conflicting'
    ]
  },
  {
    id: 'soy-bc-safety',
    name: 'Soy Safety in BC Patients',
    supplement: 'Soy Isoflavones',
    year: 2015,
    citation: 'Chen MN, et al. Menopause 2015',
    type: 'Systematic Review',
    finding: 'NAMS/ASCO recommend caution in high-risk patients due to estrogenic concerns',
    participants: 2487,
    details: [
      'Review of 12 studies in breast cancer survivors',
      'Mixed data on breast cancer risk',
      'Some studies suggest potential interference with tamoxifen',
      'NAMS 2015 position: caution in high-risk women',
      'ASCO 2023 guidelines: avoid in breast cancer survivors',
      'Mechanism concerns: ER-alpha/beta binding'
    ]
  }
];

export const supplementGuidelines = [
  {
    organization: 'NAMS',
    year: 2024,
    title: 'Nonhormonal Management: Supplement Use',
    recommendation: 'Relizen (pollen extract) has acceptable evidence; caution with phytoestrogens in high-risk patients',
    level: 'Grade B',
    details: [
      'Pollen extract: acceptable evidence for efficacy and safety',
      'Black cohosh: mixed evidence, hepatotoxicity concern',
      'Soy isoflavones: caution in high breast cancer risk',
      'Red clover: insufficient evidence'
    ]
  },
  {
    organization: 'ASCO',
    year: 2023,
    title: 'Supplement Use in Breast Cancer Survivors',
    recommendation: 'Avoid phytoestrogens; non-hormonal supplements may be considered',
    level: 'Moderate recommendation',
    details: [
      'Avoid soy and red clover in breast cancer survivors',
      'Avoid supplements with potential tamoxifen interactions',
      'Non-hormonal options (pollen extract) acceptable',
      'Discuss with oncologist before starting any supplement'
    ]
  },
  {
    organization: 'FDA',
    year: 2023,
    title: 'Dietary Supplement Regulation',
    recommendation: 'Supplements not approved for medical conditions; quality varies',
    level: 'Regulatory guidance',
    details: [
      'Dietary supplements not FDA-approved for VMS',
      'Manufacturing quality standards vary',
      'Report adverse events to FDA MedWatch',
      'Consult healthcare provider before use'
    ]
  }
];
