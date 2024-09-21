import CardCompoent from "./CardComponent";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]); // Local state variable
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [restaurantList, filteredRestaurants]);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);

    const restaurants =
      jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestaurantList(restaurants);
    setFilteredRestaurants(restaurants.slice(0, 12)); // Start with first 4 restaurants
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    ) {
      const newLength = filteredRestaurants.length + 4;
      if (newLength <= restaurantList.length) {
        setFilteredRestaurants(restaurantList.slice(0, newLength)); // Add 4 more restaurants
      }
    }
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
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              let filteredVenues = restaurantList.filter((eachItem) =>
                eachItem?.info?.cuisines?.includes(searchText)
              );
              setFilteredRestaurants(filteredVenues);
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
            setFilteredRestaurants(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <CardCompoent resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
