import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../styles/styles.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <section
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          jCrego
          © {new Date().getFullYear()}
          {` `}
          <a href="https://www.instagram.com/jcrego.css">Instagram</a>
        </footer>
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
