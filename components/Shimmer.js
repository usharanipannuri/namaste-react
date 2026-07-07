const Shimmer = () => {
  const shimmerCardsCount = Array(30).fill(null);

  return (
    <div className="flex flex-wrap gap-2.5">
      {shimmerCardsCount.map((_, index) => (
        <div key={index} className="w-58 m-2.5 bg-gray-200 p-2.5 h-72"></div>
      ))}
    </div>
  );
};

export default Shimmer;
