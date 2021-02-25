import { makeSchema, objectType } from "@nexus/schema"
import path from "path"

const User = objectType({
  name: "User",
  definition(t) {
    t.id("id")
  },
})

const Query = objectType({
  name: "Query",
  definition(t) {
    t.field("hello", {
      type: "String",
      resolve: () => "world",
    })

    t.field("user", {
      type: User.name,
      resolve: () => {
        return {
          id: "1",
        }
      },
    })
  },
})

export default makeSchema({
  types: [Query, User],
  outputs: {
    schema: path.resolve(path.join(process.cwd(), "src", "generated", "schema.graphql")),
    typegen: path.resolve(path.join(process.cwd(), "src", "generated", "nexus.d.ts")),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: path.resolve(path.join(process.cwd(), "src", "graphql", "context.ts")),
        alias: "Context",
      },
    ],
  },
})
