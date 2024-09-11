import CardCompoent from "./CardComponent";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]); // Local state variable
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);
  console.log(restaurantList);
  const [searchText, setSearchText] = useState([""]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);

    // Make sure the data you're accessing exists
    const restaurants =
      jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setrestaurantList(restaurants);
    setfilteredrestaurants(restaurants);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Enter keyword"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              let filteredVenues = restaurantList.filter((eachItem) => {
                if (eachItem?.info?.cuisines?.includes(searchText) === true) {
                  return eachItem;
                }
              });
              setfilteredrestaurants(filteredVenues);
            }}
          >
            Search
          </button>
        </div>
        <button
          id="btn"
          onClick={() => {
            let filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredrestaurants(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredrestaurants.map((restaurant, index) => (
          <CardCompoent key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
