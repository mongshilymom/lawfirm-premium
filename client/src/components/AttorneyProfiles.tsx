import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, MapPin, Calendar } from 'lucide-react';
import attorney1 from '@assets/generated_images/Korean_male_attorney_portrait_52dea5a9.png';
import attorney2 from '@assets/generated_images/Korean_female_attorney_portrait_bae7c3d3.png';
import attorney3 from '@assets/generated_images/Korean_senior_attorney_portrait_62cd7b00.png';

const attorneys = [
  {
    id: 1,
    name: '김지훈',
    position: '대표 변호사',
    image: attorney1,
    education: '서울대학교 법학대학 졸업',
    experience: '30년',
    specialties: ['민사소송', '기업법무', '부동산법무'],
    profileViews: '2,847',
    cases: '450+',
    description: '민사 소송과 기업 법무 분야에서 30년간의 풍부한 경험을 바탕으로 고객에게 최적의 솔루션을 제공합니다.'
  },
  {
    id: 2,
    name: '박지용',
    position: '수석 변호사',
    image: attorney2,
    education: '연세대학교 법학전문대학원 수료',
    experience: '15년',
    specialties: ['가족법률', '형사변호', '지적재산권'],
    profileViews: '1,923',
    cases: '280+',
    description: '가족 법률과 형사 변호 전문가로서 의뢰인의 입장에서 최선의 결과를 위해 노력합니다.'
  },
  {
    id: 3,
    name: '이성호',
    position: '선임 변호사',
    image: attorney3,
    education: '고려대학교 법학대학 및 사법연수원 수료',
    experience: '25년',
    specialties: ['세무법', '금융법', '기업구조조정'],
    profileViews: '2,156',
    cases: '380+',
    description: '세무 및 금융 법무 전문가로서 복잡한 기업 법무에서 풍부한 경험을 보유하고 있습니다.'
  }
];

export default function AttorneyProfiles() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="attorneys" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground" data-testid="text-attorneys-title">
            전문 변호사 팀
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            각 분야에서 인정받는 전문성과 풍부한 경험을 바탕으로
            <br />고객의 법률 문제를 해결하는 전문가 팀입니다.
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
        >
          {attorneys.map((attorney, index) => (
            <motion.div key={attorney.id} variants={itemVariants}>
              <Card className="h-full hover-elevate cursor-pointer transition-all duration-300 border-2 hover:border-primary/20" data-testid={`card-attorney-${index}`}>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4 ring-2 ring-primary/10">
                      <AvatarImage src={attorney.image} alt={attorney.name} />
                      <AvatarFallback>{attorney.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold mb-1" data-testid={`text-attorney-name-${index}`}>{attorney.name}</h3>
                    <p className="text-primary font-medium mb-2" data-testid={`text-attorney-position-${index}`}>{attorney.position}</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span data-testid={`text-attorney-experience-${index}`}>{attorney.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span data-testid={`text-attorney-views-${index}`}>{attorney.profileViews}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">전문 분야</p>
                      <div className="flex flex-wrap gap-2">
                        {attorney.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs" data-testid={`badge-specialty-${index}-${idx}`}>
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">학력</p>
                      <p className="text-sm" data-testid={`text-attorney-education-${index}`}>{attorney.education}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">처리 사건</p>
                      <p className="text-sm font-medium text-primary" data-testid={`text-attorney-cases-${index}`}>{attorney.cases} 처리</p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-attorney-description-${index}`}>
                      {attorney.description}
                    </p>
                  </div>
                  
                  <Button className="w-full mt-6" variant="outline" data-testid={`button-attorney-profile-${index}`}>
                    상세 프로필 보기
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {attorneys.map((attorney, index) => (
              <motion.div
                key={attorney.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80"
              >
                <Card className="h-full hover-elevate cursor-pointer transition-all duration-300" data-testid={`card-attorney-mobile-${index}`}>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <Avatar className="w-20 h-20 mx-auto mb-3 ring-2 ring-primary/10">
                        <AvatarImage src={attorney.image} alt={attorney.name} />
                        <AvatarFallback>{attorney.name[0]}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-bold mb-1">{attorney.name}</h3>
                      <p className="text-primary font-medium text-sm mb-2">{attorney.position}</p>
                      <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{attorney.experience}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{attorney.profileViews}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">전문 분야</p>
                        <div className="flex flex-wrap gap-1">
                          {attorney.specialties.slice(0, 2).map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">처리 사건</p>
                        <p className="text-xs font-medium text-primary">{attorney.cases} 처리</p>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4" variant="outline" size="sm">
                      프로필 보기
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

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
            data-testid="button-meet-attorneys"
          >
            변호사 팀 더 알아보기
          </Button>
        </motion.div>
      </div>
    </section>
  );
}