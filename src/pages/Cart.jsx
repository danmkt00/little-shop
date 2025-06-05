import { FaDollarSign } from "react-icons/fa";
import useCartContext from "../hooks/useCartContext";

const Cart = () => {
    const { cartItems, price } = useCartContext();

    return (
        <>
            <div className="relative w-[70vw] mx-auto m-10 space-y-4  p-4">
                <div>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center space-x-4 border p-2 rounded shadow-sm m-2 hover:shadow-lg transition-transform duration-200 hover:scale-101"
                        >
                            <img
                                src={item.images[0]}
                                alt={item.title}
                                className="w-30 h-30 object-cover rounded"
                            />
                            <div className="flex-1">
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-green-600 font-medium flex items-center">
                                    <FaDollarSign className="mr-1" />
                                    {item.price}
                                </p>
                            </div>
                            <div className="text-gray-700 font-semibold m-10">
                                Qty: {item.count}
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="absolute top-2 right-2 bg-white px-4 py-2 rounded shadow-lg flex items-center font-semibold text-green-700 border border-green-300
                hover:-translate-y-1 hover:shadow-xl transition-transform duration-200"
                >
                    Total Price: {price} <FaDollarSign className="ml-1" />
                </div>
            </div>
        </>
    );
};

export default Cart;
