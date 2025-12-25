# DRK Collection - Shopify Theme

A complete, production-ready Shopify theme for DRK Collection, featuring a black-on-black minimalist design aesthetic. Built to match Figma designs with a consistent dark color scheme and modern UI components.

## Theme Structure

```
DRKCollection/
├── assets/
│   ├── base.css          # Base styles with Figma color scheme
│   └── global.js         # Global JavaScript functionality
├── config/
│   ├── settings_data.json      # Default theme settings
│   └── settings_schema.json    # Theme customization options
├── layout/
│   └── theme.liquid      # Main theme layout
├── sections/
│   ├── header.liquid     # Header with navigation & top video
│   ├── hero.liquid       # Hero section with video support
│   ├── features-benefits.liquid
│   ├── featured-products.liquid
│   ├── travel-edition.liquid
│   ├── yoga-section.liquid
│   ├── latest-blogs.liquid
│   └── footer.liquid
├── snippets/
│   └── meta-tags.liquid
└── templates/
    ├── index.liquid              # Homepage
    ├── product.liquid            # Product page
    ├── collection.liquid         # Collection page
    ├── cart.liquid               # Cart page
    ├── search.liquid             # Search results
    ├── blog.liquid               # Blog listing
    ├── article.liquid            # Blog article
    ├── page.about.liquid         # About page
    ├── page.contact.liquid       # Contact page
    ├── page.checkout.liquid      # Checkout page
    ├── page.help-center.liquid  # Help Center
    ├── page.policies.liquid      # Policies page
    └── customers/
        ├── login.liquid          # Customer login
        ├── register.liquid        # Customer registration
        ├── account.liquid          # Account dashboard
        ├── addresses.liquid       # Address management
        ├── orders.liquid          # Order history
        └── order.liquid           # Order details
```

## Features

### Design

- **Figma-matched color scheme** - Consistent dark theme with `#050505` backgrounds, `#D2D2D2` primary text, `#767676` secondary text
- **Minimalist aesthetic** - Black-on-black design with subtle borders and rounded corners
- **Responsive design** - Mobile-first responsive layouts with breakpoints
- **Video support** - Header and hero sections support background videos
- **Modern UI elements** - Rounded buttons, subtle shadows, smooth transitions

### Sections

1. **Header** - Sticky navigation with mobile menu, search, cart, and account icons
2. **Hero** - Full-width hero with video/image background and CTA buttons
3. **Features/Benefits** - Fast Dispatch, Easy Returns, Secure Checkout, 24/7 Support
4. **Featured Products** - Product grid with filters and sorting
5. **Travel Edition** - Full-width promotional section
6. **Yoga Section** - Two-column layout with content and images
7. **Latest Blogs** - Blog post grid
8. **Footer** - Newsletter signup, navigation links, social icons

### Templates

#### Store Pages

- **Homepage** (`index.liquid`) - Complete homepage with all sections
- **Product** (`product.liquid`) - Product detail page with variants, thumbnails, and add to cart
- **Collection** (`collection.liquid`) - Collection listing with filters and sorting
- **Cart** (`cart.liquid`) - Shopping cart with quantity controls and order summary
- **Search** (`search.liquid`) - Search results for products, articles, and pages

#### Blog Pages

- **Blog** (`blog.liquid`) - Blog listing page with article grid
- **Article** (`article.liquid`) - Individual blog article page with sharing

#### Content Pages

- **About** (`page.about.liquid`) - About page with mission, vision, values
- **Contact** (`page.contact.liquid`) - Contact form with company information
- **Help Center** (`page.help-center.liquid`) - Help center with FAQ categories
- **Policies** (`page.policies.liquid`) - Privacy, Terms, Refund, and Shipping policies
- **Checkout** (`page.checkout.liquid`) - Checkout page with shipping form

#### Customer Account Pages

- **Login** (`customers/login.liquid`) - Customer login page
- **Register** (`customers/register.liquid`) - Customer registration page
- **Account** (`customers/account.liquid`) - Main account dashboard with sidebar navigation
- **Addresses** (`customers/addresses.liquid`) - Address management with add/edit/delete
- **Orders** (`customers/orders.liquid`) - Order history listing
- **Order Detail** (`customers/order.liquid`) - Individual order details with tracking

## Installation

1. Zip the entire theme folder
2. In Shopify Admin, go to **Online Store > Themes**
3. Click **Add theme > Upload zip file**
4. Upload the theme zip file
5. Click **Publish** when ready

## Customization

### Theme Settings

Go to **Online Store > Themes > Customize** to access:

- Typography settings
- Color scheme
- Page width
- Favicon

### Section Settings

Each section can be customized in the theme editor:

