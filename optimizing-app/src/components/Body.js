import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { useOnlineStatus } from "../custom-hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { user,setUser } = useContext(UserContext);

  console.log(allRestaurants);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2856374&lng=72.8691092&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    getRestaurants();
  }, []);

  if (!allRestaurants) return null;
  // if (filteredRestaurants?.length === 0)
  //     return <h1>No Restaurant Match your Filter!!</h1>;

  const isOnline = useOnlineStatus();
  if (!isOnline) {
    return <h1>You Are OFLINE, please check your internet connection!!</h1>;
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter data
            const data = filterData(searchText, allRestaurants);
            //update the state -restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input value={user.name} type="text" onChange={(e)=>{
          setUser({
            ...user,
            name:e.target.value,
            
          })
        }}></input>
        <input value={user.email} type="email" onChange={(e)=>{
          setUser({
            ...user,
            email:e.target.value,
            
          })
        }}></input>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={`/restaurant/${restaurant.data.id}`}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
