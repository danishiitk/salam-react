import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantDetails from "./components/RestaurantDetails";
import AboutClass from "./components/AboutClass";
const AppLayout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Outlet />
    </div>
  );
};
const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutClass name={"Danish Ahmad"} /> },
      { path: "/contact", element: <Contact /> },
    ],
    errorElement: <Error />,
  },
  { path: `/restaurants/:id`, element: <RestaurantDetails /> },
]);
const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<RouterProvider router={routeConfig} />);
