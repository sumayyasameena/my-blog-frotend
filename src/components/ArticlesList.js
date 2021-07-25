import React from "react"
import {Link  } from "react-router-dom"
const ArticlesList=({articles})=>(
    <>

    {articles.map((article,key)=>    (<div key={key}> <Link  to={`/article/${article.name}`} >{article.title}</Link><br/></div>))}
    </>
)
export default ArticlesList