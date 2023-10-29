import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="my-0 mx-0">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length == 0 && (
          <h1>Cart is Empty! Please add items in your cart</h1>
        )}

        <div className="m-auto">
          <ItemList itemCards={cartItems}></ItemList>
        </div>
      </div>
    </div>
  );
};

export default Cart;
