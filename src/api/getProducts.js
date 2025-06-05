import axios from "axios";

const getProducts = async () => {
    const url = import.meta.env.VITE_API_URL;
    try {
        const res = await axios.get(url);
        if (res.status != 200) {
            throw new Error(
                `Failed to fetch products with status code ${res.status}`
            );
        }
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default getProducts;
