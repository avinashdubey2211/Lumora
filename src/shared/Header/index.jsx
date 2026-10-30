import React, { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiArrowRight,
} from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Shop", href: "#shop" },
    { name: "Categories", href: "#categories" },
    { name: "Collections", href: "#collections" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className="w-full bg-[#FAF8F3] text-[#34352F]">
      {/* Announcement Bar */}
      <div className="bg-[#DCCCFB] px-4 py-2 text-center text-xs sm:text-sm font-medium">
        <p className="flex items-center justify-center gap-2">
          Enjoy free shipping on orders above ₹999
          <FiArrowRight />
        </p>
      </div>

      {/* Main Header */}
      <div className="border-b border-[#EAE6DE]">
        <div className="mx-auto flex max-w-350 items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo */}
          <a href="#home" className="shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-[0.15em]">
              LUMORA<span className="text-[#B49AE8]">.</span>
            </h1>
            <p className="hidden text-[9px] tracking-[0.3em] text-gray-500 sm:block">
              DISCOVER YOUR STYLE
            </p>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors duration-300 hover:text-[#A58BD9]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden max-w-55 flex-1 items-center rounded-full border border-[#E7E2D9] bg-white px-4 py-2.5 md:flex lg:max-w-62.5">
            <FiSearch className="mr-2 shrink-0 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent text-xs outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Mobile Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-xl transition hover:text-[#A58BD9] md:hidden"
              aria-label="Toggle search"
            >
              <FiSearch />
            </button>

            <button
              className="hidden text-xl transition hover:text-[#A58BD9] sm:block"
              aria-label="My account"
            >
              <FiUser />
            </button>

            <button
              className="hidden text-xl transition hover:text-[#A58BD9] sm:block"
              aria-label="Wishlist"
            >
              <FiHeart />
            </button>

            <button
              className="relative text-xl transition hover:text-[#A58BD9]"
              aria-label="Shopping cart"
            >
              <FiShoppingBag />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#DCCCFB] text-[10px] font-bold">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="border-t border-[#EAE6DE] px-4 py-3 md:hidden">
            <div className="flex items-center gap-3 rounded-full border border-[#E7E2D9] bg-white px-4 py-3">
              <FiSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="border-t border-[#EAE6DE] bg-white px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium transition hover:text-[#A58BD9]"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex items-center gap-6 border-t border-gray-100 pt-5 sm:hidden">
                <a href="#account" className="flex items-center gap-2 text-sm">
                  <FiUser /> Account
                </a>
                <a href="#wishlist" className="flex items-center gap-2 text-sm">
                  <FiHeart /> Wishlist
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
