import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";

export  const routes = createBrowserRouter([
   {
    path:'/', element: <Main> </Main> , 
    children: [
        {
            path: '/',
            loader() {
             return fetch(`http://localhost:5000/newsData`)
            },
            element: <Home >  </Home> 
        },
     
        {
            path: '/category/:id', 
            loader({params}) {
               return fetch(`http://localhost:5000/category/${params.id}`) 
            },
            element: <Category > </Category>
        },

        {
            path: '/news/:id',
            loader({params}) {
             return fetch(`http://localhost:5000/newsData/${params.id}`)
            },
            element: <News> </News>     
        },

        {
            path: '*', element: <div> Routes not found </div>
        }

    ]
   }
])