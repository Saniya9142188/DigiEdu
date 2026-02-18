import { ArrowLeft, User, Bell, Moon, Shield, HelpCircle, LogOut, ChevronRight, Mail, Phone, Edit } from 'lucide-react';
import { Screen, UserRole } from '../App';
import { useState } from 'react';

interface SettingsProps {
  navigate: (screen: Screen) => void;
  userRole: UserRole;
  onLogout: () => void;
}

export function Settings({ navigate, userRole, onLogout }: SettingsProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const studentProfile = {
    name: 'Rahul Kumar',
    email: 'rahul.kumar@iitd.ac.in',
    phone: '+91 98765 43210',
    rollNo: 'CS2021-045',
    college: 'IIT Delhi',
    department: 'Computer Science',
    year: '3rd Year'
  };

  const teacherProfile = {
    name: 'Dr. Priya Sharma',
    email: 'priya.sharma@iitd.ac.in',
    phone: '+91 98765 12345',
    aparId: 'T-2847',
    college: 'IIT Delhi',
    department: 'Computer Science',
    designation: 'Associate Professor'
  };

  const profile = userRole === 'student' ? studentProfile : teacherProfile;

  return (
    <div className="min-h-screen bg-[#F5F9FF] pb-6">
      {/* Header */}
      <div className="bg-[#1A73E8] text-white p-6 rounded-b-3xl shadow-lg">
        <button
          onClick={() => navigate(userRole === 'student' ? 'student-dashboard' : 'teacher-dashboard')}
          className="mb-4 p-2 hover:bg-white/10 rounded-lg transition-all"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl mb-2">Settings</h1>
        <p className="text-blue-100">Manage your account and preferences</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-[#1A73E8]" />
              </div>
              <div>
                <h3 className="text-[#0D253F]">{profile.name}</h3>
                <p className="text-sm text-gray-600">
                  {userRole === 'student' ? profile.rollNo : (profile as typeof teacherProfile).aparId}
                </p>
              </div>
            </div>
            <button className="p-2 bg-[#F5F9FF] text-[#1A73E8] rounded-lg hover:bg-[#E3F2FD] transition-all">
              <Edit className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>{profile.phone}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-600">Institution</p>
              <p className="text-[#0D253F]">{profile.college}</p>
            </div>
            <div>
              <p className="text-gray-600">Department</p>
              <p className="text-[#0D253F]">{profile.department}</p>
            </div>
            {userRole === 'student' ? (
              <div>
                <p className="text-gray-600">Year</p>
                <p className="text-[#0D253F]">{studentProfile.year}</p>
              </div>
            ) : (
              <div>
                <p className="text-gray-600">Designation</p>
                <p className="text-[#0D253F]">{teacherProfile.designation}</p>
              </div>
            )}
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Preferences</h3>
          
          <div className="space-y-4">
            {/* Notifications */}
            <button
              onClick={() => navigate('notification-settings')}
              className="w-full flex items-center justify-between hover:bg-[#F5F9FF] p-2 rounded-lg transition-all"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-[#1A73E8]" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-[#0D253F]">Notifications</p>
                  <p className="text-xs text-gray-600">Manage alerts and keywords</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
                  <Moon className="w-5 h-5 text-[#1A73E8]" />
                </div>
                <div>
                  <p className="text-sm text-[#0D253F]">Dark Mode</p>
                  <p className="text-xs text-gray-600">Toggle dark theme</p>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-12 h-6 rounded-full transition-all ${
                  darkMode ? 'bg-[#1A73E8]' : 'bg-gray-300'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all ${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </div>

        {/* Documents & Privacy */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button className="w-full flex items-center justify-between p-5 hover:bg-[#F5F9FF] transition-all">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#1A73E8]" />
              </div>
              <div className="text-left">
                <p className="text-sm text-[#0D253F]">Privacy & Security</p>
                <p className="text-xs text-gray-600">Manage your data</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <div className="border-t border-gray-100" />

          <button
            onClick={() => navigate(userRole === 'student' ? 'student-documents' : 'teacher-dashboard')}
            className="w-full flex items-center justify-between p-5 hover:bg-[#F5F9FF] transition-all"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-[#1A73E8]" />
              </div>
              <div className="text-left">
                <p className="text-sm text-[#0D253F]">Manage Documents</p>
                <p className="text-xs text-gray-600">Upload and verify</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Support */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button className="w-full flex items-center justify-between p-5 hover:bg-[#F5F9FF] transition-all">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-[#1A73E8]" />
              </div>
              <div className="text-left">
                <p className="text-sm text-[#0D253F]">Help & Support</p>
                <p className="text-xs text-gray-600">FAQs and contact</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* About */}
        <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
          <p className="text-sm text-gray-600 mb-1">EduTrack v1.0</p>
          <p className="text-xs text-gray-500">Powered by Digital India Initiative</p>
          <div className="flex justify-center space-x-4 mt-3 text-xs text-[#1A73E8]">
            <button>Terms of Service</button>
            <span className="text-gray-300">|</span>
            <button>Privacy Policy</button>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="w-full bg-red-50 text-red-600 py-4 rounded-2xl hover:bg-red-100 transition-all flex items-center justify-center space-x-2"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}