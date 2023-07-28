import React from 'react'


export default function Button(props) {
  var type = props.type;
    return (

  <a  href= {props.link}>
    <button className={"button " + type} style={{display: "flex", alignItems: "center"}}>
    <p style={{ width: "100%"}}>{props.cta}</p>  

      {
      props.icon
      ? <div className='btn-icon-contain'>        
              <img  src={props.icon}alt="this is a hero" />
              </div>
      : null
      }
    </button>
   
    
 
   </a>

    )
}
