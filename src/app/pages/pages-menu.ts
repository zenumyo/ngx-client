import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Products',
    icon: 'nb-keypad',
    link: '/pages/products',
    home: false,
  },
  {
    title: 'Careers',
    icon: 'nb-volume-high',
    link: '/pages/careers',
    home: false,
  },
  {
    title: 'About Us',
    icon: 'nb-person',
    link: '/pages/about-us',
    home: false,
  },
  {
    title: 'Contact Us',
    icon: 'nb-compose',
    link: '/pages/contact-us',
    home: false,
  }
];
