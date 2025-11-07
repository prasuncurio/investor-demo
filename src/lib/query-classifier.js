/**
 * Query Classification System for Cardiovascular Demo
 *
 * This module classifies user queries into specific types to route them
 * to appropriate result components with tailored visualizations.
 */

// Query type enumeration
export const QUERY_TYPES = {
  MECHANISM: 'mechanism',              // Query 1: "Why is her cholesterol rising?"
  COMPREHENSIVE: 'comprehensive',      // Query 2: "What's the best intervention?"
  BINARY_DECISION: 'binary',          // Query 3: "Should I prescribe a statin?"
  HEAD_TO_HEAD: 'head-to-head',       // Query 4: "Compare HRT vs statin"
  SUPPLEMENT_SAFETY_ASSESSMENT: 'supplement_safety_assessment', // Breast Cancer: "Non-prescription supplements?"
  UNKNOWN: 'unknown'                   // Fallback for unrecognized queries
};

// Keyword patterns for each query type
const QUERY_PATTERNS = {
  [QUERY_TYPES.MECHANISM]: {
    keywords: [
      'why',
      'cause',
      'reason',
      'rising',
      'increasing',
      'elevated',
      'going up',
      'mechanism',
      'explain',
      'understanding',
      'root cause',
      'biological'
    ],
    phrases: [
      'why is',
      'what caused',
      'why did',
      'what\'s causing',
      'root cause',
      'cholesterol rising',
      'ldl rising',
      'cholesterol increasing'
    ],
    description: 'Mechanism explanation queries seek to understand the biological root cause'
  },

  [QUERY_TYPES.COMPREHENSIVE]: {
    keywords: [
      'best',
      'intervention',
      'treatment',
      'options',
      'recommend',
      'treat',
      'therapy',
      'prescription',
      'all options',
      'compare all',
      'what should'
    ],
    phrases: [
      'best intervention',
      'best treatment',
      'what should i prescribe',
      'treatment options',
      'how do i treat',
      'what are her options',
      'compare all',
      'all interventions'
    ],
    description: 'Comprehensive comparison queries seek ranked treatment options'
  },

  [QUERY_TYPES.BINARY_DECISION]: {
    keywords: [
      'should',
      'prescribe',
      'appropriate',
      'yes or no',
      'recommend statin',
      'start statin',
      'give statin'
    ],
    phrases: [
      'should i prescribe',
      'should i start',
      'is statin appropriate',
      'prescribe a statin',
      'statin yes or no',
      'do i need',
      'should she take'
    ],
    requiresTerms: ['statin'], // Must mention statin
    description: 'Binary decision queries seek yes/no guidance on specific treatments'
  },

  [QUERY_TYPES.HEAD_TO_HEAD]: {
    keywords: [
      'compare',
      'versus',
      'vs',
      'difference',
      'vs.',
      'better',
      'hrt or statin',
      'statin or hrt'
    ],
    phrases: [
      'hrt versus statin',
      'hrt vs statin',
      'statin vs hrt',
      'compare hrt',
      'hrt or statin',
      'difference between',
      'which is better',
      'pros and cons'
    ],
    requiresTerms: ['hrt', 'statin'], // Must mention both
    description: 'Head-to-head queries seek direct comparison between two specific treatments'
  },

  [QUERY_TYPES.SUPPLEMENT_SAFETY_ASSESSMENT]: {
    keywords: [
      'supplement',
      'supplements',
      'non-prescription',
      'over-the-counter',
      'otc',
      'natural',
      'herbal',
      'alternative',
      'without hormones',
      'non-hormonal'
    ],
    phrases: [
      'non-prescription supplements',
      'over-the-counter',
      'without hormones',
      'natural alternatives',
      'herbal remedies',
      'supplement that could help',
      'supplements that could',
      'otc options',
      'non-prescription alternatives',
      'alternatives to'
    ],
    description: 'Supplement safety queries seek non-prescription treatment options'
  }
};

/**
 * Normalize query text for matching
 * @param {string} text - Raw query text
 * @returns {string} Normalized text
 */
function normalizeText(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[?!.]/g, '') // Remove punctuation
    .replace(/\s+/g, ' '); // Normalize whitespace
}

/**
 * Check if text matches any of the keywords
 * @param {string} text - Normalized query text
 * @param {string[]} keywords - List of keywords to match
 * @returns {number} Number of keyword matches
 */
function countKeywordMatches(text, keywords) {
  return keywords.filter(keyword => {
    const normalizedKeyword = keyword.toLowerCase();
    return text.includes(normalizedKeyword);
  }).length;
}

/**
 * Check if text matches any of the phrases
 * @param {string} text - Normalized query text
 * @param {string[]} phrases - List of phrases to match
 * @returns {number} Number of phrase matches
 */
function countPhraseMatches(text, phrases) {
  return phrases.filter(phrase => {
    const normalizedPhrase = phrase.toLowerCase();
    return text.includes(normalizedPhrase);
  }).length;
}

