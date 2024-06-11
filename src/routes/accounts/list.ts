import { RouteOptions } from "fastify";
import { getAccounts } from "../../business-logic/accounts";

export const getAccountsRoute: RouteOptions = {
    method: 'GET',
    url: '/accounts',
    handler: async (request, reply) => {
        const accounts = await getAccounts();
        reply.status(201).send(accounts);
    }
}