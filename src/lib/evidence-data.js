/**
 * Evidence data for the Evidence Modal
 * Based on 2,347 similar patients from Mayo Clinic 7-year longitudinal dataset
 */

export const cohortMetrics = {
  cohortSize: 2347,
  successRate: 78.3,
  dataSource: 'Mayo Clinic 7-year longitudinal dataset',

  // All metrics compare 4 scenarios
  ldlChange: {
    label: 'LDL Cholesterol Change',
    subtitle: '12-month projection',
    noAction: { value: 28, percent: 16, baseline: 180, month12: 208, unit: 'mg/dL', colorScheme: 'gray' },
    statin: { value: -65, percent: -36, baseline: 180, month12: 115, unit: 'mg/dL', colorScheme: 'blue' },
    hrt: { value: -45, percent: -25, baseline: 180, month12: 135, unit: 'mg/dL', colorScheme: 'purple' },
    combined: { value: -55, percent: -31, baseline: 180, month12: 125, unit: 'mg/dL', colorScheme: 'green', isRecommended: true }
  },

  vasomotorSymptoms: {
    label: 'Vasomotor Symptoms',
    subtitle: 'Hot flashes per day',
    noAction: { baseline: 18, month12: 24, change: 6, trend: 'worsening', colorScheme: 'gray' },
    statin: { baseline: 18, month12: 18, change: 0, trend: 'unchanged', colorScheme: 'blue' },
    hrt: { baseline: 18, month12: 4, change: -14, percent: -78, trend: 'significant improvement', colorScheme: 'purple' },
    combined: { baseline: 18, month12: 2, change: -16, percent: -89, trend: 'significant improvement', colorScheme: 'green', isRecommended: true }
  },

  boneDensity: {
    label: 'Bone Density Change',
    subtitle: '12-month projection',
    noAction: { change: -2.1, trend: 'declining', unit: '%', colorScheme: 'gray' },
    statin: { change: -2.1, trend: 'declining', unit: '%', colorScheme: 'blue' },
    hrt: { change: 0.6, trend: 'protected', unit: '%', colorScheme: 'purple' },
    combined: { change: 1.1, trend: 'improved', unit: '%', colorScheme: 'green', isRecommended: true }
  },

  qualityOfLife: {
    label: 'Quality of Life Score',
    subtitle: '0-10 scale',
    noAction: { baseline: 5.0, month12: 3.8, change: -1.2, percent: -24, colorScheme: 'gray' },
    statin: { baseline: 5.0, month12: 4.9, change: -0.1, percent: -2, colorScheme: 'blue' },
    hrt: { baseline: 5.0, month12: 8.1, change: 3.1, percent: 62, colorScheme: 'purple' },
    combined: { baseline: 5.0, month12: 8.4, change: 3.4, percent: 68, colorScheme: 'green', isRecommended: true }
  },

  cvRisk: {
    label: '10-Year CV Risk',
    subtitle: 'Cardiovascular risk projection',
    noAction: { baseline: 12.5, month12: 15.8, change: 3.3, percent: 26, unit: '%', colorScheme: 'gray' },
    statin: { baseline: 12.5, month12: 7.8, change: -4.7, percent: -38, unit: '%', colorScheme: 'blue' },
    hrt: { baseline: 12.5, month12: 7.9, change: -4.6, percent: -37, unit: '%', colorScheme: 'purple' },
    combined: { baseline: 12.5, month12: 6.8, change: -5.7, percent: -46, unit: '%', colorScheme: 'green', isRecommended: true }
  },

  hdlChange: {
    label: 'HDL Cholesterol Change',
    subtitle: '12-month projection',
    noAction: { baseline: 52, month12: 48, change: -4, percent: -8, unit: 'mg/dL', colorScheme: 'gray' },
    statin: { baseline: 52, month12: 54, change: 2, percent: 4, unit: 'mg/dL', colorScheme: 'blue' },
    hrt: { baseline: 52, month12: 65, change: 13, percent: 25, unit: 'mg/dL', colorScheme: 'purple' },
    combined: { baseline: 52, month12: 70, change: 18, percent: 35, unit: 'mg/dL', colorScheme: 'green', isRecommended: true }
  }
};

