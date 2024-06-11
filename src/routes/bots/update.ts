import { RouteOptions } from "fastify";
import { Bot } from "../../entities";
import { updateBot } from "../../business-logic";

export const updateBotRoute: RouteOptions = {
  method: "PATCH",
  url: "/bots/:id",
  handler: async (request, reply) => {
    const { params } = request;
    const { _id } = params as { _id: string };
    const data = request.body as Partial<Bot>;
    const bots = await updateBot({ ...data, _id });
    reply.status(200).send(bots);
  },
};
