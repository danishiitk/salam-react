import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
const AppLayout = () => {
  console.log("Hello");
  console.log(<Body />);

  return (
    <div className="layout-container">
      <Header />
      <Body />
    </div>
  );
};
const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<AppLayout />);
