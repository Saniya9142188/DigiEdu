import { useState } from 'react';
import { ArrowLeft, Send, Bot, User, Lightbulb, Briefcase, TrendingUp, FileText, GraduationCap } from 'lucide-react';
import { Screen, UserRole } from '../App';

interface AIAssistantProps {
  navigate: (screen: Screen) => void;
  userRole: UserRole;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  prompt: string;
}

export function AIAssistant({ navigate, userRole }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hi ${userRole === 'student' ? 'Rahul' : 'Dr. Sharma'}! 👋 I'm your EduTrack AI Assistant. I can help you with:\n\n• Finding job and internship opportunities\n• Resume and profile optimization\n• Career guidance and skill recommendations\n• Academic planning and resources\n• Government schemes and scholarships\n\nHow can I assist you today?`,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickActions: QuickAction[] = userRole === 'student' 
    ? [
        {
          icon: <Briefcase className="w-4 h-4" />,
          label: 'Find Jobs',
          prompt: 'Show me job opportunities that match my profile',
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          label: 'Internships',
          prompt: 'What are the best internship opportunities for me?',
        },
        {
          icon: <FileText className="w-4 h-4" />,
          label: 'Resume Tips',
          prompt: 'How can I improve my resume and profile?',
        },
        {
          icon: <GraduationCap className="w-4 h-4" />,
          label: 'Skill Growth',
          prompt: 'What skills should I learn to advance my career?',
        },
      ]
    : [
        {
          icon: <Users className="w-4 h-4" />,
          label: 'Student Analytics',
          prompt: 'Show me insights about my students\' performance',
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          label: 'Teaching Tips',
          prompt: 'Give me tips to improve student engagement',
        },
        {
          icon: <FileText className="w-4 h-4" />,
          label: 'Assessment',
          prompt: 'Help me create an effective assessment strategy',
        },
        {
          icon: <Lightbulb className="w-4 h-4" />,
          label: 'Resources',
          prompt: 'Suggest teaching resources for my subject',
        },
      ];

  const generateResponse = (userMessage: string): string => {
    const messageLower = userMessage.toLowerCase();
    
    if (messageLower.includes('job') || messageLower.includes('opportunity')) {
      return `Based on your profile with skills in React, Node.js, and Python, I found several great opportunities:\n\n🎯 **Highly Matched (92%)**\n• Software Engineer at Google India\n• Frontend Developer at Zomato\n• Full Stack Developer at Flipkart\n\nThese positions align perfectly with your CGPA of 8.8 and project experience. Would you like me to show you the detailed requirements?`;
    }
    
    if (messageLower.includes('internship')) {
      return `Great! I found 3 excellent internship opportunities matching your profile:\n\n🌟 **Top Picks**\n1. Machine Learning Intern at Microsoft Research (88% match)\n   • Skills: Python, TensorFlow, Deep Learning\n   • Stipend: ₹50,000/month\n\n2. Data Science Intern at Flipkart (85% match)\n   • Skills: Python, SQL, Statistics\n   • Stipend: ₹40,000/month\n\nShall I navigate you to the Opportunities section to apply?`;
    }
    
    if (messageLower.includes('resume') || messageLower.includes('profile')) {
      return `Here are personalized tips to enhance your profile:\n\n✅ **Strengths**\n• Strong CGPA (8.8) - Excellent!\n• 15 projects showcased\n• Good skill diversity\n\n💡 **Recommendations**\n1. Add more certifications (AWS, GCP)\n2. Update your latest projects with live links\n3. Add quantifiable achievements\n4. Complete your LinkedIn profile\n5. Request recommendations from professors\n\nWould you like help with any specific section?`;
    }
    
    if (messageLower.includes('skill') || messageLower.includes('learn')) {
      return `Based on market trends and your current profile, here are recommended skills to learn:\n\n🔥 **High Demand Skills**\n1. **Cloud Computing** (AWS/Azure)\n   • 45% increase in job postings\n   • Avg salary boost: 30%\n\n2. **System Design**\n   • Essential for senior roles\n   • Asked in 90% of interviews\n\n3. **Docker & Kubernetes**\n   • DevOps integration\n   • Growing demand\n\n4. **GraphQL & Microservices**\n   • Modern architecture\n   • High-paying roles\n\nI can recommend specific courses for each. Interested?`;
    }

    if (messageLower.includes('scholarship') || messageLower.includes('scheme')) {
      return `You're eligible for several government schemes:\n\n💰 **Available Schemes**\n1. **National Scholarship Portal**\n   • Amount: ₹50,000/year\n   • Eligibility: ✅ CGPA > 8.0\n\n2. **Post Matric Scholarship**\n   • Amount: ₹20,000/year\n   • Eligibility: ✅ Income criteria met\n\n3. **Merit-cum-Means Scholarship**\n   • Amount: ₹5,000\n   • Eligibility: ✅ Academic performance\n\nTotal potential: ₹75,000. Shall I help you with applications?`;
    }
    
    return `I understand you're asking about "${userMessage}". I can help you with:\n\n• Career opportunities and job search\n• Skill development and learning paths\n• Resume and profile optimization\n• Academic planning and resources\n• Government schemes and scholarships\n\nCould you please provide more details about what you'd like to know?`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(inputMessage);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (prompt: string) => {
    setInputMessage(prompt);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <div className="min-h-screen bg-[#F5F9FF] flex flex-col pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center space-x-3 mb-2">
          <button
            onClick={() => navigate(userRole === 'student' ? 'student-dashboard' : 'teacher-dashboard')}
            className="p-2 hover:bg-white/10 rounded-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl">AI Assistant</h1>
            <div className="flex items-center space-x-2 text-sm text-purple-100">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Online</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      {messages.length <= 1 && (
        <div className="p-6 space-y-3">
          <p className="text-sm text-gray-600 mb-2">Quick Actions:</p>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickAction(action.prompt)}
                className="flex items-center space-x-2 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-left"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  {action.icon}
                </div>
                <span className="text-sm text-[#0D253F]">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex space-x-3 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.role === 'user' 
                  ? 'bg-[#1A73E8] text-white' 
                  : 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white'
              }`}>
                {message.role === 'user' ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Bot className="w-4 h-4" />
                )}
              </div>
              
              {/* Message Bubble */}
              <div className={`rounded-2xl p-4 ${
                message.role === 'user'
                  ? 'bg-[#1A73E8] text-white'
                  : 'bg-white shadow-sm'
              }`}>
                <p className={`text-sm whitespace-pre-line ${
                  message.role === 'user' ? 'text-white' : 'text-[#0D253F]'
                }`}>
                  {message.content}
                </p>
                <p className={`text-xs mt-2 ${
                  message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString('en-IN', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex space-x-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex space-x-3 items-end">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl outline-none focus:border-[#1A73E8] bg-[#F5F9FF]"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="p-3 bg-[#1A73E8] text-white rounded-2xl hover:bg-[#1557B0] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Users icon import missing, adding it
import { Users } from 'lucide-react';
