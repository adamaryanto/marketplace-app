import React, { useState } from "react";

function CardSlider() {
  const cardItem = [
    { title: "smartphone1", Image: "/src/assets/Black-Friday_web_banner_20.jpg" },
    { title: "smartphone2", Image: "/src/assets/Gemini_Generated_Image_pqs3v6pqs3v6pqs3.png" },
    { title: "smartphone3", Image: "/src/assets/Gemini_Generated_Image_pqs3v6pqs3v6pqs3.png" },
    { title: "smartphone4", Image: "/src/assets/Gemini_Generated_Image_pqs3v6pqs3v6pqs3.png" },
    { title: "smartphone5", Image: "/src/assets/Gemini_Generated_Image_pqs3v6pqs3v6pqs3.png" },
    { title: "smartphone6", Image: "/src/assets/Gemini_Generated_Image_pqs3v6pqs3v6pqs3.png" },
  ];

  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 3;

  const visibleCards = cardItem.slice(startIdx, startIdx + visibleCount);

  return (
    <div className="px-20 mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-sans font-semibold text-xl text-blue-800 border-b border-blue-300 pb-1">
          Shop From Categories
        </h2>
        <p className="text-[#2563EB] cursor-pointer hover:underline">
          View All &gt;
        </p>
      </div>

      {/* Card List */}
      <div className="flex pt-[2rem] pb-[1rem] gap-6 justify-center">
        {visibleCards.map((item, index) => (
          <div
            key={startIdx + index}
            className="w-[400px] h-[250px] overflow-hidden rounded-[14px] shadow-md bg-white"
          >
            <img
              src={item.Image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center pb-[2rem] gap-2 mt-3">
        {Array.from({ length: cardItem.length - visibleCount + 1 }).map((_, i) => (
          <span
            key={i}
            onClick={() => setStartIdx(i)}
            className={`cursor-pointer h-2 rounded-full transition-all ${
              i === startIdx ? "bg-blue-500 w-4" : "bg-gray-300 w-2"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default CardSlider;
