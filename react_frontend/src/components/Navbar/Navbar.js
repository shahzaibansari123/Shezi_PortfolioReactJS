import React from 'react'
import './Navbar.scss'
import {images} from '../../constants'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {['Home', 'About', 'Work', 'Skills','Contact'].map((item)=>(
          <li key={`link-${item}`}>
            <div>
              <a href={`#${item}`}>{item}</a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar