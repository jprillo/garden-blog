
import logo from '../images/pre.png'
import React, {useEffect, useState} from 'react'

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);
  return (
    <div className='preloader' style={{width: "100%", height: "100%", position: "absolute", zIndex: "1000", background: "#000000", opacity: isLoaded !== true? '100%': '0%', 
    visibility: isLoaded !== true? 'visible': 'hidden' }}>
    <div style={{position: "relative", width: "300px", background: "black",  margin: "25vh auto", opacity: isLoaded !== true? '100%': '0%'}}>
          <img width= "100%" src={logo} alt="man riding a manatee" />
    <div class="loadingio-spinner-ball-2lvkl7cke55"><div class="ldio-zuexwzan24">
      
<div></div>
</div>
</div>
</div>
</div>
  )
}


