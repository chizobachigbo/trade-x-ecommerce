import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { useAppContext } from "../Contexts/ProductContext";
import { Link } from "react-router-dom";

export default function TopPicks() {
  const store = useAppContext();
  const products = store?.products;
  const wishlistSelection = store?.wishlistSelection;
  const setWishlistSelection = store?.setWishlistSelection;

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const shuffledProducts = shuffle(products);

  const addToWishlist = (e) => {
    const productClicked = parseFloat(e.currentTarget.id);
    store?.products.map((product) => {
      if (productClicked === product.id) {
        if (wishlistSelection.length === 0) {
          setWishlistSelection([
            ...wishlistSelection,
            {
              id: product.id,
              name: product.name,
              image: product.image,
              price: product.price,
              category: product.category,
              group: product.group,
              type: product.type,
            },
          ]);
        } else {
          if (wishlistSelection.some((item) => item.id === productClicked)) {
            alert("This item has been added to wishlist");
            return;
          } else {
            setWishlistSelection([
              ...wishlistSelection,
              {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                category: product.category,
                group: product.group,
                type: product.type,
              },
            ]);
          }
        }
      }
    });
  };

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
      {shuffledProducts.slice(0, 4).map((product) => (
        <div className="mb-5" key={product.id}>
          <Link to={"/shop/product/" + product.name} target="_blank">
            <img
              src={"/img/" + product.image}
              alt={product.name}
              className="object-cover w-full h-72 bg-stone-400"
            />
          </Link>

          <div className="flex items-center justify-between">
            <p className="pt-2 font-bold">
              {" "}
              {<FormatPrice price={product.price} />}
            </p>
            <FaHeart
              className="hover:text-rose-700"
              onClick={addToWishlist}
              id={product.id}
            />
          </div>
          <Link to={"/shop/product/" + product.name}>
            <p className="pt-1 mb-3 truncate">
              {" "}
              {product.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
