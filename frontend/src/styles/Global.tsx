import { css, Global as EmotionGlobal } from "@emotion/react"
import React, { FC } from "react"

const styles = css`
  html {
  }
`

const Global: FC = () => <EmotionGlobal styles={styles} />

export default Global
