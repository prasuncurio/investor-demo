import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Heart,
  AlertCircle,
  Shield,
  AlertTriangle,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import sarahPatientData from '@/data/sarah-patient.json';
import {
  formatDate,
  getRiskLevelStyle,
  getTrendColor,
  formatChartData,
  getChartDomain,
  getMetricAlert,
} from '@/lib/patient-data';

export default function PatientOverview({ patient: patientProp, onStartQuery }) {
  // Use prop if provided, otherwise default to Sarah's data
  const patient = patientProp || sarahPatientData;

  // Dynamically determine primary metrics based on what's available
  const primaryMetrics = patient.breastCancerRisk
    ? ['hotFlashes', 'symptomSeverity']
    : ['ldl', 'estradiol'];

  const [selectedMetric, setSelectedMetric] = useState(primaryMetrics[0]);

  const alert = getMetricAlert(patient);

  // Get risk style based on which risk type exists
  const riskCategory = patient.breastCancerRisk
    ? patient.breastCancerRisk.category
    : patient.cardiovascularRisk.category;
  const riskStyle = getRiskLevelStyle(riskCategory);

  // Prepare chart data based on selected metric
  const chartData = patient.metrics[selectedMetric]
    ? formatChartData(patient.metrics[selectedMetric].history)
    : [];
  const chartDomain = getChartDomain(chartData);

  // Debug logging
  console.log('=== Chart Debug Info ===');
  console.log('Chart Data:', chartData);
  console.log('Chart Domain:', chartDomain);
  console.log('Selected Metric:', selectedMetric);

  // Get computed CSS variable values for debugging
  useEffect(() => {
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    const chart1 = computedStyle.getPropertyValue('--chart-1');
    const chart2 = computedStyle.getPropertyValue('--chart-2');
    console.log('CSS Variable --chart-1:', chart1);
    console.log('CSS Variable --chart-2:', chart2);
    console.log('Resolved hsl(var(--chart-1)):', `hsl(${chart1})`);
    console.log('Resolved hsl(var(--chart-2)):', `hsl(${chart2})`);
  }, []);

  // Chart color based on metric
  const chartColor =
    selectedMetric === 'ldl'
      ? 'hsl(var(--chart-1))'
      : 'hsl(var(--chart-2))';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Patient Overview
          </h1>
          <p className="text-muted-foreground mt-1">
            {patient.breastCancerRisk
              ? 'Perimenopausal breast cancer risk assessment'
              : 'Perimenopausal cardiovascular health assessment'}
          </p>
        </div>
        <Badge variant={riskStyle.variant} className={riskStyle.className}>
          {patient.breastCancerRisk ? (
            <Shield className="w-3 h-3 mr-1" />
          ) : (
            <Heart className="w-3 h-3 mr-1" />
          )}
          {riskCategory} Risk
        </Badge>
      </div>

      {/* Alert Banner */}
      {alert && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-5 shadow-sm border border-amber-200 dark:border-amber-900"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 dark:bg-amber-900/10 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-100/50 dark:bg-orange-900/10 rounded-full translate-y-12 -translate-x-12" />
          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="flex-1 pt-0.5">
              <h3 className="font-semibold text-amber-900 dark:text-amber-100 text-base">
                {alert.title}
              </h3>
              <p className="text-sm text-amber-800 dark:text-amber-200 mt-1.5 leading-relaxed">
                {alert.message}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Patient Info Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{patient.name}</CardTitle>
            <Badge variant="secondary">{patient.status}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Age</p>
              <p className="font-medium">{patient.age} years</p>
            </div>
            <div>
              <p className="text-muted-foreground">BMI</p>
              <p className="font-medium">{patient.demographics.bmi}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Last Visit</p>
              <p className="font-medium">{formatDate(patient.lastVisit)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Patient ID</p>
              <p className="font-medium font-mono text-xs">{patient.id}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* First Primary Metric */}
        {patient.metrics[primaryMetrics[0]] && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  {primaryMetrics[0] === 'ldl' && 'LDL Cholesterol'}
                  {primaryMetrics[0] === 'hotFlashes' && 'Hot Flashes'}
                </CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={`flex items-center gap-1 ${getTrendColor(primaryMetrics[0], patient.metrics[primaryMetrics[0]].trend)}`}
                      >
                        {patient.metrics[primaryMetrics[0]].trend === 'rising' ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span className="text-sm font-semibold">
                          {Math.abs(
                            patient.metrics[primaryMetrics[0]].changePercent
                          ).toFixed(1)}
                          %
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Change from baseline:{' '}
                        {patient.metrics[primaryMetrics[0]].baseline}{' '}
                        {patient.metrics[primaryMetrics[0]].unit}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">
                    {patient.metrics[primaryMetrics[0]].current}
                  </span>
                  <span className="text-muted-foreground">
                    {patient.metrics[primaryMetrics[0]].unit}
                  </span>
                </div>
                <div className="w-full h-40">
                  <ResponsiveContainer width="100%" height={160}>
                    <LineChart
                      data={formatChartData(
                        patient.metrics[primaryMetrics[0]].history
                      )}
                      onClick={() => setSelectedMetric(primaryMetrics[0])}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="oklch(0.922 0 0)"
                      />
                      <XAxis
                        dataKey="formattedDate"
                        tick={{ fill: 'oklch(0.556 0 0)' }}
                        style={{ fontSize: '12px' }}
                      />
                      <YAxis
                        domain={getChartDomain(
                          formatChartData(patient.metrics[primaryMetrics[0]].history)
                        )}
                        tick={{ fill: 'oklch(0.556 0 0)' }}
                        style={{ fontSize: '12px' }}
                      />
                      <RechartsTooltip
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          border: '1px solid oklch(0.922 0 0)',
                          borderRadius: '6px',
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={
                          primaryMetrics[0] === 'hotFlashes'
                            ? 'oklch(0.646 0.222 10)'
                            : 'oklch(0.646 0.222 41.116)'
                        }
                        strokeWidth={3}
                        dot={{
                          fill:
                            primaryMetrics[0] === 'hotFlashes'
                              ? 'oklch(0.646 0.222 10)'
                              : 'oklch(0.646 0.222 41.116)',
                          r: 4,
                        }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-muted-foreground">
                  {primaryMetrics[0] === 'ldl' &&
                    'Target: <130 mg/dL for moderate cardiovascular risk'}
                  {primaryMetrics[0] === 'hotFlashes' &&
                    'Increasing frequency indicating worsening symptoms'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Second Primary Metric */}
        {patient.metrics[primaryMetrics[1]] && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  {primaryMetrics[1] === 'estradiol' && 'Estradiol'}
                  {primaryMetrics[1] === 'symptomSeverity' && 'Symptom Severity'}
                </CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={`flex items-center gap-1 ${getTrendColor(primaryMetrics[1], patient.metrics[primaryMetrics[1]].trend)}`}
                      >
                        {patient.metrics[primaryMetrics[1]].trend === 'rising' ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span className="text-sm font-semibold">
                          {Math.abs(
                            patient.metrics[primaryMetrics[1]].changePercent
                          ).toFixed(1)}
                          %
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Change from baseline:{' '}
                        {patient.metrics[primaryMetrics[1]].baseline}{' '}
                        {patient.metrics[primaryMetrics[1]].unit}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">
                    {patient.metrics[primaryMetrics[1]].current}
                  </span>
                  <span className="text-muted-foreground">
                    {patient.metrics[primaryMetrics[1]].unit}
                  </span>
                </div>
                <div className="w-full h-40">
                  <ResponsiveContainer width="100%" height={160}>
                    <LineChart
                      data={formatChartData(
                        patient.metrics[primaryMetrics[1]].history
                      )}
                      onClick={() => setSelectedMetric(primaryMetrics[1])}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="oklch(0.922 0 0)"
                      />
                      <XAxis
                        dataKey="formattedDate"
                        tick={{ fill: 'oklch(0.556 0 0)' }}
                        style={{ fontSize: '12px' }}
                      />
                      <YAxis
                        domain={getChartDomain(
                          formatChartData(patient.metrics[primaryMetrics[1]].history)
                        )}
                        tick={{ fill: 'oklch(0.556 0 0)' }}
                        style={{ fontSize: '12px' }}
                      />
                      <RechartsTooltip
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          border: '1px solid oklch(0.922 0 0)',
                          borderRadius: '6px',
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={
                          primaryMetrics[1] === 'symptomSeverity'
                            ? 'oklch(0.646 0.222 330)'
                            : 'oklch(0.6 0.118 184.704)'
                        }
                        strokeWidth={3}
                        dot={{
                          fill:
                            primaryMetrics[1] === 'symptomSeverity'
                              ? 'oklch(0.646 0.222 330)'
                              : 'oklch(0.6 0.118 184.704)',
                          r: 4,
                        }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-muted-foreground">
                  {primaryMetrics[1] === 'estradiol' &&
                    'Perimenopausal range: 15-350 pg/mL'}
                  {primaryMetrics[1] === 'symptomSeverity' &&
                    'Severity scale: 0-10, current level indicates severe impact'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Additional Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Additional Health Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Blood Pressure</p>
              <p className="text-lg font-semibold">
                {patient.metrics.bloodPressure.systolic}/
                {patient.metrics.bloodPressure.diastolic}
              </p>
              <p className="text-xs text-muted-foreground">
                {patient.metrics.bloodPressure.unit}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">HDL Cholesterol</p>
              <p className="text-lg font-semibold">
                {patient.metrics.hdl.value}
              </p>
              <p className="text-xs text-muted-foreground">
                {patient.metrics.hdl.unit}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Triglycerides</p>
              <p className="text-lg font-semibold">
                {patient.metrics.triglycerides.value}
              </p>
              <p className="text-xs text-muted-foreground">
                {patient.metrics.triglycerides.unit}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Glucose</p>
              <p className="text-lg font-semibold">
                {patient.metrics.glucose.value}
              </p>
              <p className="text-xs text-muted-foreground">
                {patient.metrics.glucose.unit}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medical History & Symptoms */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Medical History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Conditions
              </p>
              <ul className="space-y-1">
                {patient.medicalHistory.conditions.map((condition, idx) => (
                  <li key={idx} className="text-sm">
                    • {condition}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Current Medications
              </p>
              <ul className="space-y-1">
                {patient.medicalHistory.medications.map((med, idx) => (
                  <li key={idx} className="text-sm">
                    • {med}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Current Symptoms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Primary Symptoms
              </p>
              <ul className="space-y-1">
                {patient.symptoms.primary.map((symptom, idx) => (
                  <li key={idx} className="text-sm">
                    • {symptom}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Secondary Symptoms
              </p>
              <ul className="space-y-1">
                {patient.symptoms.secondary.map((symptom, idx) => (
                  <li key={idx} className="text-sm">
                    • {symptom}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Assessment - Conditional based on risk type */}
      {patient.breastCancerRisk && (
        <Card className="relative overflow-hidden border-2 border-red-200 dark:border-red-900/50">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-red-100/30 to-pink-100/30 dark:from-red-900/10 dark:to-pink-900/10 rounded-full -translate-y-24 translate-x-24" />
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 shadow-md">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span>Breast Cancer Risk Assessment</span>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left: Risk Score */}
              <div className="space-y-3">
                <div className="flex items-end gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">5-Year Risk</p>
                    <div className="flex items-baseline gap-1">
                      <p className="text-5xl font-bold bg-gradient-to-br from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent">
                        {patient.breastCancerRisk.score}
                      </p>
                      <span className="text-2xl font-semibold text-muted-foreground">%</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <Badge variant="destructive" className="text-xs px-3 py-1">
                      {patient.breastCancerRisk.category} Risk
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-red-600 dark:text-red-400 font-medium">
                  {patient.breastCancerRisk.comparisonToAverage}
                </p>
              </div>

              {/* Right: Contributing Factors */}
              <div className="pt-2">
                <p className="text-sm font-semibold mb-3 text-muted-foreground">
                  Contributing Factors:
                </p>
                <div className="space-y-2">
                  {patient.breastCancerRisk.factors.map((factor, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <span className="text-foreground/90">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Alert banner for contraindication */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-start gap-2 p-3 rounded-lg bg-red-100 dark:bg-red-950/30 border border-red-300 dark:border-red-800">
                <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Standard HRT contraindicated</strong> due to elevated
                  breast cancer risk
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {patient.cardiovascularRisk && !patient.breastCancerRisk && (
        <Card className="relative overflow-hidden border-2 border-amber-200 dark:border-amber-900/50">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-100/30 to-orange-100/30 dark:from-amber-900/10 dark:to-orange-900/10 rounded-full -translate-y-24 translate-x-24" />
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-md">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span>Cardiovascular Risk Assessment</span>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-end gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Risk Score</p>
                    <div className="flex items-baseline gap-1">
                      <p className="text-5xl font-bold bg-gradient-to-br from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
                        {patient.cardiovascularRisk.score}
                      </p>
                      <span className="text-2xl font-semibold text-muted-foreground">%</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200 border-amber-300 dark:border-amber-800 px-3 py-1"
                    >
                      {patient.cardiovascularRisk.category} Risk
                    </Badge>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  5-year cardiovascular event probability
                </p>
              </div>

              <div className="flex items-center justify-center p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-900">
                <div className="text-center">
                  <Heart className="w-12 h-12 mx-auto mb-2 text-amber-600 dark:text-amber-400" />
                  <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
                    Requires Intervention
                  </p>
                  <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                    Multiple risk factors present
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
                Contributing Factors
              </div>
              <div className="grid gap-2">
                {patient.cardiovascularRisk.factors.map((factor, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-md bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{factor}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center pt-4"
      >
        <Button size="lg" onClick={onStartQuery}>
          Analyze Intervention Options
        </Button>
      </motion.div>
    </motion.div>
  );
}
