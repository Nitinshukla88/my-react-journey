import React from "react";
import ReactDOM from "react-dom/client";


const element = React.createElement("h1", {id: "ele"}, "Hello World❤!");
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(element);
