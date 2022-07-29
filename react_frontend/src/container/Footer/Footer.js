import React , {useState} from 'react'
import {images} from '../../constants'
import {motion} from 'framer-motion'

import {urlFor, client} from '../../client'
import {AppWrap, MotionWrap} from '../../wrapper'
import './Footer.scss'

const Footer = () => {
  return (
    <>
    <h2  className="head-text">Take a coffee and Chat with Me</h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email" />
        

      </div>
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'), 
  'Contact', 
  "app__whitebg"
  );