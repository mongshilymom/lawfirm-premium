import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, Briefcase, Users, Shield, Building, FileText } from 'lucide-react';

const practiceAreas = [
  {
    icon: Scale,
    title: '민사 소송',
    description: '계약 분쟁, 손해배상, 부동산 분쟁 등 민사 분야의 전문적인 법률 서비스를 제공합니다.',
    color: 'text-blue-600'
  },
  {
    icon: Briefcase,
    title: '기업 법무',
    description: '사내 법무 자문, M&A, 계약 검토, 컴플라이언스 등 기업 경영의 모든 측면을 지원합니다.',
    color: 'text-green-600'
  },
  {
    icon: Users,
    title: '가족 법률',
    description: '이혼, 상속, 양육비, 재산분할 등 가족 간의 법적 분쟁을 원만하게 해결합니다.',
    color: 'text-purple-600'
  },
  {
    icon: Shield,
    title: '형사 변호',
    description: '형사 소송에서의 전문적인 변호를 통해 의뢰인의 권리를 철저히 보호합니다.',
    color: 'text-red-600'
  },
  {
    icon: Building,
    title: '부동산 법무',
    description: '부동산 매매, 임대차, 건축 법규 등 부동산 관련 전반적인 법률 업무를 수행합니다.',
    color: 'text-orange-600'
  },
  {
    icon: FileText,
    title: '지적재산권',
    description: '특허, 상표, 저작권 등 지적재산권의 보호와 분쟁 해결을 전문적으로 처리합니다.',
    color: 'text-teal-600'
  }
];

export default function PracticeAreas() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="practice-areas" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground" data-testid="text-practice-areas-title">
            전문 업무 분야
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            다양한 법률 분야에서 축적된 전문성과 경험을 바탕으로
            <br />고객에게 최적화된 법률 솔루션을 제공합니다.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="h-full"
              >
                <Card className="h-full hover-elevate cursor-pointer transition-all duration-300 border-2 hover:border-primary/20" data-testid={`card-practice-area-${index}`}>
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-primary/5 rounded-full w-fit">
                      <IconComponent className={`h-8 w-8 ${area.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold mb-2" data-testid={`text-area-title-${index}`}>
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed mb-6" data-testid={`text-area-description-${index}`}>
                      {area.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      data-testid={`button-learn-more-${index}`}
                    >
                      상세히 보기
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
            data-testid="button-contact-consultation"
          >
            무료 상담 예약하기
          </Button>
        </motion.div>
      </div>
    </section>
  );
}