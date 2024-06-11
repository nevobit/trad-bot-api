import { RouteOptions } from "fastify";
import { Account } from "../../entities";
import { createAccount } from "../../business-logic/accounts";

export const createAccountRoute: RouteOptions = {
    method: 'POST',
    url: '/accounts',
    handler: async (request, reply) => {
        const { body } = request;
        const data = body as Partial<Account>;
        const account = await createAccount(data);
        reply.status(201).send(account);
    }
}