import React , {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {HiChevronLeft,HiChevronRight} from 'react-icons/hi'

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import './Testimonial.scss'

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      // console.log(data)
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
   <>
   {testimonials.length && (
    <>
    <div className="app__testimonials-items">

    </div>
    </>
   )}
   </>
  )
}


export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 
  'Testimonial', 
  "app__primarybg"
  );
