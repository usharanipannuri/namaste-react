const ItemMealType = ({ meal, showMealType }) => {
  return (
    showMealType && (
      <div className="bg-amber-50 p-2 shadow">
        <h1>{meal}</h1>
      </div>
    )
  );
};

export default ItemMealType;
