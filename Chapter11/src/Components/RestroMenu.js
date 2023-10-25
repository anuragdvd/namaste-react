import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../Utils/useRestroMenu";
import RestroAccordion from "./RestroAccordion";

const RestroMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestroMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (elem) => {
        return elem?.card?.card["@type"]?.includes("ItemCategory");
      }
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      {categories.map((category, index) => {
        return (
          // controlled component
          <RestroAccordion
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setCurrIndex={() => setShowIndex(index)}
            collapseCurrIndex={() => setShowIndex(null)}
            currIndex={showIndex}
            idx={index}
          />
        );
      })}
    </div>
  );
};

export default RestroMenu;
