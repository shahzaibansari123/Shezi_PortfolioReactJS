import React, {useState, useEffect} from 'react'
import './About.scss'
import {motion} from 'framer-motion'
import {images} from '../../constants'

import {urlFor, client} from '../../client'
import {AppWrap} from '../../wrapper'

// const abouts=[
//   {title: "Web Developer", description: "I am a good web developer with a passion for creating beautiful, attractive and functional web applications", imgUrl: images.webmy},
//   {title: "Front-End Developer", description: "I am a good front-end developer with a passion for creating beautiful front-end for the web/mobile Apps ", imgUrl: images.frontmy},
//   {title: "Mobile App Developer", description: "I am a good Mobile App developer with a passion for creating beautiful and native applications", imgUrl: images.mobmy},
//   {title: "Back-End Developer", description: "I am a good back-end developer with a passion for building functional back-end for the websites", imgUrl: images.backmy},
  
// ]


const About = () => {

  const [abouts, setAbouts]=useState([])
  
  useEffect(() => {
   const query = '*[_type == "abouts"]'

   client.fetch(query)
   .then ((data)=> setAbouts(data))
  }, [])
  
  return (
    <>
      <h2 className="head-text">I Know that <span>Good Apps</span> <br />means  <span>Good Business</span></h2>

    <div className="app__profiles">
      {abouts.map((about, index)=>(
        <motion.div
        whileInView={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{ duration: 0.5, type: 'tween'}}
        className="app__profile-item"
        key={about.title + index}
        >
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
          <p className="p-text" style={{marginTop: 10 }}>{about.description}</p>

        </motion.div>
      ))}

    </div>
    
    </>
    
  )
}

export default AppWrap(About, 'About')