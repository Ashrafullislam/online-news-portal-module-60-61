import React from 'react';
import Card from 'react-bootstrap/Card';
import './NewsSummary.css';
import { FaShare,FaBookmark, FaEye, FaStar} from "react-icons/fa";
import { Link } from 'react-router-dom';


const NewsCardSummary = ({news}) => {
  const {author,rating,details,total_view,title,_id ,image_url} = news; 

 return (
    <div className='news-summary-card'>
    <Card className="text-center mt-5">
      <Card.Header className='d-flex justify-content-between align-items-center flex-direction-column    '> 
    
        <div className='d-flex'>
         <img  className='author-img'   src={author.img} alt = 'author img ' /> 
        <div className='author-info ms-2'>
          <p> {author?.name} </p>
          <p> {author?.published_date} </p>
        </div>
        </div>

         <div className='d-flex flex-direction-column'>
          <FaShare className='me-2' >  </FaShare>
          <FaBookmark > </FaBookmark>
         </div> 
       </Card.Header>

      <Card.Body>
        <Card.Title> {title} </Card.Title>
         <div>
          <img className='w-100' src= {news?.image_url} alt='News img ' />
         </div>
        <Card.Text>
      {
        details.length > 250?
         <p>{details.slice(0, 250) + '....'} <Link to = {`/newses/${_id}`} >  Read more    </Link>  </p> 
          :  
          <p>  {details} </p> 
      }
        </Card.Text>

        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="text-muted">
       <div className='d-flex gap-5'>
        <div className='ms-5'> 
          <FaEye className='me-2' > </FaEye>
          {total_view} 
        </div>
          <div className='ms-3'>
            {rating?.number}
            <FaStar className='text-warning ms-2'>  </FaStar> 
          </div>
        </div>  
      </Card.Footer>
    </Card>
   </div>
    );
};

export default NewsCardSummary;