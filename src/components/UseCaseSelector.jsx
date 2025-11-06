import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import UseCaseCard from '@/components/UseCaseCard';
import { useCases } from '@/lib/use-cases-data';

export default function UseCaseSelector() {
  const navigate = useNavigate();

  const handleSelectUseCase = (useCase) => {
    if (useCase.available) {
      navigate(useCase.route);
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <NavigationBar page="landing" />

      {/* Header */}
      <motion.div
        className="border-b border-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-2">Clinical Decision Support Demo</h1>
          <p className="text-muted-foreground">
            Select a clinical use case to explore AI-powered decision support
          </p>
        </div>
      </motion.div>

      {/* Use Case Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase) => (
            <UseCaseCard
              key={useCase.id}
              useCase={useCase}
              onSelect={() => handleSelectUseCase(useCase)}
            />
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="text-sm text-muted-foreground">
          Powered by advanced AI models for evidence-based clinical decision support
        </p>
      </motion.div>
    </div>
  );
}
