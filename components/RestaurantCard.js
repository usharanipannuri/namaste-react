import { useContext } from "react";
import LoginContext from "./LoginContext";

const RestaurantCard = ({ res }) => {
  const { name, image, cuisine, rating } = res;

  const { loggedInUser } = useContext(LoginContext);

  return (
    <div className="w-58 m-2.5 bg-gray-100 p-2.5 hover:shadow-2xl">
      <img src={image} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return ({ res }) => {
    return (
      <div>
        <label className=" absolute text-white bg-black/50 rounded-tr-md rounded-br-md p-1 ml-5 mt-2">
          promoted
        </label>
        <RestaurantCard res={res} />
      </div>
    );
  };
};

export default RestaurantCard;
