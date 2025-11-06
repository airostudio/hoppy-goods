import Link from 'next/link';
import { Product, Brewery } from '@/types';
import { formatPrice, getBreweryWithLocation } from '@/lib/utils';
import { MapPin } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  showBrewery?: boolean;
}

export default function ProductCard({ product, showBrewery = true }: ProductCardProps) {
  const location = getBreweryWithLocation(product.breweryId);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
    >
      {/* Product Image Placeholder */}
      <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
        <div className="text-6xl">
          {product.category === 'apparel' && '👕'}
          {product.category === 'glassware' && '🍺'}
          {product.category === 'accessories' && '🎯'}
          {product.category === 'homegoods' && '🏠'}
          {product.category === 'collectibles' && '⭐'}
        </div>
      </div>

      <div className="p-4">
        {/* Brewery Info */}
        {showBrewery && location && (
          <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>
              {location.brewery?.name} • {location.area?.name}, {location.state?.code}
            </span>
          </div>
        )}

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition mb-1">
          {product.name}
        </h3>

        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
            {product.category}
          </span>
          {!product.inStock && (
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-amber-900">
            {formatPrice(product.price)}
          </span>
          {product.featured && (
            <span className="text-xs text-yellow-600 font-semibold">⭐ Featured</span>
          )}
        </div>
      </div>
    </Link>
  );
}
