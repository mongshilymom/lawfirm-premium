import Hero from '../Hero';

export default function HeroExample() {
  return (
    <div>
      <Hero />
      <div id="practice-areas" className="h-32 bg-card flex items-center justify-center">
        <p className="text-lg">업무분야 섹션 (스크롤 테스트용)</p>
      </div>
    </div>
  );
}