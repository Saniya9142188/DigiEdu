import { GraduationCap, Users } from 'lucide-react';
import { UserRole } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WelcomeScreenProps {
  onRoleSelect: (role: UserRole) => void;
}

export function WelcomeScreen({ onRoleSelect }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#1A73E8] to-[#0D47A1]">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Logo and Hero */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <GraduationCap className="w-12 h-12 text-[#1A73E8]" />
            </div>
          </div>
          <h1 className="text-white text-4xl">EduTrack</h1>
          <p className="text-blue-100 text-lg">
            Unified Academic Record Tracker
          </p>
        </div>

        {/* Hero Illustration */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 my-8">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Role Selection */}
        <div className="space-y-4">
          <button
            onClick={() => onRoleSelect('student')}
            className="w-full bg-white text-[#1A73E8] py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-3"
          >
            <GraduationCap className="w-6 h-6" />
            <span>Login as Student</span>
          </button>
          
          <button
            onClick={() => onRoleSelect('teacher')}
            className="w-full bg-white/20 backdrop-blur-sm text-white border-2 border-white py-4 rounded-2xl hover:bg-white/30 transition-all duration-200 flex items-center justify-center space-x-3"
          >
            <Users className="w-6 h-6" />
            <span>Login as Teacher</span>
          </button>
        </div>

        {/* Footer */}
        <div className="text-blue-100 text-sm mt-8">
          <p>Powered by Government of India</p>
          <p className="mt-1">Digital India Initiative</p>
        </div>
      </div>
    </div>
  );
}
