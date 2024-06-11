import { Schema } from "mongoose";
import crypto from "crypto";
import { Bot, Direction, Status } from "./bot";
import { StatusType } from "../../../common";

export const BotSchemaMongo = new Schema<Bot>(
  {
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    symbol: { type: String, required: true },
    account: { type: String, required: true },
    lot_size: { type: Number, required: true },
    take_profit: { type: Number, required: true },
    stop_loss: { type: Number, required: true },
    direction: { type: String, enum: Object.values(Direction), required: true },
    statusBoot: { type: String, enum: Object.values(Status), required: true },
    status: { type: String, default: StatusType.ACTIVE },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

BotSchemaMongo.methods.toJSON = function () {
  const { _id, ...bot } = this.toObject();
  bot.id = _id;
  return bot;
};
