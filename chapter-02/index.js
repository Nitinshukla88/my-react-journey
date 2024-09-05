import React from "react";
import ReactDOM from "react-dom/client";

// This is a food ordering website resembling zomato and swiggy made with react..


// creating the root for the react components rendering

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://img.freepik.com/free-vector/hand-drawn-pizza-delivery-man-with-scooter_23-2147674445.jpg?t=st=1725557739~exp=1725561339~hmac=9bd151f427fc81437fd97dd482dc2eec0b76a61ec955383abdaa5531757dae16&w=740" className="logo-img">
                </img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Explore</li>
                    <li>Help</li>
                    <li>Cart</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </div>
    )
}

const Applayout = () => {
    return (
        <div className="outer-cont">
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<Applayout/>)