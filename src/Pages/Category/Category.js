import React  from 'react';
import {useLoaderData} from 'react-router-dom';
import NewsCardSummary from '../NewsCardSummary/NewsCardSummary';


const Category = () => {
  const categoryNews = useLoaderData ();
  console.log(categoryNews,'author')
  
  return (
    <div>
      <h3 className='text-center'> Category Wise News: {categoryNews.length} </h3>
      {
        categoryNews.map(news => <NewsCardSummary key={news._id} news = {news} > </NewsCardSummary>)
      }
       
    </div>
  );
};

export default Category;
