import CardCompoent from "./CardComponent";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]); // Local state variable
  const [searchText, setSearchText] = useState([""]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=26.8756&lng=80.9115"
    );

    let jsonData = await data.json();
    console.log(jsonData);
    setrestaurantList(
      jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // Optional chaining done in the above line
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" placeholder="Enter keyword" className="search-box" value = {searchText} onChange={(e) =>{
            setSearchText(e.target.value);
          }}/>
          <button className="search-btn" onClick={() => {
            console.log(searchText);
          }}>Search</button>
        </div>
        <button
          id="btn"
          onClick={() => {
            let filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setrestaurantList(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
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
