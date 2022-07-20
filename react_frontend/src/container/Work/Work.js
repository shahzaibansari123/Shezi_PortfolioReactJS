import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {AiFillGithub, AiFillEye} from 'react-icons/ai'
import {AppWrap} from '../../wrapper'
import {urlFor, client} from '../../client'

import './Work.scss'

const Work = () => {

  const handleWorkFilter=(item)=>{

  }
  return (
    <>
    <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>
    <div className="app__work-filter">
      {['UI/UX','Web App','Mobile App','All', 'ReactJS'].map((item, index)=>(
        <div 
        key={index}
        onClick={()=> handleWorkFilter(item)}
        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ' '}`}>


        </div>
      ))}
    </div>
    </>
  )
}

export default Work