# Quick Action FAB - Usage Guide

## Overview
The Quick Action FAB (Floating Action Button) replicates the functionality from your original HTML template with full React integration. It provides quick access to common actions across your HRMS application.

## Features
- ✅ Expandable FAB with multiple action buttons
- ✅ Smooth animations and transitions
- ✅ Hover tooltips for each action
- ✅ Modal integration for quick forms
- ✅ Conditional rendering based on app modules
- ✅ Click-outside-to-close functionality
- ✅ Customizable actions per page

## Components Structure

### 1. QuickActionFab Component
Located at: `src/components/UI/QuickActionFab.tsx`
- Main FAB component with expandable actions
- Handles animations and user interactions
- Fully responsive design

### 2. ModalContext
Located at: `src/contexts/ModalContext.tsx`
- Global modal state management
- Handles opening/closing modals from FAB actions

### 3. ModalManager
Located at: `src/components/ModalManager.tsx`
- Renders appropriate modal content based on active modal type
- Contains form templates for common actions

### 4. useQuickActions Hook
Located at: `src/hooks/useQuickActions.ts`
- Provides default actions configuration
- Handles feature flags for conditional rendering
- Integrates with modal and navigation systems

## Usage Examples

### Basic Implementation (Dashboard)
```tsx
import React from 'react';
import QuickActionFab from '../../components/UI/QuickActionFab';
import { useQuickActions } from '../../hooks/useQuickActions';

const Dashboard: React.FC = () => {
  const { actions } = useQuickActions({
    hasHelpdesk: true,
    hasAsset: true,
    hasPayroll: true,
    hasLeave: true,
    hasAttendance: true
  });

  return (
    <div>
      {/* Your page content */}
      <QuickActionFab actions={actions} />
    </div>
  );
};
```

### Custom Actions
```tsx
const customActions = [
  {
    id: 'custom1',
    label: 'Custom Action',
    icon: '⚡',
    onClick: () => {
      // Custom logic here
      console.log('Custom action triggered');
    },
    show: true
  }
];

<QuickActionFab actions={customActions} />
```

### Feature Flag Integration
```tsx
// Based on user permissions or app configuration
const { actions } = useQuickActions({
  hasHelpdesk: user.permissions.includes('helpdesk'),
  hasAsset: appConfig.modules.includes('asset'),
  hasPayroll: user.role === 'hr' || user.role === 'admin',
  hasLeave: true, // Always show leave
  hasAttendance: true
});
```

## Styling

The FAB uses the exact same CSS structure as your original implementation:
- Main FAB: 56x56px red circle (#ff3b38)
- Inner FABs: 40x40px circles
- Smooth 300ms transitions
- Hover tooltips with dark background
- Responsive positioning (fixed bottom-right)

## Available Actions

1. **Dashboard Charts** (📊) - Opens analytics modal
2. **Create Ticket** (🎫) - Support ticket creation
3. **Create Asset Request** (💻) - Asset request form
4. **Create Reimbursement** (💰) - Expense reimbursement
5. **Create Work Type Request** (💼) - Work type modification
6. **Create Shift Request** (🕐) - Shift change request
7. **Create Leave Request** (📅) - Leave application
8. **Create Attendance Request** (👤) - Attendance correction

## Modal Integration

Each action can either:
1. Open a modal with a form (current implementation)
2. Navigate to a dedicated page
3. Trigger custom logic

Example modal action:
```tsx
{
  id: 'leave',
  label: 'Create Leave Request',
  icon: '📅',
  onClick: () => openModal('leave'), // Opens modal
  show: hasLeave
}
```

Example navigation action:
```tsx
{
  id: 'leave',
  label: 'Create Leave Request',
  icon: '📅',
  onClick: () => navigate('/leave/create'), // Navigates to page
  show: hasLeave
}
```

## Customization

### Adding New Actions
1. Add to the `useQuickActions` hook
2. Create corresponding modal content in `ModalManager`
3. Add feature flag if needed

### Styling Modifications
Edit `QuickActionFab.css` to:
- Change colors
- Modify animations
- Adjust positioning
- Update tooltips

### Icon Customization
Replace emoji icons with:
- Material Icons
- Font Awesome
- Custom SVG icons
- Unicode symbols

## Integration Checklist

- [x] ModalProvider added to App.tsx
- [x] ModalManager component included
- [x] QuickActionFab added to desired pages
- [x] Feature flags configured
- [x] Custom actions defined (if needed)
- [x] Modal forms implemented
- [ ] API integration for form submissions
- [ ] Error handling and validation
- [ ] Success/failure notifications

## Next Steps

1. **API Integration**: Connect modal forms to actual API endpoints
2. **Form Validation**: Add proper validation to modal forms
3. **Notifications**: Show success/error messages after actions
4. **Permissions**: Integrate with user permission system
5. **Analytics**: Track FAB usage for insights

This implementation provides a solid foundation that matches your original design while being fully integrated with React best practices.
