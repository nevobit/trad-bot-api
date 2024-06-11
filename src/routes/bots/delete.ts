import { RouteOptions } from "fastify";
import { deleteBot } from "../../business-logic/bots";

export const deleteBotsRoute: RouteOptions = {
    method: 'DELETE',
    url: '/bots/:id',
    handler: async (request, reply) => {
        const { params } = request;
        const { id } = params as { id: string };
        const bot = await deleteBot(id);
        reply.status(200).send(bot);
    }
}