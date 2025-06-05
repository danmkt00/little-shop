import { useState } from "react";

import CartContext from "../context/CartContext";

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [price, setPrice] = useState(0);

    const addNewCartElement = (product) => {
        setCartItems((prevItems) => {
            const existingIndex = prevItems.findIndex(
                (item) => item.id === product.id
            );

            if (existingIndex !== -1) {
                // Product exists, create a new array updating count
                const updatedItems = [...prevItems];
                updatedItems[existingIndex].count += 1;
                return updatedItems;
            } else {
                // Product does not exist, add with count = 1
                return [...prevItems, { ...product, count: 1 }];
            }
        });

        setPrice((prevPrice) => {
            const sum = Number(prevPrice) + Number(product.price);
            return Number(sum.toFixed(2));
        });
    };

    const resetCartItems = () => {
        setCartItems([]);
        setPrice(0);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addNewCartElement,
                resetCartItems,
                price,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
