"use client";

import { useEffect, useState } from "react";

export default function TopSelling() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // Using absolute path and including credentials
        const res = await fetch("/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.error || "Failed to fetch products");
        }

        const json = await res.json();

        if (json.success && Array.isArray(json.data)) {
          const newArrivals = json.data.filter((item) => !item.isNewArrival);
          setProducts(newArrivals || []);
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <div id="topSelling">
      <div className="mt-[72px] mx-auto max-w-3xl">
        <p className="text-black text-center text-5xl font-bold">
          TOP SELLING
        </p>
      </div>
      <div className="mt-[55px] px-4">
        {loading && (
          <div className="text-center py-10 text-gray-500">Loading...</div>
        )}
        {error && !loading && (
          <div className="text-center py-10 text-red-500">{error}</div>
        )}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center space-y-3"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-[200px] object-contain mx-auto"
                />

                <h3 className="text-sm font-semibold text-black">
                  {product.name}
                </h3>

                <div className="flex items-center justify-center space-x-1 text-yellow-500 text-sm">
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>
                        {i < Math.round(product.rating) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs">
                    ({product.rating.toFixed(1)}/5)
                  </span>
                </div>

                <div className="text-xl font-bold text-gray-900">
                  ${product.price}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium shadow">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
