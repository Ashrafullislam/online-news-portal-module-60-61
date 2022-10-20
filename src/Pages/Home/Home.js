import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCardSummary from '../NewsCardSummary/NewsCardSummary';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h3 className='text-center'>  Total News of home:  {allNews.length} </h3>
            {
                allNews.map(data => <NewsCardSummary  key={data.category_id}
                    newsCategory = {data}
                    > </NewsCardSummary>)
            }

        </div>
    );
};

export default Home;