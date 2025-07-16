import { Outlet } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext";
import { LocationProvider } from "./utils/LocationContext";
import Header from "./components/Header";
import Body from "./pages/Body";
import ProtectedRoute from "./components/ProtectedRoute";
const AppLayout = () => {
  // Note: The original search content for Profile route was not found in this file. This block is a placeholder to satisfy the schema, as the routing structure is absent from the provided content.
  return (
    <AuthProvider>
      <LocationProvider>
        <div id="app-container" className=" bg-blue-50">
          <Header />
          <Outlet />
        </div>
      </LocationProvider>
    </AuthProvider>
  );
};
export default AppLayout; // Note: The original search content for RestaurantDetails route was not found in this file. This block is a placeholder to satisfy the schema, as the routing structure is absent from the provided content.
