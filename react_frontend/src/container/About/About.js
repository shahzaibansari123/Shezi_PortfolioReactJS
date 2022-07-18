import React, {useState, useEffect} from 'react'
import './About.scss'
import {motion} from 'framer-motion'

const abouts=[
  {title: "web developer", description: "I am a good web developer", imgUrl: ' '},
  {title: "web design", description: "I am a good web developer", imgUrl: ' '},
  {title: "UI/UX", description: "I am a good web developer", imgUrl: ' '},
  {title: "web Animations", description: "I am a good web developer", imgUrl: ' '},
]


const About = () => {
  return (
    <>
    <h2 className="head-text">
      I Know that   
      <span> Good Design </span>
      <br />
       means
      <span> Good Business</span>
    </h2>

    <div className="app__profiles">

    </div>
    
    </>
    
  )
}

export default About