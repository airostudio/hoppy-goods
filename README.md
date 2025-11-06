# Hoppy Goods - Australian Brewery Merchandise Webstore

A modern e-commerce platform for Australian brewery merchandise. Browse and shop authentic merch from craft breweries across all Australian states and territories.

## 🇦🇺 Australian Focus

This webstore specializes in merchandise from Australia's finest craft breweries, including:

- **Young Henrys** (Newtown, NSW)
- **Stone & Wood Brewing** (Byron Bay, NSW)
- **Mountain Culture Beer Co** (Blue Mountains, NSW) - Australia's #1 Rated Brewery
- **Balter Brewing** (Currumbin, QLD) - Founded by Aussie surf legends
- **Green Beacon Brewing** (Brisbane, QLD)
- **Pirate Life Brewing** (Port Adelaide, SA)
- **Big Shed Brewing** (Adelaide, SA)
- **Moon Dog Craft Brewery** (Collingwood, VIC)
- **Little Creatures Brewing** (Fremantle, WA)
- **BentSpoke Brewing Co** (Braddon, ACT)

## Features

### 🗺️ Geographic Navigation
- Browse by Australian State → City → Brewery
- All 7 states/territories covered (NSW, QLD, SA, VIC, WA, TAS, ACT)
- 13 cities/areas from Sydney to Perth, Melbourne to Brisbane

### 🛍️ E-Commerce Features
- 26 products across 10 breweries
- Shopping cart with persistent storage (Zustand)
- Complete checkout flow
- Size and color selection
- Real-time stock tracking
- Featured products showcase

### 📦 Product Categories
- **Apparel**: T-shirts, hoodies, hats, beanies, jackets, cycling jerseys
- **Glassware**: Pint glasses, tulip glasses, mugs
- **Accessories**: Tinnie coolers, stubby holders, caps, bottle openers
- **Home Goods**: Coasters sets
- **Collectibles**: Limited editions

### 🎨 User Interface
- Responsive design (mobile-first)
- Australian-themed color scheme (green & gold)
- Intuitive state-based navigation
- Product search functionality

### 🔧 Admin Panel
- Dashboard with brewery statistics
- Product management interface
- State and city overview
- Inventory tracking

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand (shopping cart)
- **Icons**: Lucide React
- **Data**: Mock data structure (ready for real brewery data)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hoppy-goods
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📸 Adding Real Images from Brewery Websites

The webstore is currently set up with placeholder emoji images. Here's how to add real product images from brewery websites:

### Current Image Structure

Products have an `images` array field:
```typescript
{
  id: '1',
  name: 'Young Henrys Classic T-Shirt',
  images: [], // Currently empty or with placeholder
  // ... other fields
}
```

### Method 1: Direct URLs from Brewery Websites

If brewery websites allow hotlinking (check their terms of service):

1. Visit the brewery's merchandise page
2. Right-click on a product image → "Copy Image Address"
3. Add the URL to the product's `images` array in `lib/data/mock-data.ts`

```typescript
{
  id: '1',
  breweryId: '1',
  name: 'Young Henrys Classic T-Shirt',
  images: ['https://younghenrys.com/path/to/tshirt-image.jpg'],
  // ... other fields
}
```

### Method 2: Download and Host Locally

For better performance and reliability:

1. **Download images** from brewery websites (with permission)
2. **Optimize images** (resize, compress)
3. **Save to** `/public/products/` directory:
   ```
   /public/products/
   ├── young-henrys-tshirt.jpg
   ├── balter-xpa-tshirt.jpg
   ├── stone-wood-hoodie.jpg
   └── ...
   ```
4. **Update product data**:
   ```typescript
   images: ['/products/young-henrys-tshirt.jpg']
   ```

### Method 3: Use a CDN (Recommended for Production)

1. Upload images to a CDN (Cloudinary, AWS S3, Vercel Blob, etc.)
2. Reference CDN URLs in product data:
   ```typescript
   images: ['https://your-cdn.com/products/young-henrys-tshirt.jpg']
   ```

### Brewery Merchandise Websites

Here are the official merchandise stores for research:

- **Balter**: https://shop.balter.com.au/
- **Mountain Culture**: https://mountainculture.com.au/collections/merch
- **Stone & Wood**: https://stoneandwood.com.au/ (Shop section)
- **Young Henrys**: https://younghenrys.com/shop
- **Pirate Life**: https://shop.piratelife.com.au/
- **BentSpoke**: https://www.bentspokebrewing.com.au/

**Important Legal Notes:**
- Always obtain permission before using brewery images
- Respect copyright and trademark laws
- Consider partnering with breweries for official image access
- Some breweries may provide image assets for retailers