- **Header**: Enable/disable top video, set video URL, overlay text
- **Hero**: Set title, description, buttons, background video/image
- **Featured Products**: Select collection, number of products
- **Travel/Yoga Sections**: Set images and collection links
- **Blogs**: Select blog and number of posts
- **Footer**: Newsletter form action

## Video Support

The theme supports videos in two places:

1. **Top Video (Header)**: Can be enabled in header section settings

   - Supports YouTube/Vimeo URLs or uploaded video files
   - Optional poster image and overlay text

2. **Hero Background Video**: Set in hero section settings
   - Supports uploaded video files
   - Adjustable opacity and overlay

## Mobile Menu

The header includes a responsive mobile menu that:

- Opens as a full-screen overlay on mobile devices
- Includes all navigation links
- Can be toggled via hamburger menu icon

## Cart Functionality

- Cart count badge in header
- Full cart page with quantity controls
- Cart notification drawer (snippet included)
- Update and checkout functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Color Scheme

The theme uses a Figma-matched dark color palette:

### Primary Colors

- **Background**: `#050505` - Main page background
- **Secondary Background**: `#141414` - Cards, containers
- **Tertiary Background**: `rgba(255,255,255,0.02)` - Subtle overlays
- **Border**: `rgba(125,125,125,0.5)` - Standard borders
- **Input Border**: `rgba(113,113,113,0.4)` - Form inputs

### Text Colors

- **Primary Text**: `#D2D2D2` - Headings, main content
- **Secondary Text**: `#767676` - Descriptions, labels
- **Muted Text**: `#7D7D7D` - Placeholders, disabled states

### Interactive Elements

- **Button Background**: `rgba(124,124,124,0.27)` - Default buttons
- **Button Hover**: `rgba(124,124,124,0.4)` - Hover state
- **Active State**: `rgba(124,124,124,0.27)` - Active navigation items

## Design System

### Typography

- **Headings**: Uppercase, letter-spacing, font-weight 300
- **Body Text**: Regular weight, optimized line-height
- **Labels**: Uppercase, small font-size, letter-spacing

### Spacing

- **Section Padding**: 80-100px vertical, 20px horizontal
- **Card Padding**: 30-40px
- **Gap Between Elements**: 20-40px

### Border Radius

- **Cards/Containers**: 10px
- **Buttons**: 23px (pill shape)
- **Inputs**: 10px
- **Images**: 10px

### Components

- **Buttons**: Rounded pill shape with subtle background
- **Inputs**: Rounded with transparent background and border
- **Cards**: Subtle background with border and rounded corners
- **Navigation**: Sidebar with active state highlighting

## Notes

- All styles are inline for easy customization and matching Figma designs
- JavaScript is included for interactive features (cart, mobile menu, etc.)
- Theme follows Shopify best practices and Liquid conventions
- All sections are customizable via Shopify theme editor
- Customer account pages include sidebar navigation for easy access
- Color scheme matches Figma SVG designs exactly
- Responsive breakpoints at 768px and 1024px

## Page Templates Overview

### Homepage Sections

1. **Header** - Sticky navigation with mobile menu, search, cart, and account icons
2. **Top Video** (optional) - Full-width video banner at top of page
3. **Hero** - Full-width hero with video/image background and CTA buttons
4. **Features/Benefits** - Fast Dispatch, Easy Returns, Secure Checkout, 24/7 Support
5. **Featured Products** - Product grid with filters (All, New Arrivals, Best Sellers) and sorting
6. **Travel Edition** - Full-width promotional section with background image
7. **Yoga Section** - Two-column layout with content and images
8. **Latest Blogs** - Blog post grid (3 columns)
9. **Footer** - Newsletter signup, navigation links, social icons, DRK pattern background

### Customer Account Features

- **Sidebar Navigation** - Consistent navigation across all account pages
- **Account Information** - View and edit customer details
- **Address Management** - Add, edit, and delete shipping addresses
- **Order History** - View all past orders with status
- **Order Tracking** - Detailed order view with items and shipping info

## Development

### File Organization

- **Sections**: Reusable page sections for homepage
- **Templates**: Full page templates for different content types
- **Snippets**: Reusable code components
- **Assets**: CSS and JavaScript files
- **Config**: Theme settings and customization options

### Customization Guide

1. **Colors**: Update inline styles in templates/sections to change color scheme
2. **Typography**: Modify font-size, font-weight, and letter-spacing in inline styles
3. **Layout**: Adjust grid-template-columns and gap values for spacing
4. **Components**: Update border-radius, padding, and background colors for component styling

## Support

For issues or questions, refer to the Shopify theme documentation or contact support.

---

**DRK Collection** - Black on black, always.
