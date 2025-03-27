import React from "react";
import ReactDOM from "react-dom/client";

const reactTags = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "parent-key1" }, [
    React.createElement("h1", { key: "key1" }, "I am h1"),
    React.createElement("h2", { key: "key2" }, "I am h2"),
  ]),
  React.createElement("div", { id: "child2", key: "parent-key2" }, [
    React.createElement("h1", { key: "key3" }, "I am h1"),
    React.createElement("h2", { key: "key4" }, "I am h2"),
  ]),
]);
const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(reactTags);
