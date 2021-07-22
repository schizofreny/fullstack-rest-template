import fastify from "fastify"
import fastifySensible from "fastify-sensible"
import fastifyStatic from "fastify-static"
import fastifySwagger from "fastify-swagger"
import path from "path"
import { routerPlugin } from "./apps/router"
import { createApolloServer } from "./graphql/apollo"
import logger from "./utils/logger"

// NOTE there is recommended order to load plugins (and routes)
// See here: https://www.fastify.io/docs/latest/Getting-Started/#loading-order-of-your-plugins
export async function createServer() {
  // Require the framework and instantiate it
  const server = fastify({ logger: logger })
  const graphqlServer = createApolloServer()

  await graphqlServer.start()

  // Enable Apollo server
  // We dont want to have graphql routes visible in swagger
  server.register(graphqlServer.createHandler())

  // https://github.com/fastify/fastify-sensible
  server.register(fastifySensible)

  // Adding swagger
  // This must be registered before all routes that we want to include in swagger
  server.register(fastifySwagger, {
    exposeRoute: true,
    // dynamic mode searches for routes automatically
    mode: "dynamic",
  })

  // Serve frontend static files
  server.register(fastifyStatic, {
    root: path.join(process.cwd(), "public"),
    prefix: "/",
  })

  // Redirect 404 to React SPA and handle 404 there
  server.setNotFoundHandler(async (req, reply) => {
    // we must use this, because otherwise fastify would return 500 error
    // more info here https://github.com/fastify/fastify/issues/2061
    // should be adjusted in fastify v4
    if (req.method === "HEAD") {
      return null
    }

    // we only want to serve get requests
    if (req.method !== "GET") {
      throw server.httpErrors.notFound()
    }

    // sendFile() sends files relative to fastifyStatic root property
    return reply.sendFile("index.html")
  })

  // Register route plugins
  server.register(routerPlugin, { prefix: "api" })

  return server
}
