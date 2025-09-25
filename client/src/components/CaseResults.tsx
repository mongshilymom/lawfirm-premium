import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Award, Users, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

// Counter animation hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

const metrics = [
  {
    icon: TrendingUp,
    label: '승소율',
    value: 98,
    suffix: '%',
    color: 'text-green-600'
  },
  {
    icon: Award,
    label: '승소 사건',
    value: 1547,
    suffix: '+',
    color: 'text-blue-600'
  },
  {
    icon: Users,
    label: '만족한 고객',
    value: 2340,
    suffix: '+',
    color: 'text-purple-600'
  },
  {
    icon: DollarSign,
    label: '판결금 (억원)',
    value: 850,
    suffix: '+',
    color: 'text-chart-2'
  }
];

const testimonials = [
  {
    id: 1,
    name: '김병수',
    case: '민사 소송',
    rating: 5,
    comment: '전문적이고 신뢰할 수 있는 법률 서비스를 받았습니다. 복잡한 사건도 체계적으로 잘 처리해주셔서 감사합니다.',
    result: '승소 - 2억 3천만원 배상금 획득'
  },
  {
    id: 2,
    name: '박영희',
    case: '가족 법률',
    rating: 5,
    comment: '어려운 상속 문제를 원만하고 빠르게 해결해주셨습니다. 변호사님의 전문성과 카리스마가 인상적이었습니다.',
    result: '승소 - 상속 재산 100% 확보'
  },
  {
    id: 3,
    name: '이준호',
    case: '기업 법무',
    rating: 5,
    comment: 'M&A 과정에서 체계적이고 전문적인 자문을 받아 성공적으로 거래를 마무리할 수 있었습니다.',
    result: '성공 - 500억 규모 M&A 완료'
  }
];

export default function CaseResults() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="results" className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="text-results-title">
            실증된 전문성
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            높은 승소율과 고객 만족도로 입증된 전문성,
            <br />수많은 승소 사례와 고객 후기로 확인해보세요.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            const animatedValue = useCounter(isInView ? metric.value : 0, 2000);
            
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover-elevate" data-testid={`card-metric-${index}`}>
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <IconComponent className={`h-12 w-12 mx-auto ${metric.color}`} />
                    </div>
                    <div className="text-4xl font-bold text-chart-2 mb-2" data-testid={`text-metric-value-${index}`}>
                      {animatedValue}{metric.suffix}
                    </div>
                    <div className="text-primary-foreground/80 font-medium" data-testid={`text-metric-label-${index}`}>
                      {metric.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold mb-4" data-testid="text-testimonials-title">
              고객 후기
            </h3>
            <p className="text-primary-foreground/80">
              실제 고객들의 성공 사례와 후기를 확인해보세요.
            </p>
          </div>

          <div className="relative">
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20" data-testid="card-testimonial">
              <CardContent className="p-8">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-chart-2 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg mb-6 leading-relaxed text-primary-foreground/90" data-testid="text-testimonial-comment">
                      "{testimonials[currentTestimonial].comment}"
                    </p>
                    <div className="flex flex-col items-center gap-2">
                      <h4 className="font-bold text-lg" data-testid="text-testimonial-name">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <Badge variant="secondary" className="bg-chart-2/20 text-chart-2" data-testid="badge-testimonial-case">
                        {testimonials[currentTestimonial].case}
                      </Badge>
                      <p className="text-chart-2 font-medium" data-testid="text-testimonial-result">
                        {testimonials[currentTestimonial].result}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 text-primary-foreground hover:text-chart-2 bg-primary-foreground/10 hover:bg-primary-foreground/20"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 text-primary-foreground hover:text-chart-2 bg-primary-foreground/10 hover:bg-primary-foreground/20"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-chart-2 w-8' 
                      : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            className="bg-chart-2 text-primary hover:bg-chart-2/90 px-8 py-6 text-lg"
            data-testid="button-view-all-cases"
          >
            전체 승소 사례 보기
          </Button>
        </motion.div>
      </div>
    </section>
  );
}