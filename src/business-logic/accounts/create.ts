import { Collection } from "../../constant-definitions/constants";
import { getModel } from "../../constant-definitions/mongoose";
import { Account, AccountSchemaMongo } from "../../entities";

export const createAccount = async (data: Partial<Account>) => {
  const model = getModel(Collection.ACCOUNTS, AccountSchemaMongo);
  const account = new model(data);
  await account.save();
  return account;
};
