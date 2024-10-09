import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";

const RestaurantMenuCard = () => {
  // const [resinfo, setresinfo] = useState(null); 
  const {id} = useParams();

  const resinfo = useRestaurantMenuData(id); // For acheiving SRP and modularity, we are making this CustomHook.

  console.log(resinfo);
  // useEffect(() => {
  //   fetchMenuData();
  // }, []);

  // const fetchMenuData = async () => {
  //   const menuData = await fetch(MENU_API+id);
  //   const json = await menuData.json();
  //   setresinfo(json.data);
  // };

  if(resinfo == null) return  <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName, cloudinaryImageId } = resinfo?.cards?.[2]?.card?.card?.info || {};
  
  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <img src = {CDN_URL+cloudinaryImageId} alt="" className="res-menu-img" />
      <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
      <h3>{areaName}</h3>
    </div>
  );
};

export default RestaurantMenuCard;
