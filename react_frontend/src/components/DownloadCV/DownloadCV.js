import React from "react";
import { images } from "../../constants";
// import { Helmet } from "react-helmet";

// import cv from '../../assets/Shahzaib.pdf'

import cv from "../DownloadCV/CV/Shahzaib.pdf";



const DownloadCV = () => {
  // const handleGoogle = () => {
  //   const favicon = getFaviconEl(); // Accessing favicon element
  //   favicon.href = `${images.shahzaiblogo.png}`;  };

  return (
    <>
      {/* 
      <Helmet>
        <title>new</title>
      </Helmet>
         */}

      <a href={images.cv} download rel="noreferrer">
        <button>Download CV</button>
      </a>
    </>
  );
};

export default DownloadCV;
