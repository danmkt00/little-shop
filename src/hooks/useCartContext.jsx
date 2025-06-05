import { useContext } from "react";

import CartContext from "../context/CartContext";

const useCartContext = () => {
    const context = useContext(CartContext);

    return context;
};

export default useCartContext;
