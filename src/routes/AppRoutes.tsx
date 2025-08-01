import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { useSidebar } from '../contexts/SidebarContext';
import ProtectedRoute from './ProtectedRoute';

// Auth Pages
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

// Main Layout
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

// Dashboard
import Dashboard from '../pages/Dashboard/Dashboard';

// Employee Management
import EmployeeList from '../pages/Employees/EmployeeList';
import EmployeeProfile from '../pages/Employees/EmployeeProfile';

// Recruitment
import RecruitmentDashboard from '../pages/Recruitment/RecruitmentDashboard';
import JobPostings from '../pages/Recruitment/JobPostings';
import Candidates from '../pages/Recruitment/Candidates';

// Other modules
import OnboardingPlans from '../pages/Onboarding/OnboardingPlans';
import PayrollOverview from '../pages/Payroll/PayrollOverview';
import SalarySlips from '../pages/Payroll/SalarySlips';
import AttendanceRecords from '../pages/Attendance/AttendanceRecords';
import LeaveApplications from '../pages/Leave/LeaveApplications';
import PerformanceReviews from '../pages/Performance/PerformanceReviews';
import OffboardingProcess from '../pages/Offboarding/OffboardingProcess';
import AssetManagement from '../pages/Assets/AssetManagement';
import HelpDeskTickets from '../pages/HelpDesk/HelpDeskTickets';
import SystemSettings from '../pages/Configuration/SystemSettings';
import ProjectManagement from '../pages/Project/ProjectManagement';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toggleSidebar, isCollapsed } = useSidebar();
  
  return (
    <>
      <Sidebar />
      <div className={`main-content ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Header toggleSidebar={toggleSidebar} />
        <div className="page-content">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Routes>
      {/* Public Routes */}
      <Route 
        path="/login" 
        element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" replace />} 
      />
      <Route 
        path="/register" 
        element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" replace />} 
      />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Navigate to="/dashboard" replace />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Dashboard />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      {/* Employee Management */}
      <Route
        path="/employees"
        element={
          <ProtectedRoute>
            <AppLayout>
              <EmployeeList />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/employees/:id"
        element={
          <ProtectedRoute>
            <AppLayout>
              <EmployeeProfile />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      {/* Recruitment */}
      <Route
        path="/recruitment"
        element={
          <ProtectedRoute>
            <AppLayout>
              <RecruitmentDashboard />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/recruitment/jobs"
        element={
          <ProtectedRoute>
            <AppLayout>
              <JobPostings />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/recruitment/candidates"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Candidates />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      {/* Other Module Routes */}
      <Route
        path="/onboarding"
        element={
          <ProtectedRoute>
            <AppLayout>
              <OnboardingPlans />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/payroll"
        element={
          <ProtectedRoute>
            <AppLayout>
              <PayrollOverview />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/payroll/salary-slips"
        element={
          <ProtectedRoute>
            <AppLayout>
              <SalarySlips />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/attendance"
        element={
          <ProtectedRoute>
            <AppLayout>
              <AttendanceRecords />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/leave"
        element={
          <ProtectedRoute>
            <AppLayout>
              <LeaveApplications />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/performance"
        element={
          <ProtectedRoute>
            <AppLayout>
              <PerformanceReviews />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/offboarding"
        element={
          <ProtectedRoute>
            <AppLayout>
              <OffboardingProcess />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/assets"
        element={
          <ProtectedRoute>
            <AppLayout>
              <AssetManagement />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/helpdesk"
        element={
          <ProtectedRoute>
            <AppLayout>
              <HelpDeskTickets />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <AppLayout>
              <ProjectManagement />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <AppLayout>
              <SystemSettings />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
