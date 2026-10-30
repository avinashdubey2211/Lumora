import React, { useState, useEffect } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Shop", href: "#shop" },
    { name: "Categories", href: "#categories" },
    { name: "Collections", href: "#collections" },
    { name: "Blog", href: "/blog" },
  ];

  // Sticky header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchValue.trim()) {
      window.location.hash = `shop`;
      console.log("Search Product:", searchValue);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    // <header
    //   className={`sticky top-0 z-50 w-full text-white transition-all duration-300 ${
    //     scrolled
    //       ? "bg-[#292033]/95 shadow-xl shadow-black/10 backdrop-blur-xl"
    //       : "bg-[#292033]"
    //   }`}
    // >
    <header
       className={`sticky top-0 z-50 w-full text-white transition-all duration-300 ${
        scrolled
          ? "bg-[#292033]/95 shadow-xl shadow-black/10 backdrop-blur-xl"
          : "bg-[#292033]"
      }`}
    >
      {/* Announcement Bar */}
      <div className="border-b border-white/10 bg-linear-to-r from-[#DCCCFB] via-[#EADDF8] to-[#D8E8DF] px-4 py-2.5 text-center text-[#342A3D]">
        <p className="flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.12em] sm:text-xs">
          <span className="hidden sm:inline">✦</span>
          COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹999
          <FiArrowRight />
        </p>
      </div>

      {/* Main Header */}
      <div
        className={`border-b border-white/10 transition-all duration-300 ${
          scrolled ? "py-0" : ""
        }`}
      >
        <div className="mx-auto flex max-w-350 items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10">
          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl text-[#E7D6B2] transition hover:text-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo */}
          <Link to="/" className="group shrink-0" onClick={closeMenu}>
            <h1 className="text-2xl font-bold tracking-[0.16em] text-[#F0DDB7] transition duration-300 group-hover:text-white sm:text-3xl">
              LUMORA<span className="text-[#C9A7F5]">.</span>
            </h1>

            <p className="mt-0.5 hidden text-[8px] tracking-[0.35em] text-white/55 sm:block">
              THE ART OF EVERYDAY
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 xl:gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative py-2 text-[12px] font-medium tracking-wide text-white/80 transition duration-300 hover:text-[#F0DDB7]"
              >
                {link.name}

                <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[#D9C08D] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden max-w-57.5 flex-1 items-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 transition-all duration-300 focus-within:border-[#D9C08D]/70 focus-within:bg-white/10 md:flex"
          >
            <FiSearch className="mr-2 shrink-0 text-[#D9C08D]" />

            <input
              type="text"
              placeholder="Search products..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full bg-transparent text-xs text-white outline-none placeholder:text-white/40"
            />
          </form>

          {/* Header Actions */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Mobile Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-xl text-white/80 transition hover:text-[#F0DDB7] md:hidden"
              aria-label="Toggle search"
            >
              {searchOpen ? <FiX /> : <FiSearch />}
            </button>

            {/* Account */}
            <Link
              to="/login"
              className="hidden text-xl text-white/80 transition hover:text-[#F0DDB7] sm:block"
              aria-label="My account"
            >
              <FiUser />
            </Link>

            {/* Wishlist */}
            <a
              href="#wishlist"
              className="hidden text-xl text-white/80 transition hover:text-[#F0DDB7] sm:block"
              aria-label="Wishlist"
            >
              <FiHeart />
            </a>

            {/* Cart */}
            <a
              href="#cart"
              className="relative text-xl text-white/80 transition hover:text-[#F0DDB7]"
              aria-label="Shopping cart"
            >
              <FiShoppingBag />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#D9C08D] text-[9px] font-bold text-[#292033]">
                0
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="border-t border-white/10 bg-[#292033] px-4 py-4 md:hidden">
            <form
              onSubmit={handleSearch}
              className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 focus-within:border-[#D9C08D]"
            >
              <FiSearch className="text-[#D9C08D]" />

              <input
                type="text"
                placeholder="Search products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#292033] px-6 py-6 lg:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between text-sm font-medium text-white/80 transition hover:text-[#F0DDB7]"
                >
                  {link.name}
                  <FiArrowRight className="text-[#D9C08D]" />
                </a>
              ))}

              <div className="flex items-center gap-7 border-t border-white/10 pt-5 sm:hidden">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <FiUser /> Account
                </Link>

                <a
                  href="#wishlist"
                  onClick={closeMenu}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
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
