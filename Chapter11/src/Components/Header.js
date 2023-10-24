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
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-36" src={logoUrl}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-6 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
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
