import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Scale } from 'lucide-react';
import heroImage from '@assets/generated_images/Korean_law_firm_office_interior_91c490ff.png';

export default function Hero() {
  const scrollToSection = () => {
    const practiceAreas = document.getElementById('practice-areas');
    practiceAreas?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.7), rgba(26, 54, 93, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Scale className="h-16 w-16 mx-auto mb-6 text-chart-2" />
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="text-hero-title"
        >
          신뢰할 수 있는
          <br />
          <span className="text-chart-2">법률 파트너</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          data-testid="text-hero-subtitle"
        >
          30년의 경험과 전문성으로 고객의 권익을 보호하며,
          <br />최상의 법률 서비스를 제공합니다.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="bg-chart-2 text-primary hover:bg-chart-2/90 text-lg px-8 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            data-testid="button-free-consultation"
          >
            무료 법률 상담 신청
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-lg backdrop-blur-sm"
            data-testid="button-case-results"
          >
            승소 사례 보기
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-chart-2 mb-2" data-testid="text-experience-years">30+</div>
            <div className="text-sm text-primary-foreground/80">년간의 경험</div>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-chart-2 mb-2" data-testid="text-success-cases">1,500+</div>
            <div className="text-sm text-primary-foreground/80">승소 사건</div>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-chart-2 mb-2" data-testid="text-success-amount">₩500억+</div>
            <div className="text-sm text-primary-foreground/80">승소 판결금</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground hover:text-chart-2 transition-colors duration-200"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        data-testid="button-scroll-down"
      >
        <ArrowDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
}