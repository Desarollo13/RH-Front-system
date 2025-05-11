export const menuItems = [
  {
    title: 'Dasboard',
    path: '/dashboard',
    icon: 'bi bi-bar-chart',
  },
  {
    title: 'Recursos Humanos',
    path: '#',
    icon: 'bi bi-star-fill',
    submenus: [
      {
        title: 'Contrataciones',
        path: '#contrataciones',
        icon: 'bi bi-file-earmark-text-fill',
      },
      {
        title: 'Empleados',
        path: '#empleados',
        icon: 'bi bi-people-fill',
      },
      {
        title: 'Evaluaciones',
        path: '#evaluaciones',
        icon: 'bi bi-clipboard2-check-fill',
      },
      {
        title: 'Nomina',
        path: '#nomina',
        icon: 'bi bi-wallet',
      },
      {
        title: 'Tickets',
        path: '#tickets',
        icon: 'bi bi-ticket-detailed',
      },
    ],
  },
  {
    title: 'Candidatos',
    path: '/candidates',
    icon: 'bi bi-person-badge',
  },
  {
    title: 'Usuarios',
    path: '#',
    icon: 'bi bi-person',
  },
  {
    title: 'Configuración',
    path: '#',
    icon: 'bi bi-gear',
    submenus: [
      {
        title: 'Roles',
        path: '#',
        icon: 'bi bi-person-fill',
      },
      {
        title: 'Permisos',
        path: '#',
        icon: 'bi bi-person-lines-fill',
      },
    ],
  },
];
