import React from "react"
import { gql } from "urql"
import { useUserQuery } from "../generated/graphql"

gql`
  query User {
    user {
      id
    }
  }
`

const Square = () => {
  const [{ fetching, data, stale, error, operation, extensions }] = useUserQuery()

  console.log(
    " fetching, data, stale, error, operation, extensions",
    fetching,
    data,
    stale,
    error,
    operation,
    extensions
  )

  return <div style={{ width: "100px", height: "100px", backgroundColor: "red" }} />
}

export default Square
