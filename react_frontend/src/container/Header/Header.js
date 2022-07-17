import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";

import { images } from "../../constants";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div classname="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Shahzaib Ansari</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">React Developer </p>
            <p className="p-text">React Native Developer </p>
            <p className="p-text">MERN Stack Developer </p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, delayChildren: 1 }}
      className="app__header-img">
<img src={images.p1} alt="profile" />
<motion.img 
      whileInView={{ scale: [0, 1] }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      src={images.circle} 
      alt="profile_circle"
      
      className="overlay_circle"

>

</motion.img>
      </motion.div>

      <motion.div>

      </motion.div>
    </div>
  );
};

export default Header;
