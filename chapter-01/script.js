import React from "react";
import ReactDOM from "react-dom/client";


// const element = React.createElement("h1", {id: "ele"}, "Hello World❤!"); // Here we have created elements using core react code
// const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(element);


const jsxheading = <h1 id="ele">Hello World😍!</h1>; // Here we have created react elements using JSX

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(jsxheading);