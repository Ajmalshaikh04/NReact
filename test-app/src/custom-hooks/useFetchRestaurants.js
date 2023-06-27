import { useState, useEffect } from "react";
import { FETCH_MENU_BASE_URL,FETCH_MENU_END_POINT_URL, FETCH_MENU_URL } from "../../config";

export const useFetchRestaurants = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      FETCH_MENU_BASE_URL+resId+FETCH_MENU_END_POINT_URL
      
    );
    const json = await data.json();
    setRestaurantMenu(json?.data);
    
  }
  return restaurantMenu;
};

