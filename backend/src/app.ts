import { createServer } from "./server"
import env from "./utils/env"

const server = createServer()

// Run the server!
server.listen(env.SERVER_PORT, env.isProd ? "0.0.0.0" : "localhost", (err) => {
  if (err) {
    server.log.error({ ...err })
    process.exit(1)
  }
})

// exit node process on unhandled promise rejections
process.on("unhandledRejection", (error) => {
  throw error
})
