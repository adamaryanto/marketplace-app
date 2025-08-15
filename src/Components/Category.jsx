import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Category() {
  const [categoryImages, setCategoryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categories = [
      'smartphones',
      'laptops',
      'tablets',
      'mens-watches',
      'womens-watches'
    ];

    Promise.all(categories.map(cat => axios.get(`https://dummyjson.com/products/category/${cat}`)))
      .then((responses) => {
        // Ambil satu produk pertama dari setiap kategori
        const images = responses.map((res, idx) => {
          const product = res.data.products[0];
          return {
            category: categories[idx],
            image: product?.images?.[0] || '',
            title: product?.title || categories[idx]
          };
        });
        setCategoryImages(images);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading images...</p>;
  }

  return (
    <div className='px-20 mt-10'>
        <div className="flex justify-between items-center ">
          <h2 className="font-sans font-semibold text-xl text-blue-800 border-b border-blue-300 pb-1">
            Shop From Categories
          </h2>
          <p className="text-[#2563EB] cursor-pointer hover:underline">
            View All &gt;
          </p>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-20'>
      {categoryImages.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
          <img
            src={item.image}
            alt={item.title}
            className="h-32 w-32 bg-gray-300 object-cover rounded-full hover:scale-105 transition-transform cursor-pointer shadow-md"
          />
          <span className="mt-2 text-sm font-medium text-gray-700 capitalize">
            {item.category.replace('-', ' ')}
          </span>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Category;
