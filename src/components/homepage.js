import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid';
import { Link } from "react-router-dom";
import '../stylesheets/homepage.css'

export default function Homepage(props) {

    const [articles, setArticles] = useState(false)


    useEffect(() => {
        if (!articles) {
            fetch('http://localhost:3001/article')
                .then(result => result.json())
                .then(result => setArticles(JSON.parse(result)))
        }
    })

    function slideDown(event) {
        event.currentTarget.lastChild.classList.replace('hidden', 'shown')
        event.currentTarget.lastChild.firstChild.classList.toggle('shown')

    }
    function slideUp(event) {
        event.currentTarget.lastChild.classList.replace('shown', 'hidden')
        event.currentTarget.lastChild.firstChild.classList.toggle('shown')

    }
    return (
        <div id='homepage'>

            {articles ? articles.map((article) =>


                <div className='articleLink' onMouseEnter={slideDown} onMouseLeave={slideUp}>
                    <p className='date'>{article.date.split('T')[0]}</p>
                    <Link key={uniqid()} to={article.url} className='articleLink'>{article.title}</Link>
                    <p className='textbite'>{article.body.split('.')[0]}.</p>
                    <div className='articlePreview hidden'><p className='hiddenText'>{article.body.slice(100, 200)}...</p></div>

                </div>




            ) :
                'Loading articles'}
        </div>
    )
}

