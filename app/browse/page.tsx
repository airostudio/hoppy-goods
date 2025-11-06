import Link from 'next/link';
import { getCountries } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export default function BrowsePage() {
  const countries = getCountries();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Browse by Location</h1>
        <p className="text-gray-600 mb-8">
          Explore brewery merchandise organized by country, state, and city
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {countries.map((country) => (
            <Link
              key={country.id}
              href={`/browse/${country.slug}`}
              className="flex items-center justify-between bg-white p-6 rounded-lg shadow hover:shadow-lg transition group"
            >
              <div>
                <div className="text-3xl mb-2">🌍</div>
                <h2 className="text-xl font-bold group-hover:text-amber-700 transition">
                  {country.name}
                </h2>
                <p className="text-sm text-gray-500">{country.code}</p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-amber-700 transition" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
