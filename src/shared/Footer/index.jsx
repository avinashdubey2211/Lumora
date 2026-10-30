import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiHeart,
} from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    alert("Thank you for subscribing to LUMORA!");
    setEmail("");
  };

  const exploreLinks = [
    { name: "Home", link: "/" },
    { name: "Shop All", link: "/shop" },
    { name: "Categories", link: "/categories" },
    { name: "Collections", link: "/collections" },
    { name: "About Us", link: "/about" },
  ];

  const supportLinks = [
    { name: "My Account", link: "/account" },
    { name: "My Orders", link: "/orders" },
    { name: "FAQs", link: "/faq" },
    { name: "Shipping Policy", link: "/shipping" },
    { name: "Return Policy", link: "/returns" },
    { name: "Contact Us", link: "/contact" },
  ];

  const socialLinks = [
    { icon: <FiInstagram />, link: "#instagram", label: "Instagram" },
    { icon: <FiFacebook />, link: "#facebook", label: "Facebook" },
    { icon: <FiTwitter />, link: "#twitter", label: "Twitter" },
    { icon: <FiYoutube />, link: "#youtube", label: "YouTube" },
  ];

  return (
    <footer className="overflow-hidden bg-[#252329] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10 px-4 py-16 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#C4B2E8]">
              Join The Lumora Community
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Get More Of
              <br />
              <span className="font-serif italic font-normal text-[#C4B2E8]">
                What You Love.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
              Subscribe to receive new arrivals, exclusive offers, style
              inspiration and the latest updates from LUMORA.
            </p>
          </div>

          <div>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 rounded-2xl bg-white/10 p-2 sm:flex-row"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <FiMail className="shrink-0 text-[#C4B2E8]" size={19} />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/40"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#C4B2E8] px-6 py-3 text-sm font-bold text-[#302B38] transition hover:bg-white"
              >
                Subscribe
                <FiSend />
              </button>
            </form>

            <p className="mt-3 text-xs text-white/35">
              By subscribing, you agree to receive emails from LUMORA.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 py-16 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Information */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-black tracking-[5px]">
                LUMORA<span className="text-[#C4B2E8]">.</span>
              </h2>
            </Link>

            <p className="mt-5 text-sm leading-7 text-white/50">
              Discover a world of fashion, beauty, technology and everyday
              essentials. Find something special with LUMORA.
            </p>

            <div className="mt-7 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition hover:border-[#C4B2E8] hover:bg-[#C4B2E8] hover:text-[#302B38]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[2px]">
              Explore
            </h3>

            <ul className="space-y-4">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-sm text-white/55 transition hover:pl-2 hover:text-[#C4B2E8]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[2px]">
              Customer Care
            </h3>

            <ul className="space-y-4">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-sm text-white/55 transition hover:pl-2 hover:text-[#C4B2E8]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog and News */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[2px]">
              Blog & News
            </h3>

            <div className="space-y-5">
              <Link
                to="/blog"
                className="group block rounded-xl border border-white/10 p-4 transition hover:border-[#C4B2E8]/50 hover:bg-white/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[2px] text-[#C4B2E8]">
                    Explore Stories
                  </span>
                  <FiArrowUpRight className="text-white/60 transition group-hover:text-[#C4B2E8]" />
                </div>

                <h4 className="mt-3 text-base font-semibold">Our Blog</h4>

                <p className="mt-2 text-xs leading-6 text-white/45">
                  Fashion, beauty, lifestyle and inspiration.
                </p>
              </Link>

              <Link
                to="/news"
                className="group block rounded-xl border border-white/10 p-4 transition hover:border-[#C4B2E8]/50 hover:bg-white/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[2px] text-[#C4B2E8]">
                    Latest Updates
                  </span>
                  <FiArrowUpRight className="text-white/60 transition group-hover:text-[#C4B2E8]" />
                </div>

                <h4 className="mt-3 text-base font-semibold">Latest News</h4>

                <p className="mt-2 text-xs leading-6 text-white/45">
                  New arrivals, announcements and updates.
                </p>
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[2px]">
              Get In Touch
            </h3>

            <div className="space-y-5 text-sm text-white/55">
              <p className="flex items-start gap-3">
                <FiMail className="mt-1 shrink-0 text-[#C4B2E8]" />
                support@lumora.com
              </p>

              <p className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-[#C4B2E8]" />
                +91 98765 43210
              </p>

              <p className="flex items-center gap-3">
                <FiMapPin className="shrink-0 text-[#C4B2E8]" />
                India
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#C4B2E8] transition hover:text-white"
            >
              Contact Our Team
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 px-4 py-6 sm:px-6 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} LUMORA. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-xs text-white/45">
            <Link
              to="/privacy-policy"
              className="transition hover:text-[#C4B2E8]"
            >
              Privacy Policy
            </Link>

            <Link to="/terms" className="transition hover:text-[#C4B2E8]">
              Terms & Conditions
            </Link>

            <Link
              to="/refund-policy"
              className="transition hover:text-[#C4B2E8]"
            >
              Refund Policy
            </Link>
          </div>

          <p className="flex items-center gap-1 text-xs text-white/40">
            Made with <FiHeart className="text-[#C4B2E8]" /> by LUMORA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
