import React from 'react'
import {Link} from 'gatsby'


import twitter from '../images/twitter.png'
import github from '../images/github.png'
import dribbble from '../images/dribbble.png'
import formalflamingo from '../images/formalflamingo.png'
import logo from "../images/logo.png"

export default function Footer({color}) {
    return (
        <footer  >
          <div className='flex h-pad' style={{alignItems: "center",paddingTop: "2rem", paddingBottom: "2rem",  backgroundColor:  color === 'dark-nav' ? '#5b4709' : '#065b5b'}} >
          <div className='col-6'>
\
          <Link to="/">
            <img width="300px" src={logo} alt="Jason Prillo logo" />
          </Link>
      
</div>
            <div className='col-6'>
      
        <div className='foot-links' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h3 style={{ color: "white"}}>Follow Us</h3>
              <Link to="https://github.com/jprillo"> <img   src={github}alt="this is a hero" /></Link>
              <Link to="https://twitter.com/jasonprillo"> <img  src={twitter}alt="this is a hero" /></Link>
              <Link to="https://dribbble.com/jasonprillo"> <img  src={dribbble}alt="this is a hero" /></Link>
              <Link to="https://formalflamingo.com"> <img  src={formalflamingo}alt="this is a hero" /></Link>
           
        </div>
            </div>



          </div>
       <div style={{background: "darkpink"}}>
        <p style={{textAlign: "center", color: "grey", padding: "em 0"}}>Copyright 2023 Jason Prillo Web Development</p>
       </div>
 
      </footer>
    )
}
