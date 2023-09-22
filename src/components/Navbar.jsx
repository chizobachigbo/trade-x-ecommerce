import { BiShoppingBag } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { Link, NavLink, useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../Contexts/ProductContext";

export default function Navbar() {
  const location = useLocation();
  const navLinks = ["Men", "Women"];
  const genderSubroutes = ["shoes", "jewelry"];
  const jewelrySubroutes = ["men", "women"];

  const store = useAppContext();
  const wishlistSelection = store?.wishlistSelection;
  const cartSelection = store?.cartSelection;

  const cartCount = cartSelection.length;
  const wishlistCount = wishlistSelection.length;

  return (
    <div className="sticky top-0 z-10 py-2 bg-white navbar">
      <div className="flex items-center justify-between h-12 font-medium text-black">
        <Link
          to="/"
          href="!#"
          className="mt-1 text-lg font-semibold lg:text-3xl font-Lato lg:mt-0"
        >
          TradeX
        </Link>
        <div className="hidden gap-10 text-base align-middle lg:flex" >
          {navLinks.map((nav) => (
            <div key={nav} className="group">
              <NavLink to={"/shop/category/" + nav}>{nav}</NavLink>
              <div className="absolute flex flex-col invisible p-2 text-xs font-normal bg-white group-hover:visible">
                {genderSubroutes.map((subroute) => (
                  <Link
                    to={"/shop/category/" + nav + "/" + subroute}
                    key={subroute}
                    className="mb-1 hover:bg-stone-200"
                  >
                    {subroute}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="group">
            <NavLink key="Jewlry" to={"/shop/category/Jewelry"}>
              Jewelry
            </NavLink>
            <div className="absolute flex flex-col invisible p-2 text-xs font-normal bg-white group-hover:visible">
              {jewelrySubroutes.map((subroute) => (
                <Link
                  to={"/shop/category/Jewelry" + "/" + subroute}
                  className="mb-1 hover:bg-stone-200"
                  key={subroute}
                >
                  {subroute}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4 text-lg align-middle lg:gap-4">
          <NavLink
            className={
              location.pathname === "/wishlist"
                ? "active wishlist relative"
                : "wishlist relative"
            }
            to="/wishlist"
          >
            <FaRegHeart className="mt-2 text-lg wishlist" />
            <div
              style={{ display: wishlistCount === 0 ? "none" : "inline-flex" }}
              className="absolute items-center justify-center w-6 h-6 px-0 py-1 text-xs font-bold leading-none text-white bg-pink-600 rounded-full bottom-4 left-2"
            >
              {wishlistCount}
            </div>
          </NavLink>

          <NavLink
            className={
              location.pathname === "/cart"
                ? "active cart relative"
                : "cart relative"
            }
            to="/cart"
          >
            <BiShoppingBag className="cart mt-1.5 text-xl" />
            <div
              style={{ display: cartCount === 0 ? "none" : "inline-flex" }}
              className="absolute items-center justify-center w-6 h-6 px-0 py-1 text-xs font-bold leading-none text-white bg-teal-600 rounded-full bottom-4 left-2"
            >
              {cartCount}
            </div>
          </NavLink>

          <NavLink
            className={
              location.pathname === "/login" ? "active login" : "login"
            }
            to="/login"
          >
            <MdPersonOutline className="mt-1 text-2xl login" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
