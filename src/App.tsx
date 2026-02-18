import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { LoginScreen } from './components/LoginScreen';
import { StudentDashboard } from './components/StudentDashboard';
import { StudentAcademicRecord } from './components/StudentAcademicRecord';
import { StudentSkillProfile } from './components/StudentSkillProfile';
import { StudentProjectPortfolio } from './components/StudentProjectPortfolio';
import { StudentDocumentVault } from './components/StudentDocumentVault';
import { TeacherDashboard } from './components/TeacherDashboard';
import { TeacherStudentPerformance } from './components/TeacherStudentPerformance';
import { TeacherClassAnalytics } from './components/TeacherClassAnalytics';
import { TeacherAssignmentManagement } from './components/TeacherAssignmentManagement';
import { GovernmentSchemes } from './components/GovernmentSchemes';
import { Settings } from './components/Settings';
import { Opportunities } from './components/Opportunities';
import { AIAssistant } from './components/AIAssistant';
import { NotificationSettings } from './components/NotificationSettings';
import { NotificationsAndOpportunities } from './components/NotificationsAndOpportunities';
import { BottomNavigation } from './components/BottomNavigation';

export type UserRole = 'student' | 'teacher' | null;
export type StudentType = 'school' | 'college' | null;
export type Screen = 
  | 'welcome'
  | 'onboarding'
  | 'login'
  | 'student-dashboard'
  | 'student-academic'
  | 'student-skills'
  | 'student-projects'
  | 'student-documents'
  | 'teacher-dashboard'
  | 'teacher-student-performance'
  | 'teacher-analytics'
  | 'teacher-assignments'
  | 'government-schemes'
  | 'settings'
  | 'opportunities'
  | 'ai-assistant'
  | 'notification-settings'
  | 'notifications-opportunities';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [studentType, setStudentType] = useState<StudentType>(null);
  const [showOnboarding, setShowOnboarding] = useState(true);

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
    if (showOnboarding) {
      navigate('onboarding');
    } else {
      navigate('login');
    }
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    navigate('login');
  };

  const handleLoginSuccess = (type?: 'school' | 'college') => {
    if (userRole === 'student') {
      setStudentType(type || 'college');
      navigate('student-dashboard');
    } else {
      navigate('teacher-dashboard');
    }
  };

  const handleLogout = () => {
    setUserRole(null);
    setStudentType(null);
    setCurrentScreen('welcome');
  };

  // Determine if bottom navigation should be shown
  const showBottomNav = userRole !== null && currentScreen !== 'welcome' && currentScreen !== 'onboarding' && currentScreen !== 'login';

  return (
    <div className="min-h-screen bg-[#F5F9FF]">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onRoleSelect={handleRoleSelect} />
      )}
      {currentScreen === 'onboarding' && (
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      )}
      {currentScreen === 'login' && (
        <LoginScreen role={userRole} onLoginSuccess={handleLoginSuccess} onBack={() => navigate('welcome')} />
      )}
      {currentScreen === 'student-dashboard' && (
        <StudentDashboard navigate={navigate} onLogout={handleLogout} studentType={studentType} />
      )}
      {currentScreen === 'student-academic' && (
        <StudentAcademicRecord navigate={navigate} studentType={studentType} />
      )}
      {currentScreen === 'student-skills' && (
        <StudentSkillProfile navigate={navigate} studentType={studentType} />
      )}
      {currentScreen === 'student-projects' && (
        <StudentProjectPortfolio navigate={navigate} studentType={studentType} />
      )}
      {currentScreen === 'student-documents' && (
        <StudentDocumentVault navigate={navigate} studentType={studentType} />
      )}
      {currentScreen === 'teacher-dashboard' && (
        <TeacherDashboard navigate={navigate} onLogout={handleLogout} />
      )}
      {currentScreen === 'teacher-student-performance' && (
        <TeacherStudentPerformance navigate={navigate} />
      )}
      {currentScreen === 'teacher-analytics' && (
        <TeacherClassAnalytics navigate={navigate} />
      )}
      {currentScreen === 'teacher-assignments' && (
        <TeacherAssignmentManagement navigate={navigate} />
      )}
      {currentScreen === 'government-schemes' && (
        <GovernmentSchemes navigate={navigate} userRole={userRole} />
      )}
      {currentScreen === 'settings' && (
        <Settings navigate={navigate} userRole={userRole} onLogout={handleLogout} />
      )}
      {currentScreen === 'opportunities' && (
        <Opportunities navigate={navigate} userRole={userRole} studentType={studentType} />
      )}
      {currentScreen === 'ai-assistant' && (
        <AIAssistant navigate={navigate} userRole={userRole} />
      )}
      {currentScreen === 'notification-settings' && (
        <NotificationSettings navigate={navigate} userRole={userRole} />
      )}
      {currentScreen === 'notifications-opportunities' && (
        <NotificationsAndOpportunities navigate={navigate} userRole={userRole} studentType={studentType} />
      )}
      {showBottomNav && (
        <BottomNavigation currentScreen={currentScreen} navigate={navigate} userRole={userRole} />
      )}
    </div>
  );
}