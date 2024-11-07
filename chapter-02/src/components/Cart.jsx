import { useDispatch, useSelector } from "react-redux";
import CategoryListComponent from "./CategoryListComponent";
import { clearCart } from "../utils/appStoreSlices/cartSlice";

const Cart = () => {

    const totalCartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    console.log(totalCartItems.length);

    const handleClearCart = () => {
      dispatch(clearCart());
    }

  return (
    <div>
        <h1 className="text-center font-bold mt-2 text-2xl">Cart</h1>
        <div className="w-6/12 m-auto flex flex-col items-center">
          <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
          {totalCartItems.length === 0 && (<h1 className="font-bold">Cart is empty. Add more items</h1>)}
          {totalCartItems.map((item)=> <CategoryListComponent categoryData={item}/>)}
        </div>
    </div>
  )
};

export default Cart;