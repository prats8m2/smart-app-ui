import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Home',
    icon: 'bx-home-circle',
    subItems: [
      { id: 100, label: 'Dashboard', link: '/dashboard', parentId: 1 },
    ],
  },
  {
    id: 2,
    label: 'Account',
    icon: 'bx-user',
    subItems: [{ id: 104, label: 'List', link: '/list-account', parentId: 2 }],
  },
  {
    id: 3,
    label: 'Site',
    icon: 'bx-building',
    subItems: [{ id: 110, label: 'List', link: '/list-site', parentId: 3 }],
  },
  {
    id: 4,
    label: 'Role',
    icon: 'bx-shield',
    subItems: [
      { id: 112, label: 'Add', link: '/add-role', parentId: 4 },
      { id: 115, label: 'List', link: '/list-role', parentId: 4 },
    ],
  },
  {
    id: 5,
    label: 'Staff',
    icon: 'bx-user-plus',
    subItems: [
      { id: 118, label: 'Add', link: '/add-staff', parentId: 5 },
      { id: 121, label: 'List', link: '/list-staff', parentId: 5 },
    ],
  },
  {
    id: 6,
    label: 'Room',
    icon: 'bx-bed',
    subItems: [
      { id: 123, label: 'Add', link: '/add-room', parentId: 6 },
      { id: 126, label: 'List', link: '/list-room', parentId: 6 },
    ],
  },
  {
    id: 7,
    label: 'Device',
    icon: 'bx-devices',
    subItems: [
      { id: 128, label: 'Add', link: '/add-device', parentId: 7 },
      { id: 131, label: 'List', link: '/list-device', parentId: 7 },
    ],
  },
  {
    id: 8,
    label: 'Menu',
    icon: 'bx-menu',
    subItems: [
      { id: 133, label: 'Add', link: '/add-menu', parentId: 8 },
      { id: 136, label: 'List', link: '/list-menu', parentId: 8 },
    ],
  },
  {
    id: 9,
    label: 'Table',
    icon: 'bx-table',
    subItems: [
      { id: 138, label: 'ADD', link: '/add-table', parentId: 9 },
      { id: 141, label: 'LIST', link: '/list-table', parentId: 9 },
    ],
  },
  {
    id: 10,
    label: 'Product',
    icon: 'bx-square-rounded',
    subItems: [
      { id: 143, label: 'ADD', link: '/add-product', parentId: 10 },
      { id: 146, label: 'LIST', link: '/list-product', parentId: 10 },
    ],
  },
  {
    id: 11,
    label: 'Category',
    icon: 'bx-spreadsheet',
    subItems: [
      { id: 148, label: 'ADD', link: '/add-category', parentId: 11 },
      { id: 151, label: 'LIST', link: '/list-category', parentId: 11 },
    ],
  },
  {
    id: 12,
    label: 'Order',
    icon: 'bx-shopping-bag',
    subItems: [
      { id: 153, label: 'ADD', link: '/add-order', parentId: 12 },
      { id: 156, label: 'LIST', link: '/list-order', parentId: 12 },
    ],
  },
];
