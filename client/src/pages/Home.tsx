import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import AttorneyProfiles from '@/components/AttorneyProfiles';
import CaseResults from '@/components/CaseResults';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingConsultation from '@/components/FloatingConsultation';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <PracticeAreas />
        <AttorneyProfiles />
        <CaseResults />
        <Contact />
      </main>
      <Footer />
      <FloatingConsultation />
    </div>
  );
}