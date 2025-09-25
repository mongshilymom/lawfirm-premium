import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">네비게이션 예제</h1>
        <div className="space-y-8">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="h-32 bg-card rounded-lg flex items-center justify-center">
              <p className="text-lg">스크롤해서 네비게이션 변화를 확인해보세요 - 섹션 {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}