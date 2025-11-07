import { Card } from '@/components/ui/card';
import { supplementClinicalStudies, supplementGuidelines } from '@/lib/breast-cancer-evidence-data';

function StudyCardSupplement({ study }) {
  return (
    <Card className="p-4 bg-card">
      <div className="space-y-2">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-sm font-bold">{study.name || study.id}</h4>
              {study.supplement && (
                <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded">
                  {study.supplement}
                </span>
              )}
            </div>
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

        {/* Sample Size */}
        {study.participants && (
          <div className="text-xs text-muted-foreground">
            <span className="font-semibold">N={study.participants}</span> participants
          </div>
        )}

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

export default function EvidenceTabStudiesSupplement() {
  // Group studies by supplement
  const relizenStudies = supplementClinicalStudies.filter(s => s.supplement === 'Relizen');
  const blackCohoshStudies = supplementClinicalStudies.filter(s => s.supplement === 'Black Cohosh');
  const soyStudies = supplementClinicalStudies.filter(s => s.supplement === 'Soy Isoflavones');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Supplement Clinical Studies</h3>
        <p className="text-sm text-muted-foreground">
          Evidence base for non-prescription supplement options in high breast cancer risk patients
        </p>
      </div>

      {/* Relizen Studies Section */}
      <div>
        <div className="mb-3 pb-2 border-b border-border">
          <h4 className="text-lg font-bold text-green-400">Relizen (Swedish Pollen Extract)</h4>
          <p className="text-xs text-muted-foreground mt-1">Recommended for high BC risk patients</p>
        </div>
        <div className="space-y-3">
          {relizenStudies.map((study) => (
            <StudyCardSupplement key={study.id} study={study} />
          ))}
        </div>
      </div>

      {/* Black Cohosh Studies Section */}
      <div>
        <div className="mb-3 pb-2 border-b border-border">
          <h4 className="text-lg font-bold text-amber-400">Black Cohosh</h4>
          <p className="text-xs text-muted-foreground mt-1">Use with caution - mixed evidence and safety concerns</p>
        </div>
        <div className="space-y-3">
          {blackCohoshStudies.map((study) => (
            <StudyCardSupplement key={study.id} study={study} />
          ))}
        </div>
      </div>

      {/* Soy Isoflavones Studies Section */}
      <div>
        <div className="mb-3 pb-2 border-b border-border">
          <h4 className="text-lg font-bold text-amber-400">Soy Isoflavones</h4>
          <p className="text-xs text-muted-foreground mt-1">Use with caution - estrogenic concerns in high-risk patients</p>
        </div>
        <div className="space-y-3">
          {soyStudies.map((study) => (
            <StudyCardSupplement key={study.id} study={study} />
          ))}
        </div>
      </div>

      {/* Evidence Summary */}
      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
        <h4 className="text-sm font-bold mb-2">Evidence Quality Summary</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Relizen (Pollen Extract):</span>
            <span className="font-semibold text-green-400">High Quality (3 RCTs, N=892)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Black Cohosh:</span>
            <span className="font-semibold text-amber-400">Moderate Quality (12 RCTs, N=3127)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Soy Isoflavones:</span>
            <span className="font-semibold text-amber-400">Moderate Quality (19 RCTs, N=4364)</span>
          </div>
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-3">Clinical Guidelines</h3>
        <div className="space-y-3">
          {supplementGuidelines.map((guideline, index) => (
            <Card key={index} className="p-4 bg-card">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-bold">{guideline.organization} {guideline.year}</h4>
                <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                  guideline.level.includes('A') || guideline.level.includes('Strong')
                    ? 'bg-green-500/20 text-green-400'
                    : guideline.level.includes('B') || guideline.level.includes('Moderate')
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {guideline.level}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                {guideline.title}
              </p>
              <p className="text-sm mb-2">
                {guideline.recommendation}
              </p>
              {guideline.details && guideline.details.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {guideline.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Clinical Note */}
      <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
        <h4 className="text-sm font-bold text-amber-400 mb-2">Important Clinical Note</h4>
        <p className="text-xs text-muted-foreground">
          For Jennifer with 14.2% 5-year breast cancer risk, <strong>Relizen</strong> is the preferred supplement choice due to:
        </p>
        <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            <span>Non-hormonal mechanism (no estrogenic activity)</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            <span>Safety demonstrated in breast cancer survivors</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            <span>Moderate efficacy (41% VMS reduction) with low adverse event rate</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            <span>No drug interactions with tamoxifen or other oncologic medications</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
