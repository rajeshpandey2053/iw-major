import React from "react";
import {Link} from 'react-router-dom';
import './widgetBlog.scss';

const WidgetBlog = props => {
    return (
        <>
            <div className="blog-card">
                <div className="blog-card__blog-title">
                    <h1>Hello I am a blog.</h1>
                </div>

                <div className="blog-card__blog-description">
                    <p>This blog is just a placeholder.This place is to be filled dynamically.</p>
                </div>
                <Link to='/' className='blog-card__read-more'>Read More &rarr;</Link>
            </div>
        </>
    )
}

export default WidgetBlog;