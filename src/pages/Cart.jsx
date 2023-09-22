import { FaHeart } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import TopPicks from "../components/TopPicks";
import FormatPrice from "../Helpers/FormatPrice";
import { useAppContext } from "../Contexts/ProductContext";
import { useState, useEffect } from "react";

export default function Cart() {
  const store = useAppContext();
  const wishlistSelection = store?.wishlistSelection;
  const setWishlistSelection = store?.setWishlistSelection;
  const cartSelection = store?.cartSelection;
  const setCartSelection = store?.setCartSelection;

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
    setCartSelection(
      cartSelection.filter((cart) => cart.id !== productClicked)
    );
  };

  const deleteCart = (e) => {
    const productClicked = parseFloat(e.currentTarget.id);
    setCartSelection(
      cartSelection.filter((cart) => cart.id !== productClicked)
    );
  };

  const itemCount = (e) => {
    const productClicked = parseFloat(e.currentTarget.id);
    const operation = e.target.id;

    setCartSelection((cartSelection) =>
      cartSelection.map((item) => {
        if (item.id === productClicked) {
          const currentQuantity = Number(item.quantity);
          let newQuantity;

          if (operation === "increase") {
            newQuantity = Math.min(100, currentQuantity + 1);
          } else if (operation === "decrease") {
            newQuantity = Math.max(1, currentQuantity - 1);
          }

          const newTotal = parseFloat(item.price) * parseFloat(newQuantity);

          return {
            ...item,
            quantity: newQuantity,
            total: newTotal,
          };
        }
        return item;
      })
    );
  };

  const [subTotal, setSubTotal] = useState();
  const [grandTotal, setGrandTotal] = useState();
  const shipping = 30;

  useEffect(() => {
    if (cartSelection.length > 0) {
      if (cartSelection.length === 1) {
        cartSelection.map((item) => {
          setSubTotal(item.price);
        });
      } else {
        setSubTotal(
          cartSelection.reduce(function (a, b) {
            return a.total + b.total;
          })
        );
      }
    }
  }, [cartSelection]);

  useEffect(() => {
    setGrandTotal(shipping + subTotal);
  }, [subTotal]);

  const checkoutCart = () => {
    setCartSelection([]);
  };

  return (
    <div className="px-1 md:px-2 lg:px-4">
      <div className="py-5">
        <p className="text-2xl font-bold">MY SHOPPING BAG</p>
      </div>

      <div style={{ display: cartSelection.length === 0 ? "block" : "none" }}>
        <p className="mb-1 text-lg font-semibold">O Items</p>
        <p>
          You haven't saved any items to your shopping bag. Start{" "}
          <Link to="/shop" className="font-bold hover:text-green-600">
            shopping
          </Link>{" "}
          and add your favorite items to your wishlist and shopping bag.
        </p>
      </div>

      <div className="items-center gap-16 md:flex">
        <div className="basis-2/3">
          {cartSelection.map((product) => (
            <div
              className="flex gap-3 py-5 mt-5 border-y-2"
              key={product.id}
              id={product.id}
            >
              <img
                src={"/img/" + product.image}
                alt={product.name}
                className="object-cover w-full product__image lg:h-full basis-1/3"
              />
              <div className="flex flex-col justify-between basis-2/3">
                <div className="flex justify-between gap-1 mb-3">
                  <div className="justify-between md:flex md:flex-col">
                    <p className="mb-2 font-semibold product__name">
                      {product.name}
                    </p>
                    <p className="product__price">
                      {" "}
                      {<FormatPrice price={product.price} />}
                    </p>
                  </div>
                  <p className="font-medium product__total ">
                    {" "}
                    {<FormatPrice price={product.total} />}
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center justify-between w-20 border-2 border-solid border-gray-950 h-7">
                    <div id={product.id} onClick={itemCount}>
                      <p className="p-2 decrease" id="decrease">
                        -
                      </p>
                    </div>
                    <p className="w-6 text-center cart__input" id={product.id}>
                      {product.quantity}
                    </p>
                    <div id={product.id} onClick={itemCount}>
                      <p className="p-2 increase" id="increase">
                        +
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-base">
                    <FaHeart
                      className="addToWishlist hover:text-rose-700"
                      onClick={addToWishlist}
                      id={product.id}
                    />
                    <FaTrashAlt
                      className="trash"
                      onClick={deleteCart}
                      id={product.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="my-10 md:my-0 basis-1/3"
          style={{ display: cartSelection.length === 0 ? "none" : "block" }}
        >
          <p className="pb-5 text-base font-bold border-b-2">Order Detail</p>
          <div className="py-5 border-b-2">
            <div className="flex justify-between font-medium">
              <p>Subtotal</p>
              <p>{<FormatPrice price={subTotal} />}</p>
            </div>
            <div className="flex justify-between">
              <p>Standard Shipping</p>
              <p> {<FormatPrice price={shipping} />}</p>
            </div>
            <div className="flex justify-between">
              <p>Sales Tax</p>
              <p>Calculated at Checkout</p>
            </div>
          </div>
          <div className="flex justify-between pt-5 pb-10 font-bold">
            <p>Total</p>
            <p>{<FormatPrice price={grandTotal} />}</p>
          </div>
          <button
            className="w-full p-4 mb-4 font-medium text-white rounded-full bg-gray-950"
            onClick={checkoutCart}
          >
            Checkout
          </button>
          <div className="mt-10 md:mt-0">
            <p className="mb-10 text-base font-medium underline uppercase">
              Use a Promo Code
            </p>
            <div>
              <p className="mb-2 text-xs uppercase ">
                accepted payment methods
              </p>
              <div className="grid grid-cols-4 gap-2">
                <img src="paypal.png" alt="paypal" className="object-cover" />
                <img
                  src="mastercard.png"
                  alt="mastercard"
                  className="object-cover"
                />
                <img src="visa.png" alt="visa" className="object-cover" />
                <img
                  src="american-express.png"
                  alt="american-express"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center gap-16 mt-10">
        <p className="mb-3 text-lg font-extrabold text-center md:text-2xl md:text-left">
          TOP PICKS FOR YOU
        </p>
          <TopPicks />
      </div>
    </div>
  );
}
