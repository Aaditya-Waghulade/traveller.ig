import React from 'react'
import {carousel} from "react-responsive-carousel"
import img1 from "../Assets/3.jpeg"
import img2 from "../Assets/4.jpeg"

const services = () => {
  return (
    <div className="services">
        <carousel>
<div>
    <img src={img1} alt="Item1" />
    <p>fulstack</p>
</div>
<div>
    <img src={img2} alt="Item3" />
    <p>frontend</p>
</div>


        </carousel>
    </div>
  )
}

export default services