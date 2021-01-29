import fastify from "fastify"
import fastifyStatic from "fastify-static"
import fastifySwagger from "fastify-swagger"
import path from "path"
import { routerPlugin } from "./routes/router"

export const createServer = () => {
  // Require the framework and instantiate it
  const server = fastify({ logger: { level: "info", prettyPrint: true } })

  // Adding swagger
  // This must be registered before all other routes
  server.register(fastifySwagger, {
    exposeRoute: true,
    // dynamic mode searches for routes automatically
    mode: "dynamic",
  })

  // Register route plugins
  server.register(routerPlugin, { prefix: "api" })

  // Serve frontend static files
  server.register(fastifyStatic, {
    root: path.resolve("./public"),
    prefix: "/",
  })

  // Redirect 404 to React SPA and handle 404 there
  server.setNotFoundHandler((req, reply) => {
    // sendFile() sends files relative to fastifyStatic root property
    return reply.sendFile("index.html")
  })

  return server
}
