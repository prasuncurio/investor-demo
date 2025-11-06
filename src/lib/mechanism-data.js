/**
 * Mechanism Explanation Data
 * Data structure for Query 1: "Why is her cholesterol rising?"
 */

export const mechanismData = {
  // Root cause explanation
  rootCause: {
    title: "Estrogen Deficiency",
    icon: "💡",
    explanation: "Sarah's cholesterol is rising due to perimenopause-related estrogen decline, which directly affects how her liver processes cholesterol.",
    correlationStrength: 0.92,
    pValue: "< 0.001",
    significance: "Strong inverse relationship between estrogen and LDL levels"
  },

  // Mechanism pathway steps
  mechanismSteps: [
    {
      step: 1,
      label: "Perimenopause",
      description: "Natural transition causing hormonal changes",
      icon: "🔄",
      color: "blue"
    },
    {
      step: 2,
      label: "Estrogen ↓ 67%",
      value: "45 → 15 pg/mL",
      description: "Dramatic decline in estradiol levels",
      icon: "📉",
      color: "red",
      change: -67
    },
    {
      step: 3,
      label: "LDL Receptor Expression ↓",
      description: "Reduced hepatic LDL receptor activity",
      icon: "🧬",
      color: "orange"
    },
    {
      step: 4,
      label: "Cholesterol Clearance ↓",
      description: "Decreased ability to remove LDL from bloodstream",
      icon: "⬇️",
      color: "orange"
    },
    {
      step: 5,
      label: "Serum LDL ↑ 24%",
      value: "145 → 180 mg/dL",
      description: "Elevated LDL cholesterol in circulation",
      icon: "📈",
      color: "red",
      change: 24
    }
  ],

  // Timeline data for patient
  timelineData: [
    {
      timepoint: "6 months ago",
      month: "Jul 2023",
      estradiol: 45,
      estradiolUnit: "pg/mL",
      fsh: 32,
      fshUnit: "mIU/mL",
      ldl: 145,
      ldlUnit: "mg/dL",
      hdl: 58,
      symptoms: "Mild"
    },
    {
      timepoint: "3 months ago",
      month: "Oct 2023",
      estradiol: 28,
      estradiolUnit: "pg/mL",
      estradiolChange: -38,
      fsh: 48,
      fshUnit: "mIU/mL",
      fshChange: 50,
      ldl: 165,
      ldlUnit: "mg/dL",
      ldlChange: 14,
      hdl: 54,
      symptoms: "Moderate"
    },
    {
      timepoint: "Today",
      month: "Jan 2024",
      estradiol: 15,
      estradiolUnit: "pg/mL",
      estradiolChange: -67,
      estradiolChangeSinceStart: "67% total decline",
      fsh: 67,
      fshUnit: "mIU/mL",
      fshChange: 109,
      fshChangeSinceStart: "109% total increase",
      ldl: 180,
      ldlUnit: "mg/dL",
      ldlChange: 24,
      ldlChangeSinceStart: "24% total increase",
      hdl: 52,
      symptoms: "Moderate-Severe"
    }
  ],

  // No changes to lifestyle factors
  unchangedFactors: [
    { factor: "Diet", status: "No change", icon: "✓" },
    { factor: "Exercise", status: "No change", icon: "✓" },
    { factor: "Weight", status: "+2 lbs only", icon: "✓" },
    { factor: "Medications", status: "No change", icon: "✓" }
  ],

  // Cohort validation data
  cohortData: {
    similarCases: 2347,
    description: "similar women analyzed",
    ageRange: "52-58",
    status: "perimenopausal",
    patternMatch: 78,
    patternMatchDescription: "showed same pattern",
    avgLDLIncrease: 32,
    avgLDLIncreaseUnit: "mg/dL",
    confidenceLevel: 87,
    pValue: "< 0.001"
  },

  // Correlation chart data
  correlationChartData: {
    title: "Inverse Correlation: Cholesterol vs. Estradiol",
    xAxisLabel: "Months",
    dataPoints: [
      {
        month: "Jul '22",
        monthIndex: 0,
        ldl: 145,
        estradiol: 180,
        label: "Baseline"
      },
      {
        month: "Oct '22",
        monthIndex: 3,
        ldl: 152,
        estradiol: 165
      },
      {
        month: "Jan '23",
        monthIndex: 6,
        ldl: 158,
        estradiol: 145
      },
      {
        month: "Apr '23",
        monthIndex: 9,
        ldl: 163,
        estradiol: 125
      },
      {
        month: "Jul '23",
        monthIndex: 12,
        ldl: 165,
        estradiol: 95
      },
      {
        month: "Oct '23",
        monthIndex: 15,
        ldl: 172,
        estradiol: 68
      },
      {
        month: "Jan '24",
        monthIndex: 18,
        ldl: 180,
        estradiol: 45,
        label: "Current"
      }
    ],
    correlationCoefficient: -0.92,
    trendLines: {
      ldl: {
        color: "hsl(var(--destructive))", // Red
        label: "LDL Cholesterol",
        unit: "mg/dL",
        trend: "rising"
      },
      estradiol: {
        color: "hsl(var(--chart-2))", // Blue
        label: "Estradiol",
        unit: "pg/mL",
        trend: "falling"
      }
    }
  },

  // Clinical implication
  clinicalImplication: {
    title: "Clinical Implication",
    icon: "🎯",
    mainPoint: "Traditional statin therapy treats the symptom (elevated LDL) but doesn't address the hormonal cause.",
    recommendation: "HRT restores estrogen, normalizing LDL receptor function while providing additional benefits for symptoms, bone, and cognition.",
    benefits: [
      "Addresses root hormonal cause",
      "Normalizes LDL receptor function",
      "Improves menopausal symptoms",
      "Protects bone density",
      "Enhances cognitive function"
    ]
  },

  // Evidence citations
  evidence: {
    studies: [
      {
        title: "Estrogen and Lipid Metabolism",
        journal: "JAMA Internal Medicine",
        year: 2023,
        quote: "Estradiol upregulates hepatic LDL receptors, improving clearance. Effect most pronounced in perimenopausal women.",
        relevance: "high",
        url: "#"
      },
      {
        title: "Menopause & Cardiovascular Risk",
        journal: "Mayo Clinic Proceedings",
        year: 2024,
        quote: "Early menopause transition associated with 10-25% LDL increase independent of lifestyle factors.",
        relevance: "high",
        url: "#"
      }
    ]
  },

  // Next action suggestions
  nextActions: [
    {
      label: "See Treatment Options",
      query: "What's the best intervention for rising LDL?",
      icon: "💊",
      primary: true
    },
    {
      label: "Check Cardiovascular Risk",
      query: "What's her cardiovascular risk?",
      icon: "❤️",
      primary: false
    },
    {
      label: "View Evidence",
      action: "showEvidence",
      icon: "📚",
      primary: false
    }
  ]
};

// Helper function to get mechanism step by index
export function getMechanismStep(stepIndex) {
  return mechanismData.mechanismSteps[stepIndex];
}

// Helper function to get timeline data point
export function getTimelineDataPoint(index) {
  return mechanismData.timelineData[index];
}

// Helper function to format percentage change
export function formatPercentageChange(value) {
  const sign = value > 0 ? '+' : '';
  return `${sign}${value}%`;
}

// Helper function to get correlation strength label
export function getCorrelationStrengthLabel(coefficient) {
  const absValue = Math.abs(coefficient);

  if (absValue >= 0.9) return { label: "Very Strong", color: "green" };
  if (absValue >= 0.7) return { label: "Strong", color: "blue" };
  if (absValue >= 0.5) return { label: "Moderate", color: "yellow" };
  if (absValue >= 0.3) return { label: "Weak", color: "orange" };
  return { label: "Very Weak", color: "red" };
}
