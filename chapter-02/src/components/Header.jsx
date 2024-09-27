import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  
  const [authBtn, setauthBtn] = useState(["Sign in"])

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between">
      <div>
        <img
          src={LOGO_URL}
          className="h-48 w-48"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "Online-😊" : "Offine-😢"}</li>
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

