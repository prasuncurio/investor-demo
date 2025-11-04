import { ArrowLeft, FileText, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ComparisonHeader({
  query,
  patientName,
  onBack,
  onShowEvidence,
  onGenerateRecommendation
}) {
  return (
    <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4 -ml-2"
          aria-label="Back to patient overview"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Overview
        </Button>

        {/* Query Context */}
        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Analysis Results for {patientName}
          </h1>
          <p className="text-sm text-muted-foreground italic">
            &ldquo;{query}&rdquo;
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={onShowEvidence}
            className="flex items-center gap-2"
          >
            <FlaskConical className="w-4 h-4" />
            Show Evidence
          </Button>
          <Button
            variant="outline"
            onClick={onGenerateRecommendation}
            className="flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Generate Recommendation
          </Button>
        </div>
      </div>
    </div>
  );
}
