import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header"; // Here you can write Header.jsx also that'll work fine.
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenuCard from "./components/RestaurantMenuCard";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import User from "./components/User";
// This is a food ordering website resembling zomato and swiggy made with react..

//<---------------------------------------------------------------------------------------->


const About = lazy(() => import("./components/About")); // same you can do for as many components acc to projects need



const Applayout = () => {

  const [userName, setuserName] = useState();

  useEffect(() => {
    const data = {
      name : "Nitin Shukla", // This is some kind of dummy Data that we got by calling some API. Now using this Data I wanted to change the data of my context.
    }

    setuserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userName , setuserName}}>
      <div className="outer-cont">
        <UserContext.Provider value = {{loggedInUser : "Elon musk"}}>
          <Header />
        </UserContext.Provider>
        <Outlet/>
      </div>
    </UserContext.Provider>
    </Provider>
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
        element: (<Suspense fallback = {<Shimmer/>}><About/></Suspense>)
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenuCard/>
      }
    ],
    errorElement: <Error/>
  },
  
])

// Creating the root for react elements to render

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<RouterProvider router={appRouter}/>);
