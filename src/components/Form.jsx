import { useContext, useState } from "react";

import useSearchContext from "../hooks/useSearchContext";

const Form = () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const { changeSearchValue } = useSearchContext();

    const submitHandler = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
            setError("Please input a product name");
            return;
        }

        changeSearchValue(value.trim());

        setValue("");
        setError("");
    };

    const changeHandler = (e) => {
        setError("");
        setValue(e.target.value);
    };

    return (
        <div className="flex justify-center p-4">
            <form
                onSubmit={submitHandler}
                className="flex items-center space-x-2"
            >
                <input
                    type="text"
                    value={value}
                    onChange={changeHandler}
                    placeholder="Input product name"
                    className="w-[70vw] max-w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default Form;
