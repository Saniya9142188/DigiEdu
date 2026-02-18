import { ArrowLeft, Award, Plus, ExternalLink, BookOpen } from 'lucide-react';
import { Screen } from '../App';

interface StudentSkillProfileProps {
  navigate: (screen: Screen) => void;
}

const skills = [
  { name: 'Python', level: 90, category: 'Programming' },
  { name: 'Java', level: 85, category: 'Programming' },
  { name: 'React', level: 88, category: 'Web Development' },
  { name: 'Machine Learning', level: 75, category: 'AI/ML' },
  { name: 'Data Structures', level: 92, category: 'Computer Science' },
  { name: 'SQL', level: 80, category: 'Database' },
];

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    verified: true
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford Online',
    date: 'Nov 2023',
    verified: true
  },
  {
    name: 'Full Stack Web Development',
    issuer: 'NPTEL',
    date: 'Aug 2023',
    verified: true
  }
];

const suggestedCourses = [
  {
    name: 'Advanced Algorithms',
    provider: 'SWAYAM',
    duration: '12 weeks',
    type: 'Free'
  },
  {
    name: 'Cloud Computing',
    provider: 'AICTE',
    duration: '8 weeks',
    type: 'Free'
  },
  {
    name: 'Cyber Security Fundamentals',
    provider: 'NPTEL',
    duration: '10 weeks',
    type: 'Free'
  }
];

export function StudentSkillProfile({ navigate }: StudentSkillProfileProps) {
  return (
    <div className="min-h-screen bg-[#F5F9FF] pb-6">
      {/* Header */}
      <div className="bg-[#1A73E8] text-white p-6 rounded-b-3xl shadow-lg">
        <button
          onClick={() => navigate('student-dashboard')}
          className="mb-4 p-2 hover:bg-white/10 rounded-lg transition-all"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl mb-2">Skill Profile</h1>
        <p className="text-blue-100">Build your technical expertise</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Skills Overview */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#0D253F]">Technical Skills</h3>
            <button className="p-2 bg-[#1A73E8] text-white rounded-lg hover:bg-[#0D47A1] transition-all">
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-[#0D253F]">{skill.name}</p>
                    <p className="text-xs text-gray-500">{skill.category}</p>
                  </div>
                  <span className="text-sm text-[#1A73E8]">{skill.level}%</span>
                </div>
                <div className="relative">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        skill.level >= 85
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                          : skill.level >= 70
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                          : 'bg-gradient-to-r from-yellow-500 to-orange-600'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Distribution */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Skill Level Distribution</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <p className="text-2xl text-green-600">3</p>
              <p className="text-xs text-gray-600 mt-1">Expert</p>
              <p className="text-xs text-gray-500">&gt;85%</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <p className="text-2xl text-blue-600">2</p>
              <p className="text-xs text-gray-600 mt-1">Advanced</p>
              <p className="text-xs text-gray-500">70-85%</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-xl">
              <p className="text-2xl text-yellow-600">1</p>
              <p className="text-xs text-gray-600 mt-1">Intermediate</p>
              <p className="text-xs text-gray-500">&lt;70%</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#0D253F]">Certifications</h3>
            <button className="p-2 bg-[#1A73E8] text-white rounded-lg hover:bg-[#0D47A1] transition-all">
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="p-4 border-2 border-gray-100 rounded-xl hover:border-[#1A73E8] transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-[#1A73E8]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#0D253F]">{cert.name}</p>
                      <p className="text-xs text-gray-600 mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{cert.date}</span>
                  {cert.verified && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      ✓ Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Government Courses */}
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-center space-x-2 mb-4">
            <BookOpen className="w-5 h-5" />
            <h3>Recommended Government Courses</h3>
          </div>
          <p className="text-sm text-purple-100 mb-4">
            Free courses from AICTE, SWAYAM, and NPTEL
          </p>

          <div className="space-y-3">
            {suggestedCourses.map((course, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm">{course.name}</p>
                    <p className="text-xs text-purple-100 mt-1">{course.provider}</p>
                  </div>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">
                    {course.type}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-purple-100">{course.duration}</span>
                  <button className="text-xs bg-white text-purple-600 px-3 py-1 rounded-lg hover:bg-purple-50 transition-all">
                    Enroll
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Goals */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Learning Goals</h3>
          <div className="space-y-3">
            <div className="p-4 bg-[#F5F9FF] rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-[#0D253F]">Master Deep Learning</p>
                <span className="text-xs text-[#1A73E8]">65%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#1A73E8] rounded-full" style={{ width: '65%' }} />
              </div>
              <p className="text-xs text-gray-500 mt-2">Target: Dec 2024</p>
            </div>
            <div className="p-4 bg-[#F5F9FF] rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-[#0D253F]">Complete Cloud Certification</p>
                <span className="text-xs text-[#1A73E8]">40%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#1A73E8] rounded-full" style={{ width: '40%' }} />
              </div>
              <p className="text-xs text-gray-500 mt-2">Target: Jan 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}