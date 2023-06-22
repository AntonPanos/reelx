import {
  faGear,
  faHouse,
  faImage,
  faMagnifyingGlass,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export const navMenu = [
  {
    name: 'Profile',
    icon: faUser,
    dis: 'translate-x-0',
    route: '/dashboard',
  },
  {
    name: 'Search',
    icon: faMagnifyingGlass,
    dis: 'translate-x-16',
    route: '/search',
  },
  {
    name: 'Feed',
    icon: faHouse,
    dis: 'translate-x-32',
    route: '/',
  },
  {
    name: 'Photos',
    icon: faImage,
    dis: 'translate-x-48',
    route: '/gallery',
  },
  {
    name: 'Settings',
    icon: faGear,
    dis: 'translate-x-64',
    route: '/settings',
  },
];
