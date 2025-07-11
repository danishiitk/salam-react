import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutClass from "./components/AboutClass";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import AppLayout from "./components/App";
const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutClass name={"Danish Ahmad"} /> },
      { path: "/contact", element: <Contact /> },
      { path: `/restaurants/:id`, element: <RestaurantDetails /> },
    ],
    errorElement: <Error />,
  },
]);
const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<RouterProvider router={routeConfig} />);
