import { Type } from "@sinclair/typebox"
import createError from "fastify-error"

export const GenericErrorSchema = Type.Object(
  {
    code: Type.String(),
    message: Type.String(),
    statusCode: Type.Integer(),
  },
  { description: "Generic error object" }
)

export const BadRequestError = createError("BAD_REQUEST", "bad request", 400)
export const ForbiddenError = createError("FORBIDDEN", "forbidden", 403)
export const NotFoundError = createError("NOT_FOUND", "not found", 404)
export const InternalServerError = createError("INTERNAL_SERVER_ERROR", "internal server error", 500)
