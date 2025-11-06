'use client';

import { useState } from 'react';
import ProductCard from '@/components/product-card';
import { searchProducts } from '@/lib/utils';
import { Search } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ReturnType<typeof searchProducts>>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const searchResults = searchProducts(query);
      setResults(searchResults);
      setHasSearched(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6 text-center">Search Products</h1>

          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for brewery merchandise..."
                className="w-full p-4 pr-12 border-2 border-gray-300 rounded-lg focus:border-amber-700 focus:outline-none"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <button
              type="submit"
              className="bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition"
            >
              Search
            </button>
          </form>
        </div>

        {hasSearched && (
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {results.length > 0
                ? `Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
                : `No results found for "${query}"`}
            </h2>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-100 p-12 rounded-lg text-center">
                <p className="text-gray-600 mb-4">
                  Try searching for:
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['shirt', 'glass', 'hoodie', 'stone', 'ipa', 'stout'].map(
                    (term) => (
                      <button
                        key={term}
                        onClick={() => {
                          setQuery(term);
                          const searchResults = searchProducts(term);
                          setResults(searchResults);
                        }}
                        className="bg-white px-4 py-2 rounded-full text-sm hover:bg-amber-50 border border-gray-300"
                      >
                        {term}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