/**
 * Check if all required terms are present
 * @param {string} text - Normalized query text
 * @param {string[]} terms - Required terms
 * @returns {boolean} True if all terms present
 */
function hasRequiredTerms(text, terms = []) {
  if (terms.length === 0) return true;
  return terms.every(term => text.includes(term.toLowerCase()));
}

/**
 * Calculate match score for a query type
 * @param {string} text - Normalized query text
 * @param {object} pattern - Pattern configuration
 * @returns {number} Match score (0-100)
 */
function calculateMatchScore(text, pattern) {
  // Check required terms first (must have these)
  if (!hasRequiredTerms(text, pattern.requiresTerms)) {
    return 0;
  }

  const keywordMatches = countKeywordMatches(text, pattern.keywords);
  const phraseMatches = countPhraseMatches(text, pattern.phrases || []);

  // Phrase matches are worth more (3x weight)
  const score = (phraseMatches * 30) + (keywordMatches * 10);

  // Cap at 100
  return Math.min(score, 100);
}

/**
 * Classify a query into a specific type
 * @param {string} queryText - The user's query
 * @returns {object} Classification result with type, confidence, and metadata
 */
export function classifyQuery(queryText) {
  if (!queryText || typeof queryText !== 'string') {
    return {
      type: QUERY_TYPES.UNKNOWN,
      confidence: 0,
      originalQuery: queryText,
      matchedKeywords: [],
      description: 'Invalid query input'
    };
  }

  const normalizedText = normalizeText(queryText);

  // Calculate scores for each query type
  const scores = Object.entries(QUERY_PATTERNS).map(([type, pattern]) => {
    const score = calculateMatchScore(normalizedText, pattern);
    return {
      type,
      score,
      pattern,
      matchedKeywords: pattern.keywords.filter(k =>
        normalizedText.includes(k.toLowerCase())
      ),
      matchedPhrases: (pattern.phrases || []).filter(p =>
        normalizedText.includes(p.toLowerCase())
      )
    };
  });

  // Sort by score (highest first)
  scores.sort((a, b) => b.score - a.score);

  const topMatch = scores[0];

  // Confidence threshold - if score is too low, mark as unknown
  const CONFIDENCE_THRESHOLD = 10;

  if (topMatch.score < CONFIDENCE_THRESHOLD) {
    return {
      type: QUERY_TYPES.COMPREHENSIVE, // Default fallback to comprehensive
      confidence: 50, // Medium confidence for fallback
      originalQuery: queryText,
      matchedKeywords: [],
      matchedPhrases: [],
      description: 'No strong match found, defaulting to comprehensive comparison',
      fallback: true
    };
  }

  // Calculate confidence (0-100)
  const confidence = Math.min(topMatch.score, 100);

  return {
    type: topMatch.type,
    confidence,
    originalQuery: queryText,
    matchedKeywords: topMatch.matchedKeywords,
    matchedPhrases: topMatch.matchedPhrases,
    description: topMatch.pattern.description,
    allScores: scores.map(s => ({ type: s.type, score: s.score })),
    fallback: false
  };
}

/**
 * Get query type from predefined query ID
 * This is used when user clicks a suggested query button
 * @param {string} queryId - The query ID (from QueryInterface)
 * @returns {string} Query type
 */
export function getQueryTypeById(queryId) {
  const queryIdMap = {
    'why-rising': QUERY_TYPES.MECHANISM,
    'best-intervention': QUERY_TYPES.COMPREHENSIVE,
    'statin-question': QUERY_TYPES.BINARY_DECISION,
    'compare-treatments': QUERY_TYPES.HEAD_TO_HEAD
  };

  return queryIdMap[queryId] || QUERY_TYPES.COMPREHENSIVE;
}

/**
 * Validate if a query type is supported
 * @param {string} queryType - Query type to validate
 * @returns {boolean} True if supported
 */
export function isQueryTypeSupported(queryType) {
  return Object.values(QUERY_TYPES).includes(queryType);
}

/**
 * Get human-readable name for query type
 * @param {string} queryType - Query type
 * @returns {string} Display name
 */
export function getQueryTypeName(queryType) {
  const names = {
    [QUERY_TYPES.MECHANISM]: 'Mechanism Explanation',
    [QUERY_TYPES.COMPREHENSIVE]: 'Comprehensive Comparison',
    [QUERY_TYPES.BINARY_DECISION]: 'Binary Decision Support',
    [QUERY_TYPES.HEAD_TO_HEAD]: 'Head-to-Head Comparison',
    [QUERY_TYPES.SUPPLEMENT_SAFETY_ASSESSMENT]: 'Supplement Safety Assessment',
    [QUERY_TYPES.UNKNOWN]: 'Unknown Query Type'
  };

  return names[queryType] || 'Unknown';
}
