import { ArrowLeft, Plus, Calendar, Users, FileText, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface TeacherAssignmentManagementProps {
  navigate: (screen: Screen) => void;
}

const assignments = [
  {
    id: 1,
    title: 'Data Structures Assignment 3',
    subject: 'Data Structures',
    dueDate: '25 Jan 2024',
    totalStudents: 156,
    submitted: 142,
    graded: 120,
    pending: 14,
    status: 'active'
  },
  {
    id: 2,
    title: 'Algorithm Design Project',
    subject: 'Algorithms',
    dueDate: '28 Jan 2024',
    totalStudents: 156,
    submitted: 98,
    graded: 45,
    pending: 58,
    status: 'active'
  },
  {
    id: 3,
    title: 'Database Normalization Exercise',
    subject: 'DBMS',
    dueDate: '20 Jan 2024',
    totalStudents: 156,
    submitted: 156,
    graded: 156,
    pending: 0,
    status: 'completed'
  }
];

const exams = [
  {
    id: 1,
    title: 'Mid-term Exam',
    subject: 'Data Structures',
    date: '30 Jan 2024',
    time: '10:00 AM - 12:00 PM',
    room: 'Room 301',
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'End-term Exam',
    subject: 'Algorithms',
    date: '15 Feb 2024',
    time: '2:00 PM - 4:00 PM',
    room: 'Room 205',
    status: 'upcoming'
  }
];

export function TeacherAssignmentManagement({ navigate }: TeacherAssignmentManagementProps) {
  const [activeTab, setActiveTab] = useState<'assignments' | 'exams'>('assignments');
  const [showCreateForm, setShowCreateForm] = useState(false);

  if (showCreateForm) {
    return (
      <div className="min-h-screen bg-[#F5F9FF] pb-6">
        {/* Header */}
        <div className="bg-[#1A73E8] text-white p-6 rounded-b-3xl shadow-lg">
          <button
            onClick={() => setShowCreateForm(false)}
            className="mb-4 p-2 hover:bg-white/10 rounded-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl mb-2">Create New Assignment</h1>
          <p className="text-blue-100">Fill in the details below</p>
        </div>

        <div className="p-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Assignment Title</label>
              <input
                type="text"
                placeholder="Enter assignment title"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1A73E8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Subject</label>
              <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1A73E8] focus:outline-none">
                <option>Data Structures</option>
                <option>Algorithms</option>
                <option>Database Systems</option>
                <option>Computer Networks</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Description</label>
              <textarea
                placeholder="Enter assignment description"
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1A73E8] focus:outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Due Date</label>
              <input
                type="date"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1A73E8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Total Marks</label>
              <input
                type="number"
                placeholder="Enter total marks"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1A73E8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Attach Files (Optional)</label>
              <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-[#1A73E8] hover:text-[#1A73E8] transition-all">
                Click to upload files
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <button
                onClick={() => setShowCreateForm(false)}
                className="py-3 border-2 border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowCreateForm(false)}
                className="py-3 bg-[#1A73E8] text-white rounded-xl hover:bg-[#0D47A1] transition-all"
              >
                Create Assignment
              </button>
            </div>
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
        <h1 className="text-2xl mb-2">Assignment & Exam Management</h1>
        <p className="text-blue-100">Create and manage assessments</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Create Button */}
        <button
          onClick={() => setShowCreateForm(true)}
          className="w-full bg-gradient-to-r from-[#1A73E8] to-[#0D47A1] text-white py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Create New Assignment</span>
        </button>

        {/* Tabs */}
        <div className="flex gap-2 bg-white rounded-2xl p-2 shadow-sm">
          <button
            onClick={() => setActiveTab('assignments')}
            className={`flex-1 py-3 rounded-xl transition-all ${
              activeTab === 'assignments'
                ? 'bg-[#1A73E8] text-white'
                : 'text-gray-600 hover:bg-[#F5F9FF]'
            }`}
          >
            Assignments
          </button>
          <button
            onClick={() => setActiveTab('exams')}
            className={`flex-1 py-3 rounded-xl transition-all ${
              activeTab === 'exams'
                ? 'bg-[#1A73E8] text-white'
                : 'text-gray-600 hover:bg-[#F5F9FF]'
            }`}
          >
            Exams
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <p className="text-2xl text-[#1A73E8]">{assignments.length}</p>
            <p className="text-xs text-gray-600 mt-1">Total</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <p className="text-2xl text-orange-600">58</p>
            <p className="text-xs text-gray-600 mt-1">Pending</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <p className="text-2xl text-blue-600">165</p>
            <p className="text-xs text-gray-600 mt-1">To Grade</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <p className="text-2xl text-green-600">321</p>
            <p className="text-xs text-gray-600 mt-1">Graded</p>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'assignments' ? (
          <div className="space-y-4">
            {assignments.map((assignment) => (
              <div key={assignment.id} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-[#0D253F] mb-1">{assignment.title}</h3>
                    <p className="text-sm text-gray-600">{assignment.subject}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-lg text-xs ${
                    assignment.status === 'completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {assignment.status === 'completed' ? 'Completed' : 'Active'}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs text-gray-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Due: {assignment.dueDate}</span>
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">Submitted</span>
                    </div>
                    <span className="text-[#0D253F]">{assignment.submitted}/{assignment.totalStudents}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${(assignment.submitted / assignment.totalStudents) * 100}%` }}
                    />
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-600">Graded</span>
                    </div>
                    <span className="text-[#0D253F]">{assignment.graded}/{assignment.submitted}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: assignment.submitted > 0 ? `${(assignment.graded / assignment.submitted) * 100}%` : '0%' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button className="py-2 bg-[#F5F9FF] text-[#1A73E8] rounded-xl text-sm hover:bg-[#E3F2FD] transition-all">
                    View Submissions
                  </button>
                  <button className="py-2 bg-[#1A73E8] text-white rounded-xl text-sm hover:bg-[#0D47A1] transition-all">
                    Grade ({assignment.pending})
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {exams.map((exam) => (
              <div key={exam.id} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-[#0D253F] mb-1">{exam.title}</h3>
                    <p className="text-sm text-gray-600">{exam.subject}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs">
                    Upcoming
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{exam.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{exam.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{exam.room}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button className="py-2 bg-[#F5F9FF] text-[#1A73E8] rounded-xl text-sm hover:bg-[#E3F2FD] transition-all">
                    Edit Details
                  </button>
                  <button className="py-2 bg-[#1A73E8] text-white rounded-xl text-sm hover:bg-[#0D47A1] transition-all">
                    Publish Marks
                  </button>
                </div>
              </div>
            ))}

            <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-600 hover:border-[#1A73E8] hover:text-[#1A73E8] transition-all flex items-center justify-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Schedule New Exam</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
