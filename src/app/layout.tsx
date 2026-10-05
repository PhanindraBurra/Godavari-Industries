import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import siteData from '@/content/site-data.json';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteData.company.name} | ${siteData.company.certification}`,
  description: `${siteData.company.subTagline} Official ${siteData.company.partner}. High durability color coated sheets, tile profiles, purlins & industrial roofing in Ravulapalem, Rajahmundry & AP.`,
  keywords: [
    'Godavari Roofing Industries',
    'Roofing Sheets Ravulapalem',
    'JSW Color Coated Sheets Rajahmundry',
    'Tile Profile Roofing Sheets Andhra Pradesh',
    'C Z Purlins',
    'Polycarbonate Sheets',
    'Industrial Roof Shed',
    'Turbo Ventilators',
  ],
  openGraph: {
    title: `${siteData.company.name} | ISO 9001:2015 Certified Roofing`,
    description: siteData.company.subTagline,
    url: 'https://godavariroofing.com/',
    siteName: siteData.company.name,
    images: [
      {
        url: 'https://godavariroofing.com/wp-content/uploads/2024/09/GODAVARI.png',
        width: 1200,
        height: 630,
        alt: 'Godavari Roofing Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

// LocalBusiness JSON-LD Schema
const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteData.company.name,
  image: 'https://godavariroofing.com/wp-content/uploads/2024/09/GODAVARI.png',
  '@id': 'https://godavariroofing.com/',
  url: 'https://godavariroofing.com/',
  telephone: siteData.contact.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '270-1, NH16, Opposite HP Petrol Pump',
    addressLocality: 'Ravulapalem',
    addressRegion: 'Andhra Pradesh',
    postalCode: '533238',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 16.7495,
    longitude: 81.8415,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:30',
    closes: '19:30',
  },
  priceRange: '₹₹',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="bg-[#0B131F] text-slate-100 antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
