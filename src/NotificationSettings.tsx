import { useState } from 'react';
import { ArrowLeft, Bell, Plus, X, Briefcase, TrendingUp, Trophy, GraduationCap, Tag, AlertCircle } from 'lucide-react';
import { Screen, UserRole } from '../App';

interface NotificationSettingsProps {
  navigate: (screen: Screen) => void;
  userRole: UserRole;
}

interface KeywordSetting {
  id: string;
  keyword: string;
  category: 'jobs' | 'internships' | 'competitions' | 'certifications' | 'all';
  enabled: boolean;
}

interface CategorySetting {
  category: 'jobs' | 'internships' | 'competitions' | 'certifications' | 'general';
  enabled: boolean;
  icon: React.ReactNode;
  label: string;
  description: string;
}

export function NotificationSettings({ navigate, userRole }: NotificationSettingsProps) {
  const [keywords, setKeywords] = useState<KeywordSetting[]>([
    { id: '1', keyword: 'React', category: 'jobs', enabled: true },
    { id: '2', keyword: 'Node.js', category: 'jobs', enabled: true },
    { id: '3', keyword: 'Python', category: 'all', enabled: true },
    { id: '4', keyword: 'Machine Learning', category: 'internships', enabled: true },
    { id: '5', keyword: 'Data Science', category: 'all', enabled: true },
    { id: '6', keyword: 'Cloud Computing', category: 'certifications', enabled: false },
    { id: '7', keyword: 'Full Stack', category: 'jobs', enabled: true },
    { id: '8', keyword: 'Competitive Programming', category: 'competitions', enabled: true },
  ]);

  const [categories, setCategories] = useState<CategorySetting[]>([
    {
      category: 'jobs',
      enabled: true,
      icon: <Briefcase className="w-5 h-5" />,
      label: 'Job Opportunities',
      description: 'Get notified about new job openings matching your skills',
    },
    {
      category: 'internships',
      enabled: true,
      icon: <TrendingUp className="w-5 h-5" />,
      label: 'Internships',
      description: 'Receive alerts for internship opportunities',
    },
    {
      category: 'competitions',
      enabled: true,
      icon: <Trophy className="w-5 h-5" />,
      label: 'Competitions & Hackathons',
      description: 'Stay updated on competitions and coding challenges',
    },
    {
      category: 'certifications',
      enabled: true,
      icon: <GraduationCap className="w-5 h-5" />,
      label: 'Certifications',
      description: 'Get recommendations for relevant certifications',
    },
    {
      category: 'general',
      enabled: true,
      icon: <Bell className="w-5 h-5" />,
      label: 'General Updates',
      description: 'Important updates, deadlines, and announcements',
    },
  ]);

  const [showAddKeyword, setShowAddKeyword] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');
  const [newKeywordCategory, setNewKeywordCategory] = useState<'jobs' | 'internships' | 'competitions' | 'certifications' | 'all'>('all');

  const toggleKeyword = (id: string) => {
    setKeywords(keywords.map(k => 
      k.id === id ? { ...k, enabled: !k.enabled } : k
    ));
  };

  const deleteKeyword = (id: string) => {
    setKeywords(keywords.filter(k => k.id !== id));
  };

  const addKeyword = () => {
    if (newKeyword.trim()) {
      setKeywords([...keywords, {
        id: Date.now().toString(),
        keyword: newKeyword.trim(),
        category: newKeywordCategory,
        enabled: true,
      }]);
      setNewKeyword('');
      setShowAddKeyword(false);
    }
  };

  const toggleCategory = (category: CategorySetting['category']) => {
    setCategories(categories.map(c => 
      c.category === category ? { ...c, enabled: !c.enabled } : c
    ));
  };

  const getCategoryBadgeColor = (category: string) => {
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

  return (
    <div className="min-h-screen bg-[#F5F9FF] pb-24">
      {/* Header */}
      <div className="bg-[#1A73E8] text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center space-x-3 mb-4">
          <button
            onClick={() => navigate('settings')}
            className="p-2 hover:bg-white/10 rounded-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl">Notification Settings</h1>
            <p className="text-blue-100 text-sm">Manage your alerts and preferences</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mx-6 mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-4 flex space-x-3">
        <AlertCircle className="w-5 h-5 text-[#1A73E8] flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm text-[#0D253F] mb-1">Smart Matching Active</p>
          <p className="text-xs text-gray-600">
            You'll receive notifications when opportunities match your enabled keywords and skills from your profile.
          </p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Category Settings */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#0D253F]">Notification Categories</h3>
            <span className="text-sm text-gray-500">
              {categories.filter(c => c.enabled).length}/{categories.length} enabled
            </span>
          </div>
          <div className="space-y-3">
            {categories.map((category) => (
              <div
                key={category.category}
                className="flex items-start space-x-3 p-3 bg-[#F5F9FF] rounded-xl"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  category.enabled ? getCategoryBadgeColor(category.category) : 'bg-gray-100 text-gray-400'
                }`}>
                  {category.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#0D253F] mb-0.5">{category.label}</p>
                  <p className="text-xs text-gray-600">{category.description}</p>
                </div>
                <button
                  onClick={() => toggleCategory(category.category)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                    category.enabled ? 'bg-[#1A73E8]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      category.enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Keyword Settings */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[#0D253F]">Skill Keywords</h3>
              <p className="text-xs text-gray-500 mt-1">
                Get notified when opportunities match these keywords
              </p>
            </div>
            <button
              onClick={() => setShowAddKeyword(true)}
              className="p-2 bg-[#1A73E8] text-white rounded-lg hover:bg-[#1557B0] transition-all"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {/* Add Keyword Form */}
          {showAddKeyword && (
            <div className="mb-4 p-4 bg-[#F5F9FF] rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-[#0D253F]">Add New Keyword</p>
                <button
                  onClick={() => {
                    setShowAddKeyword(false);
                    setNewKeyword('');
                  }}
                  className="p-1 hover:bg-gray-200 rounded transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <input
                type="text"
                placeholder="e.g., React, Python, AI/ML"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 outline-none focus:border-[#1A73E8]"
              />
              <select
                value={newKeywordCategory}
                onChange={(e) => setNewKeywordCategory(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 outline-none focus:border-[#1A73E8]"
              >
                <option value="all">All Categories</option>
                <option value="jobs">Jobs Only</option>
                <option value="internships">Internships Only</option>
                <option value="competitions">Competitions Only</option>
                <option value="certifications">Certifications Only</option>
              </select>
              <button
                onClick={addKeyword}
                className="w-full py-2 bg-[#1A73E8] text-white rounded-lg hover:bg-[#1557B0] transition-all"
              >
                Add Keyword
              </button>
            </div>
          )}

          {/* Keywords List */}
          <div className="space-y-2">
            {keywords.map((keyword) => (
              <div
                key={keyword.id}
                className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                  keyword.enabled ? 'bg-[#E3F2FD]' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3 flex-1">
                  <Tag className={`w-4 h-4 ${keyword.enabled ? 'text-[#1A73E8]' : 'text-gray-400'}`} />
                  <div className="flex-1">
                    <p className={`text-sm ${keyword.enabled ? 'text-[#0D253F]' : 'text-gray-500'}`}>
                      {keyword.keyword}
                    </p>
                    <p className="text-xs text-gray-500 capitalize">
                      {keyword.category === 'all' ? 'All categories' : keyword.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleKeyword(keyword.id)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      keyword.enabled ? 'bg-[#1A73E8]' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        keyword.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <button
                    onClick={() => deleteKeyword(keyword.id)}
                    className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {keywords.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Tag className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p className="text-sm">No keywords added yet</p>
              <p className="text-xs mt-1">Add keywords to get personalized notifications</p>
            </div>
          )}
        </div>

        {/* Profile Skills Link */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-start space-x-3 mb-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1">Enhance Your Matches</h3>
              <p className="text-sm opacity-90 mb-3">
                Update your profile with more skills, certifications, and experience to get better opportunity recommendations.
              </p>
              <button
                onClick={() => navigate(userRole === 'student' ? 'student-skills' : 'teacher-dashboard')}
                className="px-4 py-2 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-all text-sm"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
