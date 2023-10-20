import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "./data";

/*

    Header component
        - Logo component
        - NavItem Component
    Body Component
        - Search bar component
        - ResaturantContainer Component
            - RestroCard Component
                - Image
                - Name
                - Del. Time
    Footer 
        - Copy Right
        - Links
        - Address
        - Contact

*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://dynamic.brandcrowd.com/asset/logo/a9ee4b5e-a3a6-4c0a-9e24-e9b389587790/logo-search-grid-1x?logoTemplateVersion=1&v=637781767973570000"
        ></img>
      </div>
      <div className="navBar">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Writing CSS inside JSX by creating them JS objects
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestroCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;
  return (
    <div className="restro-card" style={styleCard}>
      <img
        className="cardimg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="content">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((restaurant, index) => (
          // Never use indexes as keys
          // https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
          <RestroCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {Header()}
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// not using keys (not-acceptable) <<< index as key <<< unique key
