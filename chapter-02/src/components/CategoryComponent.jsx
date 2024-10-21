const CategoryComponent = ({ data }) => {
    console.log(data)
    return (
            <div className = "border-2 border-slate-100 my-3 shadow-lg w-6/12 p-3 flex justify-between">
                <span className = "font-bold">{data.title} ({data?.itemCards?.length})</span>
                <span>🔻</span>
            </div>
    )
}

export default CategoryComponent;