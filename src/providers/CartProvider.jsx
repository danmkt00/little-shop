import { useState, useEffect } from "react";

import CartContext from "../context/CartContext";

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => {
            return acc + item.price * item.count;
        }, 0);

        setPrice(Number(total.toFixed(2)));
    }, [cartItems]);

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
    };

    const resetCartItems = () => {
        setCartItems([]);
        setPrice(0);
    };

    const changeCartItemQty = (itemId, delta = 1) => {
        setCartItems((prevItems) => {
            return prevItems
                .map((item) => {
                    if (item.id === itemId) {
                        const newCount = item.count + delta;
                        return newCount > 0
                            ? { ...item, count: newCount }
                            : null;
                    }
                    return item;
                })
                .filter((item) => item !== null);
        });
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addNewCartElement,
                resetCartItems,
                changeCartItemQty,
                price,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
