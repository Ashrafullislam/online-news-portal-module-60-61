import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsCardSummary = ({newsCategory}) => {
 return (
  <div>
    <Card style={{ width: '100%', marginTop :'30px'  }}>
      <Card.Img variant="top" src= {newsCategory.image_url} />
       <Card.Body>
         <Card.Title>  <h5>{newsCategory.title } </h5> </Card.Title>
           <Card.Text>
           <p> {newsCategory.details} </p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
    );
};

export default NewsCardSummary;