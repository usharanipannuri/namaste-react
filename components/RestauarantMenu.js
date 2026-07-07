import { useState } from "react";
import useRestaurantmenu from "../utils/customHooks/useRestaurantMenu";
import ItemIngredients from "./ItemIngredients";
import ShimmerMenu from "./ShimmerMenu";
import { restaurants } from "../utils/constants";
import ItemInstructions from "./ItemInstructions";
import ItemMealType from "./ItemMealType";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/ReduxStore/cartSlice";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(false);
  const [showInstructions, setShowInstruction] = useState(false);
  const [showMealType, setShowMealType] = useState(false);
  const dispatch = useDispatch();
  // console.log(dispatch);

  const { name, image, ingredients, instructions, mealType, rating } =
    useRestaurantmenu();

  if (useRestaurantmenu().length === 0) return <ShimmerMenu />;

  const handleClickIngredients = () => {
    setShowItems(!showItems);
  };
  const handleClickInstructions = () => {
    setShowInstruction(!showInstructions);
  };
  const handleClickMealType = () => {
    setShowMealType(!showMealType);
  };

  const handleAddItem = (name, image, mealType) => {
    //dispatch an action
    dispatch(addItem(name, image, mealType));
  };

  return (
    // <div className="w-6/12 mx-auto mt-6 bg-amber-50">
    <div className="w-6/12 text-center mx-auto mt-2.5 p-2 bg-amber-50">
      <h1 className="font-bold text-2xl p-2">{name}</h1>
      <span className="font-bold text-2xl">{rating} ⭐</span>
      <div>
        <img src={image} className="w-52 m-auto" />
        <button
          className="text-white bg-black p-2 rounded-xs cursor-pointer"
          onClick={() => handleAddItem({ name, image, mealType })}
        >
          Add+
        </button>
      </div>

      <div className="bg-amber-100 w-full mt-2.5">
        <div
          className="flex justify-between p-5 border-b border-b-gray-400"
          onClick={() => {
            handleClickIngredients();
          }}
        >
          <h2 className="font-bold">Ingredients</h2>
          <span>⬇️</span>
        </div>
        <div className="text-center">
          {ingredients.map((restaurant, index) => {
            return (
              <ItemIngredients
                key={index}
                ingredientsList={restaurant}
                showItems={showItems}
              />
            );
          })}
        </div>
        <div
          className="flex justify-between p-5 border-b border-b-gray-400"
          onClick={() => {
            handleClickInstructions();
          }}
        >
          <h2 className="font-bold">instructions</h2>
          <span>⬇️</span>
        </div>
        <div>
          {instructions.map((restaurant, index) => {
            return (
              <ItemInstructions
                key={index}
                instructionsList={restaurant}
                showInstructions={showInstructions}
              />
            );
          })}
        </div>
        <div
          className="flex justify-between p-5 border-b border-b-gray-400"
          onClick={() => {
            handleClickMealType();
          }}
        >
          <h2 className="font-bold">Meal type</h2>
          <span>⬇️</span>
        </div>
        <div>
          {mealType.map((item, index) => {
            return (
              <ItemMealType
                key={index}
                meal={item}
                showMealType={showMealType}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
