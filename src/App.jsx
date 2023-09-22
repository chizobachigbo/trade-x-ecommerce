import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Category from "./pages/Category";

function App() {
  const [productGroup, setProductGroup] = useState("");

  return (
    <>
      <div className="App">
        <Router>
          <Navbar
            productGroup={productGroup}
            setProductGroup={setProductGroup}
          />
          <div className="mt-6">
            <Routes >
              <Route
                path="/"
                element={
                  <Home
                    productGroup={productGroup}
                    setProductGroup={setProductGroup}
                  />
                }
              ></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route
                path="/shop/product/:item"
                element={
                  <Product
                    productGroup={productGroup}
                    setProductGroup={setProductGroup}
                  />
                }
              ></Route>
              <Route
                path="/shop/category/:group/*"
                element={<Category />}
              ></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/wishlist" element={<Wishlist />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
