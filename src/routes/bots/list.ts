import { RouteOptions } from "fastify";
import { getBots } from "../../business-logic/bots";

export const getBotsRoute: RouteOptions = {
  method: "GET",
  url: "/bots",
  handler: async (request, reply) => {
    const bots = await getBots();
    reply.status(201).send(bots);
  },
};
