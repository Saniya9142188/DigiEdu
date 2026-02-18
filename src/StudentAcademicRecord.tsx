import { ArrowLeft, TrendingUp, BookOpen, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { Screen } from '../App';

interface StudentAcademicRecordProps {
  navigate: (screen: Screen) => void;
}

const subjects = [
  { name: 'Data Structures', marks: 88, classAvg: 75, grade: 'A' },
  { name: 'Algorithms', marks: 92, classAvg: 78, grade: 'A+' },
  { name: 'Database Systems', marks: 85, classAvg: 72, grade: 'A' },
  { name: 'Computer Networks', marks: 90, classAvg: 76, grade: 'A+' },
  { name: 'Operating Systems', marks: 87, classAvg: 74, grade: 'A' },
  { name: 'Machine Learning', marks: 94, classAvg: 80, grade: 'A+' },
];

const radarData = [
  { subject: 'Technical', you: 90, classAvg: 75 },
  { subject: 'Theory', you: 85, classAvg: 78 },
  { subject: 'Practical', you: 92, classAvg: 72 },
  { subject: 'Projects', you: 88, classAvg: 70 },
  { subject: 'Assignments', you: 95, classAvg: 80 },
];

export function StudentAcademicRecord({ navigate }: StudentAcademicRecordProps) {
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
        <h1 className="text-2xl mb-2">Academic Record</h1>
        <p className="text-blue-100">Semester 5 • 2024-25</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <div className="w-10 h-10 bg-[#E3F2FD] rounded-full flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-5 h-5 text-[#1A73E8]" />
            </div>
            <p className="text-2xl text-[#0D253F]">8.8</p>
            <p className="text-xs text-gray-600">CGPA</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <BookOpen className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-2xl text-[#0D253F]">89%</p>
            <p className="text-xs text-gray-600">Average</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-2xl text-[#0D253F]">3rd</p>
            <p className="text-xs text-gray-600">Rank</p>
          </div>
        </div>

        {/* Subject-wise Performance */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Subject-wise Performance</h3>
          <div className="space-y-4">
            {subjects.map((subject, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#0D253F]">{subject.name}</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">{subject.marks}%</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      subject.grade === 'A+' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {subject.grade}
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#1A73E8] rounded-full"
                      style={{ width: `${subject.marks}%` }}
                    />
                  </div>
                  <div
                    className="absolute top-0 h-2 w-1 bg-orange-500"
                    style={{ left: `${subject.classAvg}%` }}
                    title={`Class Average: ${subject.classAvg}%`}
                  />
                </div>
                <p className="text-xs text-gray-500">Class Avg: {subject.classAvg}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">You vs Class Average</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={subjects.slice(0, 4)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E3F2FD" />
              <XAxis dataKey="name" stroke="#0D253F" fontSize={10} angle={-15} textAnchor="end" height={60} />
              <YAxis stroke="#0D253F" fontSize={12} />
              <Tooltip />
              <Legend />
              <Bar dataKey="marks" fill="#1A73E8" name="Your Marks" radius={[8, 8, 0, 0]} />
              <Bar dataKey="classAvg" fill="#94C5F8" name="Class Average" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Radar Chart - Performance Analysis */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Performance Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#E3F2FD" />
              <PolarAngleAxis dataKey="subject" stroke="#0D253F" fontSize={12} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#0D253F" fontSize={10} />
              <Radar name="You" dataKey="you" stroke="#1A73E8" fill="#1A73E8" fillOpacity={0.6} />
              <Radar name="Class Avg" dataKey="classAvg" stroke="#FFA726" fill="#FFA726" fillOpacity={0.3} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Exam Breakdown */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Marks Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-[#F5F9FF] rounded-xl">
              <div>
                <p className="text-sm text-[#0D253F]">Mid-term Exams</p>
                <p className="text-xs text-gray-600">40% weightage</p>
              </div>
              <p className="text-lg text-[#1A73E8]">87%</p>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#F5F9FF] rounded-xl">
              <div>
                <p className="text-sm text-[#0D253F]">End-term Exams</p>
                <p className="text-xs text-gray-600">40% weightage</p>
              </div>
              <p className="text-lg text-[#1A73E8]">91%</p>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#F5F9FF] rounded-xl">
              <div>
                <p className="text-sm text-[#0D253F]">Lab/Practical</p>
                <p className="text-xs text-gray-600">10% weightage</p>
              </div>
              <p className="text-lg text-[#1A73E8]">92%</p>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#F5F9FF] rounded-xl">
              <div>
                <p className="text-sm text-[#0D253F]">Assignments</p>
                <p className="text-xs text-gray-600">10% weightage</p>
              </div>
              <p className="text-lg text-[#1A73E8]">95%</p>
            </div>
          </div>
        </div>

        {/* Attendance */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Attendance Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#0D253F]">Overall Attendance</span>
              <span className="text-green-600">92%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full" style={{ width: '92%' }} />
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="text-center p-3 bg-green-50 rounded-xl">
                <p className="text-2xl text-green-600">138</p>
                <p className="text-xs text-gray-600">Classes Attended</p>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-xl">
                <p className="text-2xl text-red-600">12</p>
                <p className="text-xs text-gray-600">Classes Missed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
