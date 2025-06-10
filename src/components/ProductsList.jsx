import { useEffect, useState } from "react";

import useSearchContext from "../hooks/useSearchContext";

import getProducts from "../api/getProducts";

import Product from "./Product";

const ProductsList = () => {
    const [loading, setLoading] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);

    const { searchValue, resetSearchValue } = useSearchContext();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const data = await getProducts(searchValue);
                setAllProducts(data.products);
                setVisibleProducts(data.products);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const filtered = allProducts.filter(
            (product) =>
                product?.title
                    ?.toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                product?.descriptions
                    ?.toLowerCase()
                    .includes(searchValue.toLowerCase())
        );

        setVisibleProducts(filtered);
    }, [searchValue, allProducts]);

    const resetVisible = () => {
        setVisibleProducts([...allProducts]);
        resetSearchValue();
    };

    return (
        <>
            <div className="flex justify-between items-center px-20 mb-2">
                <p className="text-gray-600 text-sm italic">
                    Your input:{" "}
                    <span className="font-medium text-gray-800">
                        {searchValue}
                    </span>
                </p>
                <button
                    onClick={resetVisible}
                    className="text-sm hover:underline cursor-pointer hover:text-blue-500"
                >
                    View All Products
                </button>
            </div>
            {visibleProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 pb-5">
                    {visibleProducts.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 italic mt-6 space-y-4 min-h-[calc(100vh-270px)]">
                    <p className="text-lg">
                        No products matched your search: '{searchValue}'
                    </p>

                    <button
                        onClick={resetVisible}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
                    >
                        View All Products
                    </button>
                </div>
            )}

            {loading && (
                <div className="flex justify-center mt-6">
                    <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </>
    );
};

export default ProductsList;
