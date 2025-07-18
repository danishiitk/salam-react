import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutClass from "./pages/AboutClass";
import Body from "./pages/Body";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import AppLayout from "./App";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "./index.css";
const Grocery = lazy(() => import("./pages/Grocery"));
const RestaurantDetails = lazy(() => import("./pages/RestaurantDetails"));
const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutClass name={"Danish Ahmad"} /> },
      { path: "/contact", element: <Contact /> },
      { path: `/restaurants/:id`, element: (
          <ProtectedRoute>
            <RestaurantDetails />
          </ProtectedRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/profile", element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
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
