import { registerAuthRoute } from './register'
import { loginAuthRoute } from './login'
import { RouteOptions } from 'fastify'

export const authsRoutes: RouteOptions[] = [
  registerAuthRoute,
  loginAuthRoute,
]