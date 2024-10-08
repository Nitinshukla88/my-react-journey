import CardComponent, {withPromotedLabel} from "./CardComponent";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]); // Local state variable
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const EnhancedCard = withPromotedLabel(CardComponent);

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8756&lng=80.9115&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
      <div className="filter flex items-center">
        <div className="search flex items-center">
          <input
            type="text"
            placeholder="Enter keyword"
            className="border-black border-2 border-solid m-5 p-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-purple-900 p-2 text-white mr-3 h-10"
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
          className="bg-purple-900 text-white h-10 px-3"
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
      <div className="res-container flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (<EnhancedCard resdata={restaurant}/>) : (<CardComponent resdata={restaurant}/>)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
