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

const User = () => {
  const [{ data, fetching, error }] = useUserQuery()

  if (fetching) {
    return <div>fetching</div>
  }

  if (error) {
    return (
      <div>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    )
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default User
