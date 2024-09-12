import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header"; // Here you can write Header.jsx also that'll work fine.
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

// This is a food ordering website resembling zomato and swiggy made with react..

//<---------------------------------------------------------------------------------------->

const Applayout = () => {
  return (
    <div className="outer-cont">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ],
    errorElement: <Error/>
  },
  
])

// Creating the root for react elements to render

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<RouterProvider router={appRouter}/>);
