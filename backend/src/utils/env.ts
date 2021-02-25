import { cleanEnv, port, str } from "envalid"
import { config } from "dotenv"

// This enables support for .env file
config()

// All env variables that we want to use must be defined here
// More info can be found here https://github.com/af/envalid
const env = cleanEnv(process.env, {
  NODE_ENV: str({ default: "development" }),
  SERVER_PORT: port({ default: 4000 }),
})

export default env
