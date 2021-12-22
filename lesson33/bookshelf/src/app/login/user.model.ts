import {Role} from "./role.model";

export class User {
  id: number | null = null;
  username: string | null = null;
  password?: string | null = null;
  roles?: Role[];
  token?: string;
}
