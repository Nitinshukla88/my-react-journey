import { CDN_URL } from "../utils/constants";

const CategoryListComponent = ( { categoryData }) => {
    console.log(categoryData);
    return (
        <div>
            <span><img src={CDN_URL + categoryData?.imageId} alt="food image" className="h-14 w-14"/></span>
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