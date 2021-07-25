import React from "react"

const CommentsList=({comments})=>(
    <>

    {comments.map((comment,key)=>    (
    <div key={key}>
        <h4>{comment.username}</h4>
        <p>{comment.comment}</p>
    </div>
    ))}
    </>
)
export default CommentsList