import { Card } from '@/components/ui/card';
import { breastCancerClinicalStudies } from '@/lib/breast-cancer-evidence-data';

function StudyCardSimple({ study }) {
  return (
    <Card className="p-4 bg-card">
      <div className="space-y-2">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="text-sm font-bold">{study.name || study.id}</h4>
            <p className="text-xs text-muted-foreground mt-1">{study.type}</p>
          </div>
          {study.year && (
            <span className="px-2 py-0.5 text-xs font-medium bg-muted rounded">
              {study.year}
            </span>
          )}
        </div>

        {/* Citation */}
        <p className="text-xs italic text-muted-foreground">
          {study.citation}
        </p>

        {/* Key Finding */}
        <div className="pt-2 border-t border-border">
          <p className="text-xs font-semibold text-green-400 mb-1">Key Finding:</p>
          <p className="text-sm">{study.finding}</p>
        </div>

        {/* Details List */}
        {study.details && study.details.length > 0 && (
          <div className="bg-muted/30 p-3 rounded">
            <ul className="space-y-1 text-xs">
              {study.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
}

export default function EvidenceTabStudiesBreastCancer() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Clinical Studies</h3>
        <p className="text-sm text-muted-foreground">
          Key research supporting the Fezolinetant + CBT-I approach for high-risk patients
        </p>
      </div>

      {/* Study Cards */}
      <div className="space-y-4">
        {breastCancerClinicalStudies.map((study) => (
          <StudyCardSimple key={study.id} study={study} />
        ))}
      </div>

      {/* Guidelines Section */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-3">Clinical Guidelines</h3>
        <div className="space-y-3">
          <Card className="p-4 bg-card">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-sm font-bold">NAMS 2024</h4>
              <span className="px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 rounded">
                Grade A
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              Nonhormonal Management of Menopause-Associated Vasomotor Symptoms
            </p>
            <p className="text-sm">
              Fezolinetant is effective for VMS in women who cannot or prefer not to use hormone therapy
            </p>
          </Card>

          <Card className="p-4 bg-card">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-sm font-bold">ASCO 2023</h4>
              <span className="px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 rounded">
                Strong
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              Management of Vasomotor Symptoms in Survivors of Breast Cancer
            </p>
            <p className="text-sm">
              Non-hormonal options preferred for women with breast cancer history or high risk
            </p>
          </Card>

          <Card className="p-4 bg-card">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-sm font-bold">FDA 2023</h4>
              <span className="px-2 py-0.5 text-xs font-medium bg-blue-500/20 text-blue-400 rounded">
                Approved
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              Fezolinetant (Veozah) Approval
            </p>
            <p className="text-sm">
              Approved for treatment of moderate to severe vasomotor symptoms due to menopause
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
