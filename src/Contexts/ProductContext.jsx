import { createContext, useContext, useEffect, useState } from "react";
import productList from "../products.json";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = productList;
    setProducts(data);
  }, []);

  const retrieve= (storage) => {
    const previousSelection = JSON.parse(localStorage.getItem(storage));
    if (previousSelection === null) {
      return [];
    } else {
      return previousSelection;
    }
  }

  const [cartSelection, setCartSelection] = useState(retrieve("Trade-X-Cart"));
  const [wishlistSelection, setWishlistSelection] = useState(retrieve("Trade-X-Wishlist"));
  
  useEffect(() => {
    localStorage.setItem("Trade-X-Wishlist", JSON.stringify(wishlistSelection));
  }, [wishlistSelection]);

  useEffect(() => {
    localStorage.setItem("Trade-X-Cart", JSON.stringify(cartSelection));
  }, [cartSelection]);


 

  const sharedState = { products, wishlistSelection, setWishlistSelection, cartSelection, setCartSelection};

  return (
    <ProductContext.Provider value={sharedState}>
      {children}
    </ProductContext.Provider>
  );
};

export const useAppContext = () => useContext(ProductContext);

export default ProductProvider;
