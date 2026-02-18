import { ArrowLeft, Bell, Briefcase, GraduationCap, Award, BookOpen, Target, FlaskConical, Filter } from 'lucide-react';
import { Screen, UserRole, StudentType } from '../App';
import { useState } from 'react';

interface NotificationsAndOpportunitiesProps {
  navigate: (screen: Screen) => void;
  userRole: UserRole;
  studentType?: StudentType;
}

export function NotificationsAndOpportunities({ navigate, userRole, studentType }: NotificationsAndOpportunitiesProps) {
  const [activeTab, setActiveTab] = useState<'notifications' | 'opportunities'>('notifications');
  const isSchoolStudent = studentType === 'school';
  const isCollegeStudent = studentType === 'college';

  return (
    <div className="min-h-screen bg-[#F5F9FF] pb-20">
      {/* Header */}
      <div className="bg-[#1A73E8] text-white p-6 rounded-b-3xl shadow-lg sticky top-0 z-10">
        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={() => navigate(userRole === 'student' ? 'student-dashboard' : 'teacher-dashboard')}
            className="p-2 hover:bg-white/10 rounded-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl">Notifications & Opportunities</h1>
            <p className="text-blue-100 text-sm">Stay updated with latest info</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 gap-3 bg-white/10 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('notifications')}
            className={`py-2.5 rounded-lg transition-all ${
              activeTab === 'notifications'
                ? 'bg-white text-[#1A73E8]'
                : 'text-white'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Bell className="w-4 h-4" />
              <span>Notifications</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('opportunities')}
            className={`py-2.5 rounded-lg transition-all ${
              activeTab === 'opportunities'
                ? 'bg-white text-[#1A73E8]'
                : 'text-white'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Opportunities</span>
            </div>
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {activeTab === 'notifications' ? (
          <>
            {/* Notifications Section */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-[#0D253F] mb-4 flex items-center space-x-2">
                <Bell className="w-5 h-5 text-[#1A73E8]" />
                <span>All Notifications</span>
              </h3>
              <div className="space-y-3">
                {/* Admin Notifications */}
                <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <p className="text-sm text-[#0D253F]">Admin Alert</p>
                    </div>
                    <span className="text-xs text-blue-600">2h ago</span>
                  </div>
                  <p className="text-xs text-gray-600 ml-4">
                    {userRole === 'student'
                      ? 'New scholarship portal launched by Ministry of Education'
                      : 'Faculty meeting scheduled for tomorrow at 3 PM'}
                  </p>
                </div>

                {/* Super Admin Notifications */}
                <div className="p-3 bg-purple-50 border-l-4 border-purple-500 rounded-r-xl">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <p className="text-sm text-[#0D253F]">Super Admin Notice</p>
                    </div>
                    <span className="text-xs text-purple-600">5h ago</span>
                  </div>
                  <p className="text-xs text-gray-600 ml-4">
                    {userRole === 'student'
                      ? 'System maintenance scheduled for Dec 5, 2025'
                      : 'New grading system guidelines released'}
                  </p>
                </div>

                {/* Opportunity Alerts */}
                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded-r-xl">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <p className="text-sm text-[#0D253F]">
                        {isSchoolStudent ? 'College Recommendation' : isCollegeStudent ? 'Job Alert' : 'Research Opportunity'}
                      </p>
                    </div>
                    <span className="text-xs text-green-600">5h ago</span>
                  </div>
                  <p className="text-xs text-gray-600 ml-4">
                    {isSchoolStudent
                      ? 'IIT Delhi open day registration started'
                      : isCollegeStudent
                      ? 'New Software Engineer position matches your profile'
                      : 'SERB research grant applications now open'}
                  </p>
                </div>

                {/* System Updates */}
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <p className="text-sm text-[#0D253F]">System Update</p>
                    </div>
                    <span className="text-xs text-yellow-600">1d ago</span>
                  </div>
                  <p className="text-xs text-gray-600 ml-4">
                    {userRole === 'student'
                      ? `Grade updated for ${isSchoolStudent ? 'Mathematics' : 'Database Systems'}`
                      : '12 assignments pending grading'}
                  </p>
                </div>

                {/* Assignment/Exam Notifications */}
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <p className="text-sm text-[#0D253F]">
                        {userRole === 'student' ? 'Exam Reminder' : 'Grade Deadline'}
                      </p>
                    </div>
                    <span className="text-xs text-red-600">2d ago</span>
                  </div>
                  <p className="text-xs text-gray-600 ml-4">
                    {userRole === 'student'
                      ? `${isSchoolStudent ? 'Board Pre-Final Exam' : 'Mid-term Exam'} in 2 days`
                      : 'Submit grades for Semester 5 by Dec 10'}
                  </p>
                </div>

                <div className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <p className="text-sm text-[#0D253F]">Course Update</p>
                    </div>
                    <span className="text-xs text-orange-600">3d ago</span>
                  </div>
                  <p className="text-xs text-gray-600 ml-4">
                    {userRole === 'student'
                      ? 'New study material uploaded for Physics'
                      : 'Course syllabus revision required for next semester'}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Opportunities Section */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#0D253F] flex items-center space-x-2">
                  <Target className="w-5 h-5 text-[#1A73E8]" />
                  <span>Recommended For You</span>
                </h3>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                  <Filter className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="space-y-4">
                {/* School Student Opportunities */}
                {isSchoolStudent && (
                  <>
                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#0D253F] mb-1">Top Engineering Colleges 2026</h4>
                          <p className="text-xs text-gray-600 mb-2">
                            IIT Delhi, BITS Pilani, NIT Trichy - Admissions open
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            Based on your 89% average and Science stream
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">College</span>
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">Engineering</span>
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">89% Match</span>
                          </div>
                          <button className="w-full bg-[#1A73E8] text-white py-2 rounded-lg text-sm hover:bg-[#1557B0] transition-all">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#0D253F] mb-1">JEE/NEET Crash Course 2026</h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Free 6-week intensive preparation course
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            Starts Jan 5, 2026 • Online + Offline options
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Course</span>
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Free</span>
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">6 weeks</span>
                          </div>
                          <button className="w-full bg-[#1A73E8] text-white py-2 rounded-lg text-sm hover:bg-[#1557B0] transition-all">
                            Register Now
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#0D253F] mb-1">Python Programming Certificate</h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Build coding skills before college
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            Beginner friendly • 4 weeks • Industry recognized
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Certification</span>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Beginner</span>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Certificate</span>
                          </div>
                          <button className="w-full bg-[#1A73E8] text-white py-2 rounded-lg text-sm hover:bg-[#1557B0] transition-all">
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* College Student Opportunities */}
                {isCollegeStudent && (
                  <>
                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#0D253F] mb-1">Software Engineer - Google India</h4>
                          <p className="text-xs text-gray-600 mb-2">
                            ₹18-25 LPA • Bangalore • Full-time
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            Apply by Dec 15, 2025 • 2-3 years exp preferred
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Job</span>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">92% Match</span>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">React</span>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Python</span>
                          </div>
                          <button className="w-full bg-[#1A73E8] text-white py-2 rounded-lg text-sm hover:bg-[#1557B0] transition-all">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#0D253F] mb-1">ML Internship - Microsoft Research</h4>
                          <p className="text-xs text-gray-600 mb-2">
                            ₹50,000/month • 6 months • Hyderabad
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            Work on cutting-edge AI/ML projects
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">Internship</span>
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">88% Match</span>
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">TensorFlow</span>
                          </div>
                          <button className="w-full bg-[#1A73E8] text-white py-2 rounded-lg text-sm hover:bg-[#1557B0] transition-all">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#0D253F] mb-1">M.Tech AI/ML - IIT Bombay</h4>
                          <p className="text-xs text-gray-600 mb-2">
                            CGPA ≥ 8.0 eligible • 2 years program
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            Applications open till Jan 15, 2026
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">PG Course</span>
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">2 years</span>
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">AI/ML</span>
                          </div>
                          <button className="w-full bg-[#1A73E8] text-white py-2 rounded-lg text-sm hover:bg-[#1557B0] transition-all">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#0D253F] mb-1">AWS Solutions Architect Certification</h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Boost your cloud skills • High demand
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            Self-paced • Industry recognized certificate
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">Certification</span>
                            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">75% Match</span>
                            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">Cloud</span>
                          </div>
                          <button className="w-full bg-[#1A73E8] text-white py-2 rounded-lg text-sm hover:bg-[#1557B0] transition-all">
                            Start Learning
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Teacher Opportunities */}
                {userRole === 'teacher' && (
                  <>
                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FlaskConical className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#0D253F] mb-1">Springer Conference on AI/ML 2026</h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Call for papers • Computer Science track
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            Deadline: Jan 15, 2026 • Virtual & In-person
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Research</span>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Publication</span>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">AI/ML</span>
                          </div>
                          <button className="w-full bg-[#1A73E8] text-white py-2 rounded-lg text-sm hover:bg-[#1557B0] transition-all">
                            Submit Paper
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#0D253F] mb-1">Advanced Teaching Methodologies</h4>
                          <p className="text-xs text-gray-600 mb-2">
                            NPTEL Course • Free Certificate • 8 weeks
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            Enhance your teaching skills
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">Course</span>
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">NPTEL</span>
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">Free</span>
                          </div>
                          <button className="w-full bg-[#1A73E8] text-white py-2 rounded-lg text-sm hover:bg-[#1557B0] transition-all">
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#0D253F] mb-1">Faculty Development Program - IIT Delhi</h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Data Science & Machine Learning • 2 weeks
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            Dec 10-24, 2025 • Hybrid mode
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Training</span>
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">FDP</span>
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Data Science</span>
                          </div>
                          <button className="w-full bg-[#1A73E8] text-white py-2 rounded-lg text-sm hover:bg-[#1557B0] transition-all">
                            Register Now
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#0D253F] mb-1">SERB Research Grant 2026</h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Up to ₹25 lakhs • CS/IT projects
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            Apply by Dec 31, 2025 • Competitive funding
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">Grant</span>
                            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">₹25L</span>
                            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">SERB</span>
                          </div>
                          <button className="w-full bg-[#1A73E8] text-white py-2 rounded-lg text-sm hover:bg-[#1557B0] transition-all">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
