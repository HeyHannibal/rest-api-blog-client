import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostComment from './postcomment'
import uniqid from 'uniqid';

export default function ArticlePage() {

    const { id } = useParams()
    const [article, setArticle] = useState(false)
    const [articleId, setArticleId] = useState(id)

    useEffect(() => {
        fetch(`http://localhost:3001/article/${id}/`)
            .then(result => result.json())
            .then(result => setArticle(result))
    }, [articleId])



    return (
        <div>
            {article ?
                <div>
                    
                    <h2>{article.article.title}</h2>
                    <p>{article.article.body}</p>
                    <PostComment articleId={articleId} />
                    {article.comments.map(comment =>
                        <div key={uniqid()}>
                            <h5>{comment.username}</h5>
                            <p>{comment.body}</p>
                        </div>
                    )}
                </div>

                : 'loading article'}
        </div>
    )
}