import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import CategoryComponent from "./CategoryComponent";
import { useState } from "react";

const RestaurantMenuCard = () => {
  // const [resinfo, setresinfo] = useState(null); 
  const {id} = useParams();

  const resinfo = useRestaurantMenuData(id); // For acheiving SRP and modularity, we are making this CustomHook.

  const [showIndex, setShowIndex] = useState(null); // We are changing the state of showIndex from it's children since it is the parent of CategoryComponent.

  // useEffect(() => {
  //   fetchMenuData();
  // }, []);

  // const fetchMenuData = async () => {
  //   const menuData = await fetch(MENU_API+id);
  //   const json = await menuData.json();
  //   setresinfo(json.data);
  // };

  const categories = resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c) => {
    return c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  });


  if(resinfo == null) return  <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName, cloudinaryImageId } = resinfo?.cards?.[2]?.card?.card?.info || {};
  
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className = "font-bold my-3 text-2xl">{name}</h1>
      <h3>{areaName}</h3>
      {categories.map((category, index) => {
        return <CategoryComponent data = {category?.card?.card} showItem={ index == showIndex ? true : false} setIndex={() => {
          setShowIndex(index);
        }}/>
      })}
    </div>
  );
};

export default RestaurantMenuCard;
