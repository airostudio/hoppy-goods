import ProductCard from '@/components/product-card';
import { getFeaturedProducts } from '@/lib/utils';

export default function FeaturedPage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Featured Products</h1>
          <p className="text-gray-600">
            Handpicked selections from our favorite breweries worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
