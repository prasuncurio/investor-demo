import { Card } from '@/components/ui/card';
import { breastCancerMechanismData } from '@/lib/breast-cancer-evidence-data';

export default function EvidenceTabMechanismBreastCancer() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{breastCancerMechanismData.title}</h3>
        <p className="text-sm text-muted-foreground">
          {breastCancerMechanismData.subtitle}
        </p>
      </div>

      {/* Mechanism Sections */}
      <div className="space-y-4">
        {breastCancerMechanismData.sections.map((section, index) => (
          <Card key={index} className="p-4 bg-card">
            <h4 className="text-sm font-bold mb-3 text-green-400">{section.heading}</h4>
            <ul className="space-y-2">
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {/* Visual Summary */}
      <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-green-500/10 border-2 border-green-500/30">
        <h4 className="text-sm font-bold mb-4 text-center">Treatment Strategy Summary</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-2">
            <p className="font-semibold text-green-400">What We're Doing:</p>
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Fezolinetant blocks NK3 receptors → reduces hot flashes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>CBT-I improves sleep architecture → better rest</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Lifestyle changes → mild BC risk reduction</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Non-hormonal approach → maintains oncologic safety</span>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-red-400">What We're Avoiding:</p>
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">✗</span>
                <span>Systemic estrogen (would increase BC risk 30%)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">✗</span>
                <span>Approaches that compromise oncologic safety</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">✗</span>
                <span>Suboptimal symptom control (no intervention)</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
