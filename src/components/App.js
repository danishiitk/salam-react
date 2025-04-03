import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="app-header-container">
      <img
        className="app-logo"
        alt="App Logo"
        src="https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg?semt=ais_hybrid"
      ></img>
      <nav className="header-link-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="Res Image"
        src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Chicken-Biryani.jpg"
      ></img>
      <h2>Babuddin Biryani Center</h2>
      <span className="rest-info-container">
        <h3>4.3 stars</h3>
        <h3>20 minutes</h3>
        <h3>Lucknawi Biryani</h3>
      </span>
    </div>
  );
};

const Body = () => {
  return (
    <div className="app-body">
      <h1>Search </h1>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Body />
    </div>
  );
};
const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<AppLayout />);
