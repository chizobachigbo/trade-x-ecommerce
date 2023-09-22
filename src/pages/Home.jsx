import { Link } from "react-router-dom";

export default function Home() {
  const categories = [
    {
      header: "Discover TradeX's Women's Fashion",
      image: "women.jpg",
      group: "Women",
    },
    {
      header: "Discover TradeX's Men's Fashion",
      image: "men.jpg",
      group: "Men",
    },
    {
      header: "Discover TradeX's Women's Fashion",
      image: "jewelery.jpg",
      group: "Jewelry",
    },
  ];

  return (
    <div className="flex flex-col gap-9">
      {categories.map((category) => (
        <div className="relative flex flex-col w-full bg-stone-100 h-96" key={category.group}>
          <img src={category.image} alt={category.image} className="object-cover w-full h-full " />
          <div className="absolute flex flex-col items-center self-center w-full top-1/3">
            <div className="flex gap-4">
              <p className="justify-center mb-3 text-lg font-bold text-center text-white">
              {category.header}
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                to={"/shop/category/" + category.group}
                className="px-3 py-2 text-sm font-semibold rounded-md opacity-50 bg-stone-100 md:text-base"
              >
                Shop Now
              </Link>
              <Link
                to="/shop"
                className="px-3 py-2 text-sm font-semibold rounded-md opacity-50 bg-stone-100 md:text-base"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
