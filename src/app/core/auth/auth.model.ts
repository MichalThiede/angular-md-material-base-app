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

export type UserRole = 'admin' | 'user';
