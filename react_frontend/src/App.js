import React from 'react'
import {About, Work, Skills, Testimonial, Header, Footer} from './container'
import {Navbar, DownloadCV} from './components'
import './App.scss'
import { Helmet } from 'react-helmet'

const App = () => {
  return (
    <div className="app">
      {/* <Helmet>
        <title>new</title>
      </Helmet> */}
      
      <DownloadCV />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  )
}

export default App
