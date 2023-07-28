import React, { useState } from 'react';



export default function Hero(props) {



    return (
      <div   style={{position: "relative",   overflowY: "hidden", width: "100%"}}>
      <div className='h-pad hero-container' >

        <section className="hero flex gap-1">
        <div className="col-6" >
        <p className="subheading">{props.subheadingOne}</p>
          <h1>{props.headingOne}</h1>
<p>Lorem ipsum dolor sit amet consectetur. Nibh viverra tortor massa mi sodales aliquet augue. Duis ut enim pellentesque id urna eget libero. Adipiscing eget metus vitae non. Lobortis augue vel urna sem enim est feugiat.</p>

        </div>
        <div className="col-6 right hero-image" >
        <img width= "100%" src={props.heroImage} alt="man riding a manatee" />

        </div>
      </section>

      </div>

      </div>
    )
}