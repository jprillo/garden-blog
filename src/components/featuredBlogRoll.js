import React from 'react'
import { Link } from 'gatsby'
import TagFlag from '../components/tagFlag'
import BlogArticleOne from '../components/blogArticleOne'

export default function FeaturedBlogRoll(props) {

    const usedTags = [
        "Programing", "Business", "Design", "Culture" , "Humor"
      ]
      const tagColors = [
        "#590202", "#045B0D", "#051390", "#00700e", "#7D0590"
      ]
    return (

        <Link to = {props.slug}>
        <div className= {"blog-article " + props.type} style={{background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${props.featuredImage}')`,
      borderColor: (() => {          
        switch (props.tag) { 
          case usedTags[0]:   return tagColors[0];
          case usedTags[1]:   return tagColors[1];
          case usedTags[2]: return tagColors[2];
          case usedTags[3]: return tagColors[3];
          case usedTags[4]:  return tagColors[4];
          
         
          default:      return "green";
        }
      })()
      
      }}>

        <div className="column">
              <TagFlag
         tag = {props.tag}
         color1 = {tagColors[0]}
         color2 = {tagColors[1]}
         color3 = {tagColors[2]}
         color4 = {tagColors[3]}
         color5 = {tagColors[4]}
         tag1 = {usedTags[0]}
         tag2 = {usedTags[1]}
         tag3 = {usedTags[2]}
         tag4 = {usedTags[3]}
         tag5 = {usedTags[4]}   

         
         />
         </div>
        
            <h1>{props.title}</h1>
            <p>{props.description}</p>
  
        </div>
        </Link>

    )
}
