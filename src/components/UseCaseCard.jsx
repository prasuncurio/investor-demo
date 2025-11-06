import { motion } from 'framer-motion';
import { ArrowRight, Heart, Thermometer } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const iconMap = {
  Heart: Heart,
  Thermometer: Thermometer
};

export default function UseCaseCard({ useCase, onSelect }) {
  const IconComponent = iconMap[useCase.scenario.icon];
  const { patient, scenario, theme, available, comingSoon } = useCase;

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
      }}
      whileHover={available ? { y: -8 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Card
        className={`
          relative h-full min-h-[400px] p-6 flex flex-col
          transition-all duration-300
          bg-gradient-to-br ${theme.gradient}
          ${available ? 'cursor-pointer hover:shadow-xl hover:border-opacity-50' : 'cursor-not-allowed opacity-90'}
        `}
        style={{
          borderColor: available ? `color-mix(in oklch, ${theme.primary}, transparent 70%)` : undefined
        }}
        onClick={available ? onSelect : undefined}
      >
        {/* Coming Soon Badge */}
        {comingSoon && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="text-xs">
              Coming Soon
            </Badge>
          </div>
        )}

        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
          style={{ backgroundColor: theme.iconBg }}
        >
          <IconComponent
            className="w-8 h-8"
            style={{ color: theme.primary }}
          />
        </div>

        {/* Patient Info */}
        <div className="mb-4">
          <p className="text-sm font-medium text-muted-foreground">
            {patient.name}, Age {patient.age}
          </p>
          <p className="text-xs text-muted-foreground">{patient.status}</p>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
          {scenario.description}
        </p>

        {/* Clinical Question */}
        <div className="mb-6 p-4 rounded-lg bg-background/50 border border-border">
          <p className="text-xs font-medium text-muted-foreground mb-1">
            Key Clinical Question:
          </p>
          <p className="text-sm font-medium italic">{scenario.question}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {scenario.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs"
              style={{
                borderColor: theme.primary,
                color: theme.primary
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          {available ? (
            <Button
              className="w-full group"
              style={{
                backgroundColor: theme.primary,
                color: 'white'
              }}
              asChild
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Button>
          ) : (
            <Button disabled className="w-full" variant="secondary">
              Coming Soon
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
