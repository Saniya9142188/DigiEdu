import { ArrowLeft, Search, TrendingUp, FileText, MessageSquare, Plus, Eye } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Screen } from '../App';
import { useState } from 'react';

interface TeacherStudentPerformanceProps {
  navigate: (screen: Screen) => void;
}

const students = [
  { id: 1, name: 'Rahul Kumar', rollNo: 'CS2021-045', cgpa: 8.8, attendance: 92, grade: 'A' },
  { id: 2, name: 'Priya Patel', rollNo: 'CS2021-023', cgpa: 8.6, attendance: 88, grade: 'A' },
  { id: 3, name: 'Amit Singh', rollNo: 'CS2021-012', cgpa: 8.4, attendance: 85, grade: 'A' },
  { id: 4, name: 'Sneha Reddy', rollNo: 'CS2021-067', cgpa: 7.9, attendance: 78, grade: 'B+' },
  { id: 5, name: 'Aakash Verma', rollNo: 'CS2021-089', cgpa: 7.2, attendance: 68, grade: 'B' },
];

const selectedStudentData = {
  name: 'Rahul Kumar',
  rollNo: 'CS2021-045',
  cgpa: 8.8,
  attendance: 92,
  cgpaProgress: [
    { semester: 'Sem 1', cgpa: 7.8 },
    { semester: 'Sem 2', cgpa: 8.1 },
    { semester: 'Sem 3', cgpa: 8.4 },
    { semester: 'Sem 4', cgpa: 8.6 },
    { semester: 'Sem 5', cgpa: 8.8 },
  ],
  subjectPerformance: [
    { subject: 'Technical', score: 90 },
    { subject: 'Theory', score: 85 },
    { subject: 'Practical', score: 92 },
    { subject: 'Projects', score: 88 },
    { subject: 'Assignments', score: 95 },
  ]
};

