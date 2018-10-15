export default [
  {
    name: 'Users',
    icon: 'ti-user',
    children: [{
      name: 'Users List',
      path: '/table-list/paginated'
    },
    {
      name: 'Add User',
      path: '/forms/validation'
    }]
  },
  {
    name: 'Billing',
    icon: 'ti-receipt',
    children: [{
      name: 'Encode Bills',
      path: '/components/buttons'
    },
    {
      name: 'Generate Bills',
      path: '/components/grid-system'
    },
    {
      name: 'Print Bills',
      path: '/components/panels'
    }]
  },
  {
    name: 'Payments',
    icon: 'ti-money',
    path: '/forms/extended'
  },
  {
    name: 'Reports',
    icon: 'ti-bar-chart',
    path: '/charts'
  },
  {
    name: 'Accounts',
    icon: 'ti-id-badge',
    children: [{
      name: 'Accounts List',
      path: '/maps/google'
    },
    {
      name: 'Add Account',
      path: '/forms/newAccount'
    }]
  },
  {
    name: 'Logs',
    icon: 'ti-list',
    path: '/calendar'
  }
]