### Image Best Practices

- **Format**: JPG for photos, PNG for logos with transparency
- **Size**: 800x800px to 1200x1200px for product images
- **Optimization**: Use tools like TinyPNG or ImageOptim
- **Alt text**: Currently uses emoji placeholders; update for accessibility
- **Multiple images**: Products support multiple images (different angles)

## Project Structure

```
hoppy-goods/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── admin/                    # Admin dashboard
│   ├── brewery/[slug]/          # Individual brewery pages
│   ├── browse/                   # Geographic navigation
│   │   └── [country]/           # Australia
│   │       └── [state]/         # NSW, QLD, SA, VIC, etc.
│   │           └── [area]/      # Sydney, Brisbane, etc.
│   ├── cart/                     # Shopping cart
│   ├── checkout/                 # Checkout flow
│   ├── product/[slug]/          # Individual product pages
│   ├── products/                 # All products catalog
│   └── search/                   # Product search
├── components/                   # Reusable components
│   ├── header.tsx               # Site header
│   ├── footer.tsx               # Site footer
│   └── product-card.tsx         # Product display card
├── lib/                         # Utilities and data
│   ├── data/
│   │   └── mock-data.ts        # Australian brewery data
│   ├── store/
│   │   └── cart-store.ts       # Zustand cart store
│   └── utils.ts                 # Helper functions
├── types/                        # TypeScript definitions
│   └── index.ts                 # Core types
└── public/                       # Static assets
    └── products/                # Product images (add here)
```

## Data Structure

### Australian Geographic Hierarchy
```
Australia → State/Territory → City/Area → Brewery → Products
```

### Example: Adding a New Brewery

1. Add to `areas` array in `lib/data/mock-data.ts`:
```typescript
{ id: '14', name: 'Hobart', slug: 'hobart', stateId: '6' }, // Tasmania
```

2. Add brewery:
```typescript
{
  id: '11',
  name: 'Moo Brew',
  slug: 'moo-brew',
  description: 'Tasmania\'s iconic craft brewery.',
  areaId: '14',
  website: 'https://moobrew.com.au',
  established: 2005,
}
```

3. Add products with real images:
```typescript
{
  id: '27',
  breweryId: '11',
  name: 'Moo Brew T-Shirt',
  slug: 'moo-brew-tshirt',
  description: 'Classic Moo Brew design.',
  category: 'apparel',
  type: 'tshirt',
  price: 39.00,
  images: ['/products/moo-brew-tshirt.jpg'], // Your downloaded image
  sizes: ['S', 'M', 'L', 'XL'],
  inStock: true,
  stockQuantity: 50,
}
```

## Business Model

**Ad Hoc Purchasing:**
1. Customer orders through website
2. You purchase from brewery's online store
3. Ship to customer (or arrange dropshipping)
4. Your markup covers costs + profit

**Pricing:**
- Products priced in AUD
- Free shipping over $100 (recommended)
- Consider GST implications

## Future Enhancements

- [ ] Add real product images from brewery websites
- [ ] Implement actual payment processing (Stripe/PayPal)
- [ ] User authentication and accounts
- [ ] Order history and tracking
- [ ] Email notifications (order confirmations)
- [ ] Brewery partnerships for official access
- [ ] Real-time inventory sync with breweries
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Newsletter/mailing list
- [ ] SEO optimization for Australian searches
- [ ] Google Analytics/tracking
- [ ] Multi-currency (AUD, USD)

## Legal Considerations for Australia

- **Obtain brewery permissions** for using logos and images
- **Trademark compliance**: Respect brewery trademarks
- **ABN/ACN**: Register your business
- **GST**: Register if turnover exceeds threshold
- **Consumer Law**: Comply with ACL (Australian Consumer Law)
- **Privacy**: Handle customer data per Privacy Act
- **Terms of Service**: Create clear T&Cs
- **Refund Policy**: Comply with Australian consumer guarantees

## Brewery Research Sources

- [Man of Many - Best Australian Craft Breweries](https://manofmany.com/lifestyle/best-australian-craft-breweries)
- [GABS Hottest 100 Australian Craft Beers](https://www.gabsfestival.com/hottest100)
- Individual brewery websites (linked above)
- Beer Cartel, Purvis Beer (retailers for product research)

## Support & Development

For questions or issues:
- Check brewery websites for official merchandise
- Review Next.js documentation for technical issues
- Australian craft beer community forums for brewery info

---

Built with 🍺 for Australian craft beer enthusiasts

**Note**: This is a prototype webstore. Prices, images, and availability are sample data. Contact breweries directly for actual merchandise purchasing and partnership opportunities.
