import { PluginRegisterFn } from "../utils/types"
import { itemRoutes } from "./items/itemRoutes"

export const routerPlugin: PluginRegisterFn = async (fastify) => {
  fastify.route({
    url: "/",
    method: "GET",
    handler: async () => {
      return { hello: "world" }
    },
  })

  // register all subroutes here
  fastify.register(itemRoutes, { prefix: "items" })

  // override 404 redirect to React frontend on api routes
  fastify.all("*", async (req, res) => {
    res.code(404)
    return { status: 404, message: "not found" }
  })
}
