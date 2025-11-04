import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function ChatInterface({
  onQuerySubmit,
  suggestedFollowUps = [],
  isDisabled = false
}) {
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Show suggestions after 2 seconds
  useState(() => {
    const timer = setTimeout(() => {
      setShowSuggestions(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    const query = inputValue.trim();
    if (query && !isDisabled) {
      onQuerySubmit(query);
      setInputValue('');
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (!isDisabled) {
      onQuerySubmit(suggestion);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() && !isDisabled) {
      handleSendClick();
    }
  };

  const isSendEnabled = inputValue.trim().length > 0 && !isDisabled;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Suggested Follow-ups */}
        <AnimatePresence>
          {showSuggestions && suggestedFollowUps.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mb-3"
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
                <p className="text-xs text-muted-foreground font-medium">
                  Suggested follow-up questions:
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestedFollowUps.map((suggestion, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={`
                        px-3 py-1.5 text-xs cursor-pointer
                        border border-border hover:border-foreground
                        transition-all hover:scale-[1.02] active:scale-95
                        ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                    >
                      {suggestion}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Input Field */}
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Ask a follow-up question..."
            disabled={isDisabled}
            aria-label="Ask a follow-up question"
            className={`
              w-full min-h-[48px] px-4 pr-12 text-sm
              border-2 border-border focus:border-foreground
              rounded-lg bg-card transition-all
              focus:outline-none focus:ring-2 focus:ring-ring
              ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          />
          <Button
            onClick={handleSendClick}
            disabled={!isSendEnabled}
            className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 p-0 rounded-md"
            aria-label="Send follow-up query"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
