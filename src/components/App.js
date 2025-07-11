import { Outlet } from "react-router-dom";
import Header from "./Header";
const AppLayout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Outlet />
    </div>
  );
};
export default AppLayout;
