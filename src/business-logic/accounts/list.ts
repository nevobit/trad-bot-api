import { Collection, getModel } from "../../constant-definitions"
import { AccountSchemaMongo } from "../../entities"

export const getAccounts = async() => {
    const model = getModel(Collection.ACCOUNTS, AccountSchemaMongo);
    const accounts = await model.find({});
    return accounts;
}