import { RouteOptions } from "fastify";
import { deleteAccount } from "../../business-logic/accounts";

export const deleteAccountsRoute: RouteOptions = {
    method: 'DELETE',
    url: '/accounts/:id',
    handler: async (request, reply) => {
        const { params } = request;
        const { id } = params as { id: string };
        const accounts = await deleteAccount(id);
        reply.status(200).send(accounts);
    }
}