import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid';
import { Link } from "react-router-dom";


export default function Homepage(props) {

    const [articles, setArticles] = useState(false)


    useEffect(() => {
        if(!articles) {fetch('http://localhost:3001/article')
            .then(result => result.json())
            .then(result => setArticles(JSON.parse(result)))
    }})

    return (
        <div id='homepage'>
              
               {articles ? articles.map((article) => 

            
               <div className='articleLink'>
                   <p className='date'>{article.date.split('T')[0]}</p>
                   <Link key={uniqid()} to={article.url} className='articleLink'>{article.title}</Link>
                    <p className='articlePreview'>{article.body.slice(0,150)}...</p>
               </div>
               
               
               
               
               ) :
                'Loading articles'}
        </div>
    )
}

