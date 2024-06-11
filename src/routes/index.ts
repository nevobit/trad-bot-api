import { FastifyInstance, RouteOptions } from "fastify";
import { botsRoutes } from "./bots";
import { accountsRoutes } from "./accounts";
import { userRoutes } from "./users";

const routes: RouteOptions[] = [
  ...userRoutes,
  ...accountsRoutes,
  ...botsRoutes,
];

export const registerRoutes = (fastify: FastifyInstance) => {
  routes.map((route) => {
    fastify.route(route);
  });
};
