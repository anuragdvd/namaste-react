import { RestroCard } from "./RestroCard";
// import { restaurantList } from "../Utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export const Body = () => {
  // Local State Variable - Superpowerful variable
  const [state, setState] = useState([]);
  const [restData, setRestData] = useState([]);
  // Normal JS Variable
  //   let state = {}

  // Whenever state variables update, react triggers a reconciliation process (comp. is re-rendered)
  console.log("body rendered");

  // USEEFFECT - CALLBACK EXECUTES AFTER THE RENDER CYLCE OF BODY IS DONE

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setState(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const [searchText, setSearchText] = useState("");

  return state.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="content">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(newVal) => {
              setSearchText(newVal.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              // filter the restro cards and update the UI
              setState(
                restData.filter((elem) => {
                  return elem.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                })
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setState(state.filter((elem) => elem.info.avgRating > 4.2));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {state.map((restaurant, index) => (
          // Never use indexes as keys
          // https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
