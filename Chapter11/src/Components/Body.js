import { RestroCard, withPromotedLabel } from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
    debugger;
    setState(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestroCard);

  console.log(`This is state ${state}`);

  return !state || state.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="content">
      {/* <div className="search">Search</div> */}
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(newVal) => {
              setSearchText(newVal.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
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
        <div className="m-4 p-4">
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              setState(state.filter((elem) => elem.info.avgRating > 4.2));
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {state.map((restaurant, index) => (
          // Never use indexes as keys
          // https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestroCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
