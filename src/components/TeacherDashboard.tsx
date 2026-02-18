import { Users, TrendingUp, FileText, Calendar, Bell, Settings as SettingsIcon, Award, BookOpen, BarChart3, Bot, Target, GraduationCap, FlaskConical } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Screen } from '../App';
import { useState } from 'react';
import { NotificationCenter } from './NotificationCenter';

interface TeacherDashboardProps {
  navigate: (screen: Screen) => void;
  onLogout: () => void;
}

const performanceData = [
  { subject: 'DS', avg: 78 },
  { subject: 'Algo', avg: 82 },
  { subject: 'DBMS', avg: 75 },
  { subject: 'CN', avg: 80 },
];

const attendanceData = [
  { name: 'Present', value: 85, color: '#10B981' },
  { name: 'Absent', value: 15, color: '#EF4444' },
];

export function TeacherDashboard({ navigate, onLogout }: TeacherDashboardProps) {
  const [showNotificationCenter, setShowNotificationCenter] = useState(false);
  const unreadNotifications = 4;

  return (
    <div className="min-h-screen bg-[#F5F9FF] pb-20">
      {/* Header */}
      <div className="bg-[#1A73E8] text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl">Welcome back,</h1>
              <p className="text-blue-100">Dr. Priya Sharma</p>
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
              <p className="text-blue-100 text-sm">Computer Science Dept.</p>
              <p className="text-sm">IIT Delhi • Associate Professor</p>
            </div>
            <div className="text-right">
              <p className="text-2xl">T-2847</p>
              <p className="text-blue-100 text-sm">APAR ID</p>
            </div>
          </div>
          <div className="flex justify-between pt-2 border-t border-white/20">
            <div>
              <p className="text-xl">4</p>
              <p className="text-blue-100 text-xs">Classes</p>
            </div>
            <div>
              <p className="text-xl">156</p>
              <p className="text-blue-100 text-xs">Students</p>
            </div>
            <div>
              <p className="text-xl">12</p>
              <p className="text-blue-100 text-xs">Pending</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={() => navigate('teacher-student-performance')}
            className="flex flex-col items-center space-y-2 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-[#1A73E8]" />
            </div>
            <span className="text-xs text-center text-[#0D253F]">Students</span>
          </button>
          <button
            onClick={() => navigate('teacher-analytics')}
            className="flex flex-col items-center space-y-2 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-[#1A73E8]" />
            </div>
            <span className="text-xs text-center text-[#0D253F]">Analytics</span>
          </button>
          <button
            onClick={() => navigate('teacher-assignments')}
            className="flex flex-col items-center space-y-2 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#1A73E8]" />
            </div>
            <span className="text-xs text-center text-[#0D253F]">Assign</span>
          </button>
          <button
            onClick={() => navigate('government-schemes')}
            className="flex flex-col items-center space-y-2 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-[#1A73E8]" />
            </div>
            <span className="text-xs text-center text-[#0D253F]">Schemes</span>
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
                <span className="text-sm opacity-90">AI Teaching Assistant</span>
              </div>
              <h3 className="text-lg mb-1">Get Teaching Insights</h3>
              <p className="text-sm opacity-90">
                Ask for student analytics, teaching strategies, or assessment tips
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
              <h3 className="text-lg mb-1">4 New Notifications</h3>
              <p className="text-sm opacity-90 mb-3">
                2 research opportunities & 1 admin alert
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
              <p className="text-xl">10</p>
              <p className="text-xs opacity-75">Opportunities</p>
            </div>
          </div>
        </div>

        {/* Class Performance Heatmap */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#0D253F]">Class Performance</h3>
            <span className="text-sm text-green-600">↑ 5.2%</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E3F2FD" />
              <XAxis dataKey="subject" stroke="#0D253F" fontSize={12} />
              <YAxis domain={[0, 100]} stroke="#0D253F" fontSize={12} />
              <Tooltip />
              <Bar dataKey="avg" fill="#1A73E8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Attendance Overview */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-[#0D253F] mb-4">Attendance</h3>
            <ResponsiveContainer width="100%" height={120}>
              <PieChart>
                <Pie
                  data={attendanceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={50}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {attendanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-4 text-xs mt-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>85% Present</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span>15% Absent</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-[#0D253F] mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Avg CGPA</span>
                <span className="text-lg text-[#1A73E8]">7.9</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pass Rate</span>
                <span className="text-lg text-green-600">94%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Top Scorer</span>
                <span className="text-lg text-yellow-600">9.2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Top Performers</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-700">🥇</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#0D253F]">Rahul Kumar</p>
                <p className="text-xs text-gray-600">B.Tech CS • 3rd Year</p>
              </div>
              <p className="text-lg text-yellow-700">9.2</p>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 border-l-4 border-gray-400 rounded-r-xl">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-700">🥈</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#0D253F]">Priya Patel</p>
                <p className="text-xs text-gray-600">B.Tech CS • 3rd Year</p>
              </div>
              <p className="text-lg text-gray-700">9.0</p>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-700">🥉</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#0D253F]">Amit Singh</p>
                <p className="text-xs text-gray-600">B.Tech CS • 3rd Year</p>
              </div>
              <p className="text-lg text-orange-700">8.8</p>
            </div>
          </div>
        </div>

        {/* Students Needing Attention */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Students Needing Attention</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#0D253F]">Aakash Verma</p>
                <p className="text-xs text-gray-600">Attendance &lt; 75% • Low grades</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#0D253F]">Sneha Reddy</p>
                <p className="text-xs text-gray-600">Missing assignments</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Today's Schedule</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 border-l-4 border-blue-500 bg-blue-50 rounded-r-xl">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm text-[#0D253F]">Data Structures Lecture</p>
                <p className="text-xs text-gray-600">10:00 AM - 11:00 AM • Room 301</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 border-l-4 border-purple-500 bg-purple-50 rounded-r-xl">
              <Calendar className="w-5 h-5 text-purple-600" />
              <div className="flex-1">
                <p className="text-sm text-[#0D253F]">Lab Session</p>
                <p className="text-xs text-gray-600">2:00 PM - 4:00 PM • Lab 2</p>
              </div>
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