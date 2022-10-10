import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';


import Main from './layouts/Main';


function App() {
  const router =createBrowserRouter([

    {
      path:"/",
      element:<Main/>,
      children:[

        {
          path:"/",
          loader:()=>{
            return fetch("https://openapi.programming-hero.com/api/quiz")
          },
          element:<Home/>
        },
        {
          path:"quiz/:id",
          loader:({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element:<Quiz/>
        }
      ]
    }
  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
        
        
    </div>
  );
}

export default App;
