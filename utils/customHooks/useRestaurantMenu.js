import { useEffect, useState } from "react";
import { restaurants } from "../constants";
import { useParams } from "react-router";

const useRestaurantmenu = () => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(restaurants + "/" + resId);
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantmenu;
