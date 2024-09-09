import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './user/About';
import Home from './user/Home';
import Services from './user/Services';
import Product from './user/Product'
import Signup from './Signup';
import Signup1 from './admin/Signup1';
import Admin from './admin/Admin';
import Login from './Login';
import Contact from './user/Contact';

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App />,
     
      children:[
        {
          path:'/',
          element:< Home/>
         },
      
    
     {
      path:'/About',
      element:< About/>
     },
     {
      path:'/Services',
      element:< Services/>
     },
     {
      path:'/Product',
      element:< Product/>
     },
     {
      path:'/Sign up',
      element:< Signup/>
     },
     {
      path:'/',
      element:< Signup/>
     },

{
  path:'/Adminlog',
  element:< Signup1/>
},

{
  path:'/login',
  element:< Login/>
},
{
  path:'/contact',
  element:< Contact/>
},

     
      ],

    },
    {
      path:'/Admin',
      element:< Admin/>
    },

    
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

