import { Base } from "../../../common";

export enum AccountStatus {
  Active = "active",
  Inactive = "inactive",
}

export interface Account extends Base {
  login: number;
  server: string;
  password: string;
  statusAccount: AccountStatus;
}