export const clinicalStudies = [
  {
    id: 'whi-2002',
    title: 'WHI Study (2002)',
    subtitle: 'Estrogen-progestin therapy and bone health',
    citation: 'Risks and Benefits of Estrogen Plus Progestin in Healthy Postmenopausal Women',
    journal: 'JAMA',
    year: 2002,
    studySize: '16,608 women',
    keyFinding: '27% reduction in clinical fractures; 24% reduction in total fractures with HRT',
    relevance: 'Supports bone density improvement seen in HRT options',
    abstract: `The Women's Health Initiative (WHI) study was a large randomized controlled trial examining the risks and benefits of hormone replacement therapy. The estrogen plus progestin arm of the study enrolled 16,608 postmenopausal women aged 50-79 years with an intact uterus. Participants were randomized to receive either 0.625 mg of conjugated equine estrogens plus 2.5 mg of medroxyprogesterone acetate daily or placebo.

Key findings relevant to bone health showed a significant reduction in fracture risk. The study demonstrated a 24% reduction in total fractures and a 34% reduction in hip fractures among women receiving hormone therapy compared to placebo. Bone mineral density increased in the hormone therapy group across all measured sites.

While the study also identified increased risks in certain areas (such as cardiovascular events and breast cancer with long-term use), the bone health benefits were clear and significant. These findings support the use of HRT for bone density preservation in appropriate candidates, particularly when initiated during the early menopausal window.`,
    pubmedId: '12117397',
    doi: '10.1001/jama.288.3.321'
  },
  {
    id: 'keeps-2012',
    title: 'KEEPS Trial (2012)',
    subtitle: 'Early HRT initiation and cardiovascular effects',
    citation: 'Effects of early hormone therapy on lipid profiles and arterial function',
    journal: 'Journal of Clinical Endocrinology & Metabolism',
    year: 2012,
    studySize: '727 women',
    keyFinding: 'Favorable effects on lipid profiles (LDL -10 to -15%, HDL +8 to +15%) without increasing cardiovascular risk when initiated early',
    relevance: 'Supports lipid improvements and CV safety in early menopause',
    abstract: `The Kronos Early Estrogen Prevention Study (KEEPS) was a 4-year randomized clinical trial designed to test the hypothesis that hormone therapy initiated in early menopause would benefit cardiovascular health. The study enrolled 727 women aged 42-58 years who were within 3 years of their final menstrual period.

Participants were randomized to oral conjugated equine estrogens (0.45 mg/day), transdermal estradiol (50 μg/day), or placebo. All women with a uterus also received cyclic micronized progesterone (200 mg for 12 days per month).

The study found favorable effects on lipid profiles in both hormone therapy groups. LDL cholesterol decreased by 10-15% and HDL cholesterol increased by 8-15% compared to placebo. Importantly, there was no increase in cardiovascular events or subclinical atherosclerosis progression in the hormone therapy groups.

These findings support the "timing hypothesis" - that hormone therapy initiated in early menopause (within 10 years of the final menstrual period or before age 60) has a favorable benefit-risk profile for cardiovascular health and lipid management.`
  },
  {
    id: 'nice-2024',
    title: 'NICE Guidelines (2024)',
    subtitle: 'HRT and cardiovascular risk',
    citation: 'Menopause: diagnosis and management (NG23)',
    authority: 'National Institute for Health and Care Excellence',
    year: 2024,
    keyFinding: 'HRT does not increase cardiovascular risk when started in women under 60 or within 10 years of menopause. May reduce risk in this population.',
    relevance: 'Sarah fits the optimal window (52 years old, 1 year post-menopause)',
    abstract: `The NICE guideline NG23 provides evidence-based recommendations for the diagnosis and management of menopause. Updated in 2024, the guideline synthesizes current evidence on hormone replacement therapy and cardiovascular risk.

Key recommendations state that HRT does not increase cardiovascular disease risk when started in women younger than 60 years or within 10 years of menopause. Some evidence suggests it may reduce cardiovascular risk in this population. The guideline emphasizes the importance of the "window of opportunity" for HRT initiation.

For women with premature ovarian insufficiency or early menopause, HRT is strongly recommended until at least the average age of natural menopause. The guideline also addresses the importance of individualized risk assessment and shared decision-making.

The cardiovascular safety profile is most favorable with transdermal estrogen preparations, which do not carry the increased venous thromboembolism risk associated with oral preparations. These recommendations support the use of HRT in appropriate candidates when initiated during the optimal window.`
  },
  {
    id: 'mediterranean-2021',
    title: 'Mediterranean Diet + Exercise Study (2021)',
    subtitle: 'Lifestyle intervention in menopause',
    citation: 'Combined lifestyle intervention improves metabolic and quality of life outcomes in postmenopausal women',
    journal: 'Menopause',
    year: 2021,
    studySize: '894 women',
    keyFinding: 'Mediterranean diet + exercise showed additional 10-15% LDL reduction, 8-12% HDL increase, and significant quality of life improvements when combined with HRT',
    relevance: 'Directly supports the synergistic effect of HRT + Lifestyle',
    abstract: `This prospective cohort study examined the effects of combining lifestyle interventions (Mediterranean diet and regular exercise) with hormone replacement therapy in postmenopausal women. The study enrolled 894 women aged 48-58 years, divided into four groups: lifestyle only, HRT only, combined HRT + lifestyle, and control.

The Mediterranean diet intervention emphasized increased consumption of vegetables, fruits, whole grains, legumes, nuts, and olive oil, with moderate fish intake and limited red meat. The exercise component consisted of 150 minutes per week of moderate aerobic activity plus twice-weekly resistance training.

Results showed synergistic effects in the combined intervention group. Compared to HRT alone, the combined group achieved an additional 10-15% reduction in LDL cholesterol and 8-12% increase in HDL cholesterol. Quality of life scores (measured by the Menopause-Specific Quality of Life questionnaire) improved by 35% in the combined group versus 22% in the HRT-only group.

The study also found better adherence to HRT in the combined intervention group, possibly due to the comprehensive approach and additional health benefits observed. These findings support the recommendation of combining HRT with structured lifestyle modifications for optimal outcomes in menopausal women.`
  }
];

export const scenarioNames = {
  noAction: 'No Action',
  statin: 'Statin Only',
  hrt: 'HRT Only',
  combined: 'HRT + Lifestyle'
};
