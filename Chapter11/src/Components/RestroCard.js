import { cdnUrl } from "../Utils/constants";

// Writing CSS inside JSX by creating them JS objects
const styleCard = {
  backgroundColor: "#f0f0f0",
};

export const RestroCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
      // style={styleCard}
    >
      <img className="rounded-lg" src={cdnUrl + cloudinaryImageId}></img>
      <h3 className="font-bold py-4 text-l">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Component
// Input -> RestroCard -> RestroCardPromoted

export const withPromotedLabel = (restroCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white">
          Top Restaurants
        </label>
        <RestroCard {...props}></RestroCard>
      </div>
    );
  };
};
