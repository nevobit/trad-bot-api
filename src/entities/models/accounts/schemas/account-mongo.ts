import { Schema } from "mongoose";
import crypto from "crypto";
import { AccountStatus, Account } from "./account";
import { StatusType } from "../../../common";

export const AccountSchemaMongo = new Schema<Account>(
  {
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    login: { type: Number, required: true },
    server: { type: String, required: true },
    password: { type: String, required: true },
    statusAccount: {
      type: String,
      enum: Object.values(AccountStatus),
      required: true,
    },
    status: { type: String, default: StatusType.ACTIVE },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

AccountSchemaMongo.methods.toJSON = function () {
  const { _id, ...account } = this.toObject();
  account.id = _id;
  return account;
};
