import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getCountryBySlug,
  getStateBySlug,
  getAreaBySlug,
  getBreweriesByAreaId,
} from '@/lib/utils';
import { ChevronRight, Beer } from 'lucide-react';

interface Props {
  params: Promise<{ country: string; state: string; area: string }>;
}

export default async function AreaPage({ params }: Props) {
  const { country: countrySlug, state: stateSlug, area: areaSlug } = await params;
  const country = getCountryBySlug(countrySlug);
  const state = getStateBySlug(stateSlug);
  const area = getAreaBySlug(areaSlug);

  if (!country || !state || !area) {
    notFound();
  }

  const breweries = getBreweriesByAreaId(area.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 flex-wrap">
          <Link href="/browse" className="hover:text-amber-700">
            Browse
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/browse/${countrySlug}`} className="hover:text-amber-700">
            {country.name}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href={`/browse/${countrySlug}/${stateSlug}`}
            className="hover:text-amber-700"
          >
            {state.name}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-semibold">{area.name}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">🏙️</div>
            <div>
              <h1 className="text-4xl font-bold">{area.name}</h1>
              <p className="text-gray-600">
                Breweries and merchandise from {area.name}, {state.name}
              </p>
            </div>
          </div>
        </div>

        {/* Breweries List */}
        {breweries.length > 0 ? (
          <div className="grid gap-6">
            {breweries.map((brewery) => (
              <Link
                key={brewery.id}
                href={`/brewery/${brewery.slug}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="text-4xl">🍺</div>
                    <div>
                      <h2 className="text-2xl font-bold group-hover:text-amber-700 transition mb-2">
                        {brewery.name}
                      </h2>
                      <p className="text-gray-600 mb-2">{brewery.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        {brewery.established && (
                          <span>Est. {brewery.established}</span>
                        )}
                        <span className="flex items-center gap-1">
                          <Beer className="w-4 h-4" />
                          View Merchandise
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-amber-700 transition flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <p className="text-gray-600">
              No breweries available in {area.name} yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
