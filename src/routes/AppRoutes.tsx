import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Auth/Login';
import EmployeeList from '../pages/Employees/EmployeeList';
import RecruitmentDashboard from '../pages/Recruitment/RecruitmentDashboard';
import ProtectedRoute from './ProtectedRoute';
import { useAuthContext } from '../contexts/AuthContext';

import { CompanyInfo, UserPermissions, MenuItem } from '../utils/mockSidebarData';

interface AppRoutesProps {
  companyInfo: CompanyInfo;
  userPermissions: UserPermissions;
  menuItems: MenuItem[];
}

const AppRoutes: React.FC<AppRoutesProps> = ({ companyInfo, userPermissions, menuItems }) => {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();

  // Simple mapping from path to title for demonstration
  const getPageTitle = (pathname: string): string => {
    switch (pathname) {
      case '/': return 'Dashboard';
      case '/dashboard': return 'Dashboard';
      case '/employees/list': return 'Employees List';
      case '/recruitments/job-postings': return 'Job Postings';
      case '/recruitments/candidates': return 'Candidates';
      case '/onboarding/plans': return 'Onboarding Plans';
      case '/employees/profile': return 'Employee Profile';
      case '/payroll/overview': return 'Payroll Overview';
      case '/payroll/slips': return 'Salary Slips';
      case '/attendances/records': return 'Attendances'; // This matches the original HTML's title in the Navbar
      case '/leave/applications': return 'Leave Applications';
      case '/performance/reviews': return 'Performance Reviews';
      case '/offboarding/process': return 'Offboarding Process';
      case '/assets/management': return 'Asset Management';
      case '/helpdesk/tickets': return 'Help Desk Tickets';
      case '/project/management': return 'Project Management';
      case '/configuration/multiple-approvals': return 'Multiple Approvals';
      case '/configuration/mail-templates': return 'Mail Templates';
      case '/configuration/mail-automations': return 'Mail Automations';
      case '/configuration/holidays': return 'Holidays';
      case '/configuration/company-leaves': return 'Company Leaves';
      case '/configuration/restrict-leaves': return 'Restrict Leaves';
      default: return 'Horilla'; // Default title
    }
  };

  const currentPageTitle = getPageTitle(location.pathname);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* Protected Routes */}
      <Route path="/" element={
        <ProtectedRoute>
          <Dashboard
            companyInfo={companyInfo}
            userPermissions={userPermissions}
            menuItems={menuItems}
            pageTitle={currentPageTitle} // Pass pageTitle
          />
        </ProtectedRoute>
      } />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard
            companyInfo={companyInfo}
            userPermissions={userPermissions}
            menuItems={menuItems}
            pageTitle={currentPageTitle} // Pass pageTitle
          />
        </ProtectedRoute>
      } />
      {/*
        For other pages, you'd render their specific components directly
        and they would implicitly use the Navbar's dynamic pageTitle or have their own Navbar.
        If Navbar is only inside Dashboard, all sub-routes here would not have a Navbar unless explicitly added.
        Since Navbar is part of the layout, it's typically rendered once in App.tsx or a main layout component.
        For simplicity, I'm assuming Dashboard is the main "layout wrapper" for protected routes.
      */}
      <Route path="/employees/list" element={
        <ProtectedRoute>
          <div>Employees List Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/recruitments/job-postings" element={
        <ProtectedRoute>
          <div>Job Postings Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/recruitments/candidates" element={
        <ProtectedRoute>
          <div>Candidates Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      {/* ... and all other routes with dummy content as before, ensuring they'd get currentPageTitle somehow */}
      <Route path="/onboarding/plans" element={
        <ProtectedRoute>
          <div>Onboarding Plans Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/employees/profile" element={
        <ProtectedRoute>
          <div>Employee Profile Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/payroll/overview" element={
        <ProtectedRoute>
          <div>Payroll Overview Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/payroll/slips" element={
        <ProtectedRoute>
          <div>Salary Slips Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/attendances/records" element={
        <ProtectedRoute>
          <div>Attendance Records Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/leave/applications" element={
        <ProtectedRoute>
          <div>Leave Applications Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/performance/reviews" element={
        <ProtectedRoute>
          <div>Performance Reviews Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/offboarding/process" element={
        <ProtectedRoute>
          <div>Offboarding Process Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/assets/management" element={
        <ProtectedRoute>
          <div>Asset Management Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/helpdesk/tickets" element={
        <ProtectedRoute>
          <div>Help Desk Tickets Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/project/management" element={
        <ProtectedRoute>
          <div>Project Management Page (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />

      {/* Configuration Submenus */}
      <Route path="/configuration/multiple-approvals" element={
        <ProtectedRoute>
          <div>Multiple Approvals Config (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/configuration/mail-templates" element={
        <ProtectedRoute>
          <div>Mail Templates Config (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/configuration/mail-automations" element={
        <ProtectedRoute>
          <div>Mail Automations Config (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/configuration/holidays" element={
        <ProtectedRoute>
          <div>Holidays Config (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/configuration/company-leaves" element={
        <ProtectedRoute>
          <div>Company Leaves Config (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />
      <Route path="/configuration/restrict-leaves" element={
        <ProtectedRoute>
          <div>Restrict Leaves Config (Page Title: {currentPageTitle})</div>
        </ProtectedRoute>
      } />

      {/* Catch-all for 404 Not Found pages (optional) */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
