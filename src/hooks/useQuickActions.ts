import { useModal } from '../contexts/ModalContext';
import { useNavigate } from 'react-router-dom';

export interface QuickAction {
  id: string;
  label: string;
  icon: string;
  onClick: () => void;
  show?: boolean;
}

interface UseQuickActionsOptions {
  // Feature flags - you can set these based on your app configuration
  hasHelpdesk?: boolean;
  hasAsset?: boolean;
  hasPayroll?: boolean;
  hasLeave?: boolean;
  hasAttendance?: boolean;
}

export const useQuickActions = (options: UseQuickActionsOptions = {}) => {
  const {
    hasHelpdesk = true,
    hasAsset = true,
    hasPayroll = true,
    hasLeave = true,
    hasAttendance = true
  } = options;

  const { openModal } = useModal();
  const navigate = useNavigate();

  const defaultActions: QuickAction[] = [
    {
      id: 'fab9',
      label: 'Dashboard Charts',
      icon: '📊',
      onClick: () => {
        console.log('Dashboard Charts clicked');
        openModal('charts');
        // You can implement chart modal logic here
      },
      show: true
    },
    {
      id: 'fab8',
      label: 'Create Ticket',
      icon: '🎫',
      onClick: () => {
        console.log('Create Ticket clicked');
        openModal('ticket');
        // Alternative: navigate('/helpdesk/create-ticket');
      },
      show: hasHelpdesk
    },
    {
      id: 'fab7',
      label: 'Create Asset Request',
      icon: '💻',
      onClick: () => {
        console.log('Create Asset Request clicked');
        openModal('asset');
        // Alternative: navigate('/assets/create-request');
      },
      show: hasAsset
    },
    {
      id: 'fab6',
      label: 'Create Reimbursement',
      icon: '💰',
      onClick: () => {
        console.log('Create Reimbursement clicked');
        openModal('reimbursement');
        // Alternative: navigate('/payroll/reimbursement/create');
      },
      show: hasPayroll
    },
    {
      id: 'fab5',
      label: 'Create Work Type Request',
      icon: '💼',
      onClick: () => {
        console.log('Create Work Type Request clicked');
        openModal('workType');
        // Alternative: navigate('/attendance/work-type/create');
      },
      show: true
    },
    {
      id: 'fab4',
      label: 'Create Shift Request',
      icon: '🕐',
      onClick: () => {
        console.log('Create Shift Request clicked');
        openModal('shift');
        // Alternative: navigate('/attendance/shift/create');
      },
      show: true
    },
    {
      id: 'fab3',
      label: 'Create Leave Request',
      icon: '📅',
      onClick: () => {
        console.log('Create Leave Request clicked');
        openModal('leave');
        // Alternative: navigate('/leave/create');
      },
      show: hasLeave
    },
    {
      id: 'fab2',
      label: 'Create Attendance Request',
      icon: '👤',
      onClick: () => {
        console.log('Create Attendance Request clicked');
        openModal('attendance');
        // Alternative: navigate('/attendance/create');
      },
      show: hasAttendance
    }
  ];

  return {
    actions: defaultActions
  };
};
