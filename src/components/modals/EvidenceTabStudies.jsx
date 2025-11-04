import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { clinicalStudies } from '@/lib/evidence-data';

function StudyCard({ study }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="p-4 bg-card">
      <div className="space-y-2">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="text-sm font-bold">{study.title}</h4>
            <p className="text-xs text-muted-foreground mt-1">{study.subtitle}</p>
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

        {/* Source Info */}
        <div className="flex flex-wrap gap-2 text-xs">
          {study.journal && (
            <span className="px-2 py-0.5 bg-muted rounded">{study.journal}</span>
          )}
          {study.authority && (
            <span className="px-2 py-0.5 bg-muted rounded">{study.authority}</span>
          )}
          {study.studySize && (
            <span className="px-2 py-0.5 bg-muted rounded">n = {study.studySize}</span>
          )}
        </div>

        {/* Key Finding */}
        <div className="pt-2 border-t border-border">
          <p className="text-xs font-semibold text-muted-foreground mb-1">Key Finding:</p>
          <p className="text-sm">{study.keyFinding}</p>
        </div>

        {/* Relevance */}
        <div className="bg-muted/30 p-2 rounded">
          <p className="text-xs font-semibold text-muted-foreground mb-1">Relevance:</p>
          <p className="text-xs">{study.relevance}</p>
        </div>

        {/* Abstract Toggle */}
        {study.abstract && (
          <div className="pt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-3 h-3" />
                  Hide Abstract
                </>
              ) : (
                <>
                  <ChevronDown className="w-3 h-3" />
                  Show Abstract
                </>
              )}
            </button>

            {isExpanded && (
              <div className="mt-2 p-3 bg-muted/20 rounded text-xs leading-relaxed whitespace-pre-line">
                {study.abstract}
              </div>
            )}
          </div>
        )}

        {/* External Links */}
        {(study.pubmedId || study.doi) && (
          <div className="flex gap-3 pt-2 border-t border-border">
            {study.pubmedId && (
              <a
                href={`https://pubmed.ncbi.nlm.nih.gov/${study.pubmedId}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                PubMed <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {study.doi && (
              <a
                href={`https://doi.org/${study.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                DOI <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}

export default function EvidenceTabStudies() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Clinical Studies</h3>
        <p className="text-sm text-muted-foreground">
          Key research supporting the HRT + Lifestyle approach
        </p>
      </div>

      {/* Study Cards */}
      <div className="space-y-4">
        {clinicalStudies.map((study) => (
          <StudyCard key={study.id} study={study} />
        ))}
      </div>
    </div>
  );
}
