import React from 'react'
import { Button, ButtonGroup } from "flowbite-react";
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
function Home() {
  return (
    <div>
      
     <div className="min-h-screen bg-gray-50">

  {/* Hero */}
  <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-2 lg:py-20">

    {/* Content */}
    <div className="text-center md:text-left">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
        Welcome to E-Cart
      </p>

      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
        Shop Everything
        <span className="block text-blue-600">
          You Love
        </span>
      </h1>

      <p className="mx-auto mt-5 max-w-lg text-gray-600 md:mx-0">
        Discover amazing products at great prices.
        Shop easily and enjoy a smooth online shopping experience.
      </p>

      <div className="mt-7">
       <Link
                to="/product"
                className="inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-700 transition hover:text-blue-900"
              >
                Shop Now
                <FaArrowRight size={12} />
              </Link>
      </div>
    </div>

    {/* Image */}
    <div className="overflow-hidden rounded-2xl">
      <img
        src="https://www.logisticsoutlook.com/cloud/2024/11/25/EkartPoweringbrandsandretailerswithcutting-edgelogisticsand8XgrowthinthreeyearsredefiningIndiassupplychainexcellence.jpeg"
        alt="E-Cart shopping"
        className="h-64 w-full object-cover sm:h-80 md:h-96"
      />
    </div>

  </section>
  </div>
  </div>
  )
}

export default Home
