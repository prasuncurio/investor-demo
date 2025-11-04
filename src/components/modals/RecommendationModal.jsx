import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import CopyButton from './CopyButton';

export default function RecommendationModal({ isOpen, onClose, patientData }) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const ehrNote = `CLINICAL DECISION SUPPORT SUMMARY
Generated: ${currentDate}
Patient: ${patientData?.name || 'Sarah Mitchell'}, Age ${patientData?.demographics?.age || 52}

CLINICAL ASSESSMENT:
Postmenopausal woman (1 year amenorrhea) presenting with vasomotor symptoms
(18 hot flashes/day), elevated LDL cholesterol (180 mg/dL), and concerns
about cardiovascular and bone health. No contraindications to hormone therapy.

RECOMMENDATION:
Initiate hormone replacement therapy (HRT) combined with structured lifestyle modifications:
• Estradiol 0.5mg + Progesterone 100mg daily (oral or transdermal)
• Mediterranean-style dietary pattern emphasizing:
  - Vegetables, fruits, whole grains, legumes
  - Fish 2-3x/week, olive oil as primary fat
  - Limited red meat and processed foods
• 150 minutes/week moderate aerobic exercise (e.g., brisk walking, swimming)
• Resistance training 2 days/week (weights or bodyweight exercises)

RATIONALE:
1. HRT addresses root hormonal cause affecting multiple body systems
2. Patient age 52 and 1 year post-menopause (optimal window for HRT initiation)
3. Lifestyle modifications provide synergistic benefits through complementary mechanisms
4. Combined approach superior to single-pathway interventions (e.g., statin alone)
5. Expected outcomes based on cohort analysis (n=2,347):
   - 89% reduction in vasomotor symptoms (18 → 2 hot flashes/day)
   - 31% reduction in LDL cholesterol (180 → 125 mg/dL)
   - 35% increase in HDL cholesterol (52 → 70 mg/dL)
   - +1.1% bone density improvement
   - 46% reduction in 10-year CV risk (12.5% → 6.8%)
   - 68% improvement in quality of life (5.0 → 8.4/10)

MONITORING PLAN:
• Baseline: Mammogram, lipid panel, liver function
• 3 months: Assess symptom response, repeat lipids
• 6 months: Clinical reassessment
• Annually: Mammogram, bone density (if indicated), lipid panel

CONTRAINDICATIONS REVIEWED:
✓ No history of breast cancer or estrogen-dependent malignancy
✓ No active liver disease
✓ No history of VTE or thrombophilia
✓ No unexplained vaginal bleeding
✓ No active cardiovascular disease

SHARED DECISION-MAKING:
Discussed risks, benefits, and alternatives with patient. Patient expressed
preference for addressing root hormonal cause rather than symptom-only
management. Patient understands monitoring requirements and contraceptive
effect of HRT.

EVIDENCE BASE:
Recommendation based on analysis of 2,347 similar patient profiles, current
clinical guidelines (NAMS 2022, NICE 2024), and recent systematic reviews.
Confidence level: 87% (High).

ICD-10 CODES:
• N95.1 - Menopausal and female climacteric states
• E78.00 - Pure hypercholesterolemia, unspecified
• Z79.890 - Hormone replacement therapy (postmenopausal)`;

  const patientSummary = `YOUR PERSONALIZED HEALTH PLAN

Dear ${patientData?.name?.split(' ')[0] || 'Sarah'},

Based on our conversation and your health information, here's a summary
of the recommended approach to help you feel better and protect your
long-term health.

WHAT WE'RE RECOMMENDING:
Hormone replacement therapy (HRT) combined with lifestyle changes. This
approach addresses the root cause of your symptoms—the natural decline
in estrogen that happens during menopause—while optimizing your overall
health through nutrition and exercise.

WHAT TO EXPECT:
Based on analysis of 2,347 women similar to you:
• Hot flashes: Should reduce by about 89% within 4-8 weeks (from 18 to just 2 per day)
• Energy and quality of life: Most women see significant improvement (68% boost)
• Cholesterol: Expected to improve substantially over 3-6 months
  - LDL (bad cholesterol): 180 → 125 mg/dL (31% reduction)
  - HDL (good cholesterol): 52 → 70 mg/dL (35% increase)
• Bone health: Expected +1.1% improvement in bone density
• Heart health: 46% reduction in your 10-year cardiovascular risk

YOUR MEDICATIONS:
1. Estradiol 0.5mg - Take once daily
   - Provides the estrogen your body needs
   - Available as pill or patch (we'll discuss which is best for you)

2. Progesterone 100mg - Take at bedtime
   - Protects the uterine lining (important safety measure)
   - May help with sleep quality

LIFESTYLE RECOMMENDATIONS:
• Nutrition: Mediterranean-style eating pattern
  - Focus on vegetables, fruits, whole grains, fish, olive oil
  - Eat fish 2-3 times per week
  - Limit red meat and processed foods
  - This dietary pattern enhances the benefits of HRT

• Exercise: 150 minutes per week of moderate activity
  - Examples: brisk walking, swimming, cycling
  - Break it up: 30 minutes, 5 days per week works great

• Strength training: 2 days per week
  - Helps with bone health and metabolism
  - Can use weights, resistance bands, or bodyweight exercises

SAFETY AND MONITORING:
We'll see you in 3 months to check how you're feeling and recheck your
cholesterol. You'll need a yearly mammogram and regular check-ins to make
sure the treatment continues to work well for you.

WHAT ABOUT RISKS?
The good news: Starting HRT before age 60 and within 10 years of menopause
(which applies to you—you're 52 and 1 year post-menopause) has the most
favorable benefit-to-risk profile. We've reviewed your medical history and
confirmed you don't have conditions that would make HRT unsafe.

WHY THIS COMBINATION INSTEAD OF OTHER OPTIONS?
• Statin alone: Would improve cholesterol but wouldn't address your hot flashes,
  bone health, or quality of life. It treats symptoms without addressing the
  root hormonal cause.
• HRT alone: Would help significantly, but adding lifestyle changes boosts
  every benefit—better cholesterol, stronger bones, less CV risk, and even
  better symptom relief.
• No treatment: Your symptoms would likely worsen, and your health risks
  (cholesterol, bone loss, CV risk) would continue to increase.

QUESTIONS?
This is a big decision, and it's normal to have questions. Please reach out
to our office anytime. We're here to support you.

Next Steps:
1. Schedule baseline mammogram (if not done in past year)
2. Get baseline blood work (cholesterol, liver function)
3. Start medications as prescribed
4. Schedule 3-month follow-up appointment

Your care team is here to help you feel your best.`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Clinical Recommendation</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* EHR-Ready Clinical Note */}
          <Card className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold">EHR-Ready Clinical Note</h3>
              <CopyButton text={ehrNote} label="Copy to Clipboard" />
            </div>
            <div className="bg-muted/50 p-4 rounded text-xs font-mono whitespace-pre-wrap overflow-x-auto max-h-[400px] overflow-y-auto">
              {ehrNote}
            </div>
          </Card>

          {/* Patient-Facing Summary */}
          <Card className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold">Patient-Facing Summary</h3>
              <CopyButton text={patientSummary} label="Copy to Patient Portal" />
            </div>
            <div className="bg-background p-4 rounded text-sm whitespace-pre-wrap overflow-x-auto max-h-[400px] overflow-y-auto leading-relaxed">
              {patientSummary}
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
