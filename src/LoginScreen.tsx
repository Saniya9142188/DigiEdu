import { useState } from 'react';
import { ArrowLeft, GraduationCap, Users, Building2, School } from 'lucide-react';
import { UserRole } from '../App';

interface LoginScreenProps {
  role: UserRole;
  onLoginSuccess: (studentType?: 'school' | 'college') => void;
  onBack: () => void;
}

export function LoginScreen({ role, onLoginSuccess, onBack }: LoginScreenProps) {
  const [studentType, setStudentType] = useState<'school' | 'college'>('school');
  const [teacherMode, setTeacherMode] = useState<'login' | 'create'>('login');
  
  // Student fields
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [affiliationCode, setAffiliationCode] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [aisheCode, setAisheCode] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [classGrade, setClassGrade] = useState('10');
  
  // Teacher fields
  const [aparId, setAparId] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [teacherMobile, setTeacherMobile] = useState('');
  const [teacherAadhaar, setTeacherAadhaar] = useState('');
  const [teacherInstitute, setTeacherInstitute] = useState('');
  const [designation, setDesignation] = useState('');

  const handleStudentLogin = () => {
    if (studentType === 'school') {
      if (name && mobile.length === 10 && aadhaar.length === 12 && affiliationCode && schoolName) {
        onLoginSuccess('school');
      }
    } else {
      if (name && mobile.length === 10 && aadhaar.length === 12 && aisheCode && instituteName) {
        onLoginSuccess('college');
      }
    }
  };

  const handleTeacherLogin = () => {
    if (teacherMode === 'login') {
      if (aparId) {
        onLoginSuccess();
      }
    } else {
      if (teacherName && teacherMobile.length === 10 && teacherAadhaar.length === 12 && teacherInstitute && designation) {
        onLoginSuccess();
      }
    }
  };

  if (role === 'student') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-[#1A73E8] text-white p-6 rounded-b-3xl shadow-lg">
          <button onClick={onBack} className="mb-4 p-2 hover:bg-white/10 rounded-lg transition-all">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl mb-2">Student Login</h1>
          <p className="text-blue-100">Secure login powered by Aadhaar</p>
        </div>

        <div className="p-6 max-w-md mx-auto">
          {/* Student Type Selection */}
          <div className="bg-[#E3F2FD] rounded-2xl p-4 shadow-sm mb-6 border-2 border-[#1A73E8]">
            <p className="text-sm text-[#0D253F] mb-3">I am a:</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setStudentType('school')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  studentType === 'school'
                    ? 'border-[#1A73E8] bg-[#E3F2FD]'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <School className={`w-8 h-8 mx-auto mb-2 ${
                  studentType === 'school' ? 'text-[#1A73E8]' : 'text-gray-400'
                }`} />
                <p className={`text-sm ${
                  studentType === 'school' ? 'text-[#1A73E8]' : 'text-gray-600'
                }`}>School Student</p>
                <p className="text-xs text-gray-500 mt-1">Class 10-12</p>
              </button>
              <button
                onClick={() => setStudentType('college')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  studentType === 'college'
                    ? 'border-[#1A73E8] bg-[#E3F2FD]'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <GraduationCap className={`w-8 h-8 mx-auto mb-2 ${
                  studentType === 'college' ? 'text-[#1A73E8]' : 'text-gray-400'
                }`} />
                <p className={`text-sm ${
                  studentType === 'college' ? 'text-[#1A73E8]' : 'text-gray-600'
                }`}>College Student</p>
                <p className="text-xs text-gray-500 mt-1">Undergraduate/PG</p>
              </button>
            </div>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-[#0D253F] mb-4">
              {studentType === 'school' ? 'School Student Details' : 'College Student Details'}
            </h3>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Mobile Number *</label>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="10-digit mobile number"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
                maxLength={10}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Aadhaar Number *</label>
              <input
                type="text"
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, '').slice(0, 12))}
                placeholder="12-digit Aadhaar number"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
                maxLength={12}
              />
            </div>

            {studentType === 'school' ? (
              <>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Class *</label>
                  <select
                    value={classGrade}
                    onChange={(e) => setClassGrade(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
                  >
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">School Affiliation Code *</label>
                  <input
                    type="text"
                    value={affiliationCode}
                    onChange={(e) => setAffiliationCode(e.target.value)}
                    placeholder="e.g., CBSE/STATE affiliation code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">School Name *</label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="Enter your school name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">AISHE Code *</label>
                  <input
                    type="text"
                    value={aisheCode}
                    onChange={(e) => setAisheCode(e.target.value)}
                    placeholder="Enter college AISHE code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Institute Name *</label>
                  <input
                    type="text"
                    value={instituteName}
                    onChange={(e) => setInstituteName(e.target.value)}
                    placeholder="Enter your college/university name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
                  />
                </div>
              </>
            )}

            <button
              onClick={handleStudentLogin}
              className="w-full bg-[#1A73E8] text-white py-3 rounded-xl hover:bg-[#1557B0] transition-all mt-6"
            >
              Login as {studentType === 'school' ? 'School' : 'College'} Student
            </button>
          </div>

          {/* Demo Info */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800 mt-4">
            <p className="mb-1">Demo Mode - Fill in any values</p>
            <p className="text-xs">All fields marked with * are required</p>
          </div>
        </div>
      </div>
    );
  }

  // Teacher Login
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#1A73E8] text-white p-6 rounded-b-3xl shadow-lg">
        <button onClick={onBack} className="mb-4 p-2 hover:bg-white/10 rounded-lg transition-all">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl mb-2">Teacher Login</h1>
        <p className="text-blue-100">Secure login via APAR ID</p>
      </div>

      <div className="p-6 max-w-md mx-auto">
        {/* Login/Create Toggle */}
        <div className="bg-[#E3F2FD] rounded-2xl p-4 shadow-sm mb-6 border-2 border-[#1A73E8]">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setTeacherMode('login')}
              className={`py-3 rounded-xl transition-all ${
                teacherMode === 'login'
                  ? 'bg-[#1A73E8] text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Login with APAR ID
            </button>
            <button
              onClick={() => setTeacherMode('create')}
              className={`py-3 rounded-xl transition-all ${
                teacherMode === 'create'
                  ? 'bg-[#1A73E8] text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Create APAR ID
            </button>
          </div>
        </div>

        {/* Login/Create Form */}
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
          {teacherMode === 'login' ? (
            <>
              <h3 className="text-[#0D253F] mb-4">Login with APAR ID</h3>
              <div>
                <label className="block text-sm text-gray-600 mb-2">APAR ID *</label>
                <input
                  type="text"
                  value={aparId}
                  onChange={(e) => setAparId(e.target.value)}
                  placeholder="Enter your APAR ID (e.g., T-2847)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
                />
              </div>
              <button
                onClick={handleTeacherLogin}
                disabled={!aparId}
                className="w-full bg-[#1A73E8] text-white py-3 rounded-xl hover:bg-[#1557B0] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed mt-6"
              >
                Login
              </button>
            </>
          ) : (
            <>
              <h3 className="text-[#0D253F] mb-4">Create APAR ID</h3>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Mobile Number *</label>
                <input
                  type="text"
                  value={teacherMobile}
                  onChange={(e) => setTeacherMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
                  maxLength={10}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Aadhaar Number *</label>
                <input
                  type="text"
                  value={teacherAadhaar}
                  onChange={(e) => setTeacherAadhaar(e.target.value.replace(/\D/g, '').slice(0, 12))}
                  placeholder="12-digit Aadhaar number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
                  maxLength={12}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Institute Name *</label>
                <input
                  type="text"
                  value={teacherInstitute}
                  onChange={(e) => setTeacherInstitute(e.target.value)}
                  placeholder="Enter your institute name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Designation *</label>
                <input
                  type="text"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  placeholder="e.g., Associate Professor, Lecturer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#1A73E8] focus:outline-none"
                />
              </div>
              <button
                onClick={handleTeacherLogin}
                className="w-full bg-[#1A73E8] text-white py-3 rounded-xl hover:bg-[#1557B0] transition-all mt-6"
              >
                Create APAR ID & Login
              </button>
            </>
          )}
        </div>

        {/* Demo Info */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800 mt-4">
          <p className="mb-1">Demo Mode - Fill in any values</p>
          {teacherMode === 'login' && <p className="text-xs">Use any APAR ID like T-2847</p>}
        </div>
      </div>
    </div>
  );
}