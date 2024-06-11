import { Collection, getModel } from "../../constant-definitions";
import { Bot, BotSchemaMongo } from "../../entities";

export const updateBot = async (data: Partial<Bot>) => {
    const model = getModel<Bot>(Collection.BOTS, BotSchemaMongo);
    const brands = await model.findById(data.id);
    
    if (!brands) throw new Error(`Brands doesn't exist`);

    const updatedBrands = await model.findByIdAndUpdate(data.id, data, {
        new: true,
    });
    if (!updatedBrands) throw new Error(`Brands not found`);
    return updatedBrands;
};
