import { FastifyInstance, RouteOptions } from "fastify";
import { createAccountRoute } from "./accounts/create";
import { createBotRoute } from "./bots/create";
import { createUserRoute } from "./users/create";
import { getAccountsRoute } from "./accounts/list";
import { getBotsRoute } from "./bots";
import { deleteAccountsRoute } from "./accounts/delete";
import { deleteBotsRoute } from "./bots/delete";
import { updateAccountsRoute } from "./accounts/update";
import { updateBotRoute } from "./bots/update";

const routes: RouteOptions[] = [
    createAccountRoute,
    createBotRoute,
    createUserRoute,
    getAccountsRoute,
    getBotsRoute,
    deleteAccountsRoute,
    deleteBotsRoute,
    updateAccountsRoute,
    updateBotRoute
];

export const registerRoutes = (fastify: FastifyInstance) => {
  routes.map((route) => {
    fastify.route(route);
  });
};
