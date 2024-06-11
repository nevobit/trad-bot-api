import { RouteOptions } from "fastify";
import { createUserRoute } from "./create";

export const userRoutes: RouteOptions[] = [createUserRoute];
