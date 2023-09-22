import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import TopPicks from "../components/TopPicks";
import FormatPrice from "../Helpers/FormatPrice";
import { useAppContext } from "../Contexts/ProductContext";

export default function Wishlist() {
  const store = useAppContext();
  const wishlistSelection = store?.wishlistSelection;
  const setWishlistSelection = store?.setWishlistSelection;
  const cartSelection = store?.cartSelection;
  const setCartSelection = store?.setCartSelection;

  const addToCart = (e) => {
    const productClicked = parseFloat(e.currentTarget.id);
    store?.products.map((product) => {
      if (productClicked === product.id) {
        if (cartSelection.length === 0) {
          setCartSelection([
            ...cartSelection,
            {
              id: product.id,
              name: product.name,
              image: product.image,
              price: product.price,
              total: product.price,
              category: product.category,
              group: product.group,
              type: product.type,
              quantity: 1,
            },
          ]);
        } else {
          if (cartSelection.some((item) => item.id === productClicked)) {
            alert("This item has been added to cart");
            return;
          } else {
            setCartSelection([
              ...cartSelection,
              {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                total: product.price,
                category: product.category,
                group: product.group,
                type: product.type,
                quantity: 1,
              },
            ]);
          }
        }
      }
    });
    setWishlistSelection(
      wishlistSelection.filter((wish) => wish.id !== productClicked)
    );
  };

  const deleteWish = (e) => {
    const productClicked = parseFloat(e.currentTarget.id);
    setWishlistSelection(
      wishlistSelection.filter((wish) => wish.id !== productClicked)
    );
  };
  return (
    <div className="px-1 md:px-2 lg:px-4">
      <div className="py-5">
        <p className="text-2xl font-bold">MY WISHLIST</p>
      </div>

      <div
        style={{ display: wishlistSelection.length === 0 ? "block" : "none" }}
      >
        <p className="mb-1 text-lg font-semibold">O Items</p>
        <p>
          You haven't saved any items to your wishlist yet. Start{" "}
          <Link to="/shop" className="font-bold hover:text-green-600">
            shopping
          </Link>{" "}
          and add your favorite items to your wishlist.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
        {wishlistSelection.map((product) => (
          <div className="mb-5" key={product.id}>
            <Link to={"/shop/product/" + product.name}>
              <img
                src={"/img/" + product.image}
                alt={product.name}
                className="object-cover w-full h-72"
              />
            </Link>
            <p className="pt-2 font-bold">
              {<FormatPrice price={product.price} />}
            </p>
            <Link to={"/shop/product/" + product.name}>
              <p className="pt-1 mb-3 truncate"> {product.name}</p>
            </Link>
            <button
              className="w-full py-2 font-medium text-white bg-black"
              id={product.id}
              onClick={addToCart}
            >
              Add to Bag
            </button>
            <button
              className="w-full py-2 font-medium"
              onClick={deleteWish}
              id={product.id}
            >
              Delete <span className="mx-2 text-lg font-semibold">x</span>
            </button>
          </div>
        ))}
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
