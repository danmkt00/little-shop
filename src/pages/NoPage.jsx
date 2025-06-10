import { useNavigate } from "react-router-dom";
const NoPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center bg-white min-h-[calc(100vh-145px)]">
            <h1 className="text-gray-800 text-4xl md:text-6xl font-extrabold select-none mb-8">
                No Page Found
            </h1>
            <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
            >
                Return to Home Page
            </button>
        </div>
    );
};

export default NoPage;
