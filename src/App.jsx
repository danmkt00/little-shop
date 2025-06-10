import { Route, Routes } from "react-router-dom";

import "./App.css";

import SearchProvider from "./providers/SearchProvider";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import CartProvider from "./providers/CartProvider";

function App() {
    return (
        <>
            <SearchProvider>
                <CartProvider>
                    <Navbar title="My Little Shop" />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="*" element={<NoPage />}></Route>
                    </Routes>
                    <Footer />
                </CartProvider>
            </SearchProvider>
        </>
    );
}

export default App;
