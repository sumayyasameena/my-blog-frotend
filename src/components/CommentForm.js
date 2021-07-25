import React,{useState} from "react"
const CommentForm =({articleName,setArticleInfo})=>{
    const [name,setName]=useState('');
    const [comment,setComment]=useState('');
    const addComment=async ()=>{
        const result= await fetch(`/api/articles/${articleName}/comments`,{
            method:'post',
            body:JSON.stringify({
                username:name,
                comment
            }),
            headers:{
                'content-type':'application/json'
            }
        })
        const body= await result.json();
        setArticleInfo(body);
        setName('');
        setComment('');
    }
    return (
        <>
        <label>name<input type="text" value={name} onChange={(evemt)=>{setName(evemt.target.value)}}/></label><br/>
        <label>Comment<textarea cols="50" rows="5" value={comment} onChange={(event)=>{setComment(event.target.value)}}/></label>
        <button onClick={()=>addComment()}>Add Comment</button>
        </>
    );
}
export default CommentForm