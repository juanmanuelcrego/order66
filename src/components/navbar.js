import React from 'react'
import { Link } from 'gatsby'

const Navbar = (props) => (
    <div className='navbar'>
        <ul>
            <li><Link to="/">{props.linkHome}</Link></li>
            <li><Link to='#portfolio'>{props.link1}</Link></li>
            <li><Link to='#contact'>{props.link2}</Link></li>
        </ul>
    </div>
  )
  
  export default Navbar


  