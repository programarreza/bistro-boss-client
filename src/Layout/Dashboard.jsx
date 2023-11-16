import { FaCalendar, FaCartShopping, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import {
  MdAccountBalance,
  MdAddShoppingCart,
  MdContactPhone,
  MdOutlineMenuBook,
  MdOutlinePayment,
  MdOutlineRestaurantMenu,
  MdOutlineReviews
} from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO: get isAdmin value from in the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-[#D1A054] p-8">
        <ul className="uppercase">
          {isAdmin ? (
            <>
              <li className="flex items-center gap-2">
                <MdAccountBalance />
                <NavLink to={"/dashboard/adminHome"}>Admin Home</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <FaUtensils />
                <NavLink to={"/dashboard/addItems"}>Add Items</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <FaList />
                <NavLink to={"/dashboard/manageItems"}>manage items</NavLink>
              </li>
              
              <li className="flex items-center gap-2">
                <MdOutlineMenuBook />
                <NavLink to={"/dashboard/manageBookings"}>manage bookings</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <FaUsers />
                <NavLink to={"/dashboard/users"}>all users</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-center gap-2">
                <MdAccountBalance />
                <NavLink to={"/dashboard/userHome"}>User Home</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <FaCalendar />
                <NavLink to={"/dashboard/reservation"}>Reservation</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlinePayment />
                <NavLink to={"/dashboard/payment"}>PAYMENT HISTORY</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <MdAddShoppingCart />
                <NavLink to={"/dashboard/cart"}>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineReviews />
                <NavLink to={"/dashboard/review"}>Add Review</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <FaCartShopping />
                <NavLink to={"/dashboard/bookings"}>My Bookings</NavLink>
              </li>
            </>
          )}

          {/* shared nav links */}
          <div className="divider"></div>
          <li className="flex items-center gap-2">
            <MdAccountBalance />
            <NavLink to={"/"}> Home</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineRestaurantMenu />
            <NavLink to={"/order/salads"}> Menu</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <MdContactPhone />
            <NavLink to={"/contact"}> Contact</NavLink>
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
