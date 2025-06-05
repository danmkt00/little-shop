import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

import useCartContext from "../hooks/useCartContext";

const Product = ({ product }) => {
    const [showMessage, setShowMessage] = useState(false);
    const { addNewCartElement } = useCartContext();

    const addToCart = () => {

        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 2500);

        addNewCartElement(product);
    };

    return (
        <>
            <div className="p-4 border rounded shadow-sm flex flex-col space-y-2  hover:shadow-lg transition-transform duration-200 hover:scale-101">
                <h2 className="text-lg font-semibold">{product.title}</h2>

                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-auto object-cover rounded"
                />

                <p>{product.description}</p>

                <div className="mt-auto flex items-center justify-between text-gray-800 pt-2 border-t">
                    <span className="inline-flex items-center transition-transform duration-200 hover:scale-110">
                        <FaDollarSign className="mr-1 text-green-600" />
                        {product.price}
                    </span>

                    <FaShoppingCart
                        className="cursor-pointer text-xl text-blue-600 hover:text-blue-800 hover:rotate-12 transition-transform duration-300"
                        onClick={addToCart}
                    />
                </div>
            </div>
            <div
                className={`fixed top-25 right-4 z-50 transition-opacity duration-300 pointer-events-none ${
                    showMessage ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className="bg-white px-5 py-3 rounded shadow-lg border border-green-200 text-green-700 font-semibold">
                    Product successfully added to your cart!
                </div>
            </div>
        </>
    );
};

export default Product;
