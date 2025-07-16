import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./pages/Body";
const AppLayout = () => {
  return (
    <div id="app-container" className="mx-2 bg-blue-50">
      <Header />
      <Outlet />
    </div>
  );
};
export default AppLayout;
