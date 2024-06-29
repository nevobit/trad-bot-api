import "dotenv/config";
import fastify from "fastify";
import { initDataSources } from "../data-sources";
import { registerRoutes } from "../routes";
import fastifyCors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";

const { PORT, HOST, MONGODB_URL } = process.env;
const corsOptions = {
  origin: "*",
};

const main = async () => {
  await initDataSources({
    mongoose: {
      mongoUrl: MONGODB_URL,
    },
  });

  const app = fastify();

  app.register(fastifyJwt, {
    secret: 'supersecretcode',
  })

  app.register(fastifyCors, corsOptions);

  app.addHook('preHandler', (request, response, next) => {
    request.jwt = app.jwt
    return next();
  })

  app.register(fastifyCookie, {
    secret: 'the-secret-key',
    hook: 'preHandler'
  })

  app.register(
    (instance, options, next) => {
      registerRoutes(instance);
      next();
    },
    { prefix: "api/v1" }
  );

  app.listen({ port: Number(PORT), host: HOST }, () => {
    console.log("Server running on port", PORT);
  });
};

void main();
