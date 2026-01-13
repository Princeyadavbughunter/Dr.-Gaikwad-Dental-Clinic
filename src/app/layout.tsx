import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Gaikwad's Dental Clinic | Best Dentist in Dhanori, Pune",
  description: "Dr. Gaikwad's Dental Clinic - Trusted, Affordable & Advanced Dental Care in Dhanori, Pune. Dr. Preyas Gaikwad, Certified Implant Surgeon. Book appointment: 7385444110",
  keywords: "dentist Dhanori, dental clinic Pune, Dr. Preyas Gaikwad, dental implants, root canal treatment, best dentist pune, affordable dental care",
  authors: [{ name: "Dr. Preyas Gaikwad" }],
  creator: "Dr. Gaikwad's Dental Clinic",
  publisher: "Dr. Gaikwad's Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.drgaikwadsdentalpune.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dr. Gaikwad's Dental Clinic | Best Dentist in Dhanori, Pune",
    description: "Certified Implant Surgeon Dr. Preyas Gaikwad. Advanced dental care in Dhanori, Pune.",
    url: 'https://www.drgaikwadsdentalpune.com/',
    siteName: "Dr. Gaikwad's Dental Clinic",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Dr. Gaikwad's Dental Clinic",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Gaikwad's Dental Clinic",
    description: "Advanced dental care with Dr. Preyas Gaikwad in Dhanori, Pune",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
