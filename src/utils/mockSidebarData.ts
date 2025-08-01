// Mock data interfaces and data for sidebar
export interface CompanyInfo {
  id: string;
  companyName: string;
  icon?: string;
  tagline: string;
}

export interface UserPermissions {
  configPerms: boolean;
  config_perms: boolean;
  base: {
    view_multipleapprovalcondition: boolean;
    view_SYNCmailtemplate: boolean;
    add_holidays: boolean;
    view_companyleaves: boolean;
  };
  leave: {
    app_installed: boolean;
  };
  SYNC_automations: {
    app_installed: boolean;
    view_mailautomation: boolean;
  };
}

export interface SubMenuItem {
  menu: string;
  redirect: string;
}

export interface MenuItem {
  app: string;
  menu: string;
  img_src: string;
  redirect?: string;
  permissions?: {
    appInstalled?: boolean;
    viewPermission?: boolean;
  };
  submenu?: SubMenuItem[];
}

// Mock company information
export const mockCompanyInfo: CompanyInfo = {
  id: "1",
  companyName: "SYNC HRMS",
  icon: "https://ui-avatars.com/api/?name=H&background=4299e1",
  tagline: "My Company"
};

// Mock user permissions
export const mockUserPermissions: UserPermissions = {
  configPerms: true,
  config_perms: true,
  base: {
    view_multipleapprovalcondition: true,
    view_SYNCmailtemplate: true,
    add_holidays: true,
    view_companyleaves: true
  },
  leave: {
    app_installed: true
  },
  SYNC_automations: {
    app_installed: true,
    view_mailautomation: true
  }
};

// Mock sidebar menu items matching original SYNC structure
export const mockSidebarMenuItems: MenuItem[] = [
  {
    app: 'employee',
    menu: 'Employee',
    img_src: '/static/images/ui/employee.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Employees', redirect: '/employees/list' },
      { menu: 'Employee Profile', redirect: '/employees/profile' }
    ]
  },
  {
    app: 'recruitment',
    menu: 'Recruitment',
    img_src: '/static/images/ui/recruitment.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Job Postings', redirect: '/recruitments/job-postings' },
      { menu: 'Candidates', redirect: '/recruitments/candidates' }
    ]
  },
  {
    app: 'onboarding',
    menu: 'Onboarding',
    img_src: '/static/images/ui/onboarding.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Onboarding Plans', redirect: '/onboarding/plans' }
    ]
  },
  {
    app: 'payroll',
    menu: 'Payroll',
    img_src: '/static/images/ui/payroll.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Overview', redirect: '/payroll/overview' },
      { menu: 'Salary Slips', redirect: '/payroll/slips' }
    ]
  },
  {
    app: 'attendance',
    menu: 'Attendance',
    img_src: '/static/images/ui/attendance.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Attendance Records', redirect: '/attendances/records' }
    ]
  },
  {
    app: 'leave',
    menu: 'Leave',
    img_src: '/static/images/ui/leave.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Leave Applications', redirect: '/leave/applications' }
    ]
  },
  {
    app: 'performance',
    menu: 'Performance',
    img_src: '/static/images/ui/performance.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Performance Reviews', redirect: '/performance/reviews' }
    ]
  },
  {
    app: 'offboarding',
    menu: 'Offboarding',
    img_src: '/static/images/ui/offboarding.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Offboarding Process', redirect: '/offboarding/process' }
    ]
  },
  {
    app: 'asset',
    menu: 'Asset',
    img_src: '/static/images/ui/asset.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Asset Management', redirect: '/assets/management' }
    ]
  },
  {
    app: 'helpdesk',
    menu: 'Help Desk',
    img_src: '/static/images/ui/helpdesk.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Help Desk Tickets', redirect: '/helpdesk/tickets' }
    ]
  },
  {
    app: 'project',
    menu: 'Project',
    img_src: '/static/images/ui/project.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Project Management', redirect: '/project/management' }
    ]
  }
];
