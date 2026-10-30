import React from "react";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Fashion",
      subtitle: "Style that speaks you",
      count: "120+ Products",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&auto=format&fit=crop&q=85",
      color: "bg-[#F3DDD5]",
    },
    {
      id: 2,
      name: "Beauty",
      subtitle: "Feel naturally beautiful",
      count: "85+ Products",
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700&auto=format&fit=crop&q=85",
      color: "bg-[#E8DDF7]",
    },
    {
      id: 3,
      name: "Electronics",
      subtitle: "Smart living starts here",
      count: "90+ Products",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=85",
      color: "bg-[#DDE9F2]",
    },
    {
      id: 4,
      name: "Home Decor",
      subtitle: "Make space beautiful",
      count: "75+ Products",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&auto=format&fit=crop&q=85",
      color: "bg-[#E5EBDD]",
    },
    {
      id: 5,
      name: "Accessories",
      subtitle: "Details make the difference",
      count: "110+ Products",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700&auto=format&fit=crop&q=85",
      color: "bg-[#F4E8C9]",
    },
    {
      id: 6,
      name: "Lifestyle",
      subtitle: "Little things, big joy",
      count: "65+ Products",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&auto=format&fit=crop&q=85",
      color: "bg-[#DCEBE7]",
    },
  ];

  return (
    <section
      id="categories"
      className="bg-[#FAF8F3] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-350">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 inline-block rounded-full bg-[#E9DFF8] px-4 py-2 text-[10px] font-bold tracking-[0.18em] text-[#8569B6] sm:text-xs">
              EXPLORE OUR WORLD
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-[#34352F] sm:text-4xl lg:text-5xl">
              Shop by{" "}
              <span className="font-serif italic font-normal text-[#A58BD9]">
                Category.
              </span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-[#85837C] sm:text-base">
              From everyday essentials to little luxuries, find everything that
              makes your world more beautiful.
            </p>
          </div>

          <a
            href="#shop"
            className="group inline-flex w-fit items-center gap-2 border-b border-[#B49AE8] pb-2 text-sm font-semibold text-[#55534D] transition hover:text-[#A58BD9]"
          >
            Explore All Categories
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <a
              href="#shop"
              key={category.id}
              className={`group relative h-85 overflow-hidden rounded-[28px] ${category.color} sm:h-95 lg:h-100`}
            >
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent opacity-90 transition duration-500 group-hover:from-black/75" />

              {/* Top Product Count */}
              <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-[10px] font-medium tracking-wide text-white backdrop-blur-md sm:left-6 sm:top-6 sm:text-xs">
                {category.count}
              </div>

              {/* Arrow Button */}
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#34352F] transition duration-300 group-hover:rotate-45 group-hover:bg-[#DCCCFB] sm:right-6 sm:top-6 sm:h-12 sm:w-12">
                <FiArrowUpRight size={20} />
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                <p className="mb-2 text-xs font-medium tracking-wider text-white/80">
                  {category.subtitle}
                </p>

                <div className="flex items-end justify-between gap-3">
                  <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {category.name}
                  </h3>

                  <span className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#34352F]">
                    <FiArrowRight />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:mt-14">
          <p className="text-sm text-[#85837C]">
            Beautiful things are waiting to be discovered.
          </p>
          <span className="h-1 w-12 rounded-full bg-[#DCCCFB]" />
        </div>
      </div>
    </section>
  );
};

export default Categories;
