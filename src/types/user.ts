export interface FUser {
  id?: number;
  username: string;
  password: string;
  avatar?: string;
  sex?: "0" | "1" | "99";
  level?: "0" | "1";
  email?: string;
}
