import Link from 'next/link';
import ProductCard from '@/components/product-card';
import { getCountries, getFeaturedProducts } from '@/lib/utils';
import { Beer, TrendingUp, MapPin } from 'lucide-react';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const countries = getCountries();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-amber-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-4">🇦🇺</div>
            <h1 className="text-5xl font-bold mb-6">
              Australian Brewery Merchandise
            </h1>
            <p className="text-xl mb-8 text-green-50">
              Shop authentic merch from Australia's finest craft breweries. T-shirts,
              glassware, accessories, and more from top breweries across NSW, QLD, SA, VIC, WA, TAS, and ACT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/browse"
                className="bg-white text-green-800 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition"
              >
                Browse by State
              </Link>
              <Link
                href="/products"
                className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition border-2 border-white"
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
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Beer className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">Australian Breweries</h3>
              <p className="text-gray-600">
                From Young Henrys to Mountain Culture, Balter to Little Creatures -
                Australia's best craft breweries
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">Authentic Merch</h3>
              <p className="text-gray-600">
                Official brewery merchandise purchased directly from Australian breweries
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Navigation</h3>
              <p className="text-gray-600">
                Browse by state and city to discover breweries and merch near you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Australian Brewery Merch</h2>
            <Link
              href="/featured"
              className="text-green-700 hover:text-green-900 font-semibold"
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

      {/* Browse by State - Featured */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Explore Australian Craft Breweries
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover authentic merchandise from 67 craft breweries across Australia.
            From Sydney to Perth, Melbourne to Brisbane - shop local brewery pride.
          </p>
          <div className="max-w-4xl mx-auto">
            {countries.map((country) => (
              <Link
                key={country.id}
                href={`/browse/${country.slug}`}
                className="block bg-gradient-to-r from-green-700 via-amber-500 to-amber-600 p-10 rounded-xl hover:shadow-2xl transition text-center group"
              >
                <div className="text-7xl mb-4">🇦🇺</div>
                <h3 className="font-bold text-3xl text-white group-hover:text-yellow-100 transition mb-3">
                  Explore Australian Breweries
                </h3>
                <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-white">
                  <div>
                    <div className="text-3xl font-bold">67</div>
                    <div className="text-green-100">Breweries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">30</div>
                    <div className="text-green-100">Products</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">8</div>
                    <div className="text-green-100">States</div>
                  </div>
                </div>
                <div className="mt-6 inline-block bg-white text-green-800 px-6 py-2 rounded-full font-semibold group-hover:bg-yellow-100 transition">
                  Browse All States →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brewery Highlights */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Australian Breweries</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
              <div className="text-4xl mb-3">🍺</div>
              <h3 className="font-bold text-lg mb-2">Mountain Culture</h3>
              <p className="text-sm text-gray-600 mb-1">Blue Mountains, NSW</p>
              <p className="text-xs text-green-700">Australia's #1 Rated Brewery</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500">
              <div className="text-4xl mb-3">🏄</div>
              <h3 className="font-bold text-lg mb-2">Balter Brewing</h3>
              <p className="text-sm text-gray-600 mb-1">Currumbin, QLD</p>
              <p className="text-xs text-amber-700">Founded by Aussie Surf Legends</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="text-4xl mb-3">🌊</div>
              <h3 className="font-bold text-lg mb-2">Stone & Wood</h3>
              <p className="text-sm text-gray-600 mb-1">Byron Bay, NSW</p>
              <p className="text-xs text-blue-700">Home of Pacific Ale</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Looking for Something Specific?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Search our entire collection of Australian brewery merchandise
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
