import { LOGO_URL } from "../utils/constants";

export const Header = () => {
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
          <li>Home</li>
          <li>About us</li>
          <li>Explore</li>
          <li>Help</li>
          <li>Cart</li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

