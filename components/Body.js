import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { restaurants } from "../utils/constants";
import { Link } from "react-router";
import LoginContext from "./LoginContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(LoginContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(restaurants);
    const json = await data.json();
    setListOfRestaurants(json.recipes);
    setAllRestaurants(json.recipes);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="m-5 flex">
        <input
          type="text"
          placeholder="Search with name/cuisine"
          className="outline-1 outline-black p-2 w-2xs rounded-l-xs rounded-bl-xs"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="outline outline-black bg-green-100 p-2 rounded-br-xs rounded-r-xs hover:cursor-pointer"
          onClick={() => {
            const searchRestaurants = allRestaurants.filter((restaurant) => {
              return restaurant.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setListOfRestaurants(searchRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="outline outline-black bg-green-100 p-2 rounded-xs ml-5 hover:cursor-pointer"
          onClick={() => {
            const filteredRestaurants = allRestaurants.filter((restaurant) => {
              return restaurant.rating > 4.8;
            });
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top rated restaurants
        </button>
        <div className="ml-8">
          UserName :{" "}
          <input
            type="text"
            className="border p-1.5"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={loggedInUser}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center">
        {listOfRestaurants.map((restaurant) => {
          return (
            <Link key={restaurant.id} to={"/restaurant/" + restaurant.id}>
              {restaurant.rating > 4.7 ? (
                <RestaurantCardPromoted res={restaurant} />
              ) : (
                <RestaurantCard res={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
