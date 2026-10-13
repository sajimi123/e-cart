
import React from "react";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingBag,
  FaShoppingCart,
  FaTrash,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import Swal from "sweetalert2";

import { deleteItem } from "../Redux/Slices/wishlistSlice";
import { addToCart } from "../Redux/Slices/cartSlice";

function Wishlist() {
  const wishlist = useSelector(
    (state) => state.wishlistReducer
  );

  const cart = useSelector(
    (state) => state.cartReducer
  );

  const dispatch = useDispatch();

  const formatPrice = (price) =>
    `₹${Number(price).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  // ADD TO CART
  const handleAddToCart = (item) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      Swal.fire({
        title: "Already in Cart!",
        text: "This product is already in your cart.",
        icon: "warning",
        confirmButtonColor: "#1d4ed8",
      });
      return;
    }

    dispatch(
      addToCart({
        ...item,
        quantity: 1,
      })
    );

    Swal.fire({
      title: "Added to Cart!",
      text: `${item.title} has been added to your cart.`,
      icon: "success",
      confirmButtonColor: "#1d4ed8",
      timer: 1800,
      showConfirmButton: false,
    });
  };

  // REMOVE FROM WISHLIST
  const handleRemove = (id) => {
    Swal.fire({
      title: "Remove from Wishlist?",
      text: "You can add this product again later.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove",
      cancelButtonText: "Keep it",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#64748b",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteItem(id));

        Swal.fire({
          title: "Removed!",
          text: "Product removed from your wishlist.",
          icon: "success",
          timer: 1300,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                <FaHeart className="text-blue-200" />
                Your Favorites
              </div>

              <h1 className="text-3xl font-extrabold sm:text-4xl">
                My Wishlist
              </h1>

              <p className="mt-3 max-w-md text-sm leading-6 text-blue-100 sm:text-base">
                Keep your favorite products in one place
                and move them to your cart whenever you're ready.
              </p>
            </div>

            <div className="flex h-24 w-24 shrink-0 items-center justify-center self-center rounded-3xl bg-white/10 sm:h-28 sm:w-28">
              <FaHeart className="text-5xl text-blue-200 sm:text-6xl" />
            </div>
          </div>
        </div>

        {wishlist.length > 0 ? (
          <>
            {/* SECTION HEADING */}
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  Saved Products
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {wishlist.length} product(s) saved for later
                </p>
              </div>

              <Link
                to="/product"
                className="inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-700 transition hover:text-blue-900"
              >
                Explore More
                <FaArrowRight size={12} />
              </Link>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wishlist.map((item) => {
                const isInCart = cart.some(
                  (cartItem) => cartItem.id === item.id
                );

                return (
                  <article
                    key={item.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* PRODUCT IMAGE */}
                    <div className="relative flex h-56 items-center justify-center overflow-hidden bg-slate-50 p-6">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                      />

                      <div className="absolute left-4 top-4 rounded-full bg-white p-2.5 text-blue-700 shadow-sm">
                        <FaHeart size={15} />
                      </div>

                      {isInCart && (
                        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
                          <FaCheckCircle />
                          In Cart
                        </div>
                      )}
                    </div>

                    {/* PRODUCT DETAILS */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="min-h-12 line-clamp-2 text-base font-bold leading-6 text-slate-800">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                        Saved to wishlist
                      </p>

                      <div className="mt-4 flex items-center justify-between gap-2">
                        <p className="text-xl font-extrabold text-blue-700">
                          {formatPrice(item.price)}
                        </p>

                        <button
                          type="button"
                          onClick={() => handleRemove(item.id)}
                          aria-label={`Remove ${item.title} from wishlist`}
                          title="Remove from wishlist"
                          className="rounded-xl border border-red-100 p-3 text-red-500 transition hover:bg-red-50 hover:text-red-700"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>

                      {/* ADD TO CART BUTTON */}
                      <div className="mt-5">
                        <Button
                          type="button"
                          onClick={() => handleAddToCart(item)}
                          disabled={isInCart}
                          className={`w-full rounded-xl py-1 font-semibold ${
                            isInCart
                              ? "bg-slate-200 text-slate-500"
                              : "bg-blue-700 hover:bg-blue-800"
                          }`}
                        >
                          <FaShoppingCart className="mr-2" />
                          {isInCart
                            ? "Already in Cart"
                            : "Add to Cart"}
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* BOTTOM BANNER */}
            <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:flex-row sm:items-center sm:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                  <FaShoppingBag size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-800">
                    Found something you love?
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Your favorite items are waiting for you.
                  </p>
                </div>
              </div>

              <Link to="/product">
                <Button className="rounded-xl bg-blue-700 px-5 hover:bg-blue-800">
                  Continue Shopping
                  <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </>
        ) : (
          /* EMPTY WISHLIST */
          <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-blue-50">
              <FaHeart className="text-5xl text-blue-300" />
            </div>

            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Your Wishlist is Empty
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
              Save the products you love and find them here
              whenever you want to shop.
            </p>

            <Link to="/product" className="mt-7">
              <Button className="rounded-xl bg-blue-700 px-7 py-1 font-semibold hover:bg-blue-800">
                <FaShoppingBag className="mr-2" />
                Add Products
              </Button>
            </Link>
          </div>
        )}

        {/* FOOTER */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-400">
          <FaHeart className="text-blue-500" />
          <span>Keep the things you love close.</span>
        </div>

      </div>
    </div>
  );
}

export default Wishlist;
