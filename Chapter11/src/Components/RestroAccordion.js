import ItemList from "./ItemList";

const RestroAccordion = ({
  data,
  showItems,
  setCurrIndex,
  currIndex,
  collapseCurrIndex,
  idx,
}) => {
  //   const { data } = props;
  //   const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    if (currIndex === idx) collapseCurrIndex();
    else setCurrIndex();
  };
  //   console.log(data);
  return (
    <div>
      <div className="p-4 shadow-lg w-6/12 mx-auto bg-gray-100 my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList itemCards={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestroAccordion;
