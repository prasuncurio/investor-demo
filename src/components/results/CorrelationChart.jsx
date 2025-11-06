import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function CorrelationChart({ data }) {
  const { dataPoints, trendLines, correlationCoefficient } = data;

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-sm mb-2">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="font-medium">{entry.name}:</span>
              <span className="font-mono">{entry.value} {entry.unit}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  // Custom legend
  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex justify-center gap-6 mt-4 flex-wrap">
        {payload.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-2">
            <div
              className="w-4 h-1 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm font-medium">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Correlation Coefficient Badge */}
      <div className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
          <span className="text-sm font-medium text-muted-foreground">
            Correlation Coefficient:
          </span>
          <span className="text-lg font-bold text-primary">
            r = {correlationCoefficient}
          </span>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={dataPoints}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ strokeWidth: 2 }}
          />

          {/* Left Y-Axis for LDL */}
          <YAxis
            yAxisId="left"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ strokeWidth: 2 }}
            label={{
              value: `${trendLines.ldl.label} (${trendLines.ldl.unit})`,
              angle: -90,
              position: 'insideLeft',
              style: { fontSize: 12, fontWeight: 600 }
            }}
            domain={['dataMin - 10', 'dataMax + 10']}
          />

          {/* Right Y-Axis for Estradiol */}
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ strokeWidth: 2 }}
            label={{
              value: `${trendLines.estradiol.label} (${trendLines.estradiol.unit})`,
              angle: 90,
              position: 'insideRight',
              style: { fontSize: 12, fontWeight: 600 }
            }}
            domain={['dataMin - 10', 'dataMax + 10']}
          />

          <Tooltip content={<CustomTooltip />} />
          <Legend content={renderLegend} />

          {/* LDL Line */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="ldl"
            stroke="oklch(0.646 0.222 41.116)"
            strokeWidth={3}
            name={trendLines.ldl.label}
            dot={{ r: 5, fill: "oklch(0.646 0.222 41.116)", strokeWidth: 2, stroke: "#fff" }}
            activeDot={{ r: 7 }}
            unit={` ${trendLines.ldl.unit}`}
          />

          {/* Estradiol Line */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="estradiol"
            stroke="oklch(0.6 0.118 184.704)"
            strokeWidth={3}
            name={trendLines.estradiol.label}
            dot={{ r: 5, fill: "oklch(0.6 0.118 184.704)", strokeWidth: 2, stroke: "#fff" }}
            activeDot={{ r: 7 }}
            unit={` ${trendLines.estradiol.unit}`}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Trend Indicators */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-4 bg-red-500/5 rounded-lg border border-red-500/20">
          <TrendingUp className="w-6 h-6 text-red-500" />
          <div>
            <div className="font-semibold text-sm">{trendLines.ldl.label}</div>
            <div className="text-xs text-muted-foreground capitalize">
              Trend: {trendLines.ldl.trend}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
          <TrendingDown className="w-6 h-6 text-blue-500" />
          <div>
            <div className="font-semibold text-sm">{trendLines.estradiol.label}</div>
            <div className="text-xs text-muted-foreground capitalize">
              Trend: {trendLines.estradiol.trend}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
