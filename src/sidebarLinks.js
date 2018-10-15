export default [
  {
    name: 'Users',
    icon: 'ti-panel',
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
    icon: 'ti-package',
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
    icon: 'ti-clipboard',
    path: '/forms/extended'
  },
  {
    name: 'Reports',
    icon: 'ti-view-list-alt',
    path: '/charts'
  },
  {
    name: 'Accounts',
    icon: 'ti-map',
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
    icon: 'ti-gift',
    path: '/calendar'
  }
]
