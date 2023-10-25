import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Home',
    icon: 'bx-home-circle',
    subItems: [
      {
        id: 100,
        label: 'Dashboard',
        link: '/dashboard',
        parentId: 1,
        value: 'DASHBOARD',
      },
    ],
  },
  {
    id: 2,
    label: 'Account',
    icon: 'bx-user',
    subItems: [
      {
        id: 104,
        label: 'List',
        link: '/list-account',
        parentId: 2,
        value: 'LIST-ACCOUNT',
      },
    ],
  },
  {
    id: 3,
    label: 'Site',
    icon: 'bx-building',
    subItems: [
      {
        id: 110,
        label: 'List',
        link: '/list-site',
        parentId: 3,
        value: 'LIST-SITE',
      },
    ],
  },
  {
    id: 4,
    label: 'Role',
    icon: 'bx-shield',
    subItems: [
      {
        id: 112,
        label: 'Add',
        link: '/add-role',
        parentId: 4,
        value: 'LIST-ROLE',
      },
      {
        id: 115,
        label: 'List',
        link: '/list-role',
        parentId: 4,
        value: 'LIST-ROLE',
      },
    ],
  },
  {
    id: 5,
    label: 'Staff',
    icon: 'bx-user-plus',
    subItems: [
      {
        id: 121,
        label: 'List',
        link: '/list-staff',
        parentId: 5,
        value: 'LIST-STAFF',
      },
    ],
  },
  {
    id: 6,
    label: 'Device',
    icon: 'bx-devices',
    subItems: [
      {
        id: 131,
        label: 'List',
        link: '/list-device',
        parentId: 6,
        value: 'LIST-DEVICE',
      },
    ],
  },
  {
    id: 7,
    label: 'Room',
    icon: 'bx-hotel',
    subItems: [
      {
        id: 126,
        label: 'List',
        link: '/list-room',
        parentId: 7,
        value: 'LIST-ROOM',
      },
    ],
  },
  {
    id: 8,
    label: 'Table',
    icon: 'bx bxs-drink',
    subItems: [
      {
        id: 141,
        label: 'LIST',
        link: '/list-table',
        parentId: 8,
        value: 'LIST-TABLE',
      },
    ],
  },
  {
    id: 9,
    label: 'Category',
    icon: 'bx-spreadsheet',
    subItems: [
      {
        id: 151,
        label: 'LIST',
        link: '/list-category',
        parentId: 9,
        value: 'LIST-CATEGORY',
      },
    ],
  },
  {
    id: 10,
    label: 'Product',
    icon: 'bx bxs-shopping-bag-alt',
    subItems: [
      {
        id: 146,
        label: 'LIST',
        link: '/list-product',
        parentId: 10,
        value: 'LIST-PRODUCT',
      },
    ],
  },
  {
    id: 11,
    label: 'Menu',
    icon: 'bx-food-menu',
    subItems: [
      {
        id: 136,
        label: 'List',
        link: '/list-menu',
        parentId: 11,
        value: 'LIST-MENU',
      },
    ],
  },
  {
    id: 12,
    label: 'Order',
    icon: 'bx-shopping-bag',
    subItems: [
      {
        id: 156,
        label: 'LIST',
        link: '/list-order',
        parentId: 12,
        value: 'LIST-ORDER',
      },
    ],
  },
];
