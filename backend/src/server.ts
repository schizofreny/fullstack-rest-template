import fastify from "fastify"
import fastifyStatic from "fastify-static"
import fastifySwagger from "fastify-swagger"
import path from "path"
import { createApolloServer } from "./graphql/apollo"
import { routerPlugin } from "./apps/router"
import { InternalServerError, NotFoundError } from "./utils/errors"
import logger from "./utils/logger"

// NOTE there is recommended order to load plugins (and routes)
// See here: https://www.fastify.io/docs/latest/Getting-Started/#loading-order-of-your-plugins
export const createServer = () => {
  // Require the framework and instantiate it
  const server = fastify({ logger: logger })
  const graphqlServer = createApolloServer()

  // Enable Apollo server
  // We dont want to have graphql routes visible in swagger
  server.register(graphqlServer.createHandler())

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
      throw new NotFoundError()
    }

    // sendFile() sends files relative to fastifyStatic root property
    return reply.sendFile("index.html")
  })

  // Custom error handler
  server.setErrorHandler(async (error) => {
    const { code, statusCode } = error

    // if no code or statusCode found, non Fastify error was thrown
    // we must replace it with Fastify 500 error because of schema validation
    if (!code || !statusCode) {
      return new InternalServerError()
    }

    return error
  })

  // Register route plugins
  server.register(routerPlugin, { prefix: "api" })

  return server
}
