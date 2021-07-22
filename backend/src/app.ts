import { createServer } from "./server"
import env from "./utils/env"

async function start() {
  const server = await createServer()

  // Run the server
  server.listen(env.SERVER_PORT, env.isProd ? "0.0.0.0" : "localhost", (err) => {
    if (err) {
      server.log.error({ ...err })
      process.exit(1)
    }
  })

  return server
}

start()

// exit node process on unhandled promise rejections
process.on("unhandledRejection", (error) => {
  throw error
})
