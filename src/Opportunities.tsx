import { useState } from 'react';
import { Briefcase, Award, Trophy, GraduationCap, MapPin, Clock, TrendingUp, Filter, Search, ArrowLeft, Calendar, Building2, Users } from 'lucide-react';
import { Screen, UserRole, StudentType } from '../App';

interface OpportunitiesProps {
  navigate: (screen: Screen) => void;
  userRole: UserRole;
  studentType?: StudentType;
}

type OpportunityTab = 'jobs' | 'internships' | 'competitions' | 'certifications' | 'colleges';

interface Opportunity {
  id: string;
  type: OpportunityTab;
  title: string;
  organization: string;
  location?: string;
  requiredSkills: string[];
  eligibility: string;
  lastDate: string;
  stipend?: string;
  duration?: string;
  prize?: string;
  matchPercentage: number;
  recommended?: boolean;
}

const opportunities: Opportunity[] = [
  {
    id: '1',
    type: 'jobs',
    title: 'Software Engineer',
    organization: 'Google India',
    location: 'Bangalore, Karnataka',
    requiredSkills: ['React', 'Node.js', 'Python', 'System Design'],
    eligibility: 'B.Tech/M.Tech • CGPA ≥ 7.0',
    lastDate: '2025-12-15',
    stipend: '₹18-25 LPA',
    matchPercentage: 92,
    recommended: true,
  },
  {
    id: '2',
    type: 'internships',
    title: 'Machine Learning Intern',
    organization: 'Microsoft Research',
    location: 'Hyderabad, Telangana',
    requiredSkills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning'],
    eligibility: 'Final Year Students • CGPA ≥ 8.0',
    lastDate: '2025-12-01',
    stipend: '₹50,000/month',
    duration: '6 months',
    matchPercentage: 88,
    recommended: true,
  },
  {
    id: '3',
    type: 'competitions',
    title: 'Smart India Hackathon 2025',
    organization: 'Ministry of Education, Govt of India',
    location: 'Online + Finals in Delhi',
    requiredSkills: ['Problem Solving', 'Full Stack Development', 'Innovation'],
    eligibility: 'College Students • Team of 6',
    lastDate: '2025-11-30',
    prize: '₹1,00,000 + Internship',
    matchPercentage: 95,
    recommended: true,
  },
  {
    id: '4',
    type: 'certifications',
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    location: 'Online',
    requiredSkills: ['Cloud Computing', 'AWS Services', 'Architecture Design'],
    eligibility: 'Open to all',
    lastDate: '2025-12-31',
    duration: '3 months prep + exam',
    matchPercentage: 75,
  },
  {
    id: '5',
    type: 'internships',
    title: 'Data Science Intern',
    organization: 'Flipkart',
    location: 'Bangalore, Karnataka',
    requiredSkills: ['Python', 'SQL', 'Statistics', 'Data Analysis'],
    eligibility: 'Pre-final & Final Year • CGPA ≥ 7.5',
    lastDate: '2025-12-10',
    stipend: '₹40,000/month',
    duration: '4-6 months',
    matchPercentage: 85,
  },
  {
    id: '6',
    type: 'jobs',
    title: 'Frontend Developer',
    organization: 'Zomato',
    location: 'Gurugram, Haryana',
    requiredSkills: ['React', 'JavaScript', 'CSS', 'UI/UX'],
    eligibility: 'B.Tech/B.Sc • 0-2 years exp',
    lastDate: '2025-12-20',
    stipend: '₹10-15 LPA',
    matchPercentage: 78,
  },
  {
    id: '7',
    type: 'competitions',
    title: 'ACM ICPC Regionals',
    organization: 'Association for Computing Machinery',
    location: 'Kanpur, Uttar Pradesh',
    requiredSkills: ['Algorithms', 'Data Structures', 'Competitive Programming'],
    eligibility: 'College Students • Team of 3',
    lastDate: '2025-11-25',
    prize: 'World Finals Qualification',
    matchPercentage: 82,
  },
  {
    id: '8',
    type: 'certifications',
    title: 'Google Cloud Professional',
    organization: 'Google Cloud',
    location: 'Online',
    requiredSkills: ['GCP', 'Cloud Architecture', 'DevOps'],
    eligibility: 'Open to all',
    lastDate: '2025-12-31',
    duration: '2 months',
    matchPercentage: 70,
  },
  // College Recommendations for School Students
  {
    id: '9',
    type: 'colleges',
    title: 'IIT Delhi - B.Tech Computer Science',
    organization: 'Indian Institute of Technology, Delhi',
    location: 'New Delhi',
    requiredSkills: ['JEE Advanced', 'Physics', 'Chemistry', 'Mathematics'],
    eligibility: 'Class 12 Pass • JEE Advanced Rank',
    lastDate: '2026-06-15',
    stipend: 'Top-tier placement: ₹20-45 LPA',
    duration: '4 years',
    matchPercentage: 92,
    recommended: true,
  },
  {
    id: '10',
    type: 'colleges',
    title: 'BITS Pilani - B.E. Computer Science',
    organization: 'Birla Institute of Technology and Science',
    location: 'Pilani, Rajasthan',
    requiredSkills: ['BITSAT', 'PCM', 'Problem Solving'],
    eligibility: 'Class 12 Pass • 75% in PCM',
    lastDate: '2026-06-20',
    stipend: 'Avg placement: ₹15-30 LPA',
    duration: '4 years',
    matchPercentage: 89,
    recommended: true,
  },
  {
    id: '11',
    type: 'colleges',
    title: 'NIT Trichy - B.Tech CSE',
    organization: 'National Institute of Technology',
    location: 'Tiruchirappalli, Tamil Nadu',
    requiredSkills: ['JEE Main', 'Mathematics', 'Physics', 'Chemistry'],
    eligibility: 'Class 12 Pass • JEE Main Rank',
    lastDate: '2026-06-25',
    stipend: 'Avg placement: ₹12-25 LPA',
    duration: '4 years',
    matchPercentage: 87,
    recommended: true,
  },
  {
    id: '12',
    type: 'colleges',
    title: 'Delhi University - B.Sc Computer Science',
    organization: 'University of Delhi',
    location: 'New Delhi',
    requiredSkills: ['Mathematics', 'Computer Science', 'English'],
    eligibility: 'Class 12 Pass • 90%+ in PCM/CS',
    lastDate: '2026-07-10',
    stipend: 'Avg placement: ₹6-12 LPA',
    duration: '3 years',
    matchPercentage: 85,
  },
  {
    id: '13',
    type: 'colleges',
    title: 'VIT Vellore - B.Tech CSE',
    organization: 'Vellore Institute of Technology',
    location: 'Vellore, Tamil Nadu',
    requiredSkills: ['VITEEE', 'Physics', 'Chemistry', 'Mathematics'],
    eligibility: 'Class 12 Pass • 60%+ in PCM',
    lastDate: '2026-06-30',
    stipend: 'Avg placement: ₹7-18 LPA',
    duration: '4 years',
    matchPercentage: 83,
  },
  {
    id: '14',
    type: 'colleges',
    title: 'IIIT Hyderabad - B.Tech CSE',
    organization: 'International Institute of Information Technology',
    location: 'Hyderabad, Telangana',
    requiredSkills: ['JEE Main', 'Coding', 'Mathematics'],
    eligibility: 'Class 12 Pass • JEE Main/UGEE',
    lastDate: '2026-06-18',
    stipend: 'Avg placement: ₹16-32 LPA',
    duration: '4 years',
    matchPercentage: 90,
    recommended: true,
  },
];

