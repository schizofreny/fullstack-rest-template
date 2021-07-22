import { createServer } from "./server"
import { test } from "tap"

test('requests the "/api" route', async (t) => {
  const app = await createServer()

  const response = await app.inject({
    method: "GET",
    url: "/api",
  })

  t.equal(response.statusCode, 200, "returns a status code of 200")
})
