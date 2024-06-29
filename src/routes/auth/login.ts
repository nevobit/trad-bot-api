import bcrypt from "bcrypt";
import { RouteOptions } from "fastify";
import { findUserByUsername } from "../../business-logic";
import { JWT } from '@fastify/jwt'

declare module 'fastify' {
  interface FastifyRequest {
    jwt: JWT
  }
}

export const loginAuthRoute: RouteOptions = {
  method: 'POST',
  url: '/login',
  handler: async (request, reply) => {
    try {
      const { username, password } = request.body as { username: string, password: string };

      const user = await findUserByUsername(username)
      if (!user) return reply.status(400).send({ error: 'Invalid email or password' })

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return reply.status(400).send({ error: 'Invalid password' })

      const token = request.jwt.sign(user)
      reply.status(200).send({ token: token })

    } catch (error) {
      console.error('Error registering user: ', error);
      reply.status(500).send({ error: 'An error occurred while registering the user' + error });
    }
  }
};