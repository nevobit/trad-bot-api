import { RouteOptions } from "fastify";
import { Account, Bot } from "../../entities";
import { createAccount } from "../../business-logic/accounts";
import { createBot } from "../../business-logic/bots";

export const createBotRoute: RouteOptions = {
    method: 'POST',
    url: '/bots',
    handler: async (request, reply) => {
        const { body } = request;
        const data = body as Partial<Bot>;
        const bot = await createBot(data);
        reply.status(201).send(bot);
    }
}