import { Collection } from "../../constant-definitions/constants";
import { getModel } from "../../constant-definitions/mongoose";
import { User, UserSchemaMongo } from "../../entities";

export const createUser = async (data: Partial<User>) => {
  const model = getModel(Collection.USERS, UserSchemaMongo);
  const account = new model(data);
  await account.save();
  return account;
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const model = getModel(Collection.USERS, UserSchemaMongo);
  return model.findOne({ email });
}

export const findUserByUsername = async (username: string): Promise<User | null> => {
  const model = getModel(Collection.USERS, UserSchemaMongo);
  return model.findOne({ username });
}
