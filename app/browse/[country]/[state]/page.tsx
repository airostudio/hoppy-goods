import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getCountryBySlug,
  getStateBySlug,
  getAreasByStateId,
} from '@/lib/utils';
import { ChevronRight, MapPin } from 'lucide-react';

interface Props {
  params: Promise<{ country: string; state: string }>;
}

export default async function StatePage({ params }: Props) {
  const { country: countrySlug, state: stateSlug } = await params;
  const country = getCountryBySlug(countrySlug);
  const state = getStateBySlug(stateSlug);

  if (!country || !state) {
    notFound();
  }

  const areas = getAreasByStateId(state.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/browse" className="hover:text-amber-700">
            Browse
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/browse/${countrySlug}`} className="hover:text-amber-700">
            {country.name}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-semibold">{state.name}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">📍</div>
            <div>
              <h1 className="text-4xl font-bold">{state.name}</h1>
              <p className="text-gray-600">
                Browse breweries and merchandise in {state.name}
              </p>
            </div>
          </div>
        </div>

        {/* Areas List */}
        {areas.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {areas.map((area) => (
              <Link
                key={area.id}
                href={`/browse/${countrySlug}/${stateSlug}/${area.slug}`}
                className="flex items-center justify-between bg-white p-6 rounded-lg shadow hover:shadow-lg transition group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <h2 className="text-xl font-bold group-hover:text-amber-700 transition">
                      {area.name}
                    </h2>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-amber-700 transition" />
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <p className="text-gray-600">
              No areas available in {state.name} yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
