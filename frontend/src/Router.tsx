import React from "react"
import { Route, Routes } from "react-router"
import About from "./pages/About"
import Home from "./pages/Home"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  )
}

export default Router
