import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navLink = (
    <div className="flex gap-6 ">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white-500 underline" : ""
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white-500 underline" : ""
        }
      >
        CONTACT US
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white-500 underline" : ""
        }
      >
        DASHBOARD
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white-500 underline" : ""
        }
      >
        OUR MENU
      </NavLink>
      <NavLink
        to="/order/salads"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white-500 underline" : ""
        }
      >
        ORDER FOOD
      </NavLink>
      {user ? (
        <>
          <h4>{user?.displayName}</h4>
          <Link to={"/dashboard/cart"} className="flex">
            <button className="btn btn-sm ">
              <FaCartShopping className="text-xl" />
              <div className="badge badge-secondary">+{cart?.length}</div>
            </button>
          </Link>

          <button
            onClick={handleSignOut}
            className="btn btn-outline btn-primary btn-sm text-white"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-white-500 underline" : ""
            }
          >
            Login
          </NavLink>
          {/* <NavLink
            to="/secret"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-white-500 underline" : ""
            }
          >
            secter
          </NavLink> */}
          {user && isAdmin && (
            <NavLink
              to="/dashboard/adminHome"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white-500 underline"
                  : ""
              }
            >
              Dashboard
            </NavLink>
          )}
          {user && !isAdmin && (
            <NavLink
              to="/dashboard/userHome"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white-500 underline"
                  : ""
              }
            >
              Dashboard
            </NavLink>
          )}
        </>
      )}
    </div>
  );
  return (
    <>
      <div className="navbar max-w-screen-xl  fixed z-10 opacity-50 text-white bg-[#15151580]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
