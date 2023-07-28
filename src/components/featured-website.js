import React from 'react'
import {Link} from 'gatsby'
import github from '../images/github-negative.png'
import icon from '../images/leave.png'

import info from '../images/info.png'






export default function FeaturedWebsite(props) {

    return (
      

        <div className="flex gap-1 " style={{ overflow: "hidden"}}>
        <div  className="col-6">
        <Link to ={props.link}>
        <img width= "100%" height="100%" style={{objectFit: "cover"}} src={props.image} alt="this is a hero" />
  
        </Link>
  </div>
  <div className="col-6" style={{
      position: "relative"
    }}>
      <div >
          <h2 style={{
        color: "white",
        padding: "0 0 1rem 0",
        marginTop: 0
      }}>{props.title}</h2>
              <p className="col-9">
             {props.description1} </p><br />
             <p className="col-9">
             {props.description2} </p><br />
             
             </div>
            <div className="social-media-bar">
              <Link to={props.link3}> <img  src={github}alt="this is a hero" /></Link>
              <Link to={props.link2}> <img src={icon}alt="this is a hero" /></Link>
              <Link to={props.link}> <img  src={info}alt="this is a hero" /></Link>
            
       
            </div>
            </div>
  
        </div>
    )
}

