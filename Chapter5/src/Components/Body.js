import { RestroCard } from "./RestroCard";
import { restaurantList } from "../Utils/constants";
import { useState } from "react";

export const Body = () => {
  // Local State Variable - Superpowerful variable

  console.log("here");
  let [state, setState] = useState(restaurantList);
  debugger;
  // Normal JS Variable
  //   let state = {}
  return (
    <div className="content">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setState(restaurantList.filter((elem) => elem.data.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {state.map((restaurant, index) => (
          // Never use indexes as keys
          // https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
          <RestroCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
