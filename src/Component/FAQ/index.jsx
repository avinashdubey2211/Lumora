import React, { useState } from "react";
import { FiPlus, FiMinus, FiMessageCircle } from "react-icons/fi";

const faqData = [
  {
    question: "How can I place an order?",
    answer:
      "Browse our collections, select your favourite product, choose the required options, and click Add to Cart. Once you are ready, proceed to checkout to complete your order.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We aim to support multiple payment options, including UPI, debit cards, credit cards, and other available payment methods at checkout.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery timelines depend on your location and product availability. You will receive an estimated delivery date during checkout.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Return and exchange eligibility depends on the product and store policy. Please check the return policy before placing your order.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is dispatched, you can use the tracking details shared with your registered contact information to follow its delivery status.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our support team through the Contact Us section. Our team will be happy to help with your questions.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF8F4] px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-[#E9E3F7] px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#7864A5]">
            Need Help?
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#292727] sm:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="font-serif italic font-normal text-[#A18BCB]">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#77716D] sm:text-base">
            Everything you need to know about shopping with LUMORA. Can't find
            your answer? We're here to help.
          </p>
        </div>

        {/* FAQ Layout */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Card */}
          <div className="relative overflow-hidden rounded-[30px] bg-[#EAE4F5] p-8 sm:p-10">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/30" />
            <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-[#D8CBEF]/50" />

            <div className="relative z-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#927BBE] shadow-sm">
                <FiMessageCircle size={25} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#8C78B2]">
                We're Here For You
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-[#302B38] sm:text-4xl">
                Have more
                <br />
                questions?
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#70687A]">
                Our friendly support team is always ready to help you with your
                shopping experience.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#302B38] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#51465F] hover:shadow-lg"
              >
                Contact Us
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#D9CDED] bg-white shadow-[0_10px_35px_rgba(70,50,100,0.07)]"
                      : "border-[#EEEAE4] bg-white/70 hover:border-[#D9CDED]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                  >
                    <span
                      className={`text-sm font-semibold sm:text-base ${
                        isOpen ? "text-[#927BBE]" : "text-[#302E2C]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-[#EAE4F5] text-[#927BBE]"
                          : "bg-[#F5F2ED] text-[#77716D]"
                      }`}
                    >
                      {isOpen ? <FiMinus size={17} /> : <FiPlus size={17} />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 text-sm leading-7 text-[#77716D] sm:px-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
