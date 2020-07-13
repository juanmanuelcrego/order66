import React from 'react'
import Social from './social'

const Footer = () => (
    <section className='footer'>
        <Social></Social>
        jCrego
          © {new Date().getFullYear()}
        {` `}
    </section>
)

export default Footer