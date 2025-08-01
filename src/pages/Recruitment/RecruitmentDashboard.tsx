import React from 'react';

const RecruitmentDashboard: React.FC = () => {
  return (
    <div className="recruitment-dashboard">
      <div className="page-header">
        <h1 className="page-title">Recruitment Dashboard</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
          Post New Job
        </button>
      </div>
      
      <div className="dashboard-content">
        <div className="stats-grid grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="stat-card bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Open Positions</h3>
              <span className="text-3xl">🎯</span>
            </div>
            <div className="text-3xl font-bold text-blue-600 mt-2">15</div>
            <div className="text-sm text-green-600 mt-1">+3 this week</div>
          </div>
          
          <div className="stat-card bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Applications</h3>
              <span className="text-3xl">📝</span>
            </div>
            <div className="text-3xl font-bold text-green-600 mt-2">127</div>
            <div className="text-sm text-blue-600 mt-1">+23 this week</div>
          </div>
          
          <div className="stat-card bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Interviews</h3>
              <span className="text-3xl">🎤</span>
            </div>
            <div className="text-3xl font-bold text-orange-600 mt-2">8</div>
            <div className="text-sm text-gray-600 mt-1">Scheduled this week</div>
          </div>
          
          <div className="stat-card bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Offers Made</h3>
              <span className="text-3xl">🤝</span>
            </div>
            <div className="text-3xl font-bold text-purple-600 mt-2">3</div>
            <div className="text-sm text-green-600 mt-1">2 accepted</div>
          </div>
        </div>
        
        <div className="content-grid grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="recent-jobs bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Job Postings</h3>
            <div className="job-list space-y-4">
              <div className="job-item border-b border-gray-100 pb-4">
                <h4 className="font-medium text-gray-900">Senior Software Engineer</h4>
                <p className="text-sm text-gray-600">Engineering • Posted 2 days ago</p>
                <div className="flex items-center mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">15 Applications</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded ml-2">Active</span>
                </div>
              </div>
              
              <div className="job-item border-b border-gray-100 pb-4">
                <h4 className="font-medium text-gray-900">Marketing Manager</h4>
                <p className="text-sm text-gray-600">Marketing • Posted 5 days ago</p>
                <div className="flex items-center mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">8 Applications</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded ml-2">Active</span>
                </div>
              </div>
              
              <div className="job-item">
                <h4 className="font-medium text-gray-900">UX Designer</h4>
                <p className="text-sm text-gray-600">Design • Posted 1 week ago</p>
                <div className="flex items-center mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">22 Applications</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded ml-2">Reviewing</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="recent-candidates bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Candidates</h3>
            <div className="candidate-list space-y-4">
              <div className="candidate-item flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium mr-3">
                  JD
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">John Davis</h4>
                  <p className="text-sm text-gray-600">Applied for Senior Software Engineer</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Interview</span>
              </div>
              
              <div className="candidate-item flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-medium mr-3">
                  SM
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Sarah Miller</h4>
                  <p className="text-sm text-gray-600">Applied for Marketing Manager</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Review</span>
              </div>
              
              <div className="candidate-item flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-medium mr-3">
                  AJ
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Alex Johnson</h4>
                  <p className="text-sm text-gray-600">Applied for UX Designer</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Shortlisted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentDashboard;
