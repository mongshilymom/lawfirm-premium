import FloatingConsultation from '../FloatingConsultation';

export default function FloatingConsultationExample() {
  return (
    <div className="bg-background min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">플로팅 상담 버튼 예제</h1>
      <div className="space-y-8">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="h-32 bg-card rounded-lg flex items-center justify-center">
            <p className="text-lg">오른쪽 하단에 플로팅 버튼을 확인해보세요 - 섹션 {i + 1}</p>
          </div>
        ))}
      </div>
      <FloatingConsultation />
    </div>
  );
}