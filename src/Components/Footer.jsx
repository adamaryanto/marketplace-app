import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        {/* Brand & Info */}
        <div>
          <div className="text-2xl font-bold mb-2">FoxGadget</div>
          <p className="text-gray-300 mb-4 max-w-xs">
            Temukan produk terbaik dengan harga terjangkau dan pengalaman belanja yang mudah & aman.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-blue-400 text-xl" aria-label="Instagram">📸</a>
            <a href="#" className="hover:text-blue-400 text-xl" aria-label="Twitter">🐦</a>
            <a href="#" className="hover:text-blue-400 text-xl" aria-label="Facebook">📘</a>
          </div>
        </div>
        {/* Navigation */}
        <div>
          <div className="font-semibold mb-3">Navigasi</div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Kategori</a></li>
            <li><a href="#" className="hover:text-white">Promo</a></li>
            <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <div className="font-semibold mb-3">Kontak</div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <span className="font-medium text-white">Email:</span> support@marketplace.com
            </li>
            <li>
              <span className="font-medium text-white">Telepon:</span> +62 812-3456-7890
            </li>
            <li>
              <span className="font-medium text-white">Alamat:</span> Jl. Contoh No. 123, Jakarta
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MarketPlace. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer