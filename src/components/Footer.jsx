import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-50 shadow-sm py-6 mt-auto">
            <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <p className="text-gray-700 font-medium text-center md:text-left mb-4 md:mb-0">
                    © {new Date().getFullYear()} danmkt00's Little Shop
                </p>
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
                                `flex items-center gap-2 ${
                                    isActive
                                        ? "text-blue-600 underline"
                                        : "hover:text-blue-500"
                                }`
                            }
                        >
                            <FaShoppingCart className="text-xl" />
                            <span>Cart</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
