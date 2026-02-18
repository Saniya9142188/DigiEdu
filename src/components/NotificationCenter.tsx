import { useState } from 'react';
import { X, Briefcase, TrendingUp, Trophy, GraduationCap, Bell, Check, Trash2, Settings as SettingsIcon, AlertCircle, Calendar, Gift } from 'lucide-react';
import { Screen } from '../App';

interface NotificationCenterProps {
  onClose: () => void;
  navigate: (screen: Screen) => void;
}

type NotificationCategory = 'all' | 'jobs' | 'internships' | 'competitions' | 'certifications' | 'general';

interface Notification {
  id: string;
  category: NotificationCategory;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  matchedKeywords?: string[];
  actionable?: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    category: 'jobs',
    title: 'New Job Alert: Software Engineer',
    message: 'Google India is hiring for Software Engineer role. Your profile matches 92% with required skills: React, Node.js, Python.',
    timestamp: '2025-11-26T10:30:00',
    read: false,
    matchedKeywords: ['React', 'Node.js', 'Python'],
    actionable: true,
  },
  {
    id: '2',
    category: 'internships',
    title: 'Internship Match: Machine Learning',
    message: 'Microsoft Research has an internship that matches your skills in Python, TensorFlow, and Deep Learning.',
    timestamp: '2025-11-26T09:15:00',
    read: false,
    matchedKeywords: ['Python', 'TensorFlow', 'Deep Learning'],
    actionable: true,
  },
  {
    id: '3',
    category: 'competitions',
    title: 'Smart India Hackathon 2025 Open',
    message: 'Registration is now open for Smart India Hackathon. Your problem-solving and full-stack skills are a great fit!',
    timestamp: '2025-11-25T15:45:00',
    read: false,
    matchedKeywords: ['Problem Solving', 'Full Stack'],
    actionable: true,
  },
  {
    id: '4',
    category: 'certifications',
    title: 'Certification Recommendation',
    message: 'AWS Certified Solutions Architect certification would enhance your cloud computing skills.',
    timestamp: '2025-11-25T11:20:00',
    read: true,
    matchedKeywords: ['Cloud Computing', 'AWS'],
  },
  {
    id: '5',
    category: 'general',
    title: 'Profile Update Required',
    message: 'Update your skills and experience to get better opportunity matches.',
    timestamp: '2025-11-24T14:30:00',
    read: true,
  },
  {
    id: '6',
    category: 'jobs',
    title: 'Frontend Developer - Zomato',
    message: 'New opportunity matching your React and JavaScript skills. CGPA requirement: 7.0+',
    timestamp: '2025-11-24T10:00:00',
    read: true,
    matchedKeywords: ['React', 'JavaScript'],
    actionable: true,
  },
  {
    id: '7',
    category: 'general',
    title: 'Scholarship Alert',
    message: 'You are eligible for 3 new government scholarship schemes worth ₹75,000.',
    timestamp: '2025-11-23T16:20:00',
    read: true,
    actionable: true,
  },
  {
    id: '8',
    category: 'competitions',
    title: 'ACM ICPC Regionals - Last Week',
    message: 'Only 7 days left to register for ACM ICPC Regionals. Your competitive programming skills match!',
    timestamp: '2025-11-23T09:30:00',
    read: true,
    matchedKeywords: ['Algorithms', 'Competitive Programming'],
    actionable: true,
  },
];

export function NotificationCenter({ onClose, navigate }: NotificationCenterProps) {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [activeCategory, setActiveCategory] = useState<NotificationCategory>('all');

  const filteredNotifications = activeCategory === 'all'
    ? notifications
    : notifications.filter(n => n.category === activeCategory);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getCategoryIcon = (category: NotificationCategory) => {
    switch (category) {
      case 'jobs':
        return <Briefcase className="w-4 h-4" />;
      case 'internships':
        return <TrendingUp className="w-4 h-4" />;
      case 'competitions':
        return <Trophy className="w-4 h-4" />;
      case 'certifications':
        return <GraduationCap className="w-4 h-4" />;
      default:
        return <Bell className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: NotificationCategory) => {
    switch (category) {
      case 'jobs':
        return 'bg-blue-100 text-blue-600';
      case 'internships':
        return 'bg-purple-100 text-purple-600';
      case 'competitions':
        return 'bg-yellow-100 text-yellow-600';
      case 'certifications':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getTimeAgo = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffMs = now.getTime() - time.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center md:justify-center">
      <div className="bg-white w-full md:max-w-lg md:rounded-3xl rounded-t-3xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#1A73E8] text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl">Notifications</h2>
                {unreadCount > 0 && (
                  <p className="text-blue-100 text-sm">{unreadCount} unread</p>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex space-x-2">
            <button
              onClick={markAllAsRead}
              className="flex-1 py-2 px-3 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
            >
              <Check className="w-4 h-4" />
              <span>Mark All Read</span>
            </button>
            <button
              onClick={() => {
                navigate('notification-settings');
                onClose();
              }}
              className="flex-1 py-2 px-3 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
            >
              <SettingsIcon className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="px-4 py-3 border-b border-gray-200 flex space-x-2 overflow-x-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'bg-[#1A73E8] text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory('jobs')}
            className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all flex items-center space-x-1 ${
              activeCategory === 'jobs'
                ? 'bg-[#1A73E8] text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Jobs</span>
          </button>
          <button
            onClick={() => setActiveCategory('internships')}
            className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all flex items-center space-x-1 ${
              activeCategory === 'internships'
                ? 'bg-[#1A73E8] text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Internships</span>
          </button>
          <button
            onClick={() => setActiveCategory('competitions')}
            className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all flex items-center space-x-1 ${
              activeCategory === 'competitions'
                ? 'bg-[#1A73E8] text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Competitions</span>
          </button>
          <button
            onClick={() => setActiveCategory('certifications')}
            className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all flex items-center space-x-1 ${
              activeCategory === 'certifications'
                ? 'bg-[#1A73E8] text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Certifications</span>
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {filteredNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Bell className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600 mb-2">No notifications</p>
              <p className="text-sm text-gray-500">
                You're all caught up!
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 transition-all ${
                    !notification.read ? 'bg-blue-50/50' : ''
                  }`}
                >
                  <div className="flex space-x-3">
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getCategoryColor(notification.category)}`}>
                      {getCategoryIcon(notification.category)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <p className={`text-sm ${!notification.read ? 'text-[#0D253F]' : 'text-gray-700'}`}>
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-[#1A73E8] rounded-full flex-shrink-0 ml-2 mt-1"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                      
                      {/* Matched Keywords */}
                      {notification.matchedKeywords && notification.matchedKeywords.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {notification.matchedKeywords.map((keyword, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-[#E3F2FD] text-[#1A73E8] text-xs rounded-full"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {getTimeAgo(notification.timestamp)}
                        </span>
                        <div className="flex space-x-2">
                          {notification.actionable && (
                            <button
                              onClick={() => {
                                navigate('opportunities');
                                onClose();
                              }}
                              className="text-xs text-[#1A73E8] hover:underline"
                            >
                              View
                            </button>
                          )}
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="text-xs text-gray-500 hover:text-[#1A73E8]"
                            >
                              Mark read
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="text-xs text-gray-500 hover:text-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
