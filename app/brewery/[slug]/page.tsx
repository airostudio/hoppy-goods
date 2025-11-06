import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/product-card';
import {
  getBreweryBySlug,
  getProductsByBreweryId,
  getBreweryWithLocation,
} from '@/lib/utils';
import { MapPin, ExternalLink, Calendar } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BreweryPage({ params }: Props) {
  const { slug } = await params;
  const brewery = getBreweryBySlug(slug);

  if (!brewery) {
    notFound();
  }

  const products = getProductsByBreweryId(brewery.id);
  const location = getBreweryWithLocation(brewery.id);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Brewery Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-lg p-8 shadow-lg">
          <div className="flex items-start gap-6">
            <div className="text-6xl">🍺</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{brewery.name}</h1>
              <p className="text-amber-100 text-lg mb-4">{brewery.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                {location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>
                      {location.area?.name}, {location.state?.name},{' '}
                      {location.country?.name}
                    </span>
                  </div>
                )}
                {brewery.established && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Established {brewery.established}</span>
                  </div>
                )}
                {brewery.website && (
                  <a
                    href={brewery.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-amber-200 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Merchandise</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} showBrewery={false} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-100 p-12 rounded-lg text-center">
            <p className="text-gray-600">
              No merchandise available from this brewery yet. Check back soon!
            </p>
          </div>
        )}
      </div>

      {/* Back Link */}
      {location && (
        <div className="max-w-6xl mx-auto mt-8">
          <Link
            href={`/browse/${location.country?.slug}/${location.state?.slug}/${location.area?.slug}`}
            className="text-amber-700 hover:text-amber-900 font-semibold"
          >
            ← Back to {location.area?.name} Breweries
          </Link>
        </div>
      )}
    </div>
  );
}
