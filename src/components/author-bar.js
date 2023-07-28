import React from 'react'


export default function ArthorBar(props) {
  return (
    <div className='col-6' style={{display: "flex"}}>
        <div  style={{margin: "0 2rem 1rem 0"}}>
 <img  src={props.authorImage} alt="this is a hero" style={{  width: "60px", height: "100%", borderRadius: "50px"}} />
        </div>
        <div>
            <p>{props.author}</p>
            <p>{props.date}</p>
            
            </div>


    </div>
  )
}
