import React from 'react'
import  Navbar from './navbar'
import { Link } from "gatsby"

const Header = (props) => (
  <section className="header">
    <Link to="/">
      <div className="logo"></div>
    </Link>
    <Navbar linkHome="Home" link1="Portfolio" link2="Contact"/>
  </section>
)

export default Header