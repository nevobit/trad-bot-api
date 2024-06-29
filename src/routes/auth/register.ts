import bcrypt from "bcrypt";
import { RouteOptions } from "fastify";
import { createUser, findUserByEmail } from "../../business-logic";

export const registerAuthRoute: RouteOptions = {
  method: 'POST',
  url: '/register',
  handler: async (request, reply) => {
    try {
      const { username, email, password } = request.body as { username: string, email: string, password: string };

      const existingUser = await findUserByEmail(email)
      if (existingUser) return reply.status(400).send({ error: 'User already exists' })

      const hashedPassword = await bcrypt.hash(password, 12)

      const user = await createUser({ username, email, password: hashedPassword })
      reply.status(201).send(user)

    } catch (error) {
      console.error('Error registering user: ', error);
      reply.status(500).send({ error: 'An error occurred while registering the user' })
    }
  }
};
