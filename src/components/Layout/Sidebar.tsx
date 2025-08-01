import React from 'react';
import { useSidebar } from '../../contexts/SidebarContext';
import { MenuItem } from '../../types/common.d';
import './Sidebar.css';

const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '📊',
    path: '/dashboard',
  },
  {
    id: 'employees',
    label: 'Employees',
    icon: '👥',
    path: '/employees',
  },
  {
    id: 'recruitment',
    label: 'Recruitment',
    icon: '🎯',
    path: '/recruitment',
    children: [
      { id: 'recruitment-dashboard', label: 'Dashboard', icon: '📊', path: '/recruitment' },
      { id: 'job-postings', label: 'Job Postings', icon: '📝', path: '/recruitment/jobs' },
      { id: 'candidates', label: 'Candidates', icon: '👤', path: '/recruitment/candidates' },
    ],
  },
  {
    id: 'onboarding',
    label: 'Onboarding',
    icon: '🚀',
    path: '/onboarding',
  },
  {
    id: 'payroll',
    label: 'Payroll',
    icon: '💰',
    path: '/payroll',
    children: [
      { id: 'payroll-overview', label: 'Overview', icon: '📊', path: '/payroll' },
      { id: 'salary-slips', label: 'Salary Slips', icon: '📄', path: '/payroll/salary-slips' },
    ],
  },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: '⏰',
    path: '/attendance',
  },
  {
    id: 'leave',
    label: 'Leave',
    icon: '🏖️',
    path: '/leave',
  },
  {
    id: 'performance',
    label: 'Performance',
    icon: '📈',
    path: '/performance',
  },
  {
    id: 'offboarding',
    label: 'Offboarding',
    icon: '🚪',
    path: '/offboarding',
  },
  {
    id: 'assets',
    label: 'Assets',
    icon: '💻',
    path: '/assets',
  },
  {
    id: 'helpdesk',
    label: 'Help Desk',
    icon: '🎧',
    path: '/helpdesk',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: '📋',
    path: '/projects',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '⚙️',
    path: '/settings',
  },
];

const Sidebar: React.FC = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div className={`sidebar ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          {!isCollapsed && <span className="sidebar-logo-text">Horilla HRMS</span>}
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isCollapsed ? '▶️' : '◀️'}
          </button>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.id} className="sidebar-menu-item">
              <a href={item.path} className="sidebar-menu-link">
                <span className="sidebar-menu-icon">{item.icon}</span>
                {!isCollapsed && (
                  <span className="sidebar-menu-text">{item.label}</span>
                )}
                {item.badge && !isCollapsed && (
                  <span className="sidebar-menu-badge">{item.badge}</span>
                )}
              </a>
              
              {item.children && !isCollapsed && (
                <ul className="sidebar-submenu">
                  {item.children.map((child) => (
                    <li key={child.id} className="sidebar-submenu-item">
                      <a href={child.path} className="sidebar-submenu-link">
                        <span className="sidebar-submenu-icon">{child.icon}</span>
                        <span className="sidebar-submenu-text">{child.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
