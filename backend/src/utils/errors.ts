import { Type } from "@sinclair/typebox"

export const GenericErrorSchema = Type.Object(
  {
    error: Type.String(),
    message: Type.String(),
    statusCode: Type.Integer(),
  },
  { description: "Generic error object" }
)
