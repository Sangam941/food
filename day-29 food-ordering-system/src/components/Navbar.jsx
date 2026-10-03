import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContextProvider } from "../context/CartContextProvider";
import { AuthContextProvider } from "../context/AuthContextProvider";

const Navbar = () => {
const {allCartItems}  =useContext(CartContextProvider)

const {logout} = useContext(AuthContextProvider)

  return (
    <nav className="border-b bg-white fixed right-0 left-0 z-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">
          Foodie
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`
            }
          > Menu
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`
            }

          >
            About
            </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex items-center gap-2 font-medium ${
                isActive
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`
            }
          >
            <span className="text-xl">🛒</span>
            <span>Cart</span>

            {allCartItems.length > 0 && (
              <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-bold text-white">
                {allCartItems.length}
              </span>
            )}
          </NavLink>


          <Link onClick={()=>logout()} className="bg-orange-500 px-8 py-2 rounded-xl font-bold text-white-700">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;