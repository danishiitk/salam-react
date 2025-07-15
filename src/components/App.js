import { Outlet } from "react-router-dom";
import Header from "./Header";
const AppLayout = () => {
  return (
    <div id="app-container" className="mx-2 bg-blue-50">
      <Header />
      <Outlet />
    </div>
  );
};
export default AppLayout;