export function TeacherStudentPerformance({ navigate }: TeacherStudentPerformanceProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedStudent !== null) {
    return (
      <div className="min-h-screen bg-[#F5F9FF] pb-6">
        {/* Header */}
        <div className="bg-[#1A73E8] text-white p-6 rounded-b-3xl shadow-lg">
          <button
            onClick={() => setSelectedStudent(null)}
            className="mb-4 p-2 hover:bg-white/10 rounded-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl mb-2">{selectedStudentData.name}</h1>
          <p className="text-blue-100">{selectedStudentData.rollNo}</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
              <p className="text-2xl text-[#1A73E8]">{selectedStudentData.cgpa}</p>
              <p className="text-xs text-gray-600 mt-1">CGPA</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
              <p className="text-2xl text-green-600">{selectedStudentData.attendance}%</p>
              <p className="text-xs text-gray-600 mt-1">Attendance</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
              <p className="text-2xl text-yellow-600">A</p>
              <p className="text-xs text-gray-600 mt-1">Grade</p>
            </div>
          </div>

          {/* CGPA Progress */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-[#0D253F] mb-4">CGPA Progress</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={selectedStudentData.cgpaProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E3F2FD" />
                <XAxis dataKey="semester" stroke="#0D253F" fontSize={12} />
                <YAxis domain={[7, 9]} stroke="#0D253F" fontSize={12} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="cgpa"
                  stroke="#1A73E8"
                  strokeWidth={3}
                  dot={{ fill: '#1A73E8', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Radar */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-[#0D253F] mb-4">Performance Analysis</h3>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={selectedStudentData.subjectPerformance}>
                <PolarGrid stroke="#E3F2FD" />
                <PolarAngleAxis dataKey="subject" stroke="#0D253F" fontSize={12} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#0D253F" fontSize={10} />
                <Radar dataKey="score" stroke="#1A73E8" fill="#1A73E8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-[#1A73E8] text-white py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-[#0D47A1] transition-all">
              <Plus className="w-5 h-5" />
              <span>Add Marks</span>
            </button>
            <button className="bg-white border-2 border-[#1A73E8] text-[#1A73E8] py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-[#F5F9FF] transition-all">
              <MessageSquare className="w-5 h-5" />
              <span>Add Remark</span>
            </button>
          </div>

          {/* Recent Remarks */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-[#0D253F] mb-4">Teacher Remarks</h3>
            <div className="space-y-3">
              <div className="p-4 bg-[#F5F9FF] rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-600">15 Jan 2024</span>
                  <span className="text-xs text-[#1A73E8]">Prof. Priya Sharma</span>
                </div>
                <p className="text-sm text-gray-700">
                  Excellent performance in the mid-term exam. Shows strong understanding of core concepts.
                </p>
              </div>
              <div className="p-4 bg-[#F5F9FF] rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-600">05 Jan 2024</span>
                  <span className="text-xs text-[#1A73E8]">Prof. Raj Kumar</span>
                </div>
                <p className="text-sm text-gray-700">
                  Good project work. Creative approach to problem-solving.
                </p>
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-[#0D253F] mb-4">Upload Documents</h3>
            <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-[#1A73E8] hover:text-[#1A73E8] transition-all flex items-center justify-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Upload Marksheet or Certificate</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F9FF] pb-6">
      {/* Header */}
      <div className="bg-[#1A73E8] text-white p-6 rounded-b-3xl shadow-lg">
        <button
          onClick={() => navigate('teacher-dashboard')}
          className="mb-4 p-2 hover:bg-white/10 rounded-lg transition-all"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl mb-2">Student Performance</h1>
        <p className="text-blue-100">View and manage student records</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search students by name or roll number..."
            className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#1A73E8] focus:outline-none"
          />
        </div>

        {/* Class Summary */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Class Summary</h3>
          <div className="grid grid-cols-4 gap-3">
            <div className="text-center p-3 bg-[#F5F9FF] rounded-xl">
              <p className="text-2xl text-[#1A73E8]">156</p>
              <p className="text-xs text-gray-600 mt-1">Total</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-xl">
              <p className="text-2xl text-green-600">7.9</p>
              <p className="text-xs text-gray-600 mt-1">Avg CGPA</p>
            </div>
            <div className="text-center p-3 bg-yellow-50 rounded-xl">
              <p className="text-2xl text-yellow-600">85%</p>
              <p className="text-xs text-gray-600 mt-1">Attendance</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-xl">
              <p className="text-2xl text-blue-600">94%</p>
              <p className="text-xs text-gray-600 mt-1">Pass Rate</p>
            </div>
          </div>
        </div>

        {/* Student List */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Students</h3>
          <div className="space-y-3">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                onClick={() => setSelectedStudent(student.id)}
                className="p-4 border-2 border-gray-100 rounded-xl hover:border-[#1A73E8] hover:bg-[#F5F9FF] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm text-[#0D253F]">{student.name}</p>
                    <p className="text-xs text-gray-600">{student.rollNo}</p>
                  </div>
                  <Eye className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-4">
                    <span className="text-[#1A73E8]">CGPA: {student.cgpa}</span>
                    <span className={student.attendance >= 75 ? 'text-green-600' : 'text-red-600'}>
                      Attendance: {student.attendance}%
                    </span>
                  </div>
                  <span className={`px-2 py-1 rounded ${
                    student.grade === 'A' 
                      ? 'bg-green-100 text-green-700' 
                      : student.grade === 'B+' 
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {student.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Filters */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Quick Filters</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 bg-[#F5F9FF] rounded-xl text-sm text-[#0D253F] hover:bg-[#E3F2FD] transition-all">
              Top Performers
            </button>
            <button className="py-3 bg-[#F5F9FF] rounded-xl text-sm text-[#0D253F] hover:bg-[#E3F2FD] transition-all">
              Low Attendance
            </button>
            <button className="py-3 bg-[#F5F9FF] rounded-xl text-sm text-[#0D253F] hover:bg-[#E3F2FD] transition-all">
              Below Average
            </button>
            <button className="py-3 bg-[#F5F9FF] rounded-xl text-sm text-[#0D253F] hover:bg-[#E3F2FD] transition-all">
              Need Attention
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
