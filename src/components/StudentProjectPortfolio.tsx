import { ArrowLeft, Plus, Github, ExternalLink, Calendar, User } from 'lucide-react';
import { Screen } from '../App';

interface StudentProjectPortfolioProps {
  navigate: (screen: Screen) => void;
}

const projects = [
  {
    title: 'AI-Powered Chatbot',
    description: 'Built a conversational AI using NLP and deep learning techniques',
    technologies: ['Python', 'TensorFlow', 'Flask'],
    status: 'Completed',
    grade: 'A+',
    date: 'Jan 2024',
    githubUrl: 'github.com/rahul/ai-chatbot',
    feedback: 'Excellent implementation with creative approach to context handling.'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack web application with payment integration',
    technologies: ['React', 'Node.js', 'MongoDB'],
    status: 'Completed',
    grade: 'A',
    date: 'Nov 2023',
    githubUrl: 'github.com/rahul/ecommerce',
    feedback: 'Well-structured code and good UI/UX design.'
  },
  {
    title: 'Smart Campus System',
    description: 'IoT-based solution for campus management and monitoring',
    technologies: ['Arduino', 'Python', 'React'],
    status: 'In Progress',
    grade: null,
    date: 'Ongoing',
    githubUrl: 'github.com/rahul/smart-campus',
    feedback: null
  }
];

export function StudentProjectPortfolio({ navigate }: StudentProjectPortfolioProps) {
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
        <h1 className="text-2xl mb-2">Project Portfolio</h1>
        <p className="text-blue-100">Showcase your work and achievements</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Add Project Button */}
        <button className="w-full bg-gradient-to-r from-[#1A73E8] to-[#0D47A1] text-white py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add New Project</span>
        </button>

        {/* Project Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <p className="text-2xl text-[#0D253F]">15</p>
            <p className="text-xs text-gray-600 mt-1">Total Projects</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <p className="text-2xl text-green-600">12</p>
            <p className="text-xs text-gray-600 mt-1">Completed</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <p className="text-2xl text-orange-600">3</p>
            <p className="text-xs text-gray-600 mt-1">In Progress</p>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl p-5 shadow-sm">
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-[#0D253F] mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
                {project.grade && (
                  <span className={`px-3 py-1 rounded-lg text-sm ${
                    project.grade === 'A+' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.grade}
                  </span>
                )}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-[#E3F2FD] text-[#1A73E8] text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Status and Date */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${
                      project.status === 'Completed' ? 'bg-green-500' : 'bg-orange-500'
                    }`} />
                    <span>{project.status}</span>
                  </div>
                </div>
                <a
                  href={`https://${project.githubUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-[#1A73E8] text-xs hover:text-[#0D47A1]"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Teacher Feedback */}
              {project.feedback && (
                <div className="bg-[#F5F9FF] rounded-xl p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="w-4 h-4 text-[#1A73E8]" />
                    <span className="text-xs text-[#1A73E8]">Teacher Feedback</span>
                  </div>
                  <p className="text-sm text-gray-700">{project.feedback}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline View */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Project Timeline</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="w-0.5 h-12 bg-gray-200" />
              </div>
              <div className="flex-1 pb-4">
                <p className="text-sm text-[#0D253F]">AI-Powered Chatbot</p>
                <p className="text-xs text-gray-600">Jan 2024 - Completed</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="w-0.5 h-12 bg-gray-200" />
              </div>
              <div className="flex-1 pb-4">
                <p className="text-sm text-[#0D253F]">E-Commerce Platform</p>
                <p className="text-xs text-gray-600">Nov 2023 - Completed</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#0D253F]">Smart Campus System</p>
                <p className="text-xs text-gray-600">Ongoing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Categories */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Project Categories</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-[#F5F9FF] rounded-xl">
              <span className="text-sm text-[#0D253F]">Web Development</span>
              <span className="text-sm text-[#1A73E8]">6 projects</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#F5F9FF] rounded-xl">
              <span className="text-sm text-[#0D253F]">Machine Learning</span>
              <span className="text-sm text-[#1A73E8]">4 projects</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#F5F9FF] rounded-xl">
              <span className="text-sm text-[#0D253F]">IoT & Embedded</span>
              <span className="text-sm text-[#1A73E8]">3 projects</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#F5F9FF] rounded-xl">
              <span className="text-sm text-[#0D253F]">Mobile Apps</span>
              <span className="text-sm text-[#1A73E8]">2 projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
