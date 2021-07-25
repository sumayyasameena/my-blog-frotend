import React,{ useState, useEffect} from "react"
import ArticleContent from "./ArticleContent"
import ArticlesList from "../components/ArticlesList"
import CommentsList from "../components/CommentsList"
import UpvoteSection from "../components/UpvoteSection"
import CommentForm from "../components/CommentForm"
import NotFoundPage from "./NotFoundPage"
const ArticlePage=({match})=>
{
    const name=match.params.name
    const article=ArticleContent.find(article=> article.name===name)

    const [articleInfo,setArticleInfo] = useState({upvotes:0,comments:[]});
    useEffect(() => {
        const fetchData=async ()=>{
            const result =await fetch(`/api/articles/${name}`);
            const body=await result.json()
            setArticleInfo(body)
        }
        fetchData()
      },[name]);
    const otherArticles=ArticleContent.filter(article=>article.name!==name)
    if(!article){return <NotFoundPage/>}
    return (
        <>

        <h1>{article.title}</h1>
        <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
        {
        article.content.map((paragraph,key) =>(
            <div key={key}><p >{paragraph}</p></div> 
        ))}
        <hr/>
        <CommentsList comments={articleInfo.comments}/>
        <CommentForm articleName={name} setArticleInfo={setArticleInfo}/>
        <h4>other articles</h4>
        <ArticlesList articles={otherArticles} />
        </>
        
        );

}
    
    

export default ArticlePage