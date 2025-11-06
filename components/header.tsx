'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart-store';
import { useState } from 'react';

export default function Header() {
  const itemCount = useCartStore((state) => state.getItemCount());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-amber-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">🍺</div>
            <div>
              <div className="text-xl font-bold">Hoppy Goods</div>
              <div className="text-xs text-amber-200">Beer Merch Worldwide</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/browse" className="hover:text-amber-200 transition">
              Browse by Location
            </Link>
            <Link href="/products" className="hover:text-amber-200 transition">
              All Products
            </Link>
            <Link href="/featured" className="hover:text-amber-200 transition">
              Featured
            </Link>
            <Link href="/about" className="hover:text-amber-200 transition">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="/search"
              className="hover:text-amber-200 transition"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="relative hover:text-amber-200 transition">
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden hover:text-amber-200 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-amber-800">
            <div className="flex flex-col space-y-3">
              <Link
                href="/browse"
                className="hover:text-amber-200 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Browse by Location
              </Link>
              <Link
                href="/products"
                className="hover:text-amber-200 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Products
              </Link>
              <Link
                href="/featured"
                className="hover:text-amber-200 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Featured
              </Link>
              <Link
                href="/about"
                className="hover:text-amber-200 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
