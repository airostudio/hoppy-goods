'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import {
  getProductBySlug,
  getBreweryWithLocation,
  formatPrice,
} from '@/lib/utils';
import { useCartStore } from '@/lib/store/cart-store';
import { MapPin, ShoppingCart, Check } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: Props) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const product = getProductBySlug(unwrappedParams.slug);

  if (!product) {
    notFound();
  }

  const location = getBreweryWithLocation(product.breweryId);

  const handleAddToCart = () => {
    if (!location?.brewery) return;

    // Validate size and color if required
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert('Please select a size');
      return;
    }
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      alert('Please select a color');
      return;
    }

    addItem(product, location.brewery, quantity, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg aspect-square flex items-center justify-center">
            <div className="text-9xl">
              {product.category === 'apparel' && '👕'}
              {product.category === 'glassware' && '🍺'}
              {product.category === 'accessories' && '🎯'}
              {product.category === 'homegoods' && '🏠'}
              {product.category === 'collectibles' && '⭐'}
            </div>
          </div>

          {/* Product Details */}
          <div>
            {/* Brewery Info */}
            {location && (
              <div className="mb-4">
                <Link
                  href={`/brewery/${location.brewery?.slug}`}
                  className="text-amber-700 hover:text-amber-900 font-semibold text-lg"
                >
                  {location.brewery?.name}
                </Link>
                <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>
                    {location.area?.name}, {location.state?.code},{' '}
                    {location.country?.name}
                  </span>
                </div>
              </div>
            )}

            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-amber-900">
                {formatPrice(product.price)}
              </span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                {product.category}
              </span>
              {product.featured && (
                <span className="text-yellow-600 font-semibold">⭐ Featured</span>
              )}
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">In Stock ({product.stockQuantity} available)</span>
                </div>
              ) : (
                <div className="text-red-600 font-semibold">Out of Stock</div>
              )}
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block font-semibold mb-2">Size</label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded-lg font-semibold transition ${
                        selectedSize === size
                          ? 'border-amber-700 bg-amber-50 text-amber-900'
                          : 'border-gray-300 hover:border-amber-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <label className="block font-semibold mb-2">Color</label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border-2 rounded-lg font-semibold transition ${
                        selectedColor === color
                          ? 'border-amber-700 bg-amber-50 text-amber-900'
                          : 'border-gray-300 hover:border-amber-700'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-amber-700 font-bold"
                  disabled={!product.inStock}
                >
                  −
                </button>
                <span className="text-xl font-semibold w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity(Math.min(product.stockQuantity, quantity + 1))
                  }
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-amber-700 font-bold"
                  disabled={!product.inStock}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock || added}
              className={`w-full py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2 ${
                added
                  ? 'bg-green-600 text-white'
                  : product.inStock
                  ? 'bg-amber-900 text-white hover:bg-amber-800'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </>
              )}
            </button>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Product Details</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Official {location?.brewery?.name} merchandise</li>
                <li>• Type: {product.type}</li>
                {product.sizes && <li>• Available sizes: {product.sizes.join(', ')}</li>}
                {product.colors && <li>• Available colors: {product.colors.join(', ')}</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add React import for use() hook
import React from 'react';
