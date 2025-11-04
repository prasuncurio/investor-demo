import { Users, BookOpen, Network } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import EvidenceTabCohort from './EvidenceTabCohort';
import EvidenceTabStudies from './EvidenceTabStudies';
import EvidenceTabMechanism from './EvidenceTabMechanism';

export default function EvidenceModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] md:max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Supporting Evidence</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="cohort" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cohort" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Cohort Data</span>
              <span className="sm:hidden">Cohort</span>
            </TabsTrigger>
            <TabsTrigger value="studies" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Clinical Studies</span>
              <span className="sm:hidden">Studies</span>
            </TabsTrigger>
            <TabsTrigger value="mechanism" className="flex items-center gap-2">
              <Network className="w-4 h-4" />
              <span className="hidden sm:inline">Mechanism</span>
              <span className="sm:hidden">How it Works</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cohort" className="mt-6">
            <EvidenceTabCohort />
          </TabsContent>

          <TabsContent value="studies" className="mt-6">
            <EvidenceTabStudies />
          </TabsContent>

          <TabsContent value="mechanism" className="mt-6">
            <EvidenceTabMechanism />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
