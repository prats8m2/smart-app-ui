import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Dashboard',
    link: '/dashboard',
    icon: 'bx-home-circle',
  },
  {
    id: 2,
    label: 'Account',
    link: '/list-account',
    icon: 'bx-user',
    permission: 'LIST-ACCOUNT',
  },
  {
    id: 3,
    label: 'Site',
    icon: 'bx-building',
    link: '/list-site',
    permission: 'LIST-SITE',
  },
  {
    id: 4,
    label: 'Role',
    icon: 'bx-shield',
    link: '/list-role',
    permission: 'LIST-ROLE',
  },
  {
    id: 5,
    label: 'Staff',
    icon: 'bx-user-plus',
    link: '/list-staff',
    permission: 'LIST-STAFF',
  },
  {
    id: 6,
    label: 'Device',
    icon: 'bx-devices',
    link: '/list-device',
    permission: 'LIST-DEVICE',
  },
  {
    id: 7,
    label: 'Room',
    icon: 'bx-hotel',
    link: '/list-room',
    permission: 'LIST-ROOM',
  },
  {
    id: 8,
    label: 'Table',
    icon: 'bx bxs-drink',
    link: '/list-table',
    permission: 'LIST-TABLE',
  },
  {
    id: 9,
    label: 'Category',
    icon: 'bx-spreadsheet',
    link: '/list-category',
    permission: 'LIST-CATEGORY',
  },
  {
    id: 10,
    label: 'Product',
    icon: 'bx bxs-shopping-bag-alt',
    link: '/list-product',
    permission: 'LIST-PRODUCT',
  },
  {
    id: 11,
    label: 'Menu',
    icon: 'bx-food-menu',
    link: '/list-menu',
    permission: 'LIST-MENU',
  },
  {
    id: 12,
    label: 'Order',
    icon: 'bx-shopping-bag',
    link: '/list-order',
    permission: 'LIST-ORDER',
  },
];
