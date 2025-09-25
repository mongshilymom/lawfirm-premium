import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageCircle, 
  Calendar,
  AlertCircle
} from 'lucide-react';

const contactInfo = {
  address: '서울특별시 강남구 테헤란로 123, 프리미엄 빌딩 15층',
  phone: '02-1234-5678',
  emergencyPhone: '010-9876-5432',
  email: 'info@premium-law.co.kr',
  hours: {
    weekdays: '월-금 09:00 ~ 18:00',
    weekend: '토요일 09:00 ~ 13:00 (사전 예약제)',
    closed: '일요일 휴무'
  }
};

const quickServices = [
  {
    title: '긴급 상담',
    description: '24시간 긴급 상담 서비스',
    icon: AlertCircle,
    color: 'text-red-600',
    action: '바로 연락'
  },
  {
    title: '카카오톡 상담',
    description: '쉬고 빠른 온라인 상담',
    icon: MessageCircle,
    color: 'text-yellow-600',
    action: '카카오톡 열기'
  },
  {
    title: '예약 상담',
    description: '면대면 상담 예약',
    icon: Calendar,
    color: 'text-blue-600',
    action: '예약하기'
  }
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted');
    // TODO: Implement actual form submission
  };

  const handleKakaoClick = () => {
    console.log('KakaoTalk consultation clicked');
    // TODO: Implement KakaoTalk integration
  };

  const handleEmergencyCall = () => {
    console.log('Emergency call clicked');
    window.open(`tel:${contactInfo.emergencyPhone}`);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground" data-testid="text-contact-title">
            무료 상담 신청
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            법률 문제로 고민이시라면 언제든 연락주세요.
            <br />전문 변호사가 친절하고 자세히 상담해드립니다.
          </p>
        </motion.div>

        {/* Quick Contact Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {quickServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="text-center hover-elevate cursor-pointer transition-all duration-300 border-2 hover:border-primary/20"
                  onClick={service.title === '긴급 상담' ? handleEmergencyCall : service.title === '카카오톡 상담' ? handleKakaoClick : undefined}
                  data-testid={`card-quick-service-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="mx-auto mb-3 p-3 bg-primary/5 rounded-full w-fit">
                        <IconComponent className={`h-8 w-8 ${service.color}`} />
                      </div>
                      <h3 className="text-lg font-bold mb-2" data-testid={`text-service-title-${index}`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4" data-testid={`text-service-description-${index}`}>
                        {service.description}
                      </p>
                    </div>
                    <Button 
                      className={`w-full ${
                        service.title === '긴급 상담' 
                          ? 'bg-red-600 hover:bg-red-700' 
                          : service.title === '카카오톡 상담'
                          ? 'bg-yellow-400 hover:bg-yellow-500 text-black'
                          : 'bg-primary hover:bg-primary/90'
                      }`}
                      data-testid={`button-service-action-${index}`}
                    >
                      {service.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card data-testid="card-contact-form">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">상담 신청서</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">성명 *</Label>
                      <Input 
                        id="name" 
                        placeholder="이름을 입력해주세요" 
                        required 
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">연락처 *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="010-0000-0000" 
                        required 
                        data-testid="input-phone"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="example@email.com" 
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="case-type">상담 분야 *</Label>
                    <select 
                      id="case-type" 
                      className="w-full p-3 border border-input rounded-md bg-background" 
                      required
                      data-testid="select-case-type"
                    >
                      <option value="">상담 분야를 선택해주세요</option>
                      <option value="민사">민사 소송</option>
                      <option value="기업">기업 법무</option>
                      <option value="가족">가족 법률</option>
                      <option value="형사">형사 변호</option>
                      <option value="부동산">부동산 법무</option>
                      <option value="지적재산">지적재산권</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">상담 내용 *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="상담하고 싶은 내용을 자세히 작성해주세요. 사건의 배경, 현재 상황, 원하는 결과 등을 포함하면 더 정확한 상담을 받으실 수 있습니다." 
                      className="min-h-32 resize-none" 
                      required
                      data-testid="textarea-message"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="mt-1" 
                      required 
                      data-testid="checkbox-privacy"
                    />
                    <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                      개인정보 수집 및 이용에 동의합니다. 
                      수집된 정보는 상담 서비스 제공 목적으로만 사용됩니다.
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 py-6 text-lg"
                    data-testid="button-submit-consultation"
                  >
                    무료 상담 신청
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <Card data-testid="card-contact-info">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">연락처 안내</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">사무실 위치</h4>
                    <p className="text-muted-foreground" data-testid="text-office-address">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">대표 번호</h4>
                    <p className="text-muted-foreground" data-testid="text-office-phone">
                      {contactInfo.phone}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 flex items-center gap-2">
                      긴급 상담 핫라인
                      <Badge className="bg-red-600 text-white text-xs">24시간</Badge>
                    </h4>
                    <p className="text-red-600 font-medium" data-testid="text-emergency-phone">
                      {contactInfo.emergencyPhone}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">이메일</h4>
                    <p className="text-muted-foreground" data-testid="text-office-email">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">상담 시간</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p data-testid="text-hours-weekdays">{contactInfo.hours.weekdays}</p>
                      <p data-testid="text-hours-weekend">{contactInfo.hours.weekend}</p>
                      <p data-testid="text-hours-closed">{contactInfo.hours.closed}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card data-testid="card-map">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">오시는 길</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">네이버 지도</p>
                    <p className="text-sm">상세한 위치는 네이버 지도에서 확인하세요</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => window.open('https://map.naver.com', '_blank')}
                      data-testid="button-naver-map"
                    >
                      네이버 지도 열기
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}