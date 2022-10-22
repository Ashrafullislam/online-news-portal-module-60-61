import React from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaEye, FaPen, FaPenAlt } from "react-icons/fa" ; 
import { Button } from 'react-bootstrap';
import './News.css';

const News = () => {
  const newsData = useLoaderData ();
  console.log (newsData);
  const {title,author,details,image_url,category_id ,total_view} = newsData ;

  return (
    <div>
      <h3> <b> {title} </b> </h3>

      <div className='card-news'>
        <Card>
         
          <Card.Body>
            <img className='w-100' src= {image_url} alt='news imgae ' /> 
            <blockquote className="blockquote mb-0">
              <p>
                {details}
              </p>
               <Link to={`/category/${category_id}`} > <Button  > Get all news in this category </Button>   </Link>
              <footer className="blockquote-footer">
               <div className='d-flex gap-5'>
               <p> <small> Author  <FaPen> </FaPen> :  {author?.name} </small> </p>
                <span> {total_view} <FaEye> </FaEye>  </span>
               </div>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

      </div>
    </div>
  );
};

export default News;
