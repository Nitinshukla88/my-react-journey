import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement("h1", {id: "ele"}, "Hello World❤!"); // Here we have created elements using core react code
// const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(element);

const jsxheading = (
  <h1 id="ele" className="hello">
    Hello World😍!
  </h1>
); // Here we have created react elements using JSX

// Babel transpiles JSX into react-element

// Function components in react....

const Heading = function() { // for function components, you can use pure functions or arrow functions - it's up to you!
  // Function components starts with capital letters - it's convention
  return (
    <h2 className="head1">This is inside functional componet in react😁</h2> 
  ); // This is functional component in react
};

const Heading2 = () => (
  <div id="container">
    <h2>{32+43}</h2>
    {jsxheading} 
    {/* <Heading/> */}
    {Heading()}
    <h3>
      This is a cool way to write components when our return code is one liner
      🤞!
    </h3>
  </div>
); // It is also a functional component in react in which we skip "return keyword" since it's one liner

const root = ReactDOM.createRoot(document.querySelector(".root"));

// root.render(jsxheading);

root.render(<Heading2 />);
