import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const footerLinks = {
  services: [
    { name: '민사 소송', href: '#' },
    { name: '기업 법무', href: '#' },
    { name: '가족 법률', href: '#' },
    { name: '형사 변호', href: '#' }
  ],
  info: [
    { name: '변호사 소개', href: '#attorneys' },
    { name: '사건 결과', href: '#results' },
    { name: '연락처', href: '#contact' },
    { name: '찾아오시는 길', href: '#' }
  ],
  legal: [
    { name: '개인정보처리방침', href: '#' },
    { name: '이용약관', href: '#' },
    { name: '사이트맵', href: '#' },
    { name: '법적고지', href: '#' }
  ]
};

const contactInfo = {
  address: '서울특별시 강남구 테헤란로 123, 프리미엄 빌딩 15층',
  phone: '02-1234-5678',
  email: 'info@premium-law.co.kr',
  hours: '평일 09:00-18:00 | 토요일 09:00-13:00'
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-serif font-bold mb-6" data-testid="text-footer-company">
              프리미엄 법무법인
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              30년의 경험과 전문성으로 고객의 권익을 보호하며, 최상의 법률 서비스를 제공하는 전문 법무법인입니다.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80" data-testid="text-footer-address">
                  {contactInfo.address}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-chart-2 flex-shrink-0" />
                <p className="text-primary-foreground/80" data-testid="text-footer-phone">
                  {contactInfo.phone}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-chart-2 flex-shrink-0" />
                <p className="text-primary-foreground/80" data-testid="text-footer-email">
                  {contactInfo.email}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-chart-2 flex-shrink-0" />
                <p className="text-primary-foreground/80" data-testid="text-footer-hours">
                  {contactInfo.hours}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6" data-testid="text-footer-services-title">
              전문 서비스
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-chart-2 transition-colors duration-200 text-sm"
                    data-testid={`link-service-${index}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6" data-testid="text-footer-info-title">
              정보
            </h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-chart-2 transition-colors duration-200 text-sm"
                    data-testid={`link-info-${index}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6" data-testid="text-footer-legal-title">
              법적 정보
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-chart-2 transition-colors duration-200 text-sm"
                    data-testid={`link-legal-${index}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p data-testid="text-footer-copyright">
              © 2025 프리미엄 법무법인. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span>대표변호사: 김지훈</span>
              <span>|</span>
              <span>사업자등록번호: 123-45-67890</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs">
            <span>서울지방변호사회 등록</span>
            <span>|</span>
            <span>등록번호: 서울제12345호</span>
          </div>
        </motion.div>
        
        {/* Legal Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 pt-6 border-t border-primary-foreground/10"
        >
          <p className="text-xs text-primary-foreground/60 text-center leading-relaxed" data-testid="text-footer-disclaimer">
            본 사이트에서 제공하는 정보는 일반적인 법률 정보이며, 개별 사안에 대한 법률 자문은 아닙니다.
            실제 법률 문제에 대해서는 반드시 전문 변호사와 상담하시기 바랍니다.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}