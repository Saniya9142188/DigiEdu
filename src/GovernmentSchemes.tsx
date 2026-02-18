import { ArrowLeft, Gift, CheckCircle, Upload, ExternalLink, Award, TrendingUp } from 'lucide-react';
import { Screen, UserRole } from '../App';

interface GovernmentSchemesProps {
  navigate: (screen: Screen) => void;
  userRole: UserRole;
}

const schemes = [
  {
    id: 1,
    name: 'National Scholarship Portal (NSP)',
    description: 'Merit-based scholarship for undergraduate students',
    amount: '₹50,000/year',
    eligibility: 'CGPA > 8.5',
    provider: 'Ministry of Education',
    deadline: '31 Jan 2024',
    status: 'eligible',
    requirements: ['CGPA Certificate', 'Income Certificate', 'Aadhaar Card']
  },
  {
    id: 2,
    name: 'Post Matric Scholarship',
    description: 'Financial assistance for SC/ST students',
    amount: '₹12,000/year',
    eligibility: 'SC/ST Category',
    provider: 'Ministry of Social Justice',
    deadline: '15 Feb 2024',
    status: 'eligible',
    requirements: ['Caste Certificate', 'Income Certificate', 'Marksheet']
  },
  {
    id: 3,
    name: 'AICTE Pragati Scholarship',
    description: 'For girl students pursuing technical education',
    amount: '₹30,000/year',
    eligibility: 'Female, CGPA > 7.5',
    provider: 'AICTE',
    deadline: '28 Jan 2024',
    status: 'applied',
    requirements: ['CGPA Certificate', 'Gender Certificate', 'Bank Details']
  },
  {
    id: 4,
    name: 'Prime Minister Research Fellowship',
    description: 'Research fellowship for PhD/Masters students',
    amount: '₹80,000/month',
    eligibility: 'CGPA > 9.0',
    provider: 'Ministry of Education',
    deadline: '10 Feb 2024',
    status: 'not-eligible',
    requirements: ['Research Proposal', 'Recommendation Letter', 'Transcripts']
  }
];

export function GovernmentSchemes({ navigate, userRole }: GovernmentSchemesProps) {
  return (
    <div className="min-h-screen bg-[#F5F9FF] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-b-3xl shadow-lg">
        <button
          onClick={() => navigate(userRole === 'student' ? 'student-dashboard' : 'teacher-dashboard')}
          className="mb-4 p-2 hover:bg-white/10 rounded-lg transition-all"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl mb-2">Government Schemes</h1>
        <p className="text-green-100">Scholarships and benefits you're eligible for</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Eligibility Summary */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#0D253F]">Your Eligibility Status</h3>
              <p className="text-sm text-gray-600">Based on your academic profile</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-green-50 rounded-xl">
              <p className="text-2xl text-green-600">3</p>
              <p className="text-xs text-gray-600 mt-1">Eligible</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-xl">
              <p className="text-2xl text-blue-600">1</p>
              <p className="text-xs text-gray-600 mt-1">Applied</p>
            </div>
            <div className="text-center p-3 bg-yellow-50 rounded-xl">
              <p className="text-2xl text-yellow-600">₹75K</p>
              <p className="text-xs text-gray-600 mt-1">Potential</p>
            </div>
          </div>
        </div>

        {/* AI Recommendation */}
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="mb-2">AI Recommendation</h3>
              <p className="text-sm text-purple-100">
                You're eligible for ₹75,000 in scholarships this year! Apply to NSP and Post Matric schemes before the deadline.
              </p>
            </div>
          </div>
        </div>

        {/* Schemes List */}
        <div className="space-y-4">
          {schemes.map((scheme) => (
            <div key={scheme.id} className="bg-white rounded-2xl p-5 shadow-sm">
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-[#0D253F] mb-1">{scheme.name}</h3>
                  <p className="text-sm text-gray-600">{scheme.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-lg text-xs flex-shrink-0 ml-2 ${
                  scheme.status === 'eligible'
                    ? 'bg-green-100 text-green-700'
                    : scheme.status === 'applied'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {scheme.status === 'eligible' ? '✓ Eligible' : scheme.status === 'applied' ? 'Applied' : 'Not Eligible'}
                </span>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-gray-600">Amount</p>
                  <p className="text-[#1A73E8]">{scheme.amount}</p>
                </div>
                <div>
                  <p className="text-gray-600">Deadline</p>
                  <p className="text-red-600">{scheme.deadline}</p>
                </div>
                <div>
                  <p className="text-gray-600">Eligibility</p>
                  <p className="text-[#0D253F]">{scheme.eligibility}</p>
                </div>
                <div>
                  <p className="text-gray-600">Provider</p>
                  <p className="text-[#0D253F] text-xs">{scheme.provider}</p>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Required Documents:</p>
                <div className="flex flex-wrap gap-2">
                  {scheme.requirements.map((req, index) => (
                    <span key={index} className="text-xs bg-[#F5F9FF] text-gray-700 px-3 py-1 rounded-full">
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress (for applied schemes) */}
              {scheme.status === 'applied' && (
                <div className="mb-4 p-3 bg-blue-50 rounded-xl">
                  <div className="flex justify-between items-center mb-2 text-sm">
                    <span className="text-gray-700">Application Progress</span>
                    <span className="text-blue-600">75%</span>
                  </div>
                  <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '75%' }} />
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Under Review - Expected result by 5 Feb 2024</p>
                </div>
              )}

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3">
                {scheme.status === 'eligible' ? (
                  <>
                    <button className="py-2 bg-[#F5F9FF] text-[#1A73E8] rounded-xl text-sm hover:bg-[#E3F2FD] transition-all flex items-center justify-center space-x-1">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button className="py-2 bg-[#1A73E8] text-white rounded-xl text-sm hover:bg-[#0D47A1] transition-all flex items-center justify-center space-x-1">
                      <Upload className="w-4 h-4" />
                      <span>Apply Now</span>
                    </button>
                  </>
                ) : scheme.status === 'applied' ? (
                  <>
                    <button className="py-2 bg-[#F5F9FF] text-[#1A73E8] rounded-xl text-sm hover:bg-[#E3F2FD] transition-all">
                      Track Status
                    </button>
                    <button className="py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition-all flex items-center justify-center space-x-1">
                      <Upload className="w-4 h-4" />
                      <span>Upload Docs</span>
                    </button>
                  </>
                ) : (
                  <button className="col-span-2 py-2 bg-gray-200 text-gray-600 rounded-xl text-sm cursor-not-allowed">
                    Not Eligible
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Application Tips */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="mb-2">Application Tips</h3>
              <ul className="text-sm space-y-1 text-yellow-50">
                <li>• Keep all documents ready in PDF format</li>
                <li>• Apply at least 1 week before deadline</li>
                <li>• Ensure all certificates are verified</li>
                <li>• Save application reference numbers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Help & Support */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-3">Need Help?</h3>
          <div className="space-y-2 text-sm">
            <p className="text-gray-600">
              For queries related to government schemes and scholarships:
            </p>
            <div className="flex items-center space-x-2 text-[#1A73E8]">
              <span>📞 1800-11-8004 (Toll Free)</span>
            </div>
            <div className="flex items-center space-x-2 text-[#1A73E8]">
              <span>✉️ scholarships@gov.in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
