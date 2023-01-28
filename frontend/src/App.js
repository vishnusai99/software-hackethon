import Complaint from './components/complaint/Complaint'
import {RouterProvider ,createBrowserRouter } from 'react-router-dom';
import Rootlayout from './components/Rootlayout';
import Home from './components/home/Home';
import './App.css'
import Doctor from './components/details/Doctor';
import Teachers from './components/details/Teachers';
import Rationshop from './components/details/Rationshop';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ViewComplaints from './components/ViewComplaints';

function App() {
      
    const router=createBrowserRouter([
      {
        path:'/',
        element:<Rootlayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/complaint',
          element:<Complaint/>
        },
        {
          path:'/doctors',
          element:<Doctor/>
        },
        {
          path:'/teachers',
          element:<Teachers/>
        },
        {
          path:'/rationshops',
          element:<Rationshop/>
        },{
          path:'/about-us',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:"/complaint-details",
          element:<ViewComplaints/>
        }
      ]
    }
    ])




  return (

    
    <div>
      <RouterProvider router={router}/>
    </div>
   
  );
}

export default App;