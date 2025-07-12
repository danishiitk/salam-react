import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutClass from "./src/components/AboutClass";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import AppLayout from "./src/components/App";
import "./index.css";
const Grocery = lazy(() => import("./src/components/Grocery"));
const RestaurantDetails = lazy(() =>
  import("./src/components/RestaurantDetails")
);
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
