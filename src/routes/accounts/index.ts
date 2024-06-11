import { RouteOptions } from "fastify";
import { createAccountRoute } from "./create";
import { getAccountsRoute } from "./list";
import { updateAccountsRoute } from "./update";
import { deleteAccountsRoute } from "./delete";

export const accountsRoutes: RouteOptions[] = [
  createAccountRoute,
  getAccountsRoute,
  updateAccountsRoute,
  deleteAccountsRoute,
];
