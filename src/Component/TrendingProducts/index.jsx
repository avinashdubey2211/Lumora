
import React, { useMemo, useState } from "react";
import {
  FiHeart,
  FiSearch,
  FiShoppingBag,
  FiStar,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Everyday Classic Handbag",
    category: "Fashion",
    price: 2499,
    oldPrice: 3299,
    rating: 4.8,
    reviews: 124,
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&auto=format&fit=crop&q=85",
  },
  {
    id: 2,
    name: "Glow Hydrating Skincare Set",
    category: "Beauty",
    price: 1299,
    oldPrice: 1699,
    rating: 4.9,
    reviews: 98,
    badge: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700&auto=format&fit=crop&q=85",
  },
  {
    id: 3,
    name: "Studio Wireless Headphones",
    category: "Electronics",
    price: 3499,
    oldPrice: 4299,
    rating: 4.7,
    reviews: 86,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=85",
  },
  {
    id: 4,
    name: "Minimal Ceramic Vase",
    category: "Home",
    price: 899,
    oldPrice: 1199,
    rating: 4.6,
    reviews: 65,
    badge: "TRENDING",
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=700&auto=format&fit=crop&q=85",
  },
  {
    id: 5,
    name: "Modern Everyday Sneakers",
    category: "Fashion",
    price: 2199,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 112,
    badge: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=85",
  },
  {
    id: 6,
    name: "Signature Perfume",
    category: "Beauty",
    price: 1599,
    oldPrice: 1999,
    rating: 4.9,
    reviews: 143,
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=700&auto=format&fit=crop&q=85",
  },
  {
    id: 7,
    name: "Premium Wrist Watch",
    category: "Accessories",
    price: 2899,
    oldPrice: 3599,
    rating: 4.7,
    reviews: 74,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&auto=format&fit=crop&q=85",
  },
  {
    id: 8,
    name: "Cozy Home Cushion",
    category: "Home",
    price: 699,
    oldPrice: 999,
    rating: 4.6,
    reviews: 52,
    badge: "TRENDING",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=700&auto=format&fit=crop&q=85",
  },
];

const categories = [
  "All",
  "Fashion",
  "Beauty",
  "Electronics",
  "Home",
  "Accessories",
  "Wishlist",
];

const TrendingProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // Wishlist Toggle
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // Add to Cart
  const addToCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);

      if (existing) {
        return prev.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { id, quantity: 1 }];
    });
  };

  // Filter and Search
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All"
          ? true
          : activeCategory === "Wishlist"
          ? wishlist.includes(product.id)
          : product.category === activeCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search, wishlist]);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  return (
    <section
      id="shop"
      className="bg-[#F7F5EF] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-350">

        {/* Section Heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-block rounded-full bg-[#DDEBE2] px-4 py-2 text-[10px] font-bold tracking-[0.18em] text-[#587B63] sm:text-xs">
              HANDPICKED FOR YOU
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#34352F] sm:text-4xl lg:text-5xl">
              Trending{" "}
              <span className="font-serif italic font-normal text-[#A58BD9]">
                Products.
              </span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-[#85837C] sm:text-base">
              Discover the pieces everyone is loving right now.
              A little inspiration for your everyday style.
            </p>
          </div>

          {/* Cart Counter */}
          <div className="flex w-fit items-center gap-3 rounded-full border border-[#E8E2D9] bg-white px-5 py-3 shadow-sm">
            <FiShoppingBag className="text-[#A58BD9]" size={19} />
            <span className="text-sm font-semibold text-[#34352F]">
              My Bag
            </span>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#DCCCFB] px-1 text-xs font-bold">
              {cartCount}
            </span>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-5 py-3 text-xs font-semibold transition duration-300 sm:text-sm ${
                  activeCategory === category
                    ? "bg-[#34352F] text-white shadow-lg shadow-black/10"
                    : "border border-[#E8E2D9] bg-white text-[#77766F] hover:border-[#B49AE8] hover:text-[#9275C6]"
                }`}
              >
                {category === "Wishlist" ? (
                  <span className="flex items-center gap-2">
                    <FiHeart />
                    Wishlist ({wishlist.length})
                  </span>
                ) : (
                  category
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex w-full items-center gap-3 rounded-full border border-[#E8E2D9] bg-white px-5 py-3.5 transition focus-within:border-[#B49AE8] lg:max-w-70">
            <FiSearch className="shrink-0 text-[#A58BD9]" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent text-sm text-[#34352F] outline-none placeholder:text-[#AAA69D]"
            />
          </div>
        </div>

        {/* Product Count */}
        <div className="mb-5 mt-8 flex items-center justify-between">
          <p className="text-sm text-[#85837C]">
            Showing{" "}
            <span className="font-bold text-[#34352F]">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>

          <p className="hidden text-xs text-[#A09B91] sm:block">
            Carefully selected, just for you
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              const cartItem = cart.find(
                (item) => item.id === product.id
              );
              const discount = Math.round(
                ((product.oldPrice - product.price) /
                  product.oldPrice) *
                  100
              );

              return (
                <div key={product.id} className="group min-w-0">

                  {/* Product Image */}
                  <div className="relative aspect-[4/4.8] overflow-hidden rounded-[22px] bg-[#EEE9E0] sm:rounded-[28px]">

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Badge */}
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[8px] font-bold tracking-wider text-[#625A6D] shadow-sm backdrop-blur-md sm:left-4 sm:top-4 sm:text-[10px]">
                      {product.badge}
                    </span>

                    {/* Discount */}
                    <span className="absolute bottom-3 left-3 rounded-full bg-[#DCEBE2] px-3 py-1.5 text-[9px] font-bold text-[#52735B] sm:bottom-4 sm:left-4 sm:text-[10px]">
                      {discount}% OFF
                    </span>

                    {/* Wishlist */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      aria-label={
                        isWishlisted
                          ? "Remove from wishlist"
                          : "Add to wishlist"
                      }
                      className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full shadow-md backdrop-blur-md transition duration-300 sm:right-4 sm:top-4 sm:h-11 sm:w-11 ${
                        isWishlisted
                          ? "bg-[#EBCBCB] text-[#B44F5A]"
                          : "bg-white/90 text-[#34352F] hover:bg-[#EBCBCB] hover:text-[#B44F5A]"
                      }`}
                    >
                      <FiHeart
                        size={18}
                        className={isWishlisted ? "fill-current" : ""}
                      />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="px-1 pt-4 sm:px-2 sm:pt-5">

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A58BD9] sm:text-xs">
                        {product.category}
                      </span>

                      <div className="flex shrink-0 items-center gap-1 text-[#C69A48]">
                        <FiStar size={12} className="fill-current" />
                        <span className="text-[10px] font-semibold text-[#77766F]">
                          {product.rating}
                        </span>
                        <span className="hidden text-[10px] text-[#AAA69D] sm:inline">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-2 line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-[#34352F] transition hover:text-[#A58BD9] sm:text-base">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-[#34352F] sm:text-base">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-xs text-[#AAA69D] line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={() => addToCart(product.id)}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#E9DFF8] px-3 py-3 text-[11px] font-bold text-[#6F5797] transition duration-300 hover:bg-[#34352F] hover:text-white sm:text-sm"
                    >
                      {cartItem ? (
                        <>
                          <FiCheck size={16} />
                          Added ({cartItem.quantity})
                        </>
                      ) : (
                        <>
                          <FiShoppingBag size={15} />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}

          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center rounded-[28px] border border-dashed border-[#DCD5E8] bg-white/60 px-5 py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E9DFF8] text-[#9275C6]">
              <FiSearch size={25} />
            </div>

            <h3 className="text-xl font-semibold text-[#34352F]">
              No products found
            </h3>

            <p className="mt-2 text-sm text-[#85837C]">
              Try another search or explore a different category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-5 rounded-full bg-[#34352F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A58BD9]"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* View All */}
        <div className="mt-14 flex justify-center">
          <a
            href="#shop"
            className="group flex items-center gap-3 rounded-full border border-[#DCD5E8] bg-white px-8 py-4 text-sm font-semibold text-[#34352F] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#B49AE8] hover:bg-[#E9DFF8]"
          >
            Discover All Products
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default TrendingProducts;
