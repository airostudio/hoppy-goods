import { Country, State, Area, Brewery, Product } from '@/types';

// Countries
export const countries: Country[] = [
  { id: '1', name: 'United States', code: 'US', slug: 'united-states' },
  { id: '2', name: 'United Kingdom', code: 'GB', slug: 'united-kingdom' },
  { id: '3', name: 'Germany', code: 'DE', slug: 'germany' },
  { id: '4', name: 'Belgium', code: 'BE', slug: 'belgium' },
  { id: '5', name: 'Czech Republic', code: 'CZ', slug: 'czech-republic' },
];

// States (USA)
export const states: State[] = [
  { id: '1', name: 'California', code: 'CA', slug: 'california', countryId: '1' },
  { id: '2', name: 'Colorado', code: 'CO', slug: 'colorado', countryId: '1' },
  { id: '3', name: 'Oregon', code: 'OR', slug: 'oregon', countryId: '1' },
  { id: '4', name: 'New York', code: 'NY', slug: 'new-york', countryId: '1' },
  { id: '5', name: 'Vermont', code: 'VT', slug: 'vermont', countryId: '1' },

  // UK - Counties
  { id: '6', name: 'England', code: 'ENG', slug: 'england', countryId: '2' },
  { id: '7', name: 'Scotland', code: 'SCT', slug: 'scotland', countryId: '2' },

  // Germany - States
  { id: '8', name: 'Bavaria', code: 'BY', slug: 'bavaria', countryId: '3' },
  { id: '9', name: 'North Rhine-Westphalia', code: 'NW', slug: 'north-rhine-westphalia', countryId: '3' },
];

// Areas
export const areas: Area[] = [
  // California
  { id: '1', name: 'San Diego', slug: 'san-diego', stateId: '1' },
  { id: '2', name: 'San Francisco', slug: 'san-francisco', stateId: '1' },
  { id: '3', name: 'Los Angeles', slug: 'los-angeles', stateId: '1' },

  // Colorado
  { id: '4', name: 'Denver', slug: 'denver', stateId: '2' },
  { id: '5', name: 'Fort Collins', slug: 'fort-collins', stateId: '2' },

  // Oregon
  { id: '6', name: 'Portland', slug: 'portland', stateId: '3' },
  { id: '7', name: 'Bend', slug: 'bend', stateId: '3' },

  // New York
  { id: '8', name: 'Brooklyn', slug: 'brooklyn', stateId: '4' },

  // Vermont
  { id: '9', name: 'Waterbury', slug: 'waterbury', stateId: '5' },

  // England
  { id: '10', name: 'London', slug: 'london', stateId: '6' },
  { id: '11', name: 'Manchester', slug: 'manchester', stateId: '6' },

  // Scotland
  { id: '12', name: 'Edinburgh', slug: 'edinburgh', stateId: '7' },

  // Bavaria
  { id: '13', name: 'Munich', slug: 'munich', stateId: '8' },
];

// Breweries
export const breweries: Brewery[] = [
  // San Diego, CA
  {
    id: '1',
    name: 'Stone Brewing',
    slug: 'stone-brewing',
    description: 'Iconic craft brewery known for bold, flavorful beers and fierce independence.',
    areaId: '1',
    website: 'https://www.stonebrewing.com',
    established: 1996,
  },
  {
    id: '2',
    name: 'Ballast Point Brewing',
    slug: 'ballast-point',
    description: 'Award-winning craft brewery with a focus on innovation and quality.',
    areaId: '1',
    website: 'https://www.ballastpoint.com',
    established: 1996,
  },

  // Denver, CO
  {
    id: '3',
    name: 'Great Divide Brewing',
    slug: 'great-divide',
    description: 'Denver institution known for their Yeti Imperial Stout and classic American ales.',
    areaId: '4',
    website: 'https://www.greatdivide.com',
    established: 1994,
  },

  // Portland, OR
  {
    id: '4',
    name: 'Deschutes Brewery',
    slug: 'deschutes',
    description: 'Pacific Northwest brewery crafting fresh, adventurous beers since 1988.',
    areaId: '6',
    website: 'https://www.deschutesbrewery.com',
    established: 1988,
  },

  // Brooklyn, NY
  {
    id: '5',
    name: 'Brooklyn Brewery',
    slug: 'brooklyn-brewery',
    description: 'NYC craft beer pioneer with a mission to make better beer.',
    areaId: '8',
    website: 'https://www.brooklynbrewery.com',
    established: 1988,
  },

  // Waterbury, VT
  {
    id: '6',
    name: 'The Alchemist',
    slug: 'the-alchemist',
    description: 'Legendary brewery famous for Heady Topper.',
    areaId: '9',
    website: 'https://www.alchemistbeer.com',
    established: 2003,
  },

  // London, UK
  {
    id: '7',
    name: 'BrewDog',
    slug: 'brewdog',
    description: 'Punk brewery on a mission to make other people as passionate about craft beer as we are.',
    areaId: '10',
    website: 'https://www.brewdog.com',
    established: 2007,
  },

  // Munich, Germany
  {
    id: '8',
    name: 'Paulaner Brauerei',
    slug: 'paulaner',
    description: 'Traditional Munich brewery with over 400 years of brewing heritage.',
    areaId: '13',
    website: 'https://www.paulaner.com',
    established: 1634,
  },
];

