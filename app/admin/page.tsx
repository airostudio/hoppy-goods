'use client';

import { useState } from 'react';
import { countries, states, areas, breweries, products } from '@/lib/data/mock-data';
import { Package, Beer, MapPin, Globe } from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'breweries' | 'locations'>('overview');

  const stats = {
    totalProducts: products.length,
    totalBreweries: breweries.length,
    totalCountries: countries.length,
    totalStates: states.length,
    totalAreas: areas.length,
    inStockProducts: products.filter(p => p.inStock).length,
    featuredProducts: products.filter(p => p.featured).length,
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your brewery merchandise store</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-semibold transition ${
              activeTab === 'overview'
                ? 'border-b-2 border-amber-900 text-amber-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-3 font-semibold transition ${
              activeTab === 'products'
                ? 'border-b-2 border-amber-900 text-amber-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('breweries')}
            className={`px-6 py-3 font-semibold transition ${
              activeTab === 'breweries'
                ? 'border-b-2 border-amber-900 text-amber-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Breweries
          </button>
          <button
            onClick={() => setActiveTab('locations')}
            className={`px-6 py-3 font-semibold transition ${
              activeTab === 'locations'
                ? 'border-b-2 border-amber-900 text-amber-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Locations
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <Package className="w-8 h-8 text-amber-900" />
                  <span className="text-3xl font-bold">{stats.totalProducts}</span>
                </div>
                <div className="text-gray-600">Total Products</div>
                <div className="text-sm text-green-600 mt-1">
                  {stats.inStockProducts} in stock
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <Beer className="w-8 h-8 text-amber-900" />
                  <span className="text-3xl font-bold">{stats.totalBreweries}</span>
                </div>
                <div className="text-gray-600">Breweries</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <Globe className="w-8 h-8 text-amber-900" />
                  <span className="text-3xl font-bold">{stats.totalCountries}</span>
                </div>
                <div className="text-gray-600">Countries</div>
                <div className="text-sm text-gray-500 mt-1">
                  {stats.totalStates} states/regions
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <MapPin className="w-8 h-8 text-amber-900" />
                  <span className="text-3xl font-bold">{stats.totalAreas}</span>
                </div>
                <div className="text-gray-600">Cities/Areas</div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Quick Stats</h2>
              <ul className="space-y-2">
                <li>• Featured Products: {stats.featuredProducts}</li>
                <li>• Out of Stock: {stats.totalProducts - stats.inStockProducts}</li>
                <li>
                  • Categories: Apparel ({products.filter(p => p.category === 'apparel').length}),
                  Glassware ({products.filter(p => p.category === 'glassware').length}),
                  Accessories ({products.filter(p => p.category === 'accessories').length})
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Brewery
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product) => {
                    const brewery = breweries.find(b => b.id === product.breweryId);
                    return (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="font-medium">{product.name}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {brewery?.name}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold">
                          ${product.price}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {product.stockQuantity}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {product.inStock ? (
                            <span className="text-green-600">In Stock</span>
                          ) : (
                            <span className="text-red-600">Out of Stock</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Breweries Tab */}
        {activeTab === 'breweries' && (
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              {breweries.map((brewery) => {
                const area = areas.find(a => a.id === brewery.areaId);
                const state = area ? states.find(s => s.id === area.stateId) : undefined;
                const country = state ? countries.find(c => c.id === state.countryId) : undefined;
                const productCount = products.filter(p => p.breweryId === brewery.id).length;

                return (
                  <div key={brewery.id} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">🍺</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{brewery.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {area?.name}, {state?.code}, {country?.name}
                        </p>
                        <p className="text-sm text-gray-700 mb-3">
                          {brewery.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-600">
                            Est. {brewery.established}
                          </span>
                          <span className="text-amber-700 font-semibold">
                            {productCount} products
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Locations Tab */}
        {activeTab === 'locations' && (
          <div className="space-y-8">
            {countries.map((country) => {
              const countryStates = states.filter(s => s.countryId === country.id);
              return (
                <div key={country.id} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-2xl font-bold mb-4">{country.name}</h3>
                  <div className="space-y-4">
                    {countryStates.map((state) => {
                      const stateAreas = areas.filter(a => a.stateId === state.id);
                      return (
                        <div key={state.id} className="border-l-4 border-amber-200 pl-4">
                          <h4 className="text-lg font-semibold mb-2">{state.name}</h4>
                          <div className="flex flex-wrap gap-2">
                            {stateAreas.map((area) => {
                              const areaBreweries = breweries.filter(b => b.areaId === area.id);
                              return (
                                <span
                                  key={area.id}
                                  className="bg-amber-50 text-amber-900 px-3 py-1 rounded-full text-sm"
                                >
                                  {area.name} ({areaBreweries.length})
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
