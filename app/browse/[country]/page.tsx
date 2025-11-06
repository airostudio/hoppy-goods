import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCountryBySlug, getStatesByCountryId } from '@/lib/utils';
import { ChevronRight, MapPin } from 'lucide-react';

interface Props {
  params: Promise<{ country: string }>;
}

export default async function CountryPage({ params }: Props) {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country) {
    notFound();
  }

  const states = getStatesByCountryId(country.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/browse" className="hover:text-amber-700">
            Browse
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-semibold">{country.name}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">🌍</div>
            <div>
              <h1 className="text-4xl font-bold">{country.name}</h1>
              <p className="text-gray-600">Explore breweries in {country.name}</p>
            </div>
          </div>
        </div>

        {/* States/Regions List */}
        {states.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {states.map((state) => (
              <Link
                key={state.id}
                href={`/browse/${countrySlug}/${state.slug}`}
                className="flex items-center justify-between bg-white p-6 rounded-lg shadow hover:shadow-lg transition group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <h2 className="text-xl font-bold group-hover:text-amber-700 transition">
                      {state.name}
                    </h2>
                  </div>
                  <p className="text-sm text-gray-500">{state.code}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-amber-700 transition" />
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <p className="text-gray-600">
              No regions available for {country.name} yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
