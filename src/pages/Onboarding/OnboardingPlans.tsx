import React from 'react';

const OnboardingPlans: React.FC = () => {
  return (
    <div className="onboarding-plans">
      <div className="page-header">
        <h1 className="page-title">Onboarding Plans</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
          Create Plan
        </button>
      </div>
      
      <div className="page-content">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Onboarding plans management coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPlans;