export function Opportunities({ navigate, userRole, studentType }: OpportunitiesProps) {
  const isSchoolStudent = studentType === 'school';
  const [activeTab, setActiveTab] = useState<OpportunityTab>(isSchoolStudent ? 'colleges' : 'jobs');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredOpportunities = opportunities.filter(
    (opp) => opp.type === activeTab &&
    (searchQuery === '' || 
     opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     opp.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
     opp.requiredSkills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const recommendedCount = filteredOpportunities.filter(opp => opp.recommended).length;

  return (
    <div className="min-h-screen bg-[#F5F9FF] pb-24">
      {/* Header */}
      <div className="bg-[#1A73E8] text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate(userRole === 'student' ? 'student-dashboard' : 'teacher-dashboard')}
              className="p-2 hover:bg-white/10 rounded-lg transition-all"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl">Opportunities</h1>
              <p className="text-blue-100 text-sm">Find your next step</p>
            </div>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 hover:bg-white/10 rounded-lg transition-all"
          >
            <Filter className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center space-x-3">
          <Search className="w-5 h-5 text-white/70" />
          <input
            type="text"
            placeholder="Search opportunities, skills, companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-white/70 outline-none"
          />
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
          {/* Hide Jobs and Internships for school students */}
          {!isSchoolStudent && (
            <>
              <button
                onClick={() => setActiveTab('jobs')}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center space-x-2 ${
                  activeTab === 'jobs'
                    ? 'bg-white text-[#1A73E8]'
                    : 'bg-white/10 text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Jobs</span>
              </button>
              <button
                onClick={() => setActiveTab('internships')}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center space-x-2 ${
                  activeTab === 'internships'
                    ? 'bg-white text-[#1A73E8]'
                    : 'bg-white/10 text-white'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Internships</span>
              </button>
            </>
          )}
          
          {/* Show College Recommendations for school students */}
          {isSchoolStudent && (
            <button
              onClick={() => setActiveTab('colleges')}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center space-x-2 ${
                activeTab === 'colleges'
                  ? 'bg-white text-[#1A73E8]'
                  : 'bg-white/10 text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>College Recommendations</span>
            </button>
          )}
          
          <button
            onClick={() => setActiveTab('competitions')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center space-x-2 ${
              activeTab === 'competitions'
                ? 'bg-white text-[#1A73E8]'
                : 'bg-white/10 text-white'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Competitions</span>
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center space-x-2 ${
              activeTab === 'certifications'
                ? 'bg-white text-[#1A73E8]'
                : 'bg-white/10 text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Certifications</span>
          </button>
        </div>
      </div>

      {/* Recommended Banner */}
      {recommendedCount > 0 && (
        <div className="mx-6 mt-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm opacity-90">Based on your profile</p>
              <p>{recommendedCount} Recommended {activeTab}</p>
            </div>
          </div>
        </div>
      )}

      {/* Opportunities List */}
      <div className="p-6 space-y-4">
        {filteredOpportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className={`bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all ${
              opportunity.recommended ? 'border-2 border-green-500' : ''
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-[#0D253F]">{opportunity.title}</h3>
                  {opportunity.recommended && (
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Building2 className="w-4 h-4" />
                  <span>{opportunity.organization}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[#1A73E8] mb-1">
                  {opportunity.matchPercentage}%
                </div>
                <div className="text-xs text-gray-500">Match</div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 mb-4">
              {opportunity.location && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{opportunity.location}</span>
                </div>
              )}
              {(opportunity.stipend || opportunity.prize) && (
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <Award className="w-4 h-4" />
                  <span>{opportunity.stipend || opportunity.prize}</span>
                </div>
              )}
              {opportunity.duration && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{opportunity.duration}</span>
                </div>
              )}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Apply by: {new Date(opportunity.lastDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>{opportunity.eligibility}</span>
              </div>
            </div>

            {/* Required Skills */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">Required Skills:</p>
              <div className="flex flex-wrap gap-2">
                {opportunity.requiredSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#E3F2FD] text-[#1A73E8] text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <button className="flex-1 py-2.5 bg-[#1A73E8] text-white rounded-xl hover:bg-[#1557B0] transition-all">
                Apply Now
              </button>
              <button className="px-4 py-2.5 border-2 border-[#1A73E8] text-[#1A73E8] rounded-xl hover:bg-[#E3F2FD] transition-all">
                View Details
              </button>
            </div>
          </div>
        ))}

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600">No {activeTab} found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
}