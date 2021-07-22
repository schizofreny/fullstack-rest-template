import { GenericErrorSchema } from "../utils/errors"
import { PluginRegisterFn } from "../utils/types"

export const routerPlugin: PluginRegisterFn = async (fastify) => {
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
      throw fastify.httpErrors.internalServerError()
    },
  })

  // route for health checks
  fastify.route({
    method: "GET",
    schema: { hide: true },
    url: "/healthz",
    handler: async () => ({}),
  })

  // override 404 redirect to React frontend on api routes
  fastify.all("*", { schema: { hide: true } }, async () => {
    throw fastify.httpErrors.notFound()
  })
}
