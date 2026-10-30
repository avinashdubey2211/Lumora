import React from "react";
import { FiArrowRight, FiPlay, FiStar } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FAF8F3] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#E6DDF8] opacity-60 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-[#D9EEE1] opacity-50 blur-3xl" />

      <div className="relative mx-auto grid max-w-350 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div className="z-10 text-center lg:text-left">
          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5D9F7] bg-white/80 px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E9DDFB] text-[#8C70C4]">
              <FiStar size={13} />
            </span>
            <span className="text-xs font-semibold tracking-wide text-[#70647E] sm:text-sm">
              YOUR STYLE, YOUR STORY
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-[#34352F] sm:text-5xl md:text-6xl lg:text-[68px]">
            Find Your
            <br />
            Own Kind of
            <span className="relative mt-1 block font-serif italic font-normal text-[#A58BD9]">
              Beautiful.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#77766F] sm:text-base lg:mx-0">
            Discover thoughtfully selected pieces that make everyday living feel
            extraordinary. Explore fashion, beauty, lifestyle and more.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#shop"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#34352F] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#34352F]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#A58BD9] sm:w-auto"
            >
              Explore Collection
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#categories"
              className="flex w-full items-center justify-center gap-3 rounded-full border border-[#DDD8CE] bg-white/70 px-8 py-4 text-sm font-semibold text-[#34352F] transition hover:border-[#B49AE8] hover:bg-white sm:w-auto"
            >
              <FiPlay size={15} />
              Discover More
            </a>
          </div>

          {/* Bottom Stats */}
          <div className="mt-12 flex items-center justify-center gap-8 border-t border-[#E8E3DA] pt-7 lg:justify-start">
            <div>
              <h3 className="text-2xl font-bold text-[#34352F]">10k+</h3>
              <p className="mt-1 text-xs text-[#88877F]">Happy Customers</p>
            </div>

            <div className="h-10 w-px bg-[#E5E0D7]" />

            <div>
              <h3 className="text-2xl font-bold text-[#34352F]">500+</h3>
              <p className="mt-1 text-xs text-[#88877F]">Unique Products</p>
            </div>

            <div className="h-10 w-px bg-[#E5E0D7]" />

            <div>
              <h3 className="text-2xl font-bold text-[#34352F]">4.9/5</h3>
              <p className="mt-1 text-xs text-[#88877F]">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-137.5">
          {/* Image Background */}
          <div className="absolute -right-3 -top-3 h-full w-full rounded-[45%_45%_25%_25%] bg-[#E5D9F7] sm:-right-5 sm:-top-5" />

          {/* Main Image */}
          <div className="relative aspect-4/5 overflow-hidden rounded-[45%_45%_25%_25%] bg-[#EDE8DF] shadow-2xl shadow-[#A58BD9]/10">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&auto=format&fit=crop&q=85"
              alt="Discover your own beautiful style"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* Floating Product Card */}
          <div className="absolute -bottom-5 left-0 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 p-3 shadow-xl backdrop-blur-md sm:-left-8 sm:bottom-8 sm:p-4">
            <div className="h-12 w-12 overflow-hidden rounded-xl bg-[#F1E8F9] sm:h-14 sm:w-14">
              <img
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&auto=format&fit=crop&q=80"
                alt="Featured handbag"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[10px] text-gray-500 sm:text-xs">
                CURATED FOR YOU
              </p>
              <h4 className="mt-1 text-xs font-bold text-[#34352F] sm:text-sm">
                Everyday Essentials
              </h4>
              <p className="mt-1 text-[10px] font-medium text-[#A58BD9] sm:text-xs">
                Explore Collection
              </p>
            </div>
          </div>

          {/* Floating Circle */}
          <div className="absolute -right-2 top-8 flex h-20 w-20 rotate-12 flex-col items-center justify-center rounded-full bg-[#D6EBDD] text-center shadow-lg sm:-right-8 sm:h-24 sm:w-24">
            <span className="text-xs font-bold text-[#456A52]">NEW</span>
            <span className="text-[10px] font-medium text-[#456A52]">
              COLLECTION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
