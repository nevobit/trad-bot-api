import { Collection } from "../../constant-definitions/constants";
import { getModel } from "../../constant-definitions/mongoose";
import { Bot, BotSchemaMongo } from "../../entities";

export const createBot = async (data: Partial<Bot>) => {
  const model = getModel(Collection.BOTS, BotSchemaMongo);
  const account = new model(data);
  await account.save();
  return account;
};
