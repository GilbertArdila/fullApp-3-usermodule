import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./subComponents/navbar/Navbar";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
