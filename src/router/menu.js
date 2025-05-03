export const menuItems = [
  {
    title: 'Inicio',
    path: '/dashboard',
    icon: 'bi bi-house',
  },
  {
    title: 'Recursos Humanos',
    path: '#',
    icon: 'bi bi-star-fill',
    submenus: [
      {
        title: 'Contrataciones',
        path: '#',
        icon: 'bi bi-star-fill',
      },
      {
        title: 'Empleados',
        path: '#',
        icon: 'bi bi-star-fill',
      },
      {
        title: 'Evaluaciones',
        path: '#',
        icon: 'bi bi-star-fill',
      },
      {
        title: 'Nomina',
        path: '#',
        icon: 'bi bi-wallet',
      },
      {
        title: 'Tickets',
        path: '#',
        icon: '/bi bi-ticket-detailed',
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
