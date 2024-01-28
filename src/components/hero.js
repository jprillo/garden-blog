import React from 'react';



export default function Hero(props) {



    return (
      <div   style={{position: "relative",   overflowY: "hidden", width: "100%"}}>
      <div className='h-pad hero-container' >

        <section className="hero flex gap-1">
        <div className="col-6 " >
<div className='hover-line-container'>
          <h1 style={{fontSize: "100px", color: "white"}}>{props.headingOne}</h1>
          <div class="line"></div>
          </div>
<p style={{color: "white", fontSize: "30px", paddingTop: '2rem'}}>Attract butterflies to your garden identifying and plant native to Florida.</p>

        </div>
        <div className="col-6 right hero-image" >
        <img width= "100%" src={props.heroImage} alt="man riding a manatee" />

        </div>
      </section>

      </div>

      </div>
    )
}