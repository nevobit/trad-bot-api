import { RouteOptions } from "fastify";
import { updateAccount } from "../../business-logic/accounts";
import { Account } from "../../entities";

export const updateAccountsRoute: RouteOptions = {
  method: "PATCH",
  url: "/accounts/:_id",
  handler: async (request, reply) => {
    const { params } = request;
    const { _id } = params as { _id: string };
    const data = request.body as Partial<Account>;
    const accounts = await updateAccount({ ...data, _id });
    reply.status(200).send(accounts);
  },
};
