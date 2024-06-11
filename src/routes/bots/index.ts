import { RouteOptions } from "fastify";
import { createBotRoute } from "./create";
import { deleteBotsRoute } from "./delete";
import { getBotsRoute } from "./list";
import { updateBotRoute } from "./update";

export const botsRoutes: RouteOptions[] = [
  createBotRoute,
  deleteBotsRoute,
  getBotsRoute,
  updateBotRoute,
];
