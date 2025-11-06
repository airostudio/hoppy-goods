import Link from 'next/link';
import { Globe, Heart, Package } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Hoppy Goods</h1>
          <p className="text-xl text-gray-600">
            Your one-stop shop for authentic brewery merchandise from around the world
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At Hoppy Goods, we're passionate about craft beer and the amazing breweries
            that create it. Our mission is to connect beer enthusiasts with official
            merchandise from their favorite breweries, no matter where they are in
            the world.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe that every brewery has a story, and their merchandise is a way
            to share that story with the world. From iconic logos to limited-edition
            designs, we help you celebrate the breweries you love.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                <Globe className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">Browse</h3>
              <p className="text-gray-600">
                Explore merchandise organized by country, state, and city
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">Select</h3>
              <p className="text-gray-600">
                Choose from t-shirts, glassware, accessories, and more
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                <Package className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">Order</h3>
              <p className="text-gray-600">
                We purchase ad hoc from breweries and ship directly to you
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16 bg-amber-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-amber-900 font-bold">•</span>
              <div>
                <strong>Authenticity:</strong> We only sell official brewery
                merchandise, never knockoffs or unauthorized products.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-900 font-bold">•</span>
              <div>
                <strong>Support Local:</strong> Every purchase supports small and
                independent breweries around the world.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-900 font-bold">•</span>
              <div>
                <strong>Quality:</strong> We carefully curate merchandise that meets
                our high standards for design and quality.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-900 font-bold">•</span>
              <div>
                <strong>Global Reach:</strong> From local favorites to international
                icons, we bring the world of craft beer to your doorstep.
              </div>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-amber-700 to-amber-900 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Start Exploring</h2>
          <p className="text-xl mb-6 text-amber-100">
            Discover merchandise from breweries around the world
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
        </section>
      </div>
    </div>
  );
}
