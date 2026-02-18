import { ArrowLeft, TrendingUp, Users, Award, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Screen } from '../App';

interface TeacherClassAnalyticsProps {
  navigate: (screen: Screen) => void;
}

const subjectWiseData = [
  { subject: 'Data Structures', average: 78, highest: 95, lowest: 45 },
  { subject: 'Algorithms', average: 82, highest: 98, lowest: 52 },
  { subject: 'DBMS', average: 75, highest: 92, lowest: 41 },
  { subject: 'Computer Networks', average: 80, highest: 94, lowest: 48 },
];

const gradeDistribution = [
  { name: 'A+', value: 25, color: '#10B981' },
  { name: 'A', value: 35, color: '#3B82F6' },
  { name: 'B+', value: 20, color: '#F59E0B' },
  { name: 'B', value: 15, color: '#EF4444' },
  { name: 'Below B', value: 5, color: '#6B7280' },
];

const attendanceTrend = [
  { month: 'Aug', attendance: 82 },
  { month: 'Sep', attendance: 85 },
  { month: 'Oct', attendance: 87 },
  { month: 'Nov', attendance: 84 },
  { month: 'Dec', attendance: 86 },
  { month: 'Jan', attendance: 88 },
];

const performanceComparison = [
  { category: 'Assignments', classAvg: 85, prevBatch: 80 },
  { category: 'Mid-term', classAvg: 78, prevBatch: 75 },
  { category: 'Projects', classAvg: 88, prevBatch: 82 },
  { category: 'End-term', classAvg: 82, prevBatch: 79 },
  { category: 'Lab Work', classAvg: 90, prevBatch: 85 },
];

export function TeacherClassAnalytics({ navigate }: TeacherClassAnalyticsProps) {
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
        <h1 className="text-2xl mb-2">Class Analytics</h1>
        <p className="text-blue-100">Comprehensive performance insights</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm opacity-90">Avg CGPA</p>
                <p className="text-2xl">7.9</p>
              </div>
            </div>
            <div className="text-xs opacity-75">↑ 4.2% from last semester</div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-5 text-white shadow-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm opacity-90">Pass Rate</p>
                <p className="text-2xl">94%</p>
              </div>
            </div>
            <div className="text-xs opacity-75">↑ 3.1% from last semester</div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-5 text-white shadow-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm opacity-90">Top Scorer</p>
                <p className="text-2xl">9.2</p>
              </div>
            </div>
            <div className="text-xs opacity-75">Rahul Kumar</div>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-5 text-white shadow-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm opacity-90">At Risk</p>
                <p className="text-2xl">8</p>
              </div>
            </div>
            <div className="text-xs opacity-75">Students below 60%</div>
          </div>
        </div>

        {/* Subject-wise Performance */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Subject-wise Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={subjectWiseData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E3F2FD" />
              <XAxis dataKey="subject" stroke="#0D253F" fontSize={10} angle={-15} textAnchor="end" height={80} />
              <YAxis domain={[0, 100]} stroke="#0D253F" fontSize={12} />
              <Tooltip />
              <Legend />
              <Bar dataKey="average" fill="#1A73E8" name="Average" radius={[8, 8, 0, 0]} />
              <Bar dataKey="highest" fill="#10B981" name="Highest" radius={[8, 8, 0, 0]} />
              <Bar dataKey="lowest" fill="#EF4444" name="Lowest" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Grade Distribution */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Grade Distribution</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={gradeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  dataKey="value"
                >
                  {gradeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-5 gap-2 mt-4">
            {gradeDistribution.map((grade, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-2 rounded-full mb-1" style={{ backgroundColor: grade.color }} />
                <p className="text-xs text-gray-600">{grade.name}</p>
                <p className="text-sm text-[#0D253F]">{grade.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance Trend */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Attendance Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={attendanceTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E3F2FD" />
              <XAxis dataKey="month" stroke="#0D253F" fontSize={12} />
              <YAxis domain={[75, 95]} stroke="#0D253F" fontSize={12} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="attendance"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ fill: '#10B981', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Comparison */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Current vs Previous Batch</h3>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={performanceComparison}>
              <PolarGrid stroke="#E3F2FD" />
              <PolarAngleAxis dataKey="category" stroke="#0D253F" fontSize={11} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#0D253F" fontSize={10} />
              <Radar name="Current Batch" dataKey="classAvg" stroke="#1A73E8" fill="#1A73E8" fillOpacity={0.6} />
              <Radar name="Previous Batch" dataKey="prevBatch" stroke="#94C5F8" fill="#94C5F8" fillOpacity={0.3} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
          <p className="text-xs text-center text-green-600 mt-2">
            ↑ Current batch performing 6.3% better overall
          </p>
        </div>

        {/* Performance Distribution */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">CGPA Distribution</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 w-20">9.0 - 10</span>
              <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full flex items-center justify-end pr-2" style={{ width: '16%' }}>
                  <span className="text-xs text-white">25</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 w-20">8.0 - 8.9</span>
              <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full flex items-center justify-end pr-2" style={{ width: '35%' }}>
                  <span className="text-xs text-white">55</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 w-20">7.0 - 7.9</span>
              <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 rounded-full flex items-center justify-end pr-2" style={{ width: '28%' }}>
                  <span className="text-xs text-white">44</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 w-20">6.0 - 6.9</span>
              <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full flex items-center justify-end pr-2" style={{ width: '15%' }}>
                  <span className="text-xs text-white">24</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 w-20">&lt; 6.0</span>
              <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full flex items-center justify-end pr-2" style={{ width: '5%' }}>
                  <span className="text-xs text-white">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg">
          <h3 className="mb-4">AI-Powered Insights</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-2">
              <span>💡</span>
              <p>Students in DBMS subject need additional support - consider extra tutoring sessions</p>
            </div>
            <div className="flex items-start space-x-2">
              <span>📊</span>
              <p>Overall class performance is 6.3% better than previous batch - keep up the good work!</p>
            </div>
            <div className="flex items-start space-x-2">
              <span>⚠️</span>
              <p>8 students are at risk of failing - early intervention recommended</p>
            </div>
            <div className="flex items-start space-x-2">
              <span>✨</span>
              <p>Attendance has improved by 7% since August - positive trend!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}