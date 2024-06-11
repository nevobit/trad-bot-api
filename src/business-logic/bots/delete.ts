
import { Collection, getModel } from "../../constant-definitions";
import { Bot, BotSchemaMongo } from "../../entities";

export const deleteBot = async (id: string): Promise<Boolean | Error> => {
  const model = getModel<Bot>(Collection.BOTS, BotSchemaMongo);
  const result = await model.findByIdAndDelete({ _id: id });
  if (!result) throw new Error('Could not delete brands');
  return true;
};
