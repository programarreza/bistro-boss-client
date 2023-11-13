import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  const hiddenHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup")

  return (
    <div>
      {hiddenHeaderFooter || <Navbar />}
      <Outlet />
      {hiddenHeaderFooter || <Footer />}
    </div>
  );
};

export default MainLayout;
