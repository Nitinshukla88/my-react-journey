import CategoryListComponent from "./CategoryListComponent";

const CategoryComponent = ({ data, showItem, setIndex }) => { // Here we have lifted the state of showItem up to its parent. So Category Component is a cantrolled component. It is cantrolled by it's parent RestaurantMenuCard.
    console.log(data)

    const handleClick = () => {
        setIndex();
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