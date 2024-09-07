import CardCompoent from "./CardComponent";
import restDetails from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  let [restaurantList, setrestaurantList] = useState(restDetails); // Local state variable 

  return (
    <div className="body">
      <div className="filter">
        <button id="btn" onClick={() => {
          let filteredList = restaurantList.filter((res) =>
             res.info.externalRatings.aggregatedRating.rating > 4
        );
        setrestaurantList(filteredList);
        setTimeout(() => {
          setrestaurantList(restDetails)
        }, 5000);
        }}>Top rated Restaurants</button>
      </div>
      <div className="res-container">
        {restaurantList.map((resturant, index) => (
          <CardCompoent key={resturant.info.id} resdata={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
