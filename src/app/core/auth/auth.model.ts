import { Role } from './role.model';

export interface IUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface IAuthState {
  isAuthenticated: boolean;
  user: IUser | null;
}

type UserRole = Role;
