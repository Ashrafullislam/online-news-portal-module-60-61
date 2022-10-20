import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const categoryNews  = useLoaderData();
    return (
        <div>
            <h3> This is is total news: {categoryNews.length} </h3>
        </div>
    );
};

export default Category;