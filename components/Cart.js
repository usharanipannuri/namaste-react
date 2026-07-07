import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/ReduxStore/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return cartItems.length === 0 ? (
    <h1 className="mx-auto mt-8 text-4xl text-center">Cart is empty.......</h1>
  ) : (
    <div className="">
      <div className="text-center">
        <h1 className="font-bold text-2xl p-4"> Cart </h1>
        <button
          className="text-white bg-black rounded-md p-2 mb-2.5 cursor-pointer"
          onClick={handleClearCart}
        >
          clear cart
        </button>
      </div>

      {cartItems.map((item, index) => {
        return (
          <div
            key={index}
            className="w-96 flex m-auto justify-between border-b-2 border-gray-300 p-2 bg-gray-100"
          >
            <div>
              <h1 className="font-bold text-xl">{item.name}</h1>
              {console.log(item.mealType)}
              {item.mealType.map((mealItem, index) => {
                return <h1 key={index}>{mealItem}</h1>;
              })}
            </div>
            <img src={item.image} className="w-18" />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
