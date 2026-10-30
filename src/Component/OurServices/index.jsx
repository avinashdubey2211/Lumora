import React from "react";
import {
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiHeadphones,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Free Shipping",
    description:
      "Enjoy free delivery on orders above ₹999. Your favourites, delivered to your doorstep.",
    icon: <FiTruck />,
    bg: "bg-[#E8E1F5]",
    iconBg: "bg-[#D8CBEF]",
    iconColor: "text-[#8069AD]",
    number: "01",
  },
  {
    id: 2,
    title: "Secure Payment",
    description:
      "Shop with confidence. Your payment information stays safe and protected.",
    icon: <FiShield />,
    bg: "bg-[#E1F0E8]",
    iconBg: "bg-[#CBE5D5]",
    iconColor: "text-[#54876A]",
    number: "02",
  },
  {
    id: 3,
    title: "Easy Returns",
    description:
      "Changed your mind? Enjoy a simple return experience as per our return policy.",
    icon: <FiRefreshCw />,
    bg: "bg-[#FBE9DF]",
    iconBg: "bg-[#F5D5C5]",
    iconColor: "text-[#C17D5D]",
    number: "03",
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Need assistance? Our support team is here to help whenever you need us.",
    icon: <FiHeadphones />,
    bg: "bg-[#F8F0D9]",
    iconBg: "bg-[#F0E3B8]",
    iconColor: "text-[#A58A3E]",
    number: "04",
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#FAF8F4] px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-[#E9E3F7] px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#7864A5]">
            The LUMORA Promise
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#292727] sm:text-4xl lg:text-5xl">
            Shopping Made{" "}
            <span className="font-serif italic font-normal text-[#A18BCB]">
              Better
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#77716D] sm:text-base">
            More than just shopping. We make every step of your experience
            simple, safe and enjoyable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-[28px] ${service.bg} p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(50,40,60,0.10)]`}
            >
              {/* Background Number */}
              <span className="absolute -right-2 -top-5 select-none text-8xl font-bold text-black/4">
                {service.number}
              </span>

              {/* Icon */}
              <div
                className={`relative flex h-16 w-16 items-center justify-center rounded-2xl ${service.iconBg} ${service.iconColor} text-3xl transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative mt-8">
                <h3 className="text-xl font-bold text-[#302E2C]">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-21 text-sm leading-7 text-[#77716D]">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[2px] text-[#77716D]">
                    LUMORA CARE
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-[#51465F] transition-all duration-300 group-hover:bg-[#302B38] group-hover:text-white">
                    <FiArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 rounded-2xl border border-[#EEEAE4] bg-white/70 px-6 py-6 text-center">
          <p className="text-sm text-[#77716D] sm:text-base">
            Your comfort is our priority.{" "}
            <span className="font-semibold text-[#927BBE]">
              Every order, every time.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
