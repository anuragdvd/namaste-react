import { cdnUrl } from "../Utils/constants";

/*

Feature -> If one accordion is open then other accordion should get closed

*/

const ItemList = (props) => {
  const { itemCards } = props;
  //   const { name, }
  //   console.log(itemCards);
  return (
    <div>
      {itemCards.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-4 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold">{item?.card?.info?.name}</span>
                <span> - ₹{item?.card?.info?.price / 100}</span>
              </div>
              <div className="text-sm">
                <p>{item?.card?.info?.description}</p>
              </div>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="p-2  shadow-lg rounded-lg mx-12 bg-black text-white">
                  Add +
                </button>
              </div>
              <img src={cdnUrl + item?.card?.info?.imageId}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
