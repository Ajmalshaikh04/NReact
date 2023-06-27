import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import Shimmer from "./Shimmer";
import { useFetchRestaurants } from "../custom-hooks/useFetchRestaurants";
import { addItem } from "../slice/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  //how to read a dynamic URL params
  const { resId } = useParams();

  const restaurantMenu = useFetchRestaurants(resId);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

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
              <div className="flex space-y-2">
                {item?.card?.card?.title ? (
                  <>
                    <li key={index}>{item?.card?.card?.title}</li>
                    <button
                      className="px-2 py-1 ml-auto bg-green-100"
                      onClick={() => handleAddItem(item)}
                    >
                      Add Item
                    </button>
                  </>
                ) : null}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
