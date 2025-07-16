const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i} className="w-full h-72 bg-gray-200 rounded-lg animate-pulse shadow-md"></div>
      ))}
    </div>
  );
};
export default Shimmer;
