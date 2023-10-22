import { logoUrl } from "../Utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // If no dependency array -> useEffect is called on every redner
  // If dependency array is Empty -> useEffect is called on only initial render (just Once)
  // If dependency array is Present -> useEffect is called only when the dependencies changes
  // If dependency array is [btnName] -> useEffect is called owhen the btnName changes
  useEffect(() => {
    console.log("called");
  }, [btnName]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logoUrl}></img>
      </div>
      <div className="navBar">
        <ul>
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export const Hello = () => {};

export default Header;
