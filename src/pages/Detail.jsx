

import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import menuData from "../../public/data/menu.json";

const Detail = () => {
  const { slug } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Traditional");
  const [selectedSpice, setSelectedSpice] = useState("Medium");

  // Find the dish using the slug from the URL
  const dish = useMemo(() => {
    return menuData.data.find((item) => item.slug === slug);
  }, [slug]);

  // If the dish doesn't exist
  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffaf7]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Dish Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            We couldn't find the dish you are looking for.
          </p>

          <Link
            to="/menu"
            className="inline-block mt-6 bg-[#9e2f18] text-white px-6 py-3 rounded-lg"
          >
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf7] text-[#39251f]">

      {/* ================= HEADER ================= */}
      <header className="bg-white border-b border-[#eadfd9]">
        <div className="max-w-[1250px] mx-auto px-5">

          <div className="h-[70px] flex items-center justify-between">

            {/* Logo */}
            <Link
              to="/"
              className="text-[#8e2815] font-bold text-xl leading-tight"
            >
              Habesha
              <br />
              <span className="text-[#4d352d] text-sm">
                Restaurant
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-7 text-sm">

              <Link
                to="/"
                className="text-gray-600 hover:text-[#9e2f18]"
              >
                Home
              </Link>

              <Link
                to="/menu"
                className="bg-[#9e2f18] text-white px-5 py-3 rounded-md"
              >
                Featured Dishes
              </Link>

              <Link
                to="/orders"
                className="text-gray-600 hover:text-[#9e2f18]"
              >
                Order & Cart
              </Link>

              <Link
                to="/checkout"
                className="text-gray-600 hover:text-[#9e2f18]"
              >
                Delivery & Checkout
              </Link>

            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">

              <div className="hidden sm:flex items-center gap-2 bg-[#fff4d9] px-4 py-2 rounded-full">
                <span className="text-xs">ETB</span>
                <span className="font-bold text-[#9e2f18]">
                  1,450
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[#7d2b18] flex items-center justify-center text-white text-xs font-bold">
                  GS
                </div>

                <div className="hidden sm:block">
                  <p className="text-[10px] text-gray-400">
                    Welcome
                  </p>

                  <p className="text-xs font-semibold">
                    Guest
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </header>


      {/* ================= BREADCRUMB ================= */}
      <div className="max-w-[1250px] mx-auto px-5 pt-5">

        <div className="text-xs text-gray-500 flex gap-2">
          <Link to="/" className="hover:text-[#9e2f18]">
            Home
          </Link>

          <span>/</span>

          <Link to="/menu" className="hover:text-[#9e2f18]">
            Menu
          </Link>

          <span>/</span>

          <span className="text-gray-800">
            {dish.nameEn}
          </span>
        </div>

      </div>


      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-[1250px] mx-auto px-5 py-5">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-7">


          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}
          <section>

            {/* Main image */}
            <div className="relative bg-white rounded-xl overflow-hidden border border-[#eadfd9]">

              <img
                src={dish.image}
                alt={dish.nameEn}
                className="w-full h-[330px] object-cover"
              />

              {/* badges */}
              <div className="absolute top-4 left-4 flex gap-2">

                <span className="bg-[#f6b739] text-white text-[10px] font-bold px-3 py-1.5 rounded-full">
                  HOUSE SIGNATURE
                </span>

                {dish.vegetarian && (
                  <span className="bg-green-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-full">
                    VEGETARIAN
                  </span>
                )}

              </div>

              {/* Image count */}
              <div className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] px-3 py-1 rounded-full">
                ● Generated 4 photos
              </div>

            </div>


            {/* Thumbnail images */}
            <div className="grid grid-cols-3 gap-3 mt-3">

              <div className="h-[90px] rounded-lg overflow-hidden border-2 border-[#9e2f18]">
                <img
                  src={dish.image}
                  alt={dish.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-[90px] rounded-lg overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-[90px] rounded-lg overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>


            {/* Story */}
            <div className="mt-5 bg-[#fff0e9] rounded-xl p-5">

              <p className="text-[10px] uppercase font-bold text-[#9e2f18]">
                Heritage & lineage
              </p>

              <h2 className="text-xl font-bold mt-1">
                Royal {dish.nameEn}
              </h2>

              <p className="text-sm text-gray-600 leading-6 mt-2">
                This traditional Ethiopian dish is prepared with
                carefully selected ingredients and authentic spices.
                It brings together rich flavors, traditional
                cooking methods and the heritage of Ethiopian cuisine.
              </p>

            </div>


            {/* Information boxes */}
            <div className="grid grid-cols-3 gap-2 mt-3">

              <div className="bg-white border border-[#eadfd9] p-3 rounded-lg">
                <p className="text-[9px] text-gray-400 uppercase">
                  Preparation
                </p>
                <p className="font-semibold text-xs mt-1">
                  Slow Stewed
                </p>
              </div>

              <div className="bg-white border border-[#eadfd9] p-3 rounded-lg">
                <p className="text-[9px] text-gray-400 uppercase">
                  Origin
                </p>
                <p className="font-semibold text-xs mt-1">
                  Highland
                </p>
              </div>

              <div className="bg-white border border-[#eadfd9] p-3 rounded-lg">
                <p className="text-[9px] text-gray-400 uppercase">
                  Allergens
                </p>
                <p className="font-semibold text-xs mt-1">
                  Poultry, Dairy
                </p>
              </div>

            </div>

          </section>


          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}
          <section>

            {/* Title */}
            <div className="flex justify-between items-start">

              <div>

                <h1 className="text-3xl font-bold text-[#9e2f18]">
                  {dish.nameEn}
                </h1>

                <p className="text-xs text-gray-400 mt-1">
                  {dish.nameAm || "Traditional Ethiopian Dish"}
                </p>

              </div>

              <div className="text-right">

                <p className="text-xs text-gray-400">
                  ETB
                </p>

                <p className="text-2xl font-bold text-[#9e2f18]">
                  {dish.priceETB}
                </p>

              </div>

            </div>


            {/* Description */}
            <p className="text-sm text-gray-600 leading-6 mt-4">
              {dish.description ||
                "A delicious traditional Ethiopian dish prepared with authentic spices and carefully selected ingredients."}
            </p>


            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">

              <span className="bg-[#f5e9df] px-3 py-1.5 rounded-full text-xs">
                Serves 1–2
              </span>

              <span className="bg-[#f5e9df] px-3 py-1.5 rounded-full text-xs">
                Traditional
              </span>

              {dish.spiceLevel && (
                <span className="bg-[#f5e9df] px-3 py-1.5 rounded-full text-xs">
                  🌶 {dish.spiceLevel}
                </span>
              )}

            </div>


            {/* ================================================= */}
            {/* SECTION 1 */}
            {/* ================================================= */}

            <div className="mt-6">

              <div className="flex justify-between">

                <h3 className="font-bold text-sm">
                  1. Heat & Spice Level
                </h3>

                <span className="text-[10px] text-gray-400">
                  Required
                </span>

              </div>


              <div className="grid grid-cols-3 gap-2 mt-2">

                {/* Mild */}
                <button
                  onClick={() => setSelectedSpice("Mild")}
                  className={`text-left p-3 rounded-lg border ${
                    selectedSpice === "Mild"
                      ? "border-[#9e2f18] bg-[#fff0e9]"
                      : "border-[#eadfd9] bg-white"
                  }`}
                >
                  <p className="font-semibold text-xs">
                    Mild
                  </p>

                  <p className="text-[10px] text-gray-500 mt-1">
                    Light chili
                  </p>

                  <p className="text-[9px] text-gray-400 mt-2">
                    Included
                  </p>
                </button>


                {/* Traditional */}
                <button
                  onClick={() => setSelectedSpice("Medium")}
                  className={`text-left p-3 rounded-lg border ${
                    selectedSpice === "Medium"
                      ? "border-[#9e2f18] bg-[#fff0e9]"
                      : "border-[#eadfd9] bg-white"
                  }`}
                >
                  <p className="font-semibold text-xs">
                    Traditional
                  </p>

                  <p className="text-[10px] text-gray-500 mt-1">
                    Balanced heat
                  </p>

                  <p className="text-[9px] text-gray-400 mt-2">
                    Included
                  </p>
                </button>


                {/* Spicy */}
                <button
                  onClick={() => setSelectedSpice("Spicy")}
                  className={`text-left p-3 rounded-lg border ${
                    selectedSpice === "Spicy"
                      ? "border-[#9e2f18] bg-[#fff0e9]"
                      : "border-[#eadfd9] bg-white"
                  }`}
                >
                  <p className="font-semibold text-xs">
                    Fiery
                  </p>

                  <p className="text-[10px] text-gray-500 mt-1">
                    Extra hot
                  </p>

                  <p className="text-[9px] text-gray-400 mt-2">
                    + ETB 60
                  </p>
                </button>

              </div>

            </div>


            {/* ================================================= */}
            {/* SECTION 2 */}
            {/* ================================================= */}

            <div className="mt-5">

              <div className="flex justify-between">

                <h3 className="font-bold text-sm">
                  2. Preparation Style
                </h3>

                <span className="text-[10px] text-gray-400">
                  Choose 1
                </span>

              </div>


              <div className="grid grid-cols-2 gap-2 mt-2">

                <button
                  onClick={() => setSelectedSize("Traditional")}
                  className={`text-left p-3 rounded-lg border ${
                    selectedSize === "Traditional"
                      ? "border-[#9e2f18] bg-[#fff0e9]"
                      : "border-[#eadfd9] bg-white"
                  }`}
                >
                  <p className="font-semibold text-xs">
                    Traditional
                  </p>

                  <p className="text-[10px] text-gray-500 mt-1">
                    Slow cooked
                  </p>
                </button>


                <button
                  onClick={() => setSelectedSize("Large")}
                  className={`text-left p-3 rounded-lg border ${
                    selectedSize === "Large"
                      ? "border-[#9e2f18] bg-[#fff0e9]"
                      : "border-[#eadfd9] bg-white"
                  }`}
                >
                  <p className="font-semibold text-xs">
                    Large
                  </p>

                  <p className="text-[10px] text-gray-500 mt-1">
                    Larger portion
                  </p>
                </button>

              </div>

            </div>


            {/* ================================================= */}
            {/* SECTION 3 */}
            {/* ================================================= */}

            <div className="mt-5">

              <div className="flex justify-between">

                <h3 className="font-bold text-sm">
                  3. Complimentary Side Accents
                </h3>

                <span className="text-[10px] text-gray-400">
                  Optional
                </span>

              </div>


              <div className="grid grid-cols-2 gap-2 mt-2">

                <label className="flex gap-3 items-center bg-white border border-[#eadfd9] rounded-lg p-3 cursor-pointer">

                  <input
                    type="checkbox"
                    className="accent-[#9e2f18]"
                  />

                  <div>
                    <p className="text-xs font-semibold">
                      Fresh Ayib
                    </p>

                    <p className="text-[9px] text-gray-400">
                      Fresh cottage cheese
                    </p>
                  </div>

                </label>


                <label className="flex gap-3 items-center bg-white border border-[#eadfd9] rounded-lg p-3 cursor-pointer">

                  <input
                    type="checkbox"
                    className="accent-[#9e2f18]"
                  />

                  <div>
                    <p className="text-xs font-semibold">
                      Stewed Gomen
                    </p>

                    <p className="text-[9px] text-gray-400">
                      Greens
                    </p>
                  </div>

                </label>


                <label className="flex gap-3 items-center bg-white border border-[#eadfd9] rounded-lg p-3 cursor-pointer">

                  <input
                    type="checkbox"
                    className="accent-[#9e2f18]"
                  />

                  <div>
                    <p className="text-xs font-semibold">
                      House Awaze
                    </p>

                    <p className="text-[9px] text-gray-400">
                      Spicy sauce
                    </p>
                  </div>

                </label>


                <label className="flex gap-3 items-center bg-white border border-[#eadfd9] rounded-lg p-3 cursor-pointer">

                  <input
                    type="checkbox"
                    className="accent-[#9e2f18]"
                  />

                  <div>
                    <p className="text-xs font-semibold">
                      Extra Boiled Egg
                    </p>

                    <p className="text-[9px] text-gray-400">
                      One egg
                    </p>
                  </div>

                </label>

              </div>

            </div>


            {/* ================================================= */}
            {/* ADD TO CART */}
            {/* ================================================= */}

            <div className="mt-6 flex gap-3">

              {/* Quantity */}
              <div className="flex items-center border border-[#d9cbc4] rounded-lg bg-white">

                <button
                  onClick={decreaseQuantity}
                  className="w-9 h-10 text-lg"
                >
                  −
                </button>

                <span className="w-8 text-center text-sm">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  className="w-9 h-10 text-lg"
                >
                  +
                </button>

              </div>


              {/* Add button */}
              <button
                className="flex-1 bg-[#9e2f18] hover:bg-[#812512] text-white rounded-lg font-semibold text-sm transition"
              >
                🛒 Add to Order • ETB{" "}
                {dish.priceETB * quantity}
              </button>

            </div>


            {/* Bottom links */}
            <div className="flex justify-between text-[10px] text-gray-500 mt-3">

              <button className="hover:text-[#9e2f18]">
                ♡ Save to Favorites
              </button>

              <button className="hover:text-[#9e2f18]">
                ⚑ Order as Group Meal
              </button>

            </div>

          </section>

        </div>


        {/* ================================================= */}
        {/* PAIRS WELL WITH */}
        {/* ================================================= */}

        <section className="mt-12">

          <div className="flex justify-between items-end mb-4">

            <div>

              <p className="text-[10px] uppercase text-[#9e2f18] font-bold">
                Curated pairing
              </p>

              <h2 className="text-xl font-bold">
                Pairs Wonderfully With {dish.nameEn}
              </h2>

            </div>

            <p className="hidden md:block text-xs text-gray-500 max-w-[250px]">
              Harmonize rich, spicy flavors with cooling sweetness
              and refreshing sides.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="bg-white rounded-xl overflow-hidden border border-[#eadfd9]"
              >

                <img
                  src={dish.image}
                  alt={dish.nameEn}
                  className="w-full h-[150px] object-cover"
                />

                <div className="p-3">

                  <p className="text-[10px] text-[#9e2f18] font-bold">
                    Recommended
                  </p>

                  <h3 className="font-semibold text-sm mt-1">
                    {item === 1
                      ? "Signature Side"
                      : item === 2
                      ? "Fresh Salad"
                      : "Traditional Drink"}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
};

export default Detail;