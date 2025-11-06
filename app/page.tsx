import Link from 'next/link';
import ProductCard from '@/components/product-card';
import { getCountries, getFeaturedProducts } from '@/lib/utils';
import { Globe, TrendingUp, MapPin } from 'lucide-react';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const countries = getCountries();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Brewery Merchandise from Around the World
            </h1>
            <p className="text-xl mb-8 text-amber-100">
              Discover authentic merch from craft breweries worldwide. T-shirts,
              glassware, accessories, and more from your favorite beer makers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/browse"
                className="bg-white text-amber-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition"
              >
                Browse by Location
              </Link>
              <Link
                href="/products"
                className="bg-amber-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition border-2 border-white"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                <Globe className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Collection</h3>
              <p className="text-gray-600">
                Merchandise from breweries across the USA, UK, Germany, Belgium,
                and beyond
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">Authentic Merch</h3>
              <p className="text-gray-600">
                Official brewery merchandise sourced directly from the breweries
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Navigation</h3>
              <p className="text-gray-600">
                Browse by country, state, and city to find your local favorites
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link
              href="/featured"
              className="text-amber-700 hover:text-amber-900 font-semibold"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Country */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Browse by Country
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {countries.map((country) => (
              <Link
                key={country.id}
                href={`/browse/${country.slug}`}
                className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg hover:shadow-lg transition text-center group"
              >
                <div className="text-4xl mb-2">🌍</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-amber-700">
                  {country.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Looking for Something Specific?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Search our entire collection of brewery merchandise
          </p>
          <Link
            href="/search"
            className="inline-block bg-white text-amber-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition"
          >
            Search Products
          </Link>
        </div>
      </section>
    </div>
  );
}
