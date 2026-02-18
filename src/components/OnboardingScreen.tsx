import { useState } from 'react';
import { TrendingUp, FileText, Award, ChevronRight } from 'lucide-react';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: TrendingUp,
    title: 'Track Academic Progress',
    description: 'Monitor your CGPA, attendance, and subject-wise performance in real-time with comprehensive analytics.'
  },
  {
    icon: FileText,
    title: 'Unified Student Lifecycle',
    description: 'Manage all your academic records, documents, and achievements in one secure digital platform.'
  },
  {
    icon: Award,
    title: 'Government Scheme Integration',
    description: 'Automatically check eligibility for scholarships and government schemes based on your academic performance.'
  }
];

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const Icon = slides[currentSlide].icon;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Skip Button */}
      <div className="p-6 flex justify-end">
        <button
          onClick={handleSkip}
          className="text-[#1A73E8] hover:text-[#0D47A1]"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-full max-w-md space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-[#E3F2FD] rounded-full flex items-center justify-center">
              <Icon className="w-16 h-16 text-[#1A73E8]" />
            </div>
          </div>

          {/* Title and Description */}
          <div className="space-y-4">
            <h2 className="text-[#0D253F] text-2xl">{slides[currentSlide].title}</h2>
            <p className="text-gray-600">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'w-8 bg-[#1A73E8]'
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="p-6">
        <button
          onClick={handleNext}
          className="w-full bg-[#1A73E8] text-white py-4 rounded-2xl shadow-lg hover:bg-[#0D47A1] transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <span>{currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
