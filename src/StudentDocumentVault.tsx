import { ArrowLeft, FileText, Upload, Download, Eye, Folder, Search, CreditCard, Award, GraduationCap, Image } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface StudentDocumentVaultProps {
  navigate: (screen: Screen) => void;
}

const documents = [
  {
    id: 1,
    name: 'Aadhaar Card',
    type: 'Identity',
    icon: CreditCard,
    size: '245 KB',
    uploadDate: '15 Jan 2024',
    verified: true,
    color: 'blue'
  },
  {
    id: 2,
    name: 'Semester 5 Marksheet',
    type: 'Academic',
    icon: GraduationCap,
    size: '1.2 MB',
    uploadDate: '10 Jan 2024',
    verified: true,
    color: 'green'
  },
  {
    id: 3,
    name: 'AWS Certificate',
    type: 'Certificate',
    icon: Award,
    size: '680 KB',
    uploadDate: '05 Jan 2024',
    verified: true,
    color: 'yellow'
  },
  {
    id: 4,
    name: 'Student ID Card',
    type: 'Identity',
    icon: CreditCard,
    size: '320 KB',
    uploadDate: '01 Dec 2023',
    verified: true,
    color: 'blue'
  },
  {
    id: 5,
    name: 'Semester 4 Marksheet',
    type: 'Academic',
    icon: GraduationCap,
    size: '1.1 MB',
    uploadDate: '20 Nov 2023',
    verified: true,
    color: 'green'
  },
  {
    id: 6,
    name: 'Profile Photo',
    type: 'Personal',
    icon: Image,
    size: '156 KB',
    uploadDate: '15 Nov 2023',
    verified: false,
    color: 'purple'
  }
];

const folders = [
  { name: 'Identity Documents', count: 3, icon: CreditCard, color: 'blue' },
  { name: 'Marksheets', count: 8, icon: GraduationCap, color: 'green' },
  { name: 'Certificates', count: 12, icon: Award, color: 'yellow' },
  { name: 'Personal', count: 5, icon: Image, color: 'purple' }
];

export function StudentDocumentVault({ navigate }: StudentDocumentVaultProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <h1 className="text-2xl mb-2">Document Vault</h1>
        <p className="text-blue-100">Secure storage for all your documents</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Upload Button */}
        <button className="w-full bg-gradient-to-r from-[#1A73E8] to-[#0D47A1] text-white py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2">
          <Upload className="w-5 h-5" />
          <span>Upload Document</span>
        </button>

        {/* Storage Info */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-600">Storage Used</span>
            <span className="text-sm text-[#1A73E8]">4.8 GB / 10 GB</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#1A73E8] to-[#0D47A1] rounded-full" style={{ width: '48%' }} />
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search documents..."
            className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#1A73E8] focus:outline-none"
          />
        </div>

        {/* Folders */}
        <div>
          <h3 className="text-[#0D253F] mb-3">Folders</h3>
          <div className="grid grid-cols-2 gap-3">
            {folders.map((folder, index) => {
              const Icon = folder.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                yellow: 'bg-yellow-100 text-yellow-600',
                purple: 'bg-purple-100 text-purple-600'
              };
              return (
                <button
                  key={index}
                  onClick={() => setSelectedFolder(folder.name)}
                  className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all text-left"
                >
                  <div className={`w-10 h-10 ${colorClasses[folder.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-[#0D253F] mb-1">{folder.name}</p>
                  <p className="text-xs text-gray-600">{folder.count} files</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Documents */}
        <div>
          <h3 className="text-[#0D253F] mb-3">Recent Documents</h3>
          <div className="space-y-3">
            {filteredDocuments.map((doc) => {
              const Icon = doc.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                yellow: 'bg-yellow-100 text-yellow-600',
                purple: 'bg-purple-100 text-purple-600'
              };
              return (
                <div key={doc.id} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className={`w-12 h-12 ${colorClasses[doc.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <p className="text-sm text-[#0D253F] truncate pr-2">{doc.name}</p>
                        {doc.verified && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded flex-shrink-0">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-600 mb-3">
                        <span>{doc.type}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.uploadDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="flex items-center space-x-1 text-xs text-[#1A73E8] hover:text-[#0D47A1]">
                          <Eye className="w-4 h-4" />
                          <span>View</span>
                        </button>
                        <button className="flex items-center space-x-1 text-xs text-[#1A73E8] hover:text-[#0D47A1]">
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Document Stats */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#0D253F] mb-4">Document Statistics</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-[#F5F9FF] rounded-xl">
              <p className="text-2xl text-[#1A73E8]">28</p>
              <p className="text-xs text-gray-600 mt-1">Total Documents</p>
            </div>
            <div className="text-center p-3 bg-[#F5F9FF] rounded-xl">
              <p className="text-2xl text-green-600">24</p>
              <p className="text-xs text-gray-600 mt-1">Verified</p>
            </div>
            <div className="text-center p-3 bg-[#F5F9FF] rounded-xl">
              <p className="text-2xl text-orange-600">4</p>
              <p className="text-xs text-gray-600 mt-1">Pending</p>
            </div>
            <div className="text-center p-3 bg-[#F5F9FF] rounded-xl">
              <p className="text-2xl text-purple-600">4</p>
              <p className="text-xs text-gray-600 mt-1">Categories</p>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="mb-2">Secure & Encrypted</h3>
              <p className="text-sm text-green-100">
                All your documents are encrypted and stored securely. Only you can access them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}