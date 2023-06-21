import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import Shimmer from "./Shimmer";
import { useFetchRestaurants } from "../custom-hooks/useFetchRestaurants";

const RestaurantMenu = () => {
  //how to read a dynamic URL params
  const { resId } = useParams();

  const restaurantMenu=useFetchRestaurants(resId)
 

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
