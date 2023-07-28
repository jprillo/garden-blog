import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

export default function CardTwo(props) {
    var type = props.type;
      return (
  
          <div className={"card col-3 pad-3em " + type}>
           <GatsbyImage image={props.icon} alt= {props.alt} />
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
          </div>
  
      )
  }