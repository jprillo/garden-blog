import React from 'react'


export default function TagFlag(props) {

    return (
        <div className="tag-flag" style={{
            color: (() => {          
              switch (props.tag) { 
                case props.tag1 :   return props.color1;
                case props.tag2 :   return props.color2;
                case props.tag3 :   return props.color3;
                case props.tag4 :   return props.color4;
                case props.tag5 :   return props.color5;             
                default:      return props.color1;
              }
            })()
          }}>
           <span>{props.tag}</span>
          </div>

    )
}
