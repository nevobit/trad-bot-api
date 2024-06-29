import { FastifyInstance, RouteOptions } from "fastify";
import { botsRoutes } from "./bots";
import { accountsRoutes } from "./accounts";
import { userRoutes } from "./users";
import { authsRoutes } from "./auth";

const routes: RouteOptions[] = [
  ...userRoutes,
  ...accountsRoutes,
  ...botsRoutes,
  ...authsRoutes
];

export const registerRoutes = (fastify: FastifyInstance) => {
  routes.map((route) => {
    fastify.route(route);
  });
};
