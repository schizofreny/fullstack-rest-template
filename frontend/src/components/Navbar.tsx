import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink>
    </div>
  )
}

export default Navbar
