import { Collection, getModel } from "../../constant-definitions";
import { Account, AccountSchemaMongo } from "../../entities";

export const updateAccount = async (data: Partial<Account>) => {
  const model = getModel<Account>(Collection.ACCOUNTS, AccountSchemaMongo);
  const brands = await model.findById(data._id);
  if (!brands) throw new Error(`Brands doesn't exist`);
  const updatedBrands = await model.findByIdAndUpdate(data._id, data, {
    new: true,
  });
  if (!updatedBrands) throw new Error(`Brands not found`);
  return updatedBrands;
};
