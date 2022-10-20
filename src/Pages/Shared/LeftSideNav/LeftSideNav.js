import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCotegories] = useState([]);
    
    useEffect(()=> {
     fetch('http://localhost:5000/categories-news')
     .then(res => res.json())
     .then(data => setCotegories(data))
    },[])

    return (
        <div>
            <h3>All Category: {categories.length} </h3>
            {
                categories.map(allCategory => <p key={allCategory.id}  >
                    <Link to={`/category/${allCategory.id}`} > {allCategory.name} </Link>
                      </p>)
            }
        </div>
    );
};

export default LeftSideNav;