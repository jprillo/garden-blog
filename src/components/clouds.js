import React from "react";
import {Link} from 'gatsby'
import Button from '../components/button'
import jason from '../images/jason.png'

import twitter from '../images/twitter.png'
import github from '../images/github.png'
import dribbble from '../images/dribbble.png'
import formalflamingo from '../images/formalflamingo.png'

export function Clouds({
  video,
  arrow,
  letter
}) {
  return <section className="flex cloud v-pad h-pad gap-1" style={{
    width: "100%",
    overflowY: "hidden",
    background: "white",
    alignItems: "center"
  }}>
          <div className="col-6">
         <img width="100%" src={jason} alt="this is jason and carl weathers"/>
          </div>
          <div className="col-6" style={{
      position: "relative"
    }}>
          <h2 style={{
        color: "black",
        padding: 0,
        marginTop: 0
      }}>   Greetings! </h2>
              <p className="col-9" style={{
        color: "black", marginBottom: '2rem'
      }}>
          Meet Jason Prillo, who appears on the left side of the photo. Jason operates Formal Flamingo Web Development, a Central Florida-based enterprise that specializes in crafting one-of-a-kind websites and web apps.</p>
          <p className="col-9" style={{
        color: "black"}}> The gentleman on the right is none other than Carl Weathers, whom Jason had the pleasure of meeting at a convention. The encounter with Mr. Weathers was delightful, and Jason can share more details about it upon request.</p><br />
             
              <div className="button-container">
                    
                <div width="50%"> 
                <Button type="secondary sm" cta="More on Me" link="/about/"  />
                   
                </div>
                <div width="50%"> 
                <Button type="secondary sm" cta="More on Carl" link="https://en.wikipedia.org/wiki/Carl_Weathers"  />
                   
                </div>
       
            </div>
            <div className="social-media-bar">
              <Link to="https://github.com/jprillo"> <img  src={github}alt="this is a hero" /></Link>
              <Link to="https://twitter.com/jasonprillo"> <img  src={twitter}alt="this is a hero" /></Link>
              <Link to="https://dribbble.com/jasonprillo"> <img  src={dribbble}alt="this is a hero" /></Link>
              <Link to="https://formalflamingo.com"> <img  src={formalflamingo}alt="this is a hero" /></Link>
            </div>
            </div>

        </section>;
        
}
  