import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Default cardiovascular queries (fallback for backward compatibility)
const defaultQueries = [
  {
    id: 'why-rising',
    text: 'Why is her cholesterol rising?',
    description: 'Understand the root cause of LDL elevation',
  },
  {
    id: 'best-intervention',
    text: "What's the best intervention for her rising LDL?",
    description: 'Get personalized treatment recommendations',
  },
  {
    id: 'statin-question',
    text: 'Should I prescribe a statin?',
    description: 'Evaluate statin therapy appropriateness',
  },
  {
    id: 'compare-treatments',
    text: 'Compare HRT versus statin for this patient',
    description: 'See side-by-side intervention comparison',
  },
];

// Animation variants for staggered query pills
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function QueryInterface({
  onQuerySubmit,
  onBack,
  patientName,
  suggestedQueries,
}) {
  const [inputValue, setInputValue] = useState('');

  // Use provided queries or fall back to default cardiovascular queries
  const queries = suggestedQueries || defaultQueries;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    const query = inputValue.trim();
    if (query) {
      onQuerySubmit(query);
    }
  };

  const handleQueryPillClick = (queryText) => {
    // Immediately trigger analysis with suggested query
    onQuerySubmit(queryText);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleSendClick();
    } else if (e.key === 'Escape') {
      setInputValue('');
    }
  };

  const isSendEnabled = inputValue.trim().length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-[900px] mx-auto py-12 px-6 min-h-screen flex flex-col justify-center"
      role="search"
      aria-label="Patient query interface"
    >
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={onBack}
        className="self-start mb-8 -ml-4"
        aria-label="Back to patient overview"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Patient Overview
      </Button>

      {/* Header Section */}
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          What would you like to know about
        </h1>
        <p className="text-xl text-muted-foreground">{patientName}?</p>
      </div>

      {/* Query Input Section */}
      <div className="relative mb-8">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Type your question or select below..."
          autoFocus
          aria-label="Enter your clinical question"
          aria-describedby="query-suggestions"
          className="w-full min-h-[64px] px-6 pr-14 text-lg border-2 border-border focus:border-foreground rounded-xl bg-card transition-all focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <Button
          onClick={handleSendClick}
          disabled={!isSendEnabled}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 p-0 rounded-lg transition-all hover:scale-105 active:scale-95"
          aria-label="Send query"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>

      {/* Suggested Queries Section */}
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-4">
          Suggested Questions:
        </p>
        <motion.div
          id="query-suggestions"
          role="list"
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {queries.map((query) => (
            <motion.div key={query.id} variants={itemVariants}>
              <Card
                role="listitem"
                tabIndex={0}
                onClick={() => handleQueryPillClick(query.text)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleQueryPillClick(query.text);
                  }
                }}
                aria-label={`Select query: ${query.text}`}
                className="p-4 cursor-pointer border border-border hover:border-foreground transition-all hover:scale-[1.01] hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <p className="text-base leading-relaxed">{query.text}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
