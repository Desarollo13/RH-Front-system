export const menuItems = [
  {
    title: 'Dasboard',
    path: '#',
    icon: 'bi bi-bar-chart',
    submenus: [
      {
        title: 'Inicio',
        path: '/dashboard',
        icon: 'bi bi-balloon-heart',
      },
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
    title: 'Catalogos',
    path: '#',
    icon: 'bi bi-journal-bookmark-fill',
    submenus: [
      {
        title: 'Áreas',
        path: '/areas',
        icon: 'bi bi-person-badge',
      },
      {
        title: 'Sucursales',
        path: '/branch-offices',
        icon: 'bi bi-bank',
      },
      {
        title: 'Categorias',
        path: '/categories',
        icon: 'bi bi-person-badge',
      },
    ],
  },
  {
    title: 'Configuración',
    path: '#',
    icon: 'bi bi-gear',
    submenus: [
      {
        title: 'Usuarios',
        path: '/users',
        icon: 'bi bi-person',
      },
      {
        title: 'Perfiles',
        path: '/candidates',
        icon: 'bi bi-person-badge',
      },
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
  {
    title: 'Ejemplo',
    path: '/example',
    icon: 'bi bi-vector-pen',
  },
];
