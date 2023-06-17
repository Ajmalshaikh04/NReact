import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //how to read a dynamic URL params
  const { resId } = useParams();

  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2856374&lng=72.8691092&restaurantId=${resId}&submitAction=ENTER`
    );
    console.log(data);
    const json = await data.json();
    console.log(json?.data);
    setRestaurantMenu(json?.data);
    console.log(restaurantMenu);
    console.log(
      restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="res-menu">
        <div>
          <h1>RestaurantMenu :{resId}</h1>
          <h1> {restaurantMenu.cards[0]?.card?.card?.info?.name}</h1>
          <img
            src={
              IMG_CDN_URL +
              restaurantMenu.cards[0]?.card?.card?.info?.cloudinaryImageId
            }
          />
          <h3>{restaurantMenu.cards[0]?.card?.card?.info?.areaName}</h3>
          <h3>{restaurantMenu.cards[0]?.card?.card?.info?.city}</h3>
          <h3>{restaurantMenu.cards[0]?.card?.card?.info?.avgRating}</h3>
          <h3>
            {restaurantMenu.cards[0]?.card?.card?.info?.costForTwoMessage}
          </h3>
        </div>
        <div className="list-menu">
          <h1>Menus</h1>
          {restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            .slice(1)
            .map((item, index) => (
              <li key={index}>{item?.card?.card?.title}</li>
            ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
