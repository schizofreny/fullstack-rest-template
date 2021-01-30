import { GenericErrorSchema, InternalServerError, NotFoundError } from "../utils/errors"
import { PluginRegisterFn } from "../utils/types"
import { itemRoutes } from "./items/itemRoutes"

export const routerPlugin: PluginRegisterFn = async (fastify) => {
  // register all subroutes here
  fastify.register(itemRoutes, { prefix: "items" })

  // route for error handling test
  fastify.route({
    method: "GET",
    url: "/errorz",
    schema: {
      hide: true,
      response: {
        500: GenericErrorSchema,
      },
    },
    handler: async () => {
      throw new InternalServerError()
    },
  })

  // route for health checks
  fastify.route({
    method: "GET",
    schema: { hide: true },
    url: "/healthz",
    handler: async () => {
      return {}
    },
  })

  // override 404 redirect to React frontend on api routes
  fastify.all("*", { schema: { hide: true } }, async () => {
    throw new NotFoundError()
  })
}
