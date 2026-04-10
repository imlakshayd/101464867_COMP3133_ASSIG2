export interface User {
  id: string;
  username: string;
  email: string;
  createdAt?: string;
}

export interface AuthPayload {
  token: string;
  user: User;
}
