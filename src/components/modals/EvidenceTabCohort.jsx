import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cohortMetrics, scenarioNames } from '@/lib/evidence-data';

// Color scheme mapping
const colorSchemes = {
  gray: 'border-border text-muted-foreground',
  blue: 'border-[oklch(0.6_0.118_184.704)] text-[oklch(0.6_0.118_184.704)]',
  purple: 'border-[oklch(0.7_0.15_300)] text-[oklch(0.7_0.15_300)]',
  green: 'border-[oklch(0.646_0.222_41.116)] text-[oklch(0.646_0.222_41.116)]'
};

function MetricCard({ metric, metricKey }) {
  const scenarios = ['noAction', 'statin', 'hrt', 'combined'];

  return (
    <Card className="p-4 bg-card">
      <h4 className="text-sm font-bold mb-1">{metric.label}</h4>
      <p className="text-xs text-muted-foreground mb-3">{metric.subtitle}</p>

      <div className="space-y-3">
        {scenarios.map((scenario) => {
          const data = metric[scenario];
          const colorClass = colorSchemes[data.colorScheme];

          return (
            <div key={scenario} className={`border-l-2 pl-3 ${colorClass}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium">{scenarioNames[scenario]}</span>
                {data.isRecommended && <Star className="w-3 h-3 fill-current" />}
              </div>

              {/* Display format varies by metric type */}
              {metricKey === 'ldlChange' || metricKey === 'hdlChange' ? (
                <div className="text-sm">
                  <span className="font-bold">{data.baseline} → {data.month12} {data.unit}</span>
                  <span className={`ml-2 text-xs ${data.percent < 0 ? 'text-green-500' : data.percent > 0 ? 'text-red-500' : 'text-muted-foreground'}`}>
                    ({data.percent > 0 ? '+' : ''}{data.percent}%)
                  </span>
                </div>
              ) : metricKey === 'vasomotorSymptoms' ? (
                <div className="text-sm">
                  <span className="font-bold">{data.baseline} → {data.month12} per day</span>
                  {data.percent && (
                    <span className={`ml-2 text-xs ${data.percent < 0 ? 'text-green-500' : 'text-red-500'}`}>
                      ({data.percent}%)
                    </span>
                  )}
                </div>
              ) : metricKey === 'boneDensity' ? (
                <div className="text-sm">
                  <span className={`font-bold ${data.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {data.change > 0 ? '+' : ''}{data.change}{data.unit}
                  </span>
                  <span className="ml-2 text-xs text-muted-foreground">({data.trend})</span>
                </div>
              ) : metricKey === 'qualityOfLife' ? (
                <div className="text-sm">
                  <span className="font-bold">{data.baseline} → {data.month12}/10</span>
                  <span className={`ml-2 text-xs ${data.percent > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    ({data.percent > 0 ? '+' : ''}{data.percent}%)
                  </span>
                </div>
              ) : metricKey === 'cvRisk' ? (
                <div className="text-sm">
                  <span className="font-bold">{data.baseline}{data.unit} → {data.month12}{data.unit}</span>
                  <span className={`ml-2 text-xs ${data.percent < 0 ? 'text-green-500' : 'text-red-500'}`}>
                    ({data.percent > 0 ? '+' : ''}{data.percent}%)
                  </span>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default function EvidenceTabCohort() {
  const metricsOrder = ['ldlChange', 'vasomotorSymptoms', 'boneDensity', 'qualityOfLife', 'cvRisk', 'hdlChange'];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">
          Based on {cohortMetrics.cohortSize.toLocaleString()} Similar Patients
        </h3>
        <p className="text-sm text-muted-foreground">
          {cohortMetrics.dataSource} • {cohortMetrics.successRate}% success rate
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metricsOrder.map((metricKey) => (
          <MetricCard
            key={metricKey}
            metric={cohortMetrics[metricKey]}
            metricKey={metricKey}
          />
        ))}
      </div>

      {/* Legend */}
      <Card className="p-4 bg-muted/30 mt-6">
        <h4 className="text-xs font-bold mb-2">Scenario Legend</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-border"></div>
            <span>No Action</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-[oklch(0.6_0.118_184.704)]"></div>
            <span>Statin Only</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-[oklch(0.7_0.15_300)]"></div>
            <span>HRT Only</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-[oklch(0.646_0.222_41.116)]"></div>
            <span className="flex items-center gap-1">
              HRT + Lifestyle <Star className="w-3 h-3 fill-[oklch(0.646_0.222_41.116)]" />
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
