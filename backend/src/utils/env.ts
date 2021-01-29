import { cleanEnv, port, str } from "envalid"

const env = cleanEnv(
  process.env,
  {
    // Common
    NODE_ENV: str({ choices: ["development", "production", "staging"] }),
    SERVER_PORT: port({ default: 4000 }),
  },
  { strict: true }
)

export default env
