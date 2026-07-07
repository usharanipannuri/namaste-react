import { useState } from "react";

const ItemIngredients = ({ ingredientsList, showItems }) => {
  // const [showItems, setShowItems] = useState(false);

  return (
    showItems && <div className="p-2 shadow bg-amber-50">{ingredientsList}</div>
  );
};

export default ItemIngredients;
