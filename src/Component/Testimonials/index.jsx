import React from "react";
import {
  FiStar,
  FiArrowRight,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";
const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sophia Williams",
      role: "Verified Customer",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
      rating: 5,
      review:
        "Absolutely loved my shopping experience! The product quality is amazing and everything feels so thoughtfully selected. Definitely coming back for more.",
      product: "Fashion Collection",
      color: "bg-[#E9DFF8]",
    },
    {
      id: 2,
      name: "Olivia Martin",
      role: "Verified Customer",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80",
      rating: 5,
      review:
        "The packaging, quality and overall experience were beautiful. My order arrived on time and looked even better than the pictures!",
      product: "Beauty Essentials",
      color: "bg-[#DDEBE2]",
    },
    {
      id: 3,
      name: "Emma Anderson",
      role: "Verified Customer",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&auto=format&fit=crop&q=80",
      rating: 5,
      review:
        "Finally found a store that combines style and quality so perfectly. The collection is unique and the shopping experience is super smooth.",
      product: "Lifestyle Collection",
      color: "bg-[#F5E8D7]",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-[#FAF8F3] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-350">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E9DFF8] px-4 py-2 text-[10px] font-bold tracking-[0.18em] text-[#8569B6] sm:text-xs">
            <FiStar />
            LOVE FROM OUR COMMUNITY
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#34352F] sm:text-4xl lg:text-5xl">
            Stories That Make Us{" "}
            <span className="font-serif italic font-normal text-[#A58BD9]">
              Smile.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#85837C] sm:text-base">
            Real experiences, happy customers and little moments that make
            shopping with LUMORA special.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-3 rounded-2xl border border-[#EAE5DB] bg-white px-8 py-5 shadow-sm sm:flex-row sm:gap-5">
          <div className="text-center sm:text-left">
            <h3 className="text-3xl font-bold text-[#34352F]">4.9/5</h3>
            <p className="mt-1 text-xs text-[#85837C]">Customer Satisfaction</p>
          </div>

          <div className="hidden h-12 w-px bg-[#EAE5DB] sm:block" />

          <div className="text-center">
            <div className="flex justify-center gap-1 text-[#D6A84F]">
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar key={star} className="fill-current" />
              ))}
            </div>
            <p className="mt-2 text-xs text-[#85837C]">
              Loved by our community
            </p>
          </div>
        </div>

        {/* Review Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`group relative flex flex-col rounded-[28px] ${review.color} p-6 transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#34352F]/5 sm:p-8`}
            >
              {/* Quote Icon */}
              <div className="absolute right-7 top-7 text-[#34352F]/10">
                <FiMessageSquare size={42} />{" "}
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-[#C7953E]">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <FiStar key={index} size={16} className="fill-current" />
                ))}
              </div>

              {/* Review */}
              <p className="mt-7 flex-1 text-sm leading-8 text-[#57564F] sm:text-base">
                "{review.review}"
              </p>

              {/* Product Tag */}
              <div className="mt-7 w-fit rounded-full border border-white/70 bg-white/50 px-4 py-2 text-[10px] font-semibold tracking-wide text-[#70647E]">
                {review.product}
              </div>

              {/* Customer */}
              <div className="mt-7 flex items-center gap-3 border-t border-[#34352F]/10 pt-6">
                <img
                  src={review.image}
                  alt={review.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full border-2 border-white object-cover"
                />

                <div className="flex-1">
                  <h4 className="text-sm font-bold text-[#34352F]">
                    {review.name}
                  </h4>

                  <div className="mt-1 flex items-center gap-1.5 text-[10px] text-[#77766F]">
                    <FiCheckCircle className="text-[#6B9B75]" />
                    {review.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-[#85837C]">
            Your story could be our next favourite.
          </p>

          <a
            href="#shop"
            className="group flex items-center gap-3 rounded-full bg-[#34352F] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#A58BD9]"
          >
            Experience LUMORA
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
