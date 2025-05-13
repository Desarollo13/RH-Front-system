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
    path:'#',
    icon: 'bi bi-journal-bookmark-fill',
    submenus: [
      {
        title: 'Áreas',
        path: '/areas',
        icon: 'bi bi-person-badge',
      },
      {
        title: 'Sucursales',
        path: '/branches',
        icon: 'bi bi-person-badge',
      },
      {
        title: 'Categorias',
        path: '/categories',
        icon: 'bi bi-person-badge',
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
  {
    title: 'Configuración',
    path: '#',
    icon: 'bi bi-gear',
    submenus: [
      {
        title: 'Editar Perfil',
        path: '#',
        icon: 'bi bi-person-lines-fill',
      },
      {
        title: 'Configuarción Contraseña',
        path: '#',
        icon: 'bi bi-person-lines-fill',
      },
    ],
  },
];
