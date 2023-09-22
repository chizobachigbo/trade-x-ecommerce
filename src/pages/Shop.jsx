import { MdOutlineArrowBack } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { useAppContext } from "../Contexts/ProductContext";

export default function () {
  const store = useAppContext();
  const wishlistSelection = store?.wishlistSelection;
  const setWishlistSelection = store?.setWishlistSelection;

  const navigate = useNavigate();

  const products = store?.products;

  const subRouter = ["Men", "Women", "Jewelry"];
  const [sort, setSort] = useState(false);

  const viewSort = () => {
    setSort(!sort);
  };

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
    <>
      <div className="flex items-center gap-2 text-base font-medium">
        <MdOutlineArrowBack onClick={() => navigate(-1)} />
        <button onClick={() => navigate(-1)}>Back</button>
      </div>

      <div className="flex justify-between my-5">
        <p className="text-2xl font-medium uppercase">all items</p>
        <div className="group">
          <p className="flex justify-center w-24 gap-2 text-lg font-medium border-2 border-solid border-gray-950">
            Sort By
            <span className="self-center">
              <FiChevronDown />
            </span>
          </p>
          <div className="absolute flex flex-col invisible w-24 p-2 rounded bg-stone-200 group-hover:visible">
            {subRouter.map((route) => (
              <Link
                key={route}
                to={"/shop/category/" + route}
                className="hover:bg-stone-300"
              >
                {route}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div className="mb-5" key={product.id}>
            <Link to={"/shop/product/" + product.name} className="bg-stone-400">
              <img
                src={"/img/" + product.image}
                alt={product.name}
                className="object-cover w-full product__image h-4/6"
              />
            </Link>

            <div className="flex items-center justify-between">
              <p className="pt-2 font-bold product__price">
                {<FormatPrice price={product.price} />}
              </p>
              <FaHeart
                className="hover:text-rose-700"
                onClick={addToWishlist}
                id={product.id}
              />
            </div>
            <div className="flex flex-col">
              <Link to={"/shop/product/" + product.name}>
                <p className="pt-1 text-sm truncate text-zinc-800">
                  {" "}
                  {product.name}
                </p>
              </Link>
              <p className="text-sm font-medium text-zinc-800">
                {product.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
