import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Card({ title, apiUrl }) {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;
  const cardWidth = 320;  

  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, [apiUrl]);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCount, products.length - visibleCount)
    );
  };

  return (
    <div className="px-20 mt-10">
      <div className="relative overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center ">
          <h2 className="font-sans font-semibold text-xl text-blue-800 border-b border-blue-300 pb-1">
            {title}
          </h2>
          <p className="text-[#2563EB] cursor-pointer hover:underline">
            View All &gt;
          </p>
        </div>

        {/* Tombol kiri */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 
            bg-white/80 backdrop-blur-md hover:bg-white/100 
            shadow-lg p-3 rounded-full text-xl 
            transition duration-300 ease-in-out 
            ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Tombol kanan */}
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= products.length}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 
            bg-white/80 backdrop-blur-md hover:bg-white/100 
            shadow-lg p-3 rounded-full text-xl 
            transition duration-300 ease-in-out
            ${startIndex + visibleCount >= products.length ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Card list */}
        <div
          className="flex gap-6 mt-6 pb-4 justify-center"
          style={{
            width: `${cardWidth * products.length}px`,
            transform: `translateX(-${startIndex * cardWidth}px)`,
            transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)'
          }}
        >
          {products.map(product => (
            <div
              key={product.id}
              className="flex-none border border-gray-200 rounded-[24px] bg-white shadow-md w-[300px] transition hover:shadow-lg"
              style={{ minHeight: 350 }}
            >
              <div className="bg-gray-100 rounded-t-[25px] flex items-center justify-center h-40 border-b border-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-32 object-contain"
                  style={{ maxWidth: "90%" }}
                />
              </div>
              <div className="p-5 flex flex-col items-center">
                <h3 className="mt-1 font-medium text-base text-gray-900 text-center line-clamp-2">{product.title}</h3>
                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>
                <p className="mt-3 text-blue-700 font-semibold text-lg">${product.price}</p>
                <div className="flex gap-2 mt-4 w-full">
                  <button className="flex-1 bg-blue-700 text-white py-2 rounded-md font-medium hover:bg-blue-800 transition text-sm shadow-sm">
                    Buy Now
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition text-lg shadow-sm">
                    🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
