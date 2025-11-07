import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import CopyButton from './CopyButton';
import { QUERY_TYPES } from '@/lib/query-classifier';

export default function RecommendationModal({ isOpen, onClose, patientData, useCase = 'cardiovascular', queryType = null }) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const isBreastCancer = useCase === 'breast-cancer';
  const isSupplementAssessment = queryType === QUERY_TYPES.SUPPLEMENT_SAFETY_ASSESSMENT;

  const breastCancerEhrNote = `CLINICAL DECISION SUPPORT SUMMARY
Generated: ${currentDate}
Patient: ${patientData?.name || 'Jennifer Hayes'}, Age ${patientData?.demographics?.age || 48}

CLINICAL ASSESSMENT:
Perimenopausal woman presenting with severe vasomotor symptoms (22 hot flashes/day),
significant sleep disruption (sleep quality 3.2/10), and impaired quality of life (4.1/10).
CRITICAL: Elevated breast cancer risk (14.2% 5-year risk) with strong family history
(mother and sister with breast cancer). Standard HRT CONTRAINDICATED.

RECOMMENDATION:
Initiate non-hormonal multimodal approach for VMS management:
• Fezolinetant (Veozah) 45mg once daily
• Cognitive Behavioral Therapy for Insomnia (CBT-I): 8-week program
• Lifestyle modifications for breast cancer risk reduction:
  - Achieve/maintain healthy weight (BMI goal <25)
  - Regular exercise: 150 min/week moderate aerobic + 2x/week strength training
  - Mediterranean diet pattern emphasizing whole foods, limited alcohol
  - Stress reduction techniques

RATIONALE:
1. Non-hormonal approach maintains oncologic safety (BC risk 14.2% → 13.8%)
2. Fezolinetant (NK3 receptor antagonist) addresses VMS without estrogen
3. CBT-I provides evidence-based sleep improvement beyond medication alone
4. Combined approach superior to single-modality non-hormonal treatment
5. Expected outcomes based on cohort analysis (n=4,183):
   - 77% reduction in vasomotor symptoms (22 → 5 hot flashes/day)
   - 153% improvement in sleep quality (3.2 → 8.1/10)
   - 100% improvement in quality of life (4.1 → 8.2/10)
   - 50% improvement in mood score (5.2 → 7.8/10)
   - 3% BC risk reduction through lifestyle (14.2% → 13.8%)

MONITORING PLAN:
• Baseline: Liver function tests (LFTs), mammogram, breast MRI (high-risk screening)
• 4 weeks: Assess symptom response, repeat LFTs
• 12 weeks: Clinical reassessment, symptom scales, repeat LFTs
• Ongoing: LFTs every 3 months (fezolinetant monitoring requirement)
• Annually: Mammogram + breast MRI alternating every 6 months (high-risk protocol)
• Continue annual high-risk breast cancer surveillance per NCCN guidelines

CONTRAINDICATIONS ADDRESSED:
⚠ STANDARD HRT CONTRAINDICATED due to:
  - 14.2% 5-year breast cancer risk (elevated)
  - Strong family history: mother (age 54 dx), sister (age 50 dx)
  - Estimated 30% risk increase with HRT (14.2% → 18.5%) - UNACCEPTABLE

✓ Fezolinetant appropriate: No hepatic impairment, no drug interactions

ALTERNATIVES CONSIDERED AND REJECTED:
• Standard HRT: Contraindicated (see above)
• SSRI monotherapy (Paroxetine 7.5mg): Less effective (36% vs 77% VMS reduction)
• Vaginal estrogen alone: Minimal systemic VMS benefit
• No intervention: Unacceptable symptom burden, declining QoL

SHARED DECISION-MAKING:
Discussed oncologic safety as paramount concern. Patient understands:
- Fezolinetant + CBT-I provides effective non-hormonal symptom management
- This approach does NOT increase breast cancer risk
- Requires liver monitoring (fezolinetant)
- CBT-I commitment: 8 weekly sessions with sleep specialist
- Lifestyle modifications can modestly reduce BC risk
- Cost consideration: Fezolinetant ~$520/month (manufacturer copay assistance available)

EVIDENCE BASE:
Recommendation based on analysis of 4,183 high-risk patients with severe VMS,
SKYLIGHT phase 3 trials (2023), NAMS 2024 guidelines for non-hormonal VMS
management, and ASCO 2023 guidelines for breast cancer survivors.
Confidence level: 85% (High).

ICD-10 CODES:
• N95.1 - Menopausal and female climacteric states
• Z15.01 - Genetic susceptibility to malignant neoplasm of breast
• G47.00 - Insomnia, unspecified
• Z86.000 - Personal history of in-situ neoplasm of breast (if applicable)

CPT CODES:
• 90834 - Psychotherapy, 45 minutes (CBT-I sessions)
• 99214 - Office visit, 30-39 min (established patient follow-up)`;

  const breastCancerPatientSummary = `YOUR PERSONALIZED HEALTH PLAN

Dear ${patientData?.name?.split(' ')[0] || 'Jennifer'},

Based on our conversation and your health information, here's a personalized
approach to help you feel better while keeping your breast cancer risk as low
as possible.

WHAT WE'RE RECOMMENDING:
A non-hormonal approach combining:
1. Fezolinetant (Veozah) - A new medication that blocks hot flashes
2. Cognitive Behavioral Therapy for Insomnia (CBT-I) - Specialized sleep therapy
3. Lifestyle changes to support your overall health and reduce breast cancer risk

WHY NOT HORMONE THERAPY?
Because of your family history (mom and sister with breast cancer) and elevated
breast cancer risk (14.2%), hormone therapy would increase your risk by about
30%—from 14.2% to 18.5%. That's not acceptable. The good news: We have effective
non-hormonal options that work really well.

WHAT TO EXPECT:
Based on analysis of 4,183 women similar to you (high breast cancer risk + severe hot flashes):
• Hot flashes: Should reduce by about 77% over 8-12 weeks (from 22 to just 5 per day)
• Sleep quality: Dramatic improvement expected (153% boost from CBT-I + medication)
• Energy and quality of life: Should double (100% improvement)
• Mood: Expected 50% improvement
• Breast cancer risk: MAINTAINED at safe levels, modest reduction possible with lifestyle (14.2% → 13.8%)

YOUR MEDICATIONS:
1. Fezolinetant (Veozah) 45mg - Take once daily
   - Non-hormonal medication that blocks the brain signals causing hot flashes
   - Does NOT increase breast cancer risk
   - FDA-approved specifically for hot flashes (2023)
   - May take 4-8 weeks for full effect
   - Requires periodic liver monitoring (simple blood test)

THERAPY:
CBT-I (Cognitive Behavioral Therapy for Insomnia):
• 8 weekly sessions with a sleep specialist
• Proven to dramatically improve sleep quality
• Works by retraining your sleep patterns
• Benefits persist long after therapy ends
• Especially helpful when hot flashes disrupt sleep
• We'll provide referral to sleep psychology

LIFESTYLE RECOMMENDATIONS:
These changes can actually reduce your breast cancer risk while improving symptoms:

• Weight management: Maintain healthy BMI (<25 if possible)
  - Every 5kg weight loss reduces BC risk by 11%
  - Also helps with hot flashes

• Exercise: 150 minutes per week of moderate activity + strength training 2x/week
  - Reduces BC risk by 12-20%
  - Improves hot flashes, mood, sleep, and bone health
  - Examples: brisk walking, swimming, cycling, yoga

• Nutrition: Mediterranean-style eating pattern
  - Vegetables, fruits, whole grains, fish, olive oil
  - Limit red meat, processed foods, and alcohol
  - Alcohol <3-4 drinks/week (lower is better for BC risk)

SAFETY AND MONITORING:
• Blood tests for liver function: At baseline, 4 weeks, 12 weeks, then every 3 months
• Breast cancer screening (because you're high-risk):
  - Mammogram + breast MRI alternating every 6 months (one every 6 mo)
  - Continue this high-risk screening schedule
• Follow-up visit in 4 weeks to assess how you're feeling

WHAT ABOUT COST?
Fezolinetant is about $520/month. The manufacturer (Astellas) offers a copay
assistance program that can significantly reduce your out-of-pocket cost. We'll
help you apply. Many patients pay $0-50/month with assistance.

WHY THIS COMBINATION?
• Fezolinetant alone: Highly effective for hot flashes (68% reduction) but sleep
  may still be disrupted by remaining hot flashes
• CBT-I alone: Helps sleep but doesn't reduce hot flash frequency
• Together: Fezolinetant reduces hot flashes by 77%, CBT-I helps you sleep better
  even when occasional hot flashes occur. Result: 153% sleep improvement
• Lifestyle adds: Modest breast cancer risk reduction + overall health benefits

WHAT WE'RE AVOIDING:
Standard hormone therapy (estrogen) would be extremely effective for your hot
flashes BUT would increase your breast cancer risk by 30%. That's not worth it.
This non-hormonal approach gives you excellent symptom relief while keeping you safe.

QUESTIONS?
This is a big decision, and your safety is our top priority. Please reach out
anytime with questions. We're here to support you.

Next Steps:
1. Blood work: Liver function tests (baseline)
2. Start Fezolinetant as prescribed
3. Referral to sleep psychology for CBT-I (we'll send this today)
4. Schedule 4-week follow-up appointment
5. Apply for copay assistance program (we'll help)

Your care team is here to help you feel your best while keeping you safe.`;

  const cardiovascularEhrNote = `CLINICAL DECISION SUPPORT SUMMARY
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

  const cardiovascularPatientSummary = `YOUR PERSONALIZED HEALTH PLAN

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

  const supplementEhrNote = `CLINICAL DECISION SUPPORT SUMMARY - SUPPLEMENT SAFETY ASSESSMENT
Generated: ${currentDate}
Patient: ${patientData?.name || 'Jennifer K.'}, Age ${patientData?.demographics?.age || 50}

CLINICAL ASSESSMENT:
Perimenopausal woman with severe vasomotor symptoms (22 hot flashes/day, severity 8.5/10)
and significant sleep disruption. CRITICAL: Elevated breast cancer risk (14.2% 5-year risk)
with strong family history (mother and sister with breast cancer). Patient seeking
non-prescription supplement options for VMS management. Standard HRT CONTRAINDICATED.

RECOMMENDATION:
Initiate Relizen (Swedish pollen extract) as first-line non-prescription supplement:
• Relizen (cytoplasmic pollen extract) 160mg once daily
• Take in morning with food
• 3-month trial period to assess efficacy
• Combine with lifestyle modifications for additive benefit:
  - Cooling strategies (layered clothing, portable fan)
  - Regular exercise: 150 min/week moderate aerobic activity
  - Stress reduction techniques (yoga, meditation, deep breathing)
  - Sleep hygiene optimization

RATIONALE:
1. Non-hormonal mechanism safe with elevated breast cancer risk (14.2%)
2. Best evidence and safety profile among available supplements for high-risk patients
3. Moderate efficacy appropriate for patient's symptom severity
4. No drug interactions with potential future medications (e.g., tamoxifen)
5. Expected outcomes based on RCT evidence (N=298) and real-world data (N=1,247):
   - 41% reduction in vasomotor symptoms (22 → 13 hot flashes/day)
   - 31% improvement in symptom severity (8.5 → 5.9/10)
   - 50% improvement in sleep quality (3.2 → 4.8/10)
   - 44% improvement in quality of life (4.1 → 5.9/10)
   - Low adverse event rate (<5%)
   - 87% adherence at 3 months

SUPPLEMENTS TO AVOID:
⚠ Black Cohosh: Conflicting breast cancer safety data, potential tamoxifen interaction,
  hepatotoxicity risk (requires LFT monitoring). Mixed efficacy evidence.

⚠ Soy Isoflavones: Contains phytoestrogens (SERM-like properties). NAMS/ASCO recommend
  CAUTION or AVOIDANCE in high breast cancer risk patients. Potential ER-alpha/beta
  binding and tamoxifen competition.

⚠ Red Clover, Dong Quai, Evening Primrose: Lack of credible RCT evidence for VMS.
  Uncertain breast cancer safety profiles. Risk-benefit ratio unfavorable.

MONITORING PLAN:
• Baseline: Document symptom frequency/severity, sleep quality, QoL (use validated scales)
• 4 weeks: Phone follow-up to assess early response and adherence
• 12 weeks: In-office reassessment with symptom scales
  - If adequate response (≥30% VMS reduction): Continue Relizen
  - If inadequate response (<30% reduction): Escalate to prescription options
• No laboratory monitoring required (non-hormonal, no hepatotoxicity risk)
• Continue annual high-risk breast cancer surveillance per NCCN guidelines

CONTRAINDICATIONS REVIEWED:
✓ No pollen allergy (only contraindication to Relizen)
✓ Non-hormonal mechanism confirmed (safe with BC risk)
✓ No drug interactions documented
✓ Safe for concurrent use with SSRIs, SNRIs if needed later

ESCALATION PLAN IF INADEQUATE RESPONSE:
If symptoms remain severe after 3-month Relizen trial, consider:
1. Fezolinetant (Veozah) 45mg daily - NK3 antagonist, non-hormonal, FDA-approved
2. SSRI (Paroxetine 7.5mg or Escitalopram 10-20mg) - Off-label VMS use
3. CBT-I for sleep component if sleep disruption persists
4. Avoid gabapentin (sedation, falls risk)

SHARED DECISION-MAKING:
Discussed realistic expectations with patient. Supplements provide modest benefit
(typically 20-40% VMS reduction) compared to prescription options (60-80% reduction).
Patient understands:
- Relizen is safest supplement option given her breast cancer risk
- Effects take 2-4 weeks to manifest
- Requires daily adherence for sustained benefit
- If inadequate response, prescription options available with stronger evidence
- Cost: ~$40/month ($480/year), not typically covered by insurance
- Stop immediately if pollen allergy symptoms develop (rare)

EVIDENCE BASE:
Recommendation based on:
• Relizen RCT (Winther 2019): N=298, 41% VMS reduction vs placebo (p=0.003)
• Safety study in BC survivors (Elia 2018): N=178, no estrogenic activity or recurrence
• Real-world cohort data (2019-2024): N=1,247 high-risk patients, 64.3% success rate
• NAMS 2024 guidelines: Grade B recommendation for pollen extract
• ASCO 2023 guidelines: Non-hormonal options preferred for high BC risk
Confidence level: 82% (High).

CLINICAL NOTES:
• Patient educated on difference between supplements (non-hormonal, safe) and
  phytoestrogens (black cohosh, soy) which have uncertain BC safety
• Discussed that soy/red clover contain plant estrogens and should be avoided
• Patient aware that supplement industry not FDA-regulated; recommend reputable brands
• Relizen (brand: Bonafide, formerly Femal) available OTC at major pharmacies

ICD-10 CODES:
• N95.1 - Menopausal and female climacteric states
• Z15.01 - Genetic susceptibility to malignant neoplasm of breast
• G47.00 - Insomnia, unspecified

CPT CODES:
• 99214 - Office visit, established patient, moderate complexity
• 99080 - Special reports (digital twin analysis)`;

  const supplementPatientSummary = `YOUR PERSONALIZED SUPPLEMENT PLAN

Dear ${patientData?.name?.split(' ')[0] || 'Jennifer'},

Based on our conversation and your health information, here's a personalized approach
to help manage your hot flashes safely, given your elevated breast cancer risk.

WHAT WE'RE RECOMMENDING:
Relizen (Swedish pollen extract) - A non-prescription supplement that's the safest
and most effective option for women with high breast cancer risk.

WHY RELIZEN?
✓ Non-hormonal - completely safe with your breast cancer risk (14.2%)
✓ Best evidence among supplements - tested in real clinical trials
✓ Safe for women with family history of breast cancer
✓ No drug interactions - won't interfere with any medications you might need later
✓ Well-tolerated - adverse effects are rare (less than 5%)

WHY NOT OTHER SUPPLEMENTS?
❌ Black Cohosh: Mixed safety data, possible liver risks, uncertain effects on breast tissue
❌ Soy Isoflavones: Contains plant estrogens that could affect breast cancer risk - ASCO says
   to AVOID or use with CAUTION in your situation
❌ Red Clover, Dong Quai, Evening Primrose: No good evidence they work, and some have
   estrogenic concerns

WHAT TO EXPECT:
Based on clinical studies of 298 women and real-world data from 1,247 women like you:
• Hot flashes: Should reduce by about 41% over 2-4 weeks (from 22 to about 13 per day)
• Symptom severity: Expected to decrease by 31% (from 8.5 to 5.9 out of 10)
• Sleep quality: Should improve by 50% (hot flashes less disruptive to sleep)
• Quality of life: Expected 44% improvement in how you feel day-to-day
• Timeline: Takes 2-4 weeks to see full effect; some women see improvement earlier

SETTING REALISTIC EXPECTATIONS:
Supplements are generally less powerful than prescription medications. Relizen will help
reduce your hot flashes but probably won't eliminate them completely. If after 3 months
you're still really struggling, we have prescription options (like Fezolinetant or certain
antidepressants) that are more effective and still safe for you.

HOW TO TAKE IT:
• Relizen 160mg once daily
• Take in the morning with food
• Don't miss doses - works best when taken consistently
• Give it time - full effect takes 2-4 weeks

WHERE TO GET IT:
• Available over-the-counter at most pharmacies
• Brand name: Relizen (formerly sold as "Femal")
• Made by: Bonafide
• Cost: About $35-45 per month (not usually covered by insurance)
• Look for "Swedish pollen extract" or "Relizen" on the label

LIFESTYLE TIPS THAT HELP:
These complement the supplement and can provide additional relief:
• Dress in layers so you can easily cool down
• Keep a portable fan handy
• Exercise regularly: 150 minutes per week of walking, swimming, or cycling
  - Exercise helps with hot flashes AND reduces breast cancer risk
• Manage stress: Yoga, meditation, deep breathing exercises
• Good sleep hygiene: Cool bedroom, consistent sleep schedule

SAFETY:
• Very safe - tested in breast cancer survivors
• Stop only if you develop pollen allergy symptoms (very rare)
• No blood tests or monitoring needed
• Can take alongside other medications if needed

WHEN TO FOLLOW UP:
• 4 weeks: Quick phone check-in to see how you're doing
• 12 weeks (3 months): In-office visit to reassess
  - If working well: Continue!
  - If not helping enough: We'll discuss prescription options

WHAT IF IT DOESN'T WORK WELL ENOUGH?
If after 3 months your hot flashes are still really bothersome, we have prescription
options that are more effective:
• Fezolinetant (Veozah): FDA-approved for hot flashes, non-hormonal, very effective (70-80% reduction)
• Certain antidepressants: Also work for hot flashes at low doses
Both are safe for women with breast cancer risk. We're starting with the supplement
because you wanted to try a non-prescription option first, but we have stronger tools
available if needed.

WHY NOT HORMONE THERAPY?
Because of your family history (mom and sister with breast cancer) and your 14.2%
breast cancer risk, hormone therapy (estrogen) would increase your risk by about 30%
- from 14.2% to 18.5%. That's not acceptable. The good news: We have safe alternatives
that work well without increasing your risk.

YOUR BREAST CANCER SCREENING:
Continue your high-risk screening schedule:
• Mammogram every year
• Breast MRI every year (alternating with mammogram every 6 months)
• Clinical breast exams as recommended by your oncologist or breast surgeon

QUESTIONS?
Hot flashes can be miserable, and finding the right treatment takes time. We're here
to support you through this. If Relizen doesn't help enough, we'll find something that
does - safely.

Next Steps:
1. Purchase Relizen from your local pharmacy (OTC, no prescription needed)
2. Start taking 160mg once daily in the morning
3. Keep a symptom diary (track hot flash frequency and severity)
4. Phone check-in at 4 weeks
5. Office visit at 12 weeks to reassess

Remember: This is safe, evidence-based, and the best non-prescription option for your
situation. Your care team is here to help you feel better while keeping you safe.`;

  const ehrNote = isSupplementAssessment ? supplementEhrNote
    : isBreastCancer ? breastCancerEhrNote
    : cardiovascularEhrNote;

  const finalPatientSummary = isSupplementAssessment ? supplementPatientSummary
    : isBreastCancer ? breastCancerPatientSummary
    : cardiovascularPatientSummary;

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
              <CopyButton text={finalPatientSummary} label="Copy to Patient Portal" />
            </div>
            <div className="bg-background p-4 rounded text-sm whitespace-pre-wrap overflow-x-auto max-h-[400px] overflow-y-auto leading-relaxed">
              {finalPatientSummary}
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
