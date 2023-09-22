import { MdOutlineArrowBack } from "react-icons/md";
import Accordion from "../components/Accordion";
import { Link, useParams, useNavigate } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { useAppContext } from "../Contexts/ProductContext";
import TopPicks from "../components/TopPicks";

export default function Product() {
  const navigate = useNavigate();
  const store = useAppContext();
  const wishlistSelection = store?.wishlistSelection;
  const setWishlistSelection = store?.setWishlistSelection;
  const cartSelection = store?.cartSelection;
  const setCartSelection = store?.setCartSelection;

  let params = useParams();
  const productItem = params.item;

  const filteredProducts = store?.products.filter((item) => {
    return item.name === productItem;
  });

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
  };

  return (
    <div>
      <div className="flex items-center gap-2 text-base font-medium">
        <MdOutlineArrowBack onClick={() => navigate(-1)} />
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      {filteredProducts.map((product) => (
        <div className="gap-4 my-5 md:flex" key="products">
          <div className="basis-1/2">
            <div className="mb-0.5 bg-stone-400">
              <img
                src={"/img/" + product.image}
                alt="item1"
                key={product.id}
                className="object-cover w-full lg:h-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-12 lg:pr-10 lg:pl-24 basis-1/2 md:pl-10 md:pr-4">
            <div className="justify-between md:flex">
              <p className="text-xl font-semibold">{product.name}</p>
              <p className="text-lg font-medium">
                {<FormatPrice price={product.price} />}
              </p>
            </div>
            <div className="mb-0.5 hidden md:block">
              <img
                src={"/img/" + product.image}
                alt="item1"
                className="object-cover w-auto h-20 border-2 border-solid bg-stone-400 border-gray-950"
              />
            </div>
            <p className="">
              The <span>{product.name}</span> is available for{" "}
              {product.category}.To view other categories and items, visit{" "}
              <Link to="/shop" className="font-bold hover:text-green-600">
                shop
              </Link>
              .
            </p>
            <div>
              <button
                className="w-full p-4 mb-4 font-medium text-white rounded-full bg-gray-950"
                id={product.id}
                onClick={addToCart}
              >
                Add to Bag
              </button>
              <button
                className="w-full p-4 mb-4 font-medium border-2 border-solid rounded-full border-gray-950"
                id={product.id}
                onClick={addToWishlist}
              >
                Add to Wishlist
              </button>
            </div>
            <div>
              <p className="font-medium">Complimentary shipping and returns </p>
              <p className="font-medium">
                4 interest-free payments with{" "}
                <span className="font-bold">Paypal</span>
              </p>
            </div>
            <Accordion />
          </div>
        </div>
      ))}

      <div>
        <p className="mt-12 mb-5 text-lg font-semibold">
          You may also be interested in{" "}
        </p>
        <TopPicks />
      </div>
    </div>
  );
}
