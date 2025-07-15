import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutClass from "./components/AboutClass";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import AppLayout from "./components/App";
import "./index.css";
const Grocery = lazy(() => import("./components/Grocery"));
const RestaurantDetails = lazy(() => import("./components/RestaurantDetails"));
const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutClass name={"Danish Ahmad"} /> },
      { path: "/contact", element: <Contact /> },
      { path: `/restaurants/:id`, element: <RestaurantDetails /> },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <h1>
                Grocery component is being fetched from the parcel server.
              </h1>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<RouterProvider router={routeConfig} />);
