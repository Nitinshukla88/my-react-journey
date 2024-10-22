import { useState } from "react";
import CategoryListComponent from "./CategoryListComponent";

const CategoryComponent = ({ data }) => {
    console.log(data)

    const [showItem, setshowItem] = useState(false);

    const handleClick = () => {
        setshowItem(!showItem);
    }
    return (
            <div className = "border-2 border-slate-100 my-3 shadow-lg w-6/12 p-3 flex flex-col bg-slate-50">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className = "font-bold">{data?.title} ({data?.itemCards?.length})</span>
                    <span>🔻</span>
                </div>
                { showItem && data.itemCards.map((item) => {
                    return <CategoryListComponent categoryData = {item?.card?.info}/>
                })}
            </div>
    )
}

export default CategoryComponent;