import React from 'react'
import { Link } from 'gatsby'
import TagFlag from '../components/tagFlag'

export default function BlogArticle({
  title,
  description,
  featuredImage,
  type,
  width,
  slug,
  tag

}) {

    const usedTags = [
        "Programing", "Business", "Design", "Culture" , "Humor"
      ]
      const tagColors = [
        "#d5FFFd", "#f1d296", "#FEE1F3", "lightgoldenrodyellow", "#98ffc1"
      ]

    return (

        <Link to = {slug} className={width}>
        <div className= {"blog-article " + type} style={{backgroundImage:  `linear-gradient(179.83deg, rgba(0, 0, 0, 0) -2.09%, rgba(0, 0, 0, 0.8) 106.17%), url('${featuredImage}')`,


      }}>

        <div className="column">

              <TagFlag
         tag = {tag}
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

            <h1>{title}</h1>
            <p>{description}</p>


        </div>
        </Link>

    )
}
