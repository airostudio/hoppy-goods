import ProductCard from '@/components/product-card';
import { getAllProducts } from '@/lib/utils';

export default function ProductsPage() {
  const products = getAllProducts();

  // Group products by category
  const categories = {
    apparel: products.filter((p) => p.category === 'apparel'),
    glassware: products.filter((p) => p.category === 'glassware'),
    accessories: products.filter((p) => p.category === 'accessories'),
    homegoods: products.filter((p) => p.category === 'homegoods'),
    collectibles: products.filter((p) => p.category === 'collectibles'),
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">All Products</h1>
          <p className="text-gray-600">
            Browse our complete collection of brewery merchandise from around the
            world
          </p>
        </div>

        {/* Apparel */}
        {categories.apparel.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Apparel</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.apparel.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Glassware */}
        {categories.glassware.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Glassware</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.glassware.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Accessories */}
        {categories.accessories.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Accessories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.accessories.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Home Goods */}
        {categories.homegoods.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Home Goods</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.homegoods.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Collectibles */}
        {categories.collectibles.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Collectibles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.collectibles.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
