import { logoUrl } from "../Utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux/es/hooks/useSelector";

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

  const { name } = useContext(UserContext);
  console.log(useContext(UserContext));

  // Using redux
  // Subscribing to cart value
  const cartItems = useSelector((store) => store.cart.items);

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
          <li className="px-4 text-xl">
            <Link to="cart">🛒 ({cartItems.length} - Items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 text-xl font-bold">{name}</li>
        </ul>
      </div>
    </div>
  );
};

export const Hello = () => {};

export default Header;
