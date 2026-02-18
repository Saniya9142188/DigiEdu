import { GraduationCap, TrendingUp, Award, FileText, Calendar, Bell, Settings as SettingsIcon, Gift, Briefcase, Bot, BookOpen, Target, School as SchoolIcon } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Screen, StudentType } from '../App';
import { useState } from 'react';
import { NotificationCenter } from './NotificationCenter';

interface StudentDashboardProps {
  navigate: (screen: Screen) => void;
  onLogout: () => void;
  studentType: StudentType;
}

const cgpaData = [
  { semester: 'Sem 1', cgpa: 7.8 },
  { semester: 'Sem 2', cgpa: 8.1 },
  { semester: 'Sem 3', cgpa: 8.4 },
  { semester: 'Sem 4', cgpa: 8.6 },
  { semester: 'Sem 5', cgpa: 8.8 },
];

const schoolMarksData = [
  { term: 'Term 1', percentage: 82 },
  { term: 'Term 2', percentage: 85 },
  { term: 'Mid Term', percentage: 87 },
  { term: 'Term 3', percentage: 89 },
];

export function StudentDashboard({ navigate, onLogout, studentType }: StudentDashboardProps) {
  const [showNotificationCenter, setShowNotificationCenter] = useState(false);
  const unreadNotifications = 3;
  const isSchoolStudent = studentType === 'school';

  return (
    <div className="min-h-screen bg-[#F5F9FF] pb-20">
      {/* Header */}
      <div className="bg-[#1A73E8] text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              {isSchoolStudent ? <SchoolIcon className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
            </div>
            <div>
              <h1 className="text-xl">Welcome back,</h1>
              <p className="text-blue-100">
                {isSchoolStudent ? 'Amit Sharma' : 'Rahul Kumar'}
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowNotificationCenter(true)}
              className="relative p-2 hover:bg-white/10 rounded-lg transition-all"
            >
              <Bell className="w-6 h-6" />
              {unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadNotifications}
                </span>
              )}
            </button>
            <button
              onClick={() => navigate('settings')}
              className="p-2 hover:bg-white/10 rounded-lg transition-all"
            >
              <SettingsIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 space-y-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-blue-100 text-sm">
                {isSchoolStudent ? 'Class 12 • Science' : 'B.Tech Computer Science'}
              </p>
              <p className="text-sm">
                {isSchoolStudent ? 'Delhi Public School, Delhi' : 'IIT Delhi • 3rd Year'}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl">{isSchoolStudent ? '89%' : '8.8'}</p>
              <p className="text-blue-100 text-sm">{isSchoolStudent ? 'Overall' : 'CGPA'}</p>
            </div>
          </div>
          <div className="flex justify-between pt-2 border-t border-white/20">
            <div>
              <p className="text-xl">92%</p>
              <p className="text-blue-100 text-xs">Attendance</p>
            </div>
            <div>
              <p className="text-xl">A</p>
              <p className="text-blue-100 text-xs">Grade</p>
            </div>
            <div>
              <p className="text-xl">{isSchoolStudent ? '8' : '15'}</p>
              <p className="text-blue-100 text-xs">Projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={() => navigate('student-academic')}
            className="flex flex-col items-center space-y-2 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[#1A73E8]" />
            </div>
            <span className="text-xs text-center text-[#0D253F]">Academic</span>
          </button>
          <button
            onClick={() => navigate('student-skills')}
            className="flex flex-col items-center space-y-2 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-[#1A73E8]" />
            </div>
            <span className="text-xs text-center text-[#0D253F]">Skills</span>
          </button>
          <button
            onClick={() => navigate('student-projects')}
            className="flex flex-col items-center space-y-2 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[#1A73E8]" />
            </div>
            <span className="text-xs text-center text-[#0D253F]">Projects</span>
          </button>
          <button
            onClick={() => navigate('student-documents')}
            className="flex flex-col items-center space-y-2 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#1A73E8]" />
            </div>
            <span className="text-xs text-center text-[#0D253F]">Docs</span>
          </button>
        </div>

        {/* AI Assistant Card */}
        <div
          onClick={() => navigate('ai-assistant')}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-5 text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Bot className="w-5 h-5" />
                <span className="text-sm opacity-90">AI Assistant</span>
              </div>
              <h3 className="text-lg mb-1">Get Personalized Guidance</h3>
              <p className="text-sm opacity-90">
                Ask about career paths, scholarships, or skill recommendations
              </p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Notifications & Opportunities Combined Card */}
        <div
          onClick={() => navigate('notifications-opportunities')}
          className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-5 text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Bell className="w-5 h-5" />
                <span className="text-sm opacity-90">Updates & Opportunities</span>
              </div>
              <h3 className="text-lg mb-1">3 New Notifications</h3>
              <p className="text-sm opacity-90 mb-3">
                {isSchoolStudent 
                  ? '2 college recommendations & 1 course match'
                  : '2 job matches & 1 admin alert'}
              </p>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {unreadNotifications}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-white/20">
            <div className="text-center flex-1">
              <p className="text-xl">{unreadNotifications}</p>
              <p className="text-xs opacity-75">Notifications</p>
            </div>
            <div className="text-center flex-1 border-l border-white/20">
              <p className="text-xl">{isSchoolStudent ? '8' : '12'}</p>
              <p className="text-xs opacity-75">Opportunities</p>
            </div>
          </div>
        </div>

        {/* Government Scheme Card */}
        <div
          onClick={() => navigate('government-schemes')}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-5 text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Gift className="w-5 h-5" />
                <span className="text-sm opacity-90">Government Schemes</span>
              </div>
              <h3 className="text-lg mb-1">3 Schemes Available</h3>
              <p className="text-sm opacity-90">
                You're eligible for scholarships worth ₹75,000
              </p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Performance Graph */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#0D253F]">
              {isSchoolStudent ? 'Performance Trend' : 'CGPA Trend'}
            </h3>
            <span className="text-sm text-green-600">↑ 2.8%</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={isSchoolStudent ? schoolMarksData : cgpaData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E3F2FD" />
              <XAxis 
                dataKey={isSchoolStudent ? 'term' : 'semester'} 
                stroke="#0D253F" 
                fontSize={12} 
              />
              <YAxis 
                domain={isSchoolStudent ? [75, 95] : [7, 9]} 
                stroke="#0D253F" 
                fontSize={12} 
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={isSchoolStudent ? 'percentage' : 'cgpa'}
                stroke="#1A73E8"
                strokeWidth={3}
                dot={{ fill: '#1A73E8', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Recent Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-[#F5F9FF] rounded-xl">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="text-[#0D253F] text-sm">
                  {isSchoolStudent ? 'District Level Science Olympiad' : 'Best Project Award'}
                </p>
                <p className="text-xs text-gray-600">
                  {isSchoolStudent ? 'Gold Medal • State Board' : 'Computer Science Dept.'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-[#F5F9FF] rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-[#0D253F] text-sm">Academic Excellence</p>
                <p className="text-xs text-gray-600">
                  {isSchoolStudent ? 'Above 85% for 3 terms' : 'CGPA > 8.5 for 3 semesters'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Upcoming</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 border-l-4 border-red-500 bg-red-50 rounded-r-xl">
              <Calendar className="w-5 h-5 text-red-600" />
              <div className="flex-1">
                <p className="text-[#0D253F] text-sm">
                  {isSchoolStudent ? 'Board Pre-Final Exam' : 'Mid-term Exam'}
                </p>
                <p className="text-xs text-gray-600">
                  {isSchoolStudent ? 'Physics • Tomorrow, 9:00 AM' : 'Data Structures • Tomorrow, 10:00 AM'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 border-l-4 border-orange-500 bg-orange-50 rounded-r-xl">
              <FileText className="w-5 h-5 text-orange-600" />
              <div className="flex-1">
                <p className="text-[#0D253F] text-sm">Assignment Due</p>
                <p className="text-xs text-gray-600">
                  {isSchoolStudent ? 'Chemistry Project • 2 days left' : 'Machine Learning • 2 days left'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-[#1A73E8]" />
              <h3 className="text-[#0D253F]">All Notifications</h3>
            </div>
            <button
              onClick={() => setShowNotificationCenter(true)}
              className="text-sm text-[#1A73E8] hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
              <div className="flex items-start justify-between mb-1">
                <p className="text-sm text-[#0D253F]">Admin Alert</p>
                <span className="text-xs text-blue-600">2h ago</span>
              </div>
              <p className="text-xs text-gray-600">
                New scholarship portal launched by Ministry of Education
              </p>
            </div>
            <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded-r-xl">
              <div className="flex items-start justify-between mb-1">
                <p className="text-sm text-[#0D253F]">
                  {isSchoolStudent ? 'College Recommendation' : 'Job Alert'}
                </p>
                <span className="text-xs text-green-600">5h ago</span>
              </div>
              <p className="text-xs text-gray-600">
                {isSchoolStudent 
                  ? 'IIT Delhi open day registration started'
                  : 'New Software Engineer position matches your profile'}
              </p>
            </div>
            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl">
              <div className="flex items-start justify-between mb-1">
                <p className="text-sm text-[#0D253F]">System Update</p>
                <span className="text-xs text-yellow-600">1d ago</span>
              </div>
              <p className="text-xs text-gray-600">
                Grade updated for {isSchoolStudent ? 'Mathematics' : 'Database Systems'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Center Modal */}
      {showNotificationCenter && (
        <NotificationCenter 
          onClose={() => setShowNotificationCenter(false)} 
          navigate={navigate}
        />
      )}
    </div>
  );
}