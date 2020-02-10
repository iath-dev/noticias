import React from 'react';
import { Article } from '..';

const NewsList = ({ news = [] }) => (
    <div className="row">
        {news.map((article) => (
            <Article />
        ))}
    </div>
)
 
export default NewsList;
