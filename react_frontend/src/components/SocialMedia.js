import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
        <a href="https://github.com/shahzaibansari123" target="_blank">  <BsGithub /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/shahzaibansari123" target="_blank"><BsLinkedin /></a>
        </div>

        <div>
        <a href="https://www.facebook.com/profile.php?id=100008192054004" target="_blank"><FaFacebookF /></a>
        </div>

    </div>
  )
}

export default SocialMedia
