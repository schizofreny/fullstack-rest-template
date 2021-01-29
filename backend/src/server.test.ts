import { createServer } from "./server"
import { test } from "tap"

test('requests the "/api" route', async (t) => {
  const app = createServer()

  const response = await app.inject({
    method: "GET",
    url: "/api",
  })

  t.strictEqual(response.statusCode, 200, "returns a status code of 200")
})
