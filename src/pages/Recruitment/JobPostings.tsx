import React from 'react';

const JobPostings: React.FC = () => {
  return (
    <div className="job-postings">
      <div className="page-header">
        <h1 className="page-title">Job Postings</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
          Create Job Posting
        </button>
      </div>
      
      <div className="page-content">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Job postings management coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default JobPostings;
