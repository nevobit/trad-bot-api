import { Collection, getModel } from "../../constant-definitions"
import { BotSchemaMongo } from "../../entities"

export const getBots = async() => {
    const model = getModel(Collection.BOTS, BotSchemaMongo);

    const bots = await model.find({});

    return bots;
}