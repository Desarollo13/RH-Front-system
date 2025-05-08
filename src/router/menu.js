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
        title: 'Candidatos',
        path: '/candidatos',
        icon: 'bi bi-person-badge',
      },

      {
        title: 'Contrataciones',
        path: '#contrataciones',
        icon: 'bi bi-star-fill',
      },
      {
        title: 'Empleados',
        path: '#empleados',
        icon: 'bi bi-star-fill',
      },
      {
        title: 'Evaluaciones',
        path: '#evaluaciones',
        icon: 'bi bi-star-fill',
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
]
