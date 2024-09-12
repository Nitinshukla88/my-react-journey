import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  
  const [authBtn, setauthBtn] = useState(["Sign in"])

  return (
    <div className="header">
      <div className="logo">
        <img
          src={LOGO_URL}
          className="logo-img"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Help</li>
          <li>Cart</li>
          <li onClick={()=>{
            authBtn == "Sign in"? setauthBtn("Sign out"): setauthBtn("Sign in");
          }} className="button-login">{authBtn}</li>
        </ul>
      </div>
    </div>
  );
};

