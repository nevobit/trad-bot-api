
import { Collection, getModel } from "../../constant-definitions";
import { Account, AccountSchemaMongo } from "../../entities";

export const deleteAccount = async (id: string): Promise<Boolean | Error> => {
  const model = getModel<Account>(Collection.ACCOUNTS, AccountSchemaMongo);
  const result = await model.findByIdAndDelete({ _id: id });
  if (!result) throw new Error('Could not delete brands');
  return true;
};
