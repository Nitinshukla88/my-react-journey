import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/appStoreSlices/cartSlice";

const CategoryListComponent = ( { categoryData }) => {

    console.log(categoryData);

    const dispatch = useDispatch();
    
    const handleAddItem = (data) => {
        dispatch(addItem(data));
    }

    return (
        <div>
            <div className="flex">
                <span><img src={CDN_URL + categoryData?.imageId} alt="food image" className="h-14 w-14"/></span>
                <button className="m-3 h-8 w-14 bg-black text-white" onClick={() => handleAddItem(categoryData)}>Add+</button>
            </div>
            <div className="p-3 border-b-2">
                <div className="mb-2">
                    <span>{categoryData?.name}</span>
                    <span> - ₹{categoryData?.price ? categoryData?.price/100 : categoryData?.defaultPrice/100}</span>
                </div>
                <p className="text-xs">{categoryData?.description}</p>
            </div>
        </div>
    )
}

export default CategoryListComponent;