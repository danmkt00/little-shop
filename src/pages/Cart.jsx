import { FaDollarSign, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";

const Cart = () => {
    const { cartItems, changeCartItemQty, price } = useCartContext();
    const navigate = useNavigate();
    const changeQtyHandler = (item, change) => {
        if (item.count === 1 && change === -1) {
            if (confirm("Do you want to delete it from cart?!")) {
                changeCartItemQty(item.id, change);
                return;
            } else {
                return;
            }
        }

        changeCartItemQty(item.id, change);
    };

    return (
        <>
            <div className="px-6 sm:px-10 lg:px-20 mb-2 pt-2 text-blue-500">
                <button
                    onClick={() => navigate("/")}
                    className="text-sm hover:underline cursor-pointer hover:text-blue-600"
                >
                    <div className="flex items-center gap-1">
                        <FaArrowLeft />
                        <span>back to shop</span>
                    </div>
                </button>
            </div>

            <div className="relative w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto my-10 space-y-4 p-4 min-h-[calc(100vh-270px)]">
                {cartItems.length > 0 ? (
                    <div>
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 border p-4 rounded shadow-sm m-2 hover:shadow-lg transition-transform duration-200 hover:scale-101"
                            >
                                <img
                                    src={item.images[0]}
                                    alt={item.title}
                                    className="w-full sm:w-32 rounded object-contain bg-gray-100 p-1"
                                />
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="text-green-600 font-medium flex justify-center sm:justify-start items-center">
                                        <FaDollarSign className="mr-1" />
                                        {item.price}
                                    </p>
                                </div>
                                <div className="flex items-center justify-center sm:justify-start space-x-2">
                                    <button
                                        className="text-2xl cursor-pointer p-2  transition-transform duration-200 hover:scale-120"
                                        onClick={() =>
                                            changeQtyHandler(item, 1)
                                        }
                                    >
                                        +
                                    </button>
                                    <button
                                        className="text-2xl cursor-pointer transition-transform duration-200 hover:scale-120"
                                        onClick={() =>
                                            changeQtyHandler(item, -1)
                                        }
                                    >
                                        -
                                    </button>
                                    <div className="text-gray-700 font-semibold ml-4">
                                        Qty: {item.count}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="absolute top-2 right-2 bg-white px-4 py-2 rounded shadow-lg flex items-center font-semibold text-green-700 border border-green-300 hover:-translate-y-1 hover:shadow-xl transition-transform duration-200">
                            Total Price: {price}
                            <FaDollarSign className="ml-1" />
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-gray-500 italic mt-6 space-y-4">
                        <p className="text-lg">Your cart is empty.</p>
                        <button
                            onClick={() => navigate("/")}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
                        >
                            Go to shopping
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
