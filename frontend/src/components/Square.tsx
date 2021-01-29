import { css } from "@emotion/react"
import React from "react"

const Square = () => {
  return (
    <div
      css={css`
        width: 100px;
        height: 100px;
        background-color: red;
      `}
    />
  )
}

export default Square
