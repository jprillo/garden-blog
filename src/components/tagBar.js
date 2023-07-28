import React from 'react';
import {Link} from 'gatsby'

export default function TagBar() {
  const tagColors = [
    "#4deeea", "#ffe67a", "#ffb6c1", "lightgoldenrodyellow", "#98ffc1"
  ]



  return (
    <div className='tag-bar wrap' style={{display: "flex"}}>
        <Link active="active" to="/blog"   activeStyle={{ color: "black",  backgroundColor: tagColors[0]}}className='all'>All</Link>
        <Link to= "../../tags/programing"   activeStyle={{ color: "black",  backgroundColor: tagColors[1] }}className='t1'>Code</Link>
        <Link to= "../../tags/design"   activeStyle={{ color: "black",  backgroundColor: tagColors[2] }}className='t2'>Design</Link>
        <Link to= "../../tags/culture"   activeStyle={{ color: "black",  backgroundColor: tagColors[3] }}className='t3'>Business</Link>
        <Link to= "../../tags/humor"   activeStyle={{ color: "black",  background: tagColors[4] }} className='t4'>Random</Link>
        </div>
  )
}

