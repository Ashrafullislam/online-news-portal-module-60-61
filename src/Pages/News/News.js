import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h3> All News: {allNews.length}  </h3>
        </div>
    );
};

export default News;