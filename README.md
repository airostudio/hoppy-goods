# Hoppy Goods - Beer Merchandise Webstore

A modern e-commerce platform for brewery merchandise from around the world. Browse and shop authentic merch organized by country, state, area, and brewery.

## Features

### 🌍 Geographic Navigation
- Browse breweries by Country → State → Area
- Discover local breweries and their merchandise
- Support for international locations (USA, UK, Germany, Belgium, Czech Republic, and more)

### 🛍️ E-Commerce Features
- Product catalog with detailed pages
- Shopping cart with persistent storage
- Complete checkout flow
- Size and color selection for products
- Real-time stock tracking
- Featured products showcase

### 📦 Product Categories
- **Apparel**: T-shirts, hoodies, hats, beanies, jackets, tank tops
- **Glassware**: Pint glasses, tulip glasses, pilsner glasses, mugs, growlers
- **Accessories**: Keychains, stickers, patches, pins, bottle openers
- **Home Goods**: Coasters, signs, tap handles, flags, posters
- **Collectibles**: Limited editions, vintage items, memorabilia

### 🎨 User Interface
- Responsive design (mobile, tablet, desktop)
- Clean, modern UI with Tailwind CSS
- Intuitive navigation and search
- Product filtering and categorization

### 🔧 Admin Panel
- Dashboard with key statistics
- Product management interface
- Brewery and location overview
- Inventory tracking

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand (shopping cart)
- **Icons**: Lucide React
- **Data**: Mock data (easily replaceable with API/database)

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

## Project Structure

```
hoppy-goods/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── admin/                    # Admin dashboard
│   ├── brewery/[slug]/          # Individual brewery pages
│   ├── browse/                   # Geographic navigation pages
│   │   ├── [country]/           # Country-level pages
│   │   │   ├── [state]/         # State-level pages
│   │   │   │   └── [area]/      # Area-level pages
│   ├── cart/                     # Shopping cart
│   ├── checkout/                 # Checkout flow
│   ├── featured/                 # Featured products
│   ├── product/[slug]/          # Individual product pages
│   ├── products/                 # All products catalog
│   ├── search/                   # Product search
│   ├── layout.tsx               # Root layout with header/footer
│   └── page.tsx                 # Homepage
├── components/                   # Reusable React components
│   ├── footer.tsx               # Site footer
│   ├── header.tsx               # Site header with navigation
│   └── product-card.tsx         # Product display card
├── lib/                         # Utility functions and data
│   ├── data/
│   │   └── mock-data.ts        # Sample data (countries, breweries, products)
│   ├── store/
│   │   └── cart-store.ts       # Zustand cart store
│   └── utils.ts                 # Helper functions
├── types/                        # TypeScript type definitions
│   └── index.ts                 # Core types (Product, Brewery, etc.)
└── README.md                     # This file
```

## Data Structure

### Geographic Hierarchy
```
Country → State/Region → Area/City → Brewery → Products
```

### Core Types

- **Country**: Top-level geographic entity
- **State**: State, province, or region within a country
- **Area**: City or local area within a state
- **Brewery**: Individual brewery with merchandise
- **Product**: Merchandise item from a brewery

### Product Schema

Each product includes:
- Basic info (name, description, price)
- Category and type
- Inventory (stock quantity, availability)
- Options (sizes, colors)
- Images (placeholder support)
- Brewery association

## Customization

### Adding New Data

Replace the mock data in `lib/data/mock-data.ts` with:
- Database queries (PostgreSQL, MongoDB, etc.)
- API calls to external services
- CMS integration (Contentful, Strapi, etc.)

### Styling

The project uses Tailwind CSS. Customize colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Change amber to your brand color
      amber: { ... }
    }
  }
}
```

### Payment Integration

The checkout page (`app/checkout/page.tsx`) is ready for payment integration:
- Stripe
- PayPal
- Square
- Custom payment processor

## Business Model

The webstore operates on an **ad hoc purchasing model**:

1. Customer places order through the website
2. You purchase the item directly from the brewery
3. Ship to customer (or use dropshipping if available)
4. Mark up pricing covers your costs and profit margin

### Considerations

- Build relationships with breweries for bulk/wholesale pricing
- Consider shipping times and set customer expectations
- Handle international shipping and customs
- Implement proper inventory tracking
- Consider holding popular items in stock

## Future Enhancements

- [ ] User authentication and accounts
- [ ] Order history and tracking
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Newsletter signup
- [ ] Social media integration
- [ ] Real-time inventory sync with breweries
- [ ] Multi-currency support
- [ ] Internationalization (i18n)
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Email notifications
- [ ] Advanced filtering (price range, etc.)

## Legal Considerations

- Obtain proper permissions from breweries to sell their merchandise
- Comply with trademark and copyright laws
- Follow e-commerce regulations in your jurisdiction
- Implement proper terms of service and privacy policy
- Age verification for alcohol-related merchandise (if required)
- Handle data protection (GDPR, CCPA, etc.)

## License

This project is provided as-is for educational and commercial use.

## Support

For questions or issues, please open a GitHub issue or contact the development team.

---

Built with ❤️ for craft beer enthusiasts worldwide
