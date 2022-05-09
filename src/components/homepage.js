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
        <div>
            <ul>
               {articles ? articles.map((article) => 
                <li key={uniqid()}><Link to={article.url}>{article.title}</Link></li>
               ) :
                'Loading articles'}
            </ul>
        </div>
    )
}

