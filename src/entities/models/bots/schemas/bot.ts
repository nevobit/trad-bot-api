import { Base } from "../../../common";

export enum Direction {
  Buy = "buy",
  Sell = "sell",
}

export enum Status {
  Active = "active",
  Inactive = "inactive",
}

export interface Bot extends Base {
  symbol: string;
  lot_size: number;
  take_profit: number;
  stop_loss: number;
  direction: Direction;
  statusBoot: Status;
  account: string;
}
