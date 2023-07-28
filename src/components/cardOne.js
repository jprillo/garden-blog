import React from 'react'

import frame from '../images/frame.png'
import { Link } from 'gatsby'

import info from '../images/info.png'




export default function CardOne({ title, link, isFlipped, onClick, image, description }) {

    return (

        <div  className={` card ${isFlipped ? 'flipped' : ''}`} onClick={onClick} style={{position:" relative", backgroundSize: "",backgroundPosition: "center", height: "300px"}}>
   <div className="front" style={{ backgroundSize: "cover",backgroundPosition: "center", backgroundImage:  `url('${image}')`}}>
<img  src={frame} alt="this is a hero" style={{  width: "100%", height: "100%"}} />

    <div style={{display: isFlipped ? 'none' : 'block', position: "absolute", bottom: "-20px", left: "0", right: 0, margin: "auto", background: "white", padding: "2px", width: '75%', border: "solid black 2px"}} >
          <h5 style={{display: isFlipped ? 'none' : 'block', color: "black", textAlign: "center", padding: 0, margin: 0}}>{title}</h5>

          </div>
          </div>
          <div className="back" style={{padding: isFlipped ? '1rem 1.5rem' : 'none'}}>
            <div>
            <h2>{title}</h2>
            <p>{description}</p>
            </div>
            <div style={{alignSelf: "end"}} >
        <Link to={link}><img style={{width: "50px"}}  src={info} alt={description}  /></Link>
        </div>
      </div>
        </div>

    )
}

