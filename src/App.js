import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
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
