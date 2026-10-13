
import React from "react";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaPlus,
  FaMinus,
  FaTrash,
  FaShoppingBag,
  FaArrowLeft,
  FaShieldAlt,
  FaTruck,
  FaShoppingCart,
} from "react-icons/fa";
import Swal from "sweetalert2";

import {
  decrementCart,
  emptyCart,
  incrementCart,
  removeItem,
} from "../Redux/Slices/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price) =>
    `₹${Number(price).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const handleCheckout = () => {
    Swal.fire({
      title: "Order Placed Successfully!",
      html: `
        <p>Thank you for shopping with us.</p>
        <p><strong>${totalItems}</strong> item(s)</p>
        <p>Total: <strong>${formatPrice(totalAmount)}</strong></p>
      `,
      icon: "success",
      confirmButtonText: "Continue Shopping",
      confirmButtonColor: "#2563eb",
    });
  };

  const handleRemoveItem = (id) => {
    Swal.fire({
      title: "Remove this product?",
      text: "This product will be removed from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Remove",
      cancelButtonText: "Keep it",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#64748b",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeItem(id));
      }
    });
  };

  const handleEmptyCart = () => {
    Swal.fire({
      title: "Clear your cart?",
      text: "All products will be removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, clear cart",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(emptyCart());
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Your Shopping Bag
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Shopping Cart
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Review your items before placing your order.
            </p>
          </div>

          <Link
            to="/product"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-600 sm:self-center"
          >
            <FaArrowLeft size={12} />
            Continue Shopping
          </Link>
        </div>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

            {/* Cart Items */}
            <section className="space-y-4 lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">
                  Cart Items
                  <span className="ml-2 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    {totalItems}
                  </span>
                </h2>

                <button
                  type="button"
                  onClick={handleEmptyCart}
                  className="text-sm font-medium text-red-500 transition hover:text-red-700"
                >
                  Clear cart
                </button>
              </div>

              {cart.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                    {/* Product Image */}
                    <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-slate-50 sm:h-32 sm:w-32">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-28 w-28 object-contain"
                      />
                    </div>

                    {/* Product Information */}
                    <div className="min-w-0 flex-1">
                      <h3 className="line-clamp-2 text-base font-bold sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        Price per item: {formatPrice(item.price)}
                      </p>

                      <p className="mt-2 text-lg font-bold text-blue-600">
                        {formatPrice(item.price * item.quantity)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="inline-flex items-center rounded-xl border border-slate-200">
                          <button
                            type="button"
                            aria-label={`Decrease ${item.title} quantity`}
                            disabled={item.quantity <= 1}
                            onClick={() => dispatch(decrementCart(item))}
                            className="rounded-l-xl p-3 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            <FaMinus size={11} />
                          </button>

                          <span className="min-w-10 text-center text-sm font-bold">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            aria-label={`Increase ${item.title} quantity`}
                            onClick={() => dispatch(incrementCart(item))}
                            className="rounded-r-xl p-3 transition hover:bg-slate-100"
                          >
                            <FaPlus size={11} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRemoveItem(item.id)}
                          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
                        >
                          <FaTrash size={12} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            {/* Order Summary */}
            <aside className="lg:sticky lg:top-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                <div className="bg-slate-900 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white/10 p-3">
                      <FaShoppingBag size={20} />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold">
                        Order Summary
                      </h2>
                      <p className="mt-1 text-sm text-slate-300">
                        {totalItems} item(s) in your cart
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 p-6">
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-slate-500">
                      Subtotal
                    </span>
                    <span className="font-semibold">
                      {formatPrice(totalAmount)}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-slate-500">
                      Shipping
                    </span>
                    <span className="font-semibold text-green-600">
                      Free
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-slate-500">
                      Tax
                    </span>
                    <span className="text-right text-xs text-slate-400">
                      Included in listed prices
                    </span>
                  </div>

                  <div className="border-t border-dashed border-slate-200 pt-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-semibold">
                        Total Amount
                      </span>
                      <span className="text-2xl font-extrabold text-blue-600">
                        {formatPrice(totalAmount)}
                      </span>
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={handleCheckout}
                    className="w-full rounded-xl bg-blue-600 py-1 text-base font-bold transition hover:bg-blue-700"
                  >
                    Proceed to Checkout
                  </Button>

                  <p className="text-center text-xs text-slate-400">
                    Checkout demo — no payment is processed.
                  </p>

                  <div className="space-y-4 border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-3">
                      <FaTruck className="shrink-0 text-blue-600" />
                      <div>
                        <p className="text-sm font-semibold">
                          Free Shipping
                        </p>
                        <p className="text-xs text-slate-500">
                          No extra delivery charge
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaShieldAlt className="shrink-0 text-blue-600" />
                      <div>
                        <p className="text-sm font-semibold">
                          Secure Shopping
                        </p>
                        <p className="text-xs text-slate-500">
                          Shop with confidence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        ) : (
          /* Empty Cart */
          <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">

            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <FaShoppingCart size={40} />
            </div>

            <h2 className="text-2xl font-bold sm:text-3xl">
              Your cart is waiting!
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              You haven't added anything to your cart yet.
              Explore our collection and find something you love.
            </p>

            <Link to="/product" className="mt-7">
              <Button className="rounded-xl bg-blue-600 px-7 py-1 font-semibold hover:bg-blue-700">
                <FaShoppingBag className="mr-2" />
                Add Products
              </Button>
            </Link>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-xs text-slate-400">
          <FaShieldAlt />
          <span>Thank you for shopping with us.</span>
        </div>

      </div>
    </div>
  );
}

export default Cart;