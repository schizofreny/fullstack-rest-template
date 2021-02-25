import { ApolloServer } from "apollo-server-fastify"
import schema from "./schema"

export const createApolloServer = () => {
  const server = new ApolloServer({ schema })
  return server
}
