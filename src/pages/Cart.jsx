

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    cartCount,
    cartSubtotal,
    deliveryFee,
    serviceFee,
    cartTotal,
  } = useCart();

  return (
    <section className="min-h-screen bg-[#fffaf7] px-4 py-6 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* =========================================
            FREE DELIVERY BANNER
        ========================================== */}

        <div className="mb-4 rounded-md border border-[#eaded9] bg-[#fff1e8] px-4 py-2 text-[9px] text-[#76564d]">
          🚚{" "}
          <span className="font-bold text-[#563b34]">
            Free Highland Delivery:
          </span>{" "}
          Complimentary delivery across Bole, Kazanchis, and Saris on orders
          over ETB 1,200.
        </div>


        {/* =========================================
            HEADER + PROGRESS
        ========================================== */}

        <div className="mb-6 flex flex-col gap-4 border-b border-[#eaded9] pb-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-wider text-[#8f2116]">
              Communal Feasting
            </p>

            <h1 className="font-serif text-3xl font-extrabold text-[#8f2116]">
              Your Gursha Basket
            </h1>

            <p className="mt-1 text-[10px] text-[#806c65]">
              {cartCount} handcrafted selection
              {cartCount !== 1 ? "s" : ""}
            </p>
          </div>


          {/* Progress */}

          <div className="flex items-center gap-2 text-[9px]">

            <div className="flex items-center gap-1 rounded bg-[#a52b1c] px-3 py-2 font-bold text-white">
              🛒 Review Basket
            </div>

            <div className="text-[#c4aaa2]">
              →
            </div>

            <div className="rounded bg-white px-3 py-2 text-[#806c65]">
              ② Delivery Details
            </div>

            <div className="text-[#c4aaa2]">
              →
            </div>

            <div className="rounded bg-white px-3 py-2 text-[#806c65]">
              ③ Confirmation
            </div>

          </div>

        </div>


        {/* =========================================
            EMPTY CART
        ========================================== */}

        {cartItems.length === 0 ? (

          <div className="rounded-xl border border-[#eaded9] bg-white px-6 py-20 text-center">

            <div className="mb-5 text-5xl">
              🧺
            </div>

            <h2 className="font-serif text-2xl font-bold text-[#563b34]">
              Your Gursha Basket is Empty
            </h2>

            <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-[#806c65]">
              Choose some dishes from our menu and they will appear here.
            </p>

            <Link
              to="/menu"
              className="mt-6 inline-block rounded-md bg-[#a52b1c] px-6 py-3 text-xs font-bold text-white hover:bg-[#861f14]"
            >
              Explore the Menu
            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_320px]">


            {/* =========================================
                LEFT SIDE
            ========================================== */}

            <div>

              <div className="mb-3 flex items-center justify-between">

                <h2 className="font-serif text-lg font-bold text-[#563b34]">
                  Clay Pot Stews & Provisions
                </h2>

                <button
                  onClick={clearCart}
                  className="text-[9px] text-[#806c65] hover:text-[#a52b1c] hover:underline"
                >
                  Clear table
                </button>

              </div>


              {/* CART ITEMS */}

              <div className="space-y-2">

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="flex gap-3 rounded-lg border border-[#eaded9] bg-white p-3 shadow-[0_2px_7px_rgba(80,40,20,0.05)]"
                  >

                    {/* IMAGE */}

                    <img
                      src={item.image}
                      alt={item.nameEn}
                      className="h-20 w-20 shrink-0 rounded-md object-cover sm:h-24 sm:w-24"
                    />


                    {/* INFORMATION */}

                    <div className="min-w-0 flex-1">

                      <div className="flex justify-between gap-2">

                        <div>

                          <div className="flex flex-wrap items-center gap-1">

                            <span className="rounded bg-[#fff0e8] px-1.5 py-0.5 text-[7px] font-bold uppercase text-[#8f2116]">
                              Heritage Feast
                            </span>

                            {item.isSpecial && (
                              <span className="rounded bg-[#fff4dd] px-1.5 py-0.5 text-[7px] font-bold text-[#8c5b18]">
                                Chef's Choice
                              </span>
                            )}

                          </div>

                          <h3 className="mt-1 text-xs font-bold text-[#3e2923] sm:text-sm">
                            {item.nameEn}
                          </h3>

                          {item.nameAm && (
                            <p className="text-[9px] text-[#9d6d5e]">
                              {item.nameAm}
                            </p>
                          )}

                          <p className="mt-1 line-clamp-2 text-[8px] leading-3 text-[#806c65]">
                            {item.description}
                          </p>

                        </div>


                        {/* REMOVE */}

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="h-5 w-5 shrink-0 rounded text-sm text-[#a7958e] hover:bg-[#fff0eb] hover:text-[#a52b1c]"
                          title="Remove item"
                        >
                          ×
                        </button>

                      </div>


                      {/* BOTTOM */}

                      <div className="mt-2 flex items-end justify-between">

                        <div>

                          <p className="text-[10px] font-bold text-[#a52b1c]">
                            ETB {item.priceETB}
                          </p>

                          <p className="text-[7px] text-[#a08b84]">
                            each
                          </p>

                        </div>


                        {/* QUANTITY */}

                        <div className="flex items-center overflow-hidden rounded border border-[#e3d5d0]">

                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="px-2 py-1 text-xs font-bold text-[#8f2116] hover:bg-[#fff0eb]"
                          >
                            −
                          </button>

                          <span className="border-x border-[#e3d5d0] px-2 py-1 text-[9px] font-bold text-[#563b34]">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="px-2 py-1 text-xs font-bold text-[#8f2116] hover:bg-[#fff0eb]"
                          >
                            +
                          </button>

                        </div>


                        {/* ITEM TOTAL */}

                        <p className="text-xs font-extrabold text-[#a52b1c]">
                          ETB {item.priceETB * item.quantity}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>


              {/* =========================================
                  DINING PREFERENCE
              ========================================== */}

              <div className="mt-5">

                <h3 className="mb-2 text-[10px] font-bold text-[#563b34]">
                  🌿 Gursha Hospitality & Dining Etiquette
                </h3>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

                  <div className="rounded-md border border-[#eaded9] bg-white p-3">

                    <p className="text-[9px] font-bold text-[#563b34]">
                      🏠 Traditional Handwash Basin
                    </p>

                    <p className="mt-1 text-[8px] leading-3 text-[#806c65]">
                      Served with warm towels and hand-rinsing presentation.
                    </p>

                  </div>

                  <div className="rounded-md border border-[#eaded9] bg-white p-3">

                    <p className="text-[9px] font-bold text-[#563b34]">
                      🍽 No Cutlery Needed
                    </p>

                    <p className="mt-1 text-[8px] leading-3 text-[#806c65]">
                      We embrace the communal joy of eating with fresh Injera.
                    </p>

                  </div>

                </div>

              </div>


              {/* =========================================
                  KITCHEN NOTE
              ========================================== */}

              <div className="mt-3 rounded-md border border-[#eaded9] bg-white p-3">

                <div className="flex items-start gap-2">

                  <span className="text-sm">
                    📝
                  </span>

                  <div>

                    <p className="text-[9px] font-bold text-[#563b34]">
                      Kitchen Chef Note / Spice Preparation Preference
                    </p>

                    <p className="mt-1 text-[8px] text-[#806c65]">
                      e.g. Please prepare extra Tibs in heat-retaining gold
                      separately from the Doro Wat pot.
                    </p>

                  </div>

                </div>

              </div>


              {/* =========================================
                  GURSHA INFORMATION
              ========================================== */}

              <div className="mt-3 rounded-md bg-[#fff0d8] p-4">

                <div className="flex gap-3">

                  <span className="text-lg">
                    💛
                  </span>

                  <div>

                    <h3 className="text-[10px] font-bold text-[#563b34]">
                      The Meaning of Gursha (ጉርሻ)
                    </h3>

                    <p className="mt-1 text-[8px] leading-4 text-[#76564d]">
                      In Habesha dining culture, placing a morsel directly
                      into a companion's mouth is a gesture of friendship,
                      trust, and shared celebration.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* =========================================
                RIGHT SIDE - BASKET LEDGER
            ========================================== */}

            <div>

              <div className="sticky top-5 rounded-lg border border-[#eaded9] bg-white p-4 shadow-[0_3px_12px_rgba(80,40,20,0.08)]">

                <div className="flex items-center justify-between">

                  <h2 className="font-serif text-base font-bold text-[#563b34]">
                    Basket Ledger
                  </h2>

                  <span className="rounded-full bg-[#fff0e8] px-2 py-1 text-[7px] font-bold text-[#a52b1c]">
                    {cartCount} items
                  </span>

                </div>


                {/* ITEM SUBTOTAL */}

                <div className="mt-4 space-y-3 border-b border-[#eaded9] pb-4">

                  <div className="flex justify-between text-[9px]">

                    <span className="text-[#806c65]">
                      Items Subtotal ({cartCount} items)
                    </span>

                    <span className="font-bold text-[#563b34]">
                      ETB {cartSubtotal}
                    </span>

                  </div>


                  <div className="flex justify-between text-[9px]">

                    <span className="text-[#806c65]">
                      Highland Delivery
                    </span>

                    <span className="font-bold text-[#563b34]">
                      ETB {deliveryFee}
                    </span>

                  </div>


                  <div className="flex justify-between text-[9px]">

                    <span className="text-[#806c65]">
                      Service / Traditional Tax
                    </span>

                    <span className="font-bold text-[#563b34]">
                      ETB {serviceFee}
                    </span>

                  </div>


                  <div className="flex justify-between text-[9px]">

                    <span className="font-semibold text-[#47713d]">
                      ✓ Delivery Fee (30 Zones)
                    </span>

                    <span className="font-bold text-[#47713d]">
                      Included
                    </span>

                  </div>

                </div>


                {/* PROMO */}

                <div className="mt-3 rounded-md bg-[#fff5ee] p-2">

                  <div className="flex items-center justify-between">

                    <span className="text-[8px] font-bold text-[#563b34]">
                      🎟 GURSHA20 APPLIED
                    </span>

                    <span className="text-[8px] font-bold text-[#a52b1c]">
                      − ETB 0
                    </span>

                  </div>

                </div>


                {/* TOTAL */}

                <div className="mt-4 rounded-md bg-[#fff0e8] p-3">

                  <div className="flex items-end justify-between">

                    <div>

                      <p className="text-[7px] uppercase text-[#806c65]">
                        Grand Total
                      </p>

                      <p className="mt-1 font-serif text-xl font-extrabold text-[#a52b1c]">
                        ETB {cartTotal}
                      </p>

                    </div>

                    <span className="text-[7px] text-[#806c65]">
                      Taxes included
                    </span>

                  </div>

                </div>


                {/* CHECKOUT */}

                <button
                  onClick={() => {
                    console.log("Proceeding to checkout...");
                  }}
                  className="mt-4 w-full rounded-md bg-[#a52b1c] px-4 py-3 text-[9px] font-bold text-white transition hover:bg-[#861f14] active:scale-[0.99]"
                >
                  Proceed to Checkout →
                </button>


                <p className="mt-3 text-center text-[7px] leading-3 text-[#806c65]">
                  🛡 Your order information is securely handled.
                </p>


                {/* CONTINUE SHOPPING */}

                <Link
                  to="/menu"
                  className="mt-4 block text-center text-[8px] font-semibold text-[#8f2116] hover:underline"
                >
                  ← Explore more dishes from our menu
                </Link>

              </div>


              {/* RIGHT SIDE INFO CARD */}

              <div className="mt-3 rounded-md bg-[#fff0e8] p-3">

                <p className="text-[8px] font-bold text-[#563b34]">
                  🍽 Adding Fresh Habesha Flavor?
                </p>

                <p className="mt-1 text-[7px] leading-3 text-[#806c65]">
                  Complement your feast with our 100% pure teff Injera,
                  Ethiopian coffee beans, or traditional honey wine.
                </p>

                <Link
                  to="/menu"
                  className="mt-2 inline-block text-[7px] font-bold text-[#a52b1c]"
                >
                  ADD TO BASKET →
                </Link>

              </div>

            </div>

          </div>

        )}

      </div>

    </section>
  );
};

export default Cart;