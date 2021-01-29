import { PluginRegisterFn } from "../../utils/types"
import { Type, Static } from "@sinclair/typebox"

const RecordSchema = Type.Object(
  {
    id: Type.String(),
    name: Type.String(),
    timestamp: Type.Integer(),
  },
  { description: "Record object" }
)

const ErrorSchema = Type.Object(
  {
    code: Type.Integer(),
    message: Type.String(),
  },
  { description: "Error object" }
)

const records = [
  { id: "1", name: "lorem", timestamp: 1610358531 },
  { id: "2", name: "ipsum", timestamp: 1610358531 },
  { id: "3", name: "dolot", timestamp: 1610358531 },
]

export const itemRoutes: PluginRegisterFn = async (fastify) => {
  fastify.route({
    url: "/",
    method: "GET",
    handler: async () => {
      return records
    },
  })

  fastify.route<{ Body: Static<typeof RecordSchema> }>({
    url: "/",
    method: "POST",
    schema: {
      summary: "some summary",
      body: RecordSchema,
      response: {
        201: RecordSchema,
        500: ErrorSchema,
      },
    },
    handler: async (req) => {
      const { id } = req.body
      req.log.info(id)

      records.push({ ...req.body })
      return { ...req.body }
    },
  })
}
