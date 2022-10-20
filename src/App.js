import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Route';
function App() {
  return (
    <div className="app">
       <RouterProvider router={routes} >  </RouterProvider>
    </div>
  );
}

export default App;
