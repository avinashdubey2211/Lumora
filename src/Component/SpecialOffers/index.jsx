import React from "react";
// import {
//   FiArrowRight,
//   FiArrowUpRight,
//   FiClock,
//   FiGift,
//   FiSparkles,
//   FiTag,
// } from "react-icons/fi";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiClock,
  FiGift,
  FiStar,
  FiTag,
} from "react-icons/fi";

const SpecialOffers = () => {
  const collections = [
    {
      id: 1,
      label: "THE EVERYDAY EDIT",
      title: "Little Things,\nBig Style.",
      description: "Everyday essentials made a little more special.",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&auto=format&fit=crop&q=85",
      bg: "bg-[#E9DFF8]",
      text: "text-[#655184]",
      link: "#shop",
    },
    {
      id: 2,
      label: "HOME & LIVING",
      title: "A Space That\nFeels Like You.",
      description: "Beautiful details for your beautiful home.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=85",
      bg: "bg-[#DDEBE2]",
      text: "text-[#52735B]",
      link: "#shop",
    },
  ];

  return (
    <section
      id="collections"
      className="overflow-hidden bg-[#FAF8F3] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-350">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F5E8D7] px-4 py-2 text-[10px] font-bold tracking-[0.18em] text-[#A47B4F] sm:text-xs">
            {/* <FiSparkles /> */}
            SOMETHING SPECIAL FOR YOU
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#34352F] sm:text-4xl lg:text-5xl">
            Collections &{" "}
            <span className="font-serif italic font-normal text-[#A58BD9]">
              Offers.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#85837C] sm:text-base">
            Explore exclusive collections and little surprises curated to make
            your shopping experience special.
          </p>
        </div>

        {/* Main Offer Banner */}
        <div className="relative grid overflow-hidden rounded-[30px] bg-[#E9DFF8] lg:min-h-120 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-[10px] font-bold tracking-wider text-[#8066AD] sm:text-xs">
              <FiGift />
              SEASONAL SPECIAL
            </div>

            <h3 className="mt-7 text-4xl font-semibold leading-tight tracking-tight text-[#34352F] sm:text-5xl lg:text-6xl">
              The Art of
              <span className="block font-serif italic font-normal text-[#9578C9]">
                Gifting.
              </span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#716982] sm:text-base">
              Thoughtful finds, beautiful details and unforgettable little
              moments. Discover gifts that make every occasion feel special.
            </p>

            {/* Offer */}
            <div className="mt-7 flex items-center gap-4">
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-white shadow-sm">
                <span className="text-2xl font-bold text-[#9578C9]">20%</span>
                <span className="text-[9px] font-bold tracking-wider text-[#8A8296]">
                  OFF
                </span>
              </div>

              <div>
                <p className="text-sm font-bold text-[#34352F]">
                  Special Collection Offer
                </p>
                <p className="mt-1 text-xs text-[#716982]">
                  On selected gifting essentials
                </p>
              </div>
            </div>

            <a
              href="#shop"
              className="group mt-8 flex w-fit items-center gap-3 rounded-full bg-[#34352F] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-[#9578C9]"
            >
              Explore Collection
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-[10px] text-[#827794]">
              *Demo offer for selected products.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative min-h-75 overflow-hidden sm:min-h-105 lg:min-h-full">
            <img
              src="https://images.openai.com/static-rsc-4/r_bHOjYd1zJGGeHDrpPu3m4oQuUEJ-8vVWPDhez3UvFKmHJsGTMxo3L22rPaRlE_tRPGiAel3qo3E3OD7GQflNXUcjMIt8WcAvOuLxV0YEykh4OdG_0yWk6hJqmnjKzEQpIsKyQkEjccJPos8zQL4k_BHUwDCzRYmM-AUbip5N0?purpose=inline"
              alt="LUMORA special collection"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />

            <div className="absolute bottom-6 right-6 rounded-2xl border border-white/50 bg-white/85 px-5 py-4 shadow-xl backdrop-blur-md">
              <p className="text-[10px] font-bold tracking-widest text-[#9578C9]">
                CURATED WITH LOVE
              </p>
              <p className="mt-1 font-serif text-xl italic text-[#34352F]">
                Made for moments.
              </p>
            </div>
          </div>
        </div>

        {/* Limited Time Offer */}
        <div className="relative mt-7 overflow-hidden rounded-[28px] bg-[#34352F] px-6 py-8 text-white sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full bg-[#DCCCFB]/20 blur-3xl" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#DCCCFB]">
                <FiClock size={25} />
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#DCCCFB]">
                  LIMITED TIME OFFER
                </span>

                <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                  A little treat, just for you.
                </h3>

                <p className="mt-2 text-sm text-white/60">
                  Enjoy special prices on selected favourites.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4">
                <p className="text-3xl font-bold text-[#DCCCFB]">UP TO 30%</p>
                <p className="mt-1 text-[10px] tracking-widest text-white/60">
                  SELECTED ITEMS
                </p>
              </div>

              <a
                href="#shop"
                className="flex items-center gap-3 rounded-full bg-[#DCCCFB] px-7 py-4 text-sm font-bold text-[#34352F] transition hover:bg-white"
              >
                Shop Offers
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        {/* Exclusive Collections */}
        <div className="mb-8 mt-16 flex flex-col gap-3 sm:mt-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#A58BD9]">
              MADE TO BE DISCOVERED
            </span>

            <h3 className="mt-3 text-2xl font-semibold text-[#34352F] sm:text-3xl">
              Explore Our Exclusive Edits
            </h3>
          </div>

          <a
            href="#shop"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-[#77766F] transition hover:text-[#A58BD9]"
          >
            View Everything
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Collection Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {collections.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className={`group relative flex min-h-80 items-end overflow-hidden rounded-[28px] ${item.bg} sm:min-h-95`}
            >
              <img
                src={item.image}
                alt={item.title.replace("\n", " ")}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

              <div className="relative z-10 w-full p-7 text-white sm:p-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-2 text-[9px] font-bold tracking-widest backdrop-blur-md">
                  <FiTag />
                  {item.label}
                </span>

                <h4 className="mt-5 whitespace-pre-line text-3xl font-semibold leading-tight sm:text-4xl">
                  {item.title}
                </h4>

                <p className="mt-3 max-w-sm text-xs leading-6 text-white/80 sm:text-sm">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-3 text-sm font-semibold">
                  Explore Edit
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 transition duration-300 group-hover:bg-white group-hover:text-[#34352F]">
                    <FiArrowUpRight />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
