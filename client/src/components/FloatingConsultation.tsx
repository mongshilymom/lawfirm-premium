import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, MessageCircle, Phone } from 'lucide-react';

export default function FloatingConsultation() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleConsultationClick = () => {
    console.log('Free consultation clicked');
    // TODO: Open consultation modal or navigate to contact form
  };

  const handleCallClick = () => {
    console.log('Emergency call clicked');
    window.open('tel:010-9876-5432');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="floating-consultation">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-card border border-border rounded-lg shadow-lg p-4 min-w-64"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-sm" data-testid="text-consultation-title">
                무료 상담 신청
              </h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 -mt-1 -mr-1"
                onClick={() => setIsExpanded(false)}
                data-testid="button-close-consultation"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-3">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-sm py-2"
                onClick={handleConsultationClick}
                data-testid="button-free-consultation-expanded"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                온라인 상담 신청
              </Button>
              
              <Button
                variant="outline"
                className="w-full text-sm py-2"
                onClick={handleCallClick}
                data-testid="button-call-consultation"
              >
                <Phone className="h-4 w-4 mr-2" />
                바로 전화 상담
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                전문 변호사와 24시간 상담 가능
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <Button
          size="lg"
          className="rounded-full bg-chart-2 hover:bg-chart-2/90 text-primary shadow-lg h-14 w-14 p-0"
          onClick={() => setIsExpanded(!isExpanded)}
          data-testid="button-floating-consultation"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-chart-2 animate-ping opacity-20" />
        
        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium" data-testid="notification-badge">
          N
        </div>
      </motion.div>
    </div>
  );
}