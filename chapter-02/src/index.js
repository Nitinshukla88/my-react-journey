import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header"; // Here you can write Header.jsx also that'll work fine.
import Body from "./components/Body";

// This is a food ordering website resembling zomato and swiggy made with react..

//<---------------------------------------------------------------------------------------->

const Applayout = () => {
  return (
    <div className="outer-cont">
      <Header />
      <Body />
    </div>
  );
};

// Creating the root for react elements to render

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<Applayout />);
