import { useEffect, useMemo, useState } from "react";

const Menu = () => {
  // =========================
  // STATE
  // =========================

  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Dishes");

  // =========================
  // IMAGE MAPPING
  // =========================
  // Your JSON doesn't currently contain image URLs.
  // These images are used according to the menu item's slug.
  //
  

  const imageMap = {
    "doro-wat":
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",

    "siga-wat":
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",

    "beg-alicha-wat":
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",

    "shiro-tegamino":
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",

    "shiro-bozena":
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",

    "siga-derek-tibs":
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",

    "awaze-lamb-tibs":
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",

    "quanta-firfir":
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",

    "chornake-fish-tibs":
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",

    "prime-beef-kitfo":
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",

    "gored-gored":
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",

    "kitfo-dulet":
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",

    "full-vegan-beyaynetu":
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",

    "misir-wat":
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",

    "kik-alicha-wat":
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",

    "gomen-collards":
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",

    "fresh-timatim-fitfit":
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",

    "house-tej-carafe":
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",

    "jebena-spiced-coffee":
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",

    "spiced-habesha-chai":
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
  };

  // =========================
  // FETCH MENU DATA
  // =========================

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/data/menu.json");

        if (!response.ok) {
          throw new Error(
            `Failed to load menu data. HTTP status: ${response.status}`
          );
        }

        const json = await response.json();

        // Your JSON is:
        // {
        //   "data": [...]
        // }
        //
        // This also supports a JSON file containing
        // just [...] directly.

        const data = Array.isArray(json) ? json : json.data;

        if (!Array.isArray(data)) {
          throw new Error("Invalid menu.json format.");
        }

        setMenuItems(data);
      } catch (err) {
        console.error("Error fetching menu items:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // =========================
  // CREATE CATEGORIES
  // =========================

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(menuItems.map((item) => item.category)),
    ];

    return ["All Dishes", ...uniqueCategories];
  }, [menuItems]);

  // =========================
  // FILTER MENU ITEMS
  // =========================

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All Dishes" ||
        item.category === activeCategory;

      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        search === "" ||
        item.nameEn?.toLowerCase().includes(search) ||
        item.nameAm?.toLowerCase().includes(search) ||
        item.description?.toLowerCase().includes(search) ||
        item.category?.toLowerCase().includes(search) ||
        item.slug?.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [menuItems, activeCategory, searchTerm]);

  // =========================
  // HELPER FUNCTIONS
  // =========================

  const getCategoryShortName = (category) => {
    if (category === "Traditional Stews & Wat") {
      return "Traditional Stews & Wat";
    }

    if (category === "Tibs & Grills") {
      return "Tibs & Grills";
    }

    if (category === "Raw & Cured Delicacies / Kitfo") {
      return "Raw & Cured Delicacies / Kitfo";
    }

    if (category === "Fasting & Vegan / Tsom") {
      return "Fasting & Vegan / Tsom";
    }

    if (category === "Beverages & Tej") {
      return "Beverages & Tej";
    }

    return category;
  };

  const getSpiceLabel = (spiceLevel = "") => {
    const spice = spiceLevel.toLowerCase();

    if (
      spice.includes("fiery") ||
      spice.includes("extra hot") ||
      spice.includes("hot")
    ) {
      return "🔥 Hot";
    }

    if (spice.includes("medium")) {
      return "🌶 Medium";
    }

    if (spice.includes("mild")) {
      return "🌿 Mild";
    }

    if (spice.includes("sweet")) {
      return "🍯 Sweet";
    }

    if (spice.includes("coffee") || spice.includes("aromatic")) {
      return "☕ Aromatic";
    }

    return spiceLevel;
  };

  // =========================
  // LOADING STATE
  // =========================

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fffaf7] px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#f1ddd5] border-t-[#a52b1c]" />

          <p className="text-sm text-[#705f59]">
            Preparing our culinary heritage...
          </p>
        </div>
      </div>
    );
  }

  // =========================
  // ERROR STATE
  // =========================

  if (error) {
    return (
      <div className="min-h-screen bg-[#fffaf7] px-6 py-20">
        <div className="mx-auto max-w-xl rounded-xl border border-red-200 bg-white p-8 text-center shadow-sm">
          <div className="mb-4 text-4xl">⚠️</div>

          <h2 className="mb-2 text-xl font-bold text-[#8f2116]">
            Unable to load the menu
          </h2>

          <p className="text-sm text-gray-600">{error}</p>

          <p className="mt-4 text-xs text-gray-500">
            Make sure your file is located at:
          </p>

          <code className="mt-2 block rounded bg-gray-100 p-2 text-xs">
            public/data/menu.json
          </code>
        </div>
      </div>
    );
  }

  // =========================
  // MAIN MENU PAGE
  // =========================

  return (
    <section className="min-h-screen bg-[#fffaf7] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* =========================================
            PAGE HEADER
        ========================================== */}

        <div className="mb-7">
          <h1 className="font-serif text-3xl font-extrabold tracking-tight text-[#8f2116] sm:text-4xl">
            Our Complete Culinary Heritage
          </h1>

          <p className="mt-1 max-w-3xl text-xs leading-5 text-[#6e5d57] sm:text-sm">
            Every dish is prepared daily from scratch using sun-dried spices,
            stone-ground legume flours, and clarified herbal butter sourced
            directly from highland farm cooperatives.
          </p>
        </div>

        {/* =========================================
            SEARCH BAR + FEATURES
        ========================================== */}

        <div className="mb-5 flex flex-col gap-3 rounded-lg border border-[#eaded9] bg-white p-3 shadow-[0_2px_10px_rgba(100,50,30,0.08)] lg:flex-row lg:items-center">

          {/* Search */}

          <div className="relative flex-1">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9b837b]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search dishes by name (e.g. Kitfo, Shiro, Tibs, Doro Wat)..."
              className="w-full rounded-md border border-[#eee0db] bg-[#fffaf8] py-3 pl-11 pr-4 text-xs text-[#4d3c36] outline-none transition placeholder:text-[#a7958e] focus:border-[#b53a29] focus:ring-2 focus:ring-[#b53a29]/10"
            />
          </div>

          {/* Feature badges */}

          <div className="flex flex-wrap items-center gap-2">

            <span className="rounded-full bg-[#fff0e8] px-3 py-1.5 text-[10px] font-medium text-[#80543e]">
              🌾 100% Pure Teff Injera
            </span>

            <span className="rounded-full bg-[#f0f8e9] px-3 py-1.5 text-[10px] font-medium text-[#4f743e]">
              🌿 Fasting / Tsom Friendly
            </span>

            <span className="rounded-full bg-[#fff0ef] px-3 py-1.5 text-[10px] font-medium text-[#814138]">
              🌶 Berbere Spiced
            </span>

          </div>
        </div>

        {/* =========================================
            CATEGORY FILTERS
        ========================================== */}

        <div className="mb-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">

          {categories.map((category) => {
            const isActive = activeCategory === category;

            const count =
              category === "All Dishes"
                ? menuItems.length
                : menuItems.filter(
                    (item) => item.category === category
                  ).length;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-[10px] font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#a52b1c] text-white shadow-sm"
                    : "bg-[#f8e8e2] text-[#694e47] hover:bg-[#efd6ce]"
                }`}
              >
                {category}{" "}
                <span className="ml-1 opacity-70">({count})</span>
              </button>
            );
          })}

        </div>

        {/* =========================================
            RESULT INFORMATION
        ========================================== */}

        <div className="mb-4 flex items-center justify-between">

          <p className="text-xs text-[#806c65]">
            Showing{" "}
            <span className="font-bold text-[#8f2116]">
              {filteredItems.length}
            </span>{" "}
            {filteredItems.length === 1 ? "dish" : "dishes"}
          </p>

          {(searchTerm || activeCategory !== "All Dishes") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Dishes");
              }}
              className="text-xs font-semibold text-[#a52b1c] hover:underline"
            >
              Clear filters
            </button>
          )}

        </div>

        {/* =========================================
            MENU GRID
        ========================================== */}

        {filteredItems.length > 0 ? (

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {filteredItems.map((item) => {

              const image =
                imageMap[item.slug] ||
                "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80";

              return (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-lg border border-[#eaded9] bg-white shadow-[0_2px_8px_rgba(80,40,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(80,40,20,0.12)]"
                >

                  {/* =================================
                      IMAGE
                  ================================== */}

                  <div className="relative h-36 overflow-hidden bg-[#eaded9]">

                    <img
                      src={image}
                      alt={item.nameEn}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    {/* Category */}

                    <div className="absolute left-2 top-2 rounded bg-[#9f291b] px-2 py-1 text-[8px] font-bold uppercase tracking-wide text-white shadow">
                      {getCategoryShortName(item.category)}
                    </div>

                    {/* Special badge */}

                    {item.isSpecial && (
                      <div className="absolute right-2 top-2 rounded-full bg-[#fff4dd] px-2 py-1 text-[8px] font-bold text-[#8c5b18] shadow-sm">
                        ★ Chef's Heritage
                      </div>
                    )}

                    {/* Fasting badge */}

                    {item.isFasting && (
                      <div className="absolute bottom-2 left-2 rounded-full bg-[#edf8e9] px-2 py-1 text-[8px] font-semibold text-[#47713d] shadow-sm">
                        🌿 Fasting / Vegan
                      </div>
                    )}

                    {/* Spice badge */}

                    {!item.isFasting && (
                      <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1 text-[8px] font-semibold text-[#7c392d] shadow-sm">
                        {getSpiceLabel(item.spiceLevel)}
                      </div>
                    )}

                  </div>

                  {/* =================================
                      CARD CONTENT
                  ================================== */}

                  <div className="p-3">

                    {/* English name */}

                    <h2 className="text-[15px] font-bold leading-tight text-[#3e2923]">
                      {item.nameEn}
                    </h2>

                    {/* Amharic name */}

                    {item.nameAm && (
                      <p className="mt-0.5 text-[11px] font-medium text-[#9d6d5e]">
                        {item.nameAm}
                      </p>
                    )}

                    {/* Tagline */}

                    {item.tagline && (
                      <p className="mt-1 text-[10px] italic leading-4 text-[#9a8179]">
                        {item.tagline}
                      </p>
                    )}

                    {/* Description */}

                    <p className="mt-2 line-clamp-3 text-[10px] leading-4 text-[#75645e]">
                      {item.description}
                    </p>

                    {/* =================================
                        BOTTOM AREA
                    ================================== */}

                    <div className="mt-3 flex items-center justify-between border-t border-[#f0e5e1] pt-3">

                      <div>
                        <p className="text-[13px] font-extrabold text-[#a52b1c]">
                          ETB {item.priceETB}
                        </p>

                        <p className="mt-0.5 text-[8px] text-[#a08b84]">
                          {item.servings}
                        </p>
                      </div>

                      <button
                        className="rounded bg-[#a52b1c] px-3 py-1.5 text-[10px] font-semibold text-white transition hover:bg-[#861f14] active:scale-95"
                        onClick={() => {
                          console.log("Added to order:", item);
                        }}
                      >
                        + Add
                      </button>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        ) : (

          /* =========================================
             NO RESULTS
          ========================================== */

          <div className="rounded-xl border border-[#eaded9] bg-white px-6 py-16 text-center">

            <div className="mb-4 text-5xl">
              🍽️
            </div>

            <h2 className="text-xl font-bold text-[#563b34]">
              No dishes found
            </h2>

            <p className="mt-2 text-sm text-[#8a7770]">
              Try another dish name or select a different category.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Dishes");
              }}
              className="mt-5 rounded-md bg-[#a52b1c] px-5 py-2 text-xs font-semibold text-white hover:bg-[#861f14]"
            >
              Show All Dishes
            </button>

          </div>

        )}

        {/* =========================================
            BOTTOM HERITAGE MESSAGE
        ========================================== */}

        <div className="mt-10 border-t border-[#eaded9] py-8 text-center">

          <p className="font-serif text-lg font-bold text-[#8f2116]">
            Taste the heritage of Ethiopia
          </p>

          <p className="mx-auto mt-1 max-w-2xl text-xs leading-5 text-[#806d66]">
            From traditional wot and tibs to fasting dishes and ceremonial
            coffee, every plate celebrates the flavors, ingredients, and
            culinary traditions of the Ethiopian highlands.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Menu;