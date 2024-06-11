import { Schema } from "mongoose";
import crypto from "crypto";
import { Bot } from "./bot";

export const BotSchemaMongo = new Schema<Bot>(
  {
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    name: { type: String },
    badge: { type: String },
    status: { type: String },
    volume: { type: Number },
    operation: { type: String },
    profitTarget: { type: Number },
    saftyOrders: { type: Number },
    account: { type: String, ref: "accounts" },
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
