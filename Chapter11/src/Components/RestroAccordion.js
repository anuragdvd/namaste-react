import ItemList from "./ItemList";

const RestroAccordion = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <div className="p-4 shadow-lg w-6/12 mx-auto bg-gray-100 my-4">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <ItemList itemCards={data.itemCards} />
      </div>
    </div>
  );
};

export default RestroAccordion;
