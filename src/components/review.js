import React from 'react'


export default function Review(props) {
  
    return (
        <div className="col-6 pad-5">
        <img width="50% " src={props.stars} alt="This is geeby." />
        <p className="v-pad-5">{props.desc}</p>
        <img className="icon" width="100% " src={props.avatar} alt="This is geeby." />
        <p className="v-pad-1">{props.name}</p>
      </div>

    )
}
