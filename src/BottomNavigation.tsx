import { Home, Briefcase, FileText, Bot, User } from 'lucide-react';
import { Screen, UserRole } from '../App';

interface BottomNavigationProps {
  currentScreen: Screen;
  navigate: (screen: Screen) => void;
  userRole: UserRole;
}

export function BottomNavigation({ currentScreen, navigate, userRole }: BottomNavigationProps) {
  const isStudent = userRole === 'student';
  
  const navItems = [
    {
      icon: Home,
      label: 'Home',
      screen: isStudent ? 'student-dashboard' : 'teacher-dashboard',
      active: currentScreen === (isStudent ? 'student-dashboard' : 'teacher-dashboard'),
    },
    {
      icon: Briefcase,
      label: 'Opportunities',
      screen: 'opportunities',
      active: currentScreen === 'opportunities',
    },
    {
      icon: FileText,
      label: 'Documents',
      screen: isStudent ? 'student-documents' : 'teacher-assignments',
      active: currentScreen === (isStudent ? 'student-documents' : 'teacher-assignments'),
    },
    {
      icon: Bot,
      label: 'AI Assistant',
      screen: 'ai-assistant',
      active: currentScreen === 'ai-assistant',
    },
    {
      icon: User,
      label: 'Profile',
      screen: 'settings',
      active: currentScreen === 'settings',
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
      <div className="flex justify-around items-center px-2 py-2">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => navigate(item.screen as Screen)}
              className={`flex flex-col items-center justify-center space-y-1 px-3 py-2 rounded-xl transition-all flex-1 ${
                item.active
                  ? 'text-[#1A73E8] bg-[#E3F2FD]'
                  : 'text-gray-500 hover:text-[#1A73E8] hover:bg-gray-50'
              }`}
            >
              <Icon className={`w-5 h-5 ${item.active ? 'text-[#1A73E8]' : ''}`} />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
