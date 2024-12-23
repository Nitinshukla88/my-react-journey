import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  
  const [authBtn, setauthBtn] = useState(["Sign in"])

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store 

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-slate-300">
      <div>
        <img
          src={LOGO_URL}
          className="h-32 w-32"
        ></img>
      </div>
      <div className="nav-items">
        <ul className="flex m-4 p-4">
          <li className="mx-4 my-2 text-lg font-semibold text-purple-900">{onlineStatus ? "Online-😊" : "Offine-😢"}</li>
          <li className="mx-4 my-2 text-lg font-semibold text-purple-900"><Link to="/">Home</Link></li>
          <li className="mx-4 my-2 text-lg font-semibold text-purple-900"><Link to="/about">About us</Link></li>
          <li className="mx-4 my-2 text-lg font-semibold text-purple-900"><Link to="/contact">Contact</Link></li>
          <li className="mx-4 my-2 text-lg font-semibold text-purple-900">Help</li>
          <li className="mx-4 my-2 text-lg font-semibold text-purple-900"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
          <li onClick={()=>{
            authBtn == "Sign in"? setauthBtn("Sign out"): setauthBtn("Sign in");
          }} className="mx-4 my-2 text-lg font-semibold text-purple-900 cursor-pointer">{authBtn}</li>
          <li className="mx-4 my-2 text-lg font-semibold text-purple-900">User : {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

