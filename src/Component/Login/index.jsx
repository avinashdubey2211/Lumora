import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  FiArrowRight,
  FiArrowLeft,
  FiShield,
  FiSmartphone,
  FiCheckCircle,
  FiLock,
  FiStar,
} from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const [otpSent, setOtpSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Demo OTP
  const DEMO_OTP = "123456";

  // Mobile Number Formik
  const phoneFormik = useFormik({
    initialValues: {
      phone: "",
    },

    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number")
        .required("Mobile number is required"),
    }),

    onSubmit: (values) => {
      console.log("Mobile Number:", values.phone);

      // Demo OTP flow
      setSuccessMessage("Your demo OTP is 123456");
      setOtpSent(true);
    },
  });

  // OTP Formik
  const otpFormik = useFormik({
    initialValues: {
      otp: "",
    },

    validationSchema: Yup.object({
      otp: Yup.string()
        .matches(/^\d{6}$/, "OTP must contain 6 digits")
        .oneOf([DEMO_OTP], "Incorrect OTP. Please enter 123456.")
        .required("Please enter OTP"),
    }),

    onSubmit: (values) => {
      console.log("OTP:", values.otp);

      // Demo login success
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userPhone", phoneFormik.values.phone);

      navigate("/", { replace: true });
    },
  });

  const changeNumber = () => {
    setOtpSent(false);
    setSuccessMessage("");
    otpFormik.resetForm();
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F6F1] px-4 py-8 sm:px-6 lg:px-10">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-purple-200/40 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-emerald-100/60 blur-[100px]" />

      <div className="relative mx-auto grid w-full max-w-6xl overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-[0_25px_80px_rgba(52,53,47,0.12)] lg:grid-cols-2">
        {/* LEFT IMAGE SECTION */}
        <div className="relative hidden min-h-170 overflow-hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&auto=format&fit=crop&q=85"
            alt="LUMORA Fashion Collection"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#201D28]/90 via-[#201D28]/20 to-[#201D28]/10" />

          {/* Brand */}
          <div className="absolute left-10 top-10">
            <h1 className="text-3xl font-bold tracking-[0.18em] text-white">
              LUMORA<span className="text-[#D7B9FF]">.</span>
            </h1>
            <p className="mt-2 text-xs tracking-[0.25em] text-white/70">
              STYLE YOUR EVERYDAY
            </p>
          </div>

          {/* Main Content */}
          <div className="absolute bottom-12 left-10 right-10">
            <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs text-white backdrop-blur-md">
              <FiStar className="text-[#F4D18A]" />
              DISCOVER YOUR STYLE
            </div>

            <h2 className="max-w-lg text-5xl font-semibold leading-tight text-white">
              Find Your Own Kind of{" "}
              <span className="font-serif italic text-[#D7B9FF]">
                Beautiful.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
              Discover thoughtfully selected collections, timeless essentials
              and little things that make every day special.
            </p>

            <div className="mt-9 flex items-center gap-8 border-t border-white/20 pt-7">
              <div>
                <h3 className="text-2xl font-bold text-white">10K+</h3>
                <p className="mt-1 text-xs text-white/60">Happy Shoppers</p>
              </div>

              <div className="h-10 w-px bg-white/20" />

              <div>
                <h3 className="text-2xl font-bold text-white">500+</h3>
                <p className="mt-1 text-xs text-white/60">Products</p>
              </div>

              <div className="h-10 w-px bg-white/20" />

              <div>
                <h3 className="text-2xl font-bold text-white">4.9/5</h3>
                <p className="mt-1 text-xs text-white/60">Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT LOGIN SECTION */}
        <div className="flex min-h-170 flex-col justify-center px-6 py-12 sm:px-12 lg:px-14">
          {/* Mobile Brand */}
          <div className="mb-10 text-center lg:hidden">
            <h1 className="text-3xl font-bold tracking-[0.18em] text-[#34352F]">
              LUMORA<span className="text-[#A58BD9]">.</span>
            </h1>
            <p className="mt-2 text-xs tracking-[0.2em] text-gray-400">
              STYLE YOUR EVERYDAY
            </p>
          </div>

          {/* Login Heading */}
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#E9DFF8] to-[#DDEBE2] text-[#8065AD] shadow-sm">
              {otpSent ? <FiShield size={25} /> : <FiSmartphone size={25} />}
            </div>

            <p className="text-xs font-bold tracking-[0.2em] text-[#A58BD9]">
              {otpSent ? "SECURE VERIFICATION" : "WELCOME TO LUMORA"}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#34352F] sm:text-4xl">
              {otpSent ? (
                <>
                  Verify your{" "}
                  <span className="font-serif italic text-[#A58BD9]">
                    number.
                  </span>
                </>
              ) : (
                <>
                  Welcome{" "}
                  <span className="font-serif italic text-[#A58BD9]">
                    Back.
                  </span>
                </>
              )}
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#85837C]">
              {otpSent
                ? `Enter the 6-digit OTP for +91 ${phoneFormik.values.phone}`
                : "Enter your mobile number to continue your shopping journey with us."}
            </p>
          </div>

          {/* MOBILE NUMBER FORM */}
          {!otpSent ? (
            <form onSubmit={phoneFormik.handleSubmit} className="mt-9">
              <label className="text-sm font-semibold text-[#34352F]">
                Mobile Number
              </label>

              <div
                className={`mt-3 flex items-center rounded-2xl border bg-[#FAF9F6] px-4 transition-all ${
                  phoneFormik.touched.phone && phoneFormik.errors.phone
                    ? "border-red-400"
                    : "border-[#EAE6DD] focus-within:border-[#A58BD9] focus-within:ring-4 focus-within:ring-[#A58BD9]/10"
                }`}
              >
                <span className="border-r border-[#EAE6DD] py-4 pr-4 text-sm font-semibold text-[#34352F]">
                  +91
                </span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter 10-digit number"
                  maxLength={10}
                  autoComplete="tel-national"
                  value={phoneFormik.values.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    phoneFormik.setFieldValue("phone", value);
                  }}
                  onBlur={phoneFormik.handleBlur}
                  className="w-full bg-transparent p-4 text-sm text-[#34352F] outline-none placeholder:text-gray-400"
                />

                {phoneFormik.values.phone.length === 10 &&
                  !phoneFormik.errors.phone && (
                    <FiCheckCircle className="text-green-600" />
                  )}
              </div>

              {phoneFormik.touched.phone && phoneFormik.errors.phone && (
                <p className="mt-2 text-xs text-red-500">
                  {phoneFormik.errors.phone}
                </p>
              )}

              <button
                type="submit"
                className="group mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#34352F] py-4 text-sm font-semibold text-white shadow-lg shadow-[#34352F]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#A58BD9] hover:shadow-[#A58BD9]/30"
              >
                Send OTP
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          ) : (
            /* OTP FORM */
            <form onSubmit={otpFormik.handleSubmit} className="mt-9">
              <label className="text-sm font-semibold text-[#34352F]">
                Enter 6-digit OTP
              </label>

              <input
                type="text"
                name="otp"
                placeholder="000000"
                maxLength={6}
                inputMode="numeric"
                autoComplete="one-time-code"
                value={otpFormik.values.otp}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  otpFormik.setFieldValue("otp", value);
                }}
                onBlur={otpFormik.handleBlur}
                className="mt-3 w-full rounded-2xl border border-[#EAE6DD] bg-[#FAF9F6] px-5 py-5 text-center text-2xl font-bold tracking-[0.6em] text-[#34352F] outline-none transition focus:border-[#A58BD9] focus:ring-4 focus:ring-[#A58BD9]/10"
              />

              {otpFormik.touched.otp && otpFormik.errors.otp && (
                <p className="mt-2 text-xs text-red-500">
                  {otpFormik.errors.otp}
                </p>
              )}

              {/* Demo OTP Info */}
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#E9DFF8] bg-[#F7F2FC] p-4">
                <FiShield className="mt-0.5 shrink-0 text-[#9777C5]" />

                <div>
                  <p className="text-xs font-bold text-[#6F5794]">
                    Demo OTP: 123456
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#85837C]">
                    This is a demo login. No real SMS will be sent.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#34352F] py-4 text-sm font-semibold text-white shadow-lg shadow-[#34352F]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#A58BD9]"
              >
                Verify & Continue
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={changeNumber}
                className="mt-5 flex w-full items-center justify-center gap-2 text-sm font-medium text-[#85837C] transition hover:text-[#A58BD9]"
              >
                <FiArrowLeft />
                Change Mobile Number
              </button>
            </form>
          )}

          {/* Footer */}
          <div className="mt-10 border-t border-[#F0EDE6] pt-6">
            <div className="flex items-center justify-center gap-2 text-xs text-[#85837C]">
              <FiLock className="text-[#8DAD91]" />
              Your information is protected
            </div>

            <p className="mt-5 text-center text-xs leading-6 text-[#A3A097]">
              By continuing, you agree to our{" "}
              <a
                href="/terms"
                className="font-semibold text-[#77716F] hover:text-[#A58BD9]"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="font-semibold text-[#77716F] hover:text-[#A58BD9]"
              >
                Privacy Policy
              </a>
              .
            </p>

            <p className="mt-5 text-center text-xs text-[#B0ADA5]">
              © 2026 LUMORA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

