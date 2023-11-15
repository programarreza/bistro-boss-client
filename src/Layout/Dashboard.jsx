import { FaCalendar, FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();


  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-[#D1A054] p-8">
        <ul>
          <li className="flex items-center gap-2">
            <FaCartShopping />
            <NavLink to={"/dashboard/userHome"}>User Home</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaCalendar />
            <NavLink to={"/dashboard/reservation"}>Reservation</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaCalendar />
            <NavLink to={"/dashboard/payment"}>PAYMENT HISTORY</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaCartShopping />
            <NavLink to={"/dashboard/cart"}>My Cart ({cart.length})</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaCartShopping />
            <NavLink to={"/dashboard/review"}>Add Review</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaCartShopping />
            <NavLink to={"/dashboard/bookings"}>My Bookings</NavLink>
          </li>
          <div className="divider"></div>
          <li className="flex items-center gap-2">
            <FaCartShopping />
            <NavLink to={"/"}> Home</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaCartShopping />
            <NavLink to={"/order/salads"}> Menu</NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
