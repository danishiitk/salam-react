const Shimmer = () => {
  return (
    <div className="res-container">
      {Array.from({ length: 11 }).map((_, i) => (
        <div key={i} className="res-card" style={{ height: "400px" }}></div>
      ))}
    </div>
  );
};
export default Shimmer;
