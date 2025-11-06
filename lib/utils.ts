import { type ClassValue, clsx } from 'clsx';
import { countries, states, areas, breweries, products } from './data/mock-data';
import { Country, State, Area, Brewery, Product } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Data access functions
export function getCountries(): Country[] {
  return countries;
}

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getStatesByCountryId(countryId: string): State[] {
  return states.filter((s) => s.countryId === countryId);
}

export function getStateBySlug(slug: string): State | undefined {
  return states.find((s) => s.slug === slug);
}

export function getAreasByStateId(stateId: string): Area[] {
  return areas.filter((a) => a.stateId === stateId);
}

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getBreweriesByAreaId(areaId: string): Brewery[] {
  return breweries.filter((b) => b.areaId === areaId);
}

export function getBreweryBySlug(slug: string): Brewery | undefined {
  return breweries.find((b) => b.slug === slug);
}

export function getBreweryById(id: string): Brewery | undefined {
  return breweries.find((b) => b.id === id);
}

export function getProductsByBreweryId(breweryId: string): Product[] {
  return products.filter((p) => p.breweryId === breweryId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
  );
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

// Geographic navigation helpers
export function getGeographicPath(
  countrySlug?: string,
  stateSlug?: string,
  areaSlug?: string,
  brewerySlug?: string
) {
  const country = countrySlug ? getCountryBySlug(countrySlug) : undefined;
  const state = stateSlug ? getStateBySlug(stateSlug) : undefined;
  const area = areaSlug ? getAreaBySlug(areaSlug) : undefined;
  const brewery = brewerySlug ? getBreweryBySlug(brewerySlug) : undefined;

  return {
    country,
    state,
    area,
    brewery,
  };
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function getBreweryWithLocation(breweryId: string) {
  const brewery = getBreweryById(breweryId);
  if (!brewery) return null;

  const area = areas.find((a) => a.id === brewery.areaId);
  const state = area ? states.find((s) => s.id === area.stateId) : undefined;
  const country = state ? countries.find((c) => c.id === state.countryId) : undefined;

  return {
    brewery,
    area,
    state,
    country,
  };
}
