import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFount from "./pages/NotFount";
import Product from "./pages/Product";

export default function MyRoutes(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/product/:id" element={<Product />}/> {/* Não encaminha para /product, paneas para /product/AlgumID */}
                <Route path="/*" element={<NotFount />}/>
            </Routes>
        </BrowserRouter>
    );
}