import { FaShoppingCart } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

import { NavLink } from "react-router-dom";

import useCartContext from "../hooks/useCartContext";

const Navbar = ({ title = "My Website" }) => {
    const { cartItems, price } = useCartContext();

    return (
        <header className="bg-gray-50 shadow-sm py-6 sticky top-0 z-50">
            <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <h1 className="text-3xl font-bold text-gray-700 tracking-tight text-center md:text-left mb-4 md:mb-0">
                    <NavLink to="/" className="hover:text-blue-500">
                        {title}
                    </NavLink>
                </h1>
                <ul className="flex space-x-6 text-gray-600 font-medium items-center">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 underline"
                                    : "hover:text-blue-500"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                `flex items-center px-3 py-1 rounded transition-colors duration-200 ${
                                    isActive
                                        ? "text-blue-600 underline"
                                        : "text-gray-700 hover:text-blue-500"
                                }`
                            }
                        >
                            <FaShoppingCart className="text-xl mr-2" />
                            <span className="mr-2">
                                Cart ({cartItems && cartItems.length})
                            </span>
                            <span className="flex items-center text-green-600 font-medium">
                                {price}
                                <FaDollarSign className="ml-1 text-sm" />
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
