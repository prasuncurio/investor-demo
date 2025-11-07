export const useCases = [
  {
    id: 'cardiovascular-perimenopause',
    patient: {
      name: 'Sarah M.',
      age: 52,
      status: 'Perimenopausal'
    },
    scenario: {
      title: 'Cardiovascular Risk in Perimenopause',
      icon: 'Heart',
      description: 'A 52-year-old perimenopausal woman with elevated cholesterol, moderate hot flashes, and family history of cardiovascular disease.',
      question: 'Should I start a statin or try HRT with lifestyle changes first?',
      tags: ['Cardiovascular', 'Lipid Management', 'HRT']
    },
    theme: {
      // Teal/blue theme matching current app
      primary: 'oklch(0.6 0.118 184.704)',      // Teal
      secondary: 'oklch(0.65 0.15 200)',         // Blue
      iconBg: 'oklch(0.6 0.118 184.704 / 0.1)', // Light teal
      gradient: 'from-cyan-500/10 to-blue-500/10'
    },
    available: true,
    route: '/cardiovascular'
  },
  {
    id: 'breast-cancer-hot-flashes',
    patient: {
      name: 'Jennifer K.',
      age: 50,
      status: 'Perimenopausal'
    },
    scenario: {
      title: 'High Breast Cancer Risk with Severe Hot Flashes',
      icon: 'Thermometer',
      description: 'A 50-year-old perimenopausal woman with severe vasomotor symptoms (22 hot flashes/day) and significantly elevated breast cancer risk (14.2% 5-year risk).',
      question: 'How can I safely relieve her symptoms given her high breast cancer risk?',
      tags: ['Breast Cancer', 'Vasomotor Symptoms', 'Risk Management']
    },
    theme: {
      // Pink/purple theme for breast cancer awareness
      primary: 'oklch(0.7 0.15 330)',           // Pink/Magenta
      secondary: 'oklch(0.65 0.18 310)',        // Purple
      iconBg: 'oklch(0.7 0.15 330 / 0.1)',     // Light pink
      gradient: 'from-pink-500/10 to-purple-500/10'
    },
    available: true,
    route: '/breast-cancer'
  }
];