// Products
export const products: Product[] = [
  // Stone Brewing
  {
    id: '1',
    breweryId: '1',
    name: 'Stone Gargoyle T-Shirt',
    slug: 'stone-gargoyle-tshirt',
    description: 'Classic Stone Brewing gargoyle logo on premium cotton tee.',
    category: 'apparel',
    type: 'tshirt',
    price: 24.99,
    images: ['/products/stone-tshirt.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'White'],
    inStock: true,
    stockQuantity: 150,
    featured: true,
  },
  {
    id: '2',
    breweryId: '1',
    name: 'Stone IPA Pint Glass',
    slug: 'stone-ipa-pint-glass',
    description: '16oz pint glass featuring Stone IPA artwork.',
    category: 'glassware',
    type: 'pint-glass',
    price: 12.99,
    images: ['/products/stone-glass.jpg'],
    inStock: true,
    stockQuantity: 200,
    featured: true,
  },
  {
    id: '3',
    breweryId: '1',
    name: 'Stone Brewing Snapback Hat',
    slug: 'stone-snapback',
    description: 'Adjustable snapback with embroidered Stone logo.',
    category: 'apparel',
    type: 'hat',
    price: 29.99,
    images: ['/products/stone-hat.jpg'],
    colors: ['Black', 'Navy', 'Gray'],
    inStock: true,
    stockQuantity: 75,
  },

  // Ballast Point
  {
    id: '4',
    breweryId: '2',
    name: 'Sculpin IPA Hoodie',
    slug: 'sculpin-hoodie',
    description: 'Cozy hoodie with iconic Sculpin fish design.',
    category: 'apparel',
    type: 'hoodie',
    price: 54.99,
    images: ['/products/ballast-hoodie.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Gray'],
    inStock: true,
    stockQuantity: 60,
    featured: true,
  },
  {
    id: '5',
    breweryId: '2',
    name: 'Ballast Point Tulip Glass',
    slug: 'ballast-tulip-glass',
    description: 'Elegant tulip glass perfect for IPAs and specialty beers.',
    category: 'glassware',
    type: 'tulip-glass',
    price: 14.99,
    images: ['/products/ballast-tulip.jpg'],
    inStock: true,
    stockQuantity: 120,
  },
  {
    id: '6',
    breweryId: '2',
    name: 'Sculpin Bottle Opener',
    slug: 'sculpin-opener',
    description: 'Heavy-duty stainless steel bottle opener with Sculpin logo.',
    category: 'accessories',
    type: 'bottle-opener',
    price: 8.99,
    images: ['/products/ballast-opener.jpg'],
    inStock: true,
    stockQuantity: 300,
  },

  // Great Divide
  {
    id: '7',
    breweryId: '3',
    name: 'Yeti Imperial Stout T-Shirt',
    slug: 'yeti-tshirt',
    description: 'Bold Yeti graphic on soft cotton blend tee.',
    category: 'apparel',
    type: 'tshirt',
    price: 22.99,
    images: ['/products/yeti-tshirt.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Brown'],
    inStock: true,
    stockQuantity: 100,
  },
  {
    id: '8',
    breweryId: '3',
    name: 'Great Divide Pint Glass Set',
    slug: 'great-divide-glass-set',
    description: 'Set of 4 branded pint glasses.',
    category: 'glassware',
    type: 'pint-glass',
    price: 39.99,
    images: ['/products/greatdivide-glasses.jpg'],
    inStock: true,
    stockQuantity: 50,
  },

  // Deschutes
  {
    id: '9',
    breweryId: '4',
    name: 'Deschutes Brewery Jacket',
    slug: 'deschutes-jacket',
    description: 'Water-resistant jacket with embroidered Deschutes logo.',
    category: 'apparel',
    type: 'jacket',
    price: 89.99,
    images: ['/products/deschutes-jacket.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Forest Green'],
    inStock: true,
    stockQuantity: 40,
    featured: true,
  },
  {
    id: '10',
    breweryId: '4',
    name: 'Fresh Squeezed IPA Coaster Set',
    slug: 'fresh-squeezed-coasters',
    description: 'Set of 6 absorbent coasters with Fresh Squeezed IPA design.',
    category: 'homegoods',
    type: 'coaster',
    price: 16.99,
    images: ['/products/deschutes-coasters.jpg'],
    inStock: true,
    stockQuantity: 80,
  },

  // Brooklyn Brewery
  {
    id: '11',
    breweryId: '5',
    name: 'Brooklyn Lager T-Shirt',
    slug: 'brooklyn-lager-tshirt',
    description: 'Classic Brooklyn Lager logo tee in vintage style.',
    category: 'apparel',
    type: 'tshirt',
    price: 26.99,
    images: ['/products/brooklyn-tshirt.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Navy'],
    inStock: true,
    stockQuantity: 125,
  },
  {
    id: '12',
    breweryId: '5',
    name: 'Brooklyn Brewery Mug',
    slug: 'brooklyn-mug',
    description: 'Heavy glass mug with Brooklyn Brewery logo.',
    category: 'glassware',
    type: 'mug',
    price: 18.99,
    images: ['/products/brooklyn-mug.jpg'],
    inStock: true,
    stockQuantity: 90,
  },

  // The Alchemist
  {
    id: '13',
    breweryId: '6',
    name: 'Heady Topper Beanie',
    slug: 'heady-topper-beanie',
    description: 'Warm knit beanie with Heady Topper embroidery.',
    category: 'apparel',
    type: 'beanie',
    price: 24.99,
    images: ['/products/alchemist-beanie.jpg'],
    colors: ['Black', 'Gray', 'Green'],
    inStock: true,
    stockQuantity: 70,
  },
  {
    id: '14',
    breweryId: '6',
    name: 'The Alchemist Sticker Pack',
    slug: 'alchemist-stickers',
    description: 'Pack of 10 vinyl stickers featuring various Alchemist beers.',
    category: 'accessories',
    type: 'sticker',
    price: 9.99,
    images: ['/products/alchemist-stickers.jpg'],
    inStock: true,
    stockQuantity: 250,
  },

  // BrewDog
  {
    id: '15',
    breweryId: '7',
    name: 'Punk IPA Hoodie',
    slug: 'punk-ipa-hoodie',
    description: 'Rebellious hoodie with Punk IPA graphics.',
    category: 'apparel',
    type: 'hoodie',
    price: 59.99,
    images: ['/products/brewdog-hoodie.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy'],
    inStock: true,
    stockQuantity: 85,
    featured: true,
  },
  {
    id: '16',
    breweryId: '7',
    name: 'BrewDog Pint Glass',
    slug: 'brewdog-pint-glass',
    description: 'Official BrewDog branded pint glass.',
    category: 'glassware',
    type: 'pint-glass',
    price: 11.99,
    images: ['/products/brewdog-glass.jpg'],
    inStock: true,
    stockQuantity: 180,
  },

  // Paulaner
  {
    id: '17',
    breweryId: '8',
    name: 'Paulaner Traditional Stein',
    slug: 'paulaner-stein',
    description: 'Authentic 1L ceramic beer stein with Paulaner crest.',
    category: 'glassware',
    type: 'mug',
    price: 49.99,
    images: ['/products/paulaner-stein.jpg'],
    inStock: true,
    stockQuantity: 45,
    featured: true,
  },
  {
    id: '18',
    breweryId: '8',
    name: 'Paulaner Oktoberfest T-Shirt',
    slug: 'paulaner-oktoberfest-tshirt',
    description: 'Limited edition Oktoberfest celebration tee.',
    category: 'apparel',
    type: 'tshirt',
    price: 28.99,
    images: ['/products/paulaner-tshirt.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Blue'],
    inStock: true,
    stockQuantity: 60,
  },
];
