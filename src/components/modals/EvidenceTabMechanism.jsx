import { ArrowRight, TrendingDown, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function EvidenceTabMechanism() {
  const pathways = [
    {
      name: 'Lipid Metabolism',
      icon: '🩺',
      hrtEffect: 'Restores estrogen\'s protective effect on lipid profiles',
      lifestyleEffect: 'Mediterranean diet reduces LDL, increases HDL',
      combinedResult: '-31% LDL, +35% HDL',
      impact: 'high'
    },
    {
      name: 'Bone Remodeling',
      icon: '🦴',
      hrtEffect: 'Reduces osteoclast activity, preserves bone density',
      lifestyleEffect: 'Resistance training stimulates bone formation',
      combinedResult: '+1.1% bone density improvement',
      impact: 'high'
    },
    {
      name: 'Vasomotor Regulation',
      icon: '🌡️',
      hrtEffect: 'Stabilizes hypothalamic thermoregulation',
      lifestyleEffect: 'Exercise improves autonomic regulation',
      combinedResult: '89% symptom reduction (18 → 2 per day)',
      impact: 'high'
    },
    {
      name: 'Cardiovascular Function',
      icon: '❤️',
      hrtEffect: 'Improves endothelial function, arterial compliance',
      lifestyleEffect: 'Reduces inflammation, improves blood pressure',
      combinedResult: '-46% 10-year CV risk reduction',
      impact: 'high'
    },
    {
      name: 'Quality of Life',
      icon: '✨',
      hrtEffect: 'Reduces symptoms, improves mood and cognition',
      lifestyleEffect: 'Physical activity, social engagement, self-efficacy',
      combinedResult: '+68% improvement (5.0 → 8.4/10)',
      impact: 'high'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Mechanism of Action</h3>
        <p className="text-sm text-muted-foreground">
          How HRT + Lifestyle work synergistically to address the root cause
        </p>
      </div>

      {/* Root Cause */}
      <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20">
        <div className="flex items-start gap-4">
          <div className="text-3xl">⚠️</div>
          <div className="flex-1">
            <h4 className="text-base font-bold mb-1">Root Cause</h4>
            <p className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-1">
              Menopausal Estrogen Deficiency
            </p>
            <p className="text-sm text-muted-foreground">
              Affects multiple physiological systems simultaneously
            </p>
          </div>
        </div>
      </Card>

      {/* Pathways */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-muted-foreground">Pathways Affected:</h4>

        {pathways.map((pathway, index) => (
          <Card key={index} className="p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-2xl">{pathway.icon}</div>
              <div className="flex-1">
                <h5 className="text-base font-bold">{pathway.name}</h5>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* HRT Effect */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <p className="text-xs font-semibold text-purple-700 dark:text-purple-400">
                    HRT Effect
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{pathway.hrtEffect}</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </div>

              {/* Lifestyle Effect */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="text-xs font-semibold text-green-700 dark:text-green-400">
                    Lifestyle Effect
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{pathway.lifestyleEffect}</p>
              </div>
            </div>

            {/* Combined Result */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">Combined Result:</span>
                <span className="text-sm font-bold text-foreground">{pathway.combinedResult}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Summary */}
      <Card className="p-6 bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20">
        <h4 className="text-base font-bold mb-4">Why This Approach Works</h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-foreground">HRT</strong> addresses the root hormonal cause across all systems,
              restoring natural balance
            </p>
          </div>
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-foreground">Lifestyle modifications</strong> provide additive benefits through
              complementary mechanisms
            </p>
          </div>
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <p>
              Together they achieve <strong className="text-foreground">multi-system optimization</strong> vs.
              single-pathway interventions
            </p>
          </div>
          <div className="flex items-start gap-3">
            <TrendingDown className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-foreground">Statin alone</strong> only targets lipid synthesis without
              addressing hormonal deficiency or other symptoms
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
