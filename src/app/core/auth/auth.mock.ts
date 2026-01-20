import { IUser } from './auth.model';

export const mockUsers: Array<IUser & { password: string }> = [
  {
    id: '1',
    email: 'admin',
    password: 'admin',
    name: 'Admin',
    role: 'admin',
  },
  {
    id: '2',
    email: 'user',
    password: 'user',
    name: 'User',
    role: 'user',
  },
];
