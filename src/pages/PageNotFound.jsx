
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaShoppingBag,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";

function PageNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">

      <div className="w-full max-w-3xl text-center">

        {/* ILLUSTRATION */}
        <div className="relative mx-auto mb-8 flex h-56 w-56 items-center justify-center rounded-full bg-blue-100 sm:h-64 sm:w-64">

          <div className="absolute inset-4 rounded-full border-2 border-dashed border-blue-300"></div>

          <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-blue-700 shadow-xl shadow-blue-200 sm:h-36 sm:w-36">
            <FaShoppingBag className="text-6xl text-white sm:text-7xl" />
          </div>

          <div className="absolute right-3 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-700 shadow-md">
            <FaSearch size={20} />
          </div>

          <div className="absolute bottom-5 left-3 h-5 w-5 rounded-full bg-blue-500"></div>

          <div className="absolute right-7 bottom-9 h-3 w-3 rounded-full bg-blue-400"></div>

        </div>

        {/* 404 NUMBER */}
        <h1 className="text-8xl font-black tracking-tight text-blue-700 sm:text-9xl">
          404
        </h1>

        {/* HEADING */}
        <h2 className="mt-3 text-2xl font-bold text-slate-800 sm:text-4xl">
          Oops! Page Not Found
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
          The page you're looking for doesn't exist or may
          have been moved. Don't worry, let's help you find
          your way back!
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-800 sm:w-auto"
          >
            <FaHome size={17} />
            Go Home
          </Link>

          <Link
            to="/product"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-blue-700 bg-white px-7 py-3.5 font-semibold text-blue-700 transition duration-300 hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
          >
            Explore Products
            <FaArrowRight size={14} />
          </Link>

        </div>

        {/* FOOTER */}
        <div className="mt-12 border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-400">
            Lost your way? Let's get you back to shopping.
          </p>
        </div>

      </div>
    </div>
  );
}

export default PageNotFound;
