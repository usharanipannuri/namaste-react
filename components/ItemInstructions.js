const ItemInstructions = ({ instructionsList, showInstructions }) => {
  return (
    showInstructions && (
      <div className="bg-amber-50 p-2 shadow">
        <h2>{instructionsList}</h2>
      </div>
    )
  );
};

export default ItemInstructions;
