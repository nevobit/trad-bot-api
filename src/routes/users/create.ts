import { RouteOptions } from "fastify";
import { User } from "../../entities";
import { createUser } from "../../business-logic/users";

export const createUserRoute: RouteOptions = {
    method: 'POST',
    url: '/users',
    handler: async (request, reply) => {
        const { body } = request;
        const data = body as Partial<User>;
        const user = await createUser(data);
        reply.status(201).send(user);
    }
}