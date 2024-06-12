import { Collection, getModel } from "../../constant-definitions";
import { Bot, BotSchemaMongo } from "../../entities";

export const updateBot = async (data: Partial<Bot>) => {
  console.log("LOGICA", data);
  const model = getModel<Bot>(Collection.BOTS, BotSchemaMongo);
  const updatedBrands = await model.findByIdAndUpdate(data.id, data, {
    new: true,
  });
  if (!updatedBrands) throw new Error(`bot not found`);
  return updatedBrands;
};
