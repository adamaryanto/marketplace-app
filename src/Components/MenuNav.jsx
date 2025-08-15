import React, { useState } from 'react';

function MenuNav() {
  const [activeCategory, setActiveCategory] = useState(null);

  // Hanya kategori gadget
  const navCategories = ['Smartphones', 'Laptops', 'Tablets', 'Wearables', 'Accessories'];

  const items = {
    'Smartphones': ['iPhone', 'Samsung Galaxy', 'Xiaomi', 'Oppo', 'Vivo'],
    'Laptops': ['MacBook', 'Dell XPS', 'Asus ROG', 'HP Spectre', 'Lenovo ThinkPad'],
    'Tablets': ['iPad', 'Samsung Tab', 'Huawei MatePad', 'Lenovo Tab'],
    'Wearables': ['Apple Watch', 'Samsung Galaxy Watch', 'Xiaomi Band'],
    'Accessories': ['Earbuds', 'Chargers', 'Power Banks', 'Cases']
  };

  return (
    <div className="flex gap-10 items-center justify-center p-6 border-b-2 border-gray-200 bg-gray-100">
      {navCategories.map((category, index) => (
    <div
      key={index}
      className="relative"
      onMouseEnter={() => setActiveCategory(category)}
      onMouseLeave={() => {
        setActiveCategory(null);
      }}

    >
      {/* Tombol kategori */}
      <button className="px-4 py-2 text-[1.1rem] font-medium text-gray-700 bg-gray-100   hover:bg-gray-100">
        {category} ▾
      </button>

      {/* Dropdown */}
      {activeCategory === category && (
        <div className="absolute left-0  w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {items[category]?.map((item, i) => (
            <a
              key={i}
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>

      ))}
    </div>
  );
}

export default MenuNav;
