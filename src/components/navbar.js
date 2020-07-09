import React from 'react'
import { Link } from 'gatsby'

const Navbar = (props) => (
    <div className='navbar'>
        <ul>
            <li><Link to="/">{props.linkHome}</Link></li>
            <li><Link to={props.link1}>{props.link1}</Link></li>
            <li><Link to={props.link2}>{props.link2}</Link></li>
        </ul>
    </div>
  )
  
  export default Navbar


  