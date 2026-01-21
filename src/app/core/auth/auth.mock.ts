import { IUser } from './auth.model';

export const mockUsers: Array<IUser & { password: string }> = [
  {
    id: '1',
    email: 'admin',
    password: 'admin',
    name: 'Admin',
    role: 'ADMIN',
  },
  {
    id: '2',
    email: 'user',
    password: 'user',
    name: 'User',
    role: 'USER',
  },
  {
    id: '3',
    email: 'support',
    password: 'support',
    name: 'Support',
    role: 'SUPPORT',
  },
  {
    id: '4',
    email: 'guest',
    password: 'guest',
    name: 'Guest',
    role: 'GUEST',
  },
];
