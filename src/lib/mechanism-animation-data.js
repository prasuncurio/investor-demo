// Animation data for mechanism query type
// This file contains simplified data structures for the 4-second animation

export const mechanismAnimationData = {
  // Phase 1: Pattern Recognition - Dual Line Charts (1.5s)
  ldlChartData: [
    { month: 'Jan', value: 145 },
    { month: 'Mar', value: 152 },
    { month: 'May', value: 161 },
    { month: 'Jul', value: 168 },
    { month: 'Sep', value: 177 },
    { month: 'Nov', value: 183 }
  ],

  estradiolChartData: [
    { month: 'Jan', value: 95 },
    { month: 'Mar', value: 82 },
    { month: 'May', value: 71 },
    { month: 'Jul', value: 58 },
    { month: 'Sep', value: 43 },
    { month: 'Nov', value: 31 }
  ],

  correlationCoefficient: -0.92,

  // Phase 2: Pathway Analysis - Mechanism Steps (1.5s)
  mechanismSteps: [
    {
      step: 1,
      label: 'Perimenopause',
      icon: 'calendar',
      color: 'blue'
    },
    {
      step: 2,
      label: 'Estrogen ↓',
      value: '-67%',
      icon: 'trending-down',
      color: 'red'
    },
    {
      step: 3,
      label: 'LDL Receptor ↓',
      value: '-45%',
      icon: 'trending-down',
      color: 'orange'
    },
    {
      step: 4,
      label: 'Clearance ↓',
      value: '-38%',
      icon: 'trending-down',
      color: 'orange'
    },
    {
      step: 5,
      label: 'LDL ↑',
      value: '+26%',
      icon: 'trending-up',
      color: 'red'
    }
  ],

  // Phase 3: Cohort Validation - Statistics (1.0s)
  cohortStats: {
    similarCases: 2347,
    patternMatch: 78,
    confidence: 87
  }
};

// Status messages for mechanism animation phases
export const mechanismStatusMessages = [
  { time: 0, message: 'Analyzing temporal patterns...' },
  { time: 500, message: 'Detecting correlation between biomarkers...' },
  { time: 1500, message: 'Tracing biological pathway...' },
  { time: 2500, message: 'Identifying mechanism steps...' },
  { time: 3000, message: 'Validating against cohort data...' },
  { time: 3500, message: 'Finalizing root cause analysis...' }
];
