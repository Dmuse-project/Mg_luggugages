import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Inter } from "next/font/google";
// import "./globals.css";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "MG Luggages | Premium Travel Boxes & Suitcases",
  description:
    "Discover MG Luggages – premium travel boxes and luxury suitcases designed for style, durability, and convenience. Perfect for business, leisure, and international trips.",
  keywords: [
    "premium luggage",
    "travel boxes",
    "suitcases",
    "MG Luggages",
    "luxury luggage Nigeria",
    "travel bags",
    "durable travel boxes",
    "business travel luggage",
    "high-end suitcases"
  ],
  authors: [{ name: "MG Luggages" }],
  openGraph: {
    title: "MG Luggages | Premium Travel Boxes & Suitcases",
    description:
      "Shop premium travel boxes and stylish suitcases built for durability and elegance. MG Luggages makes every trip unforgettable.",
    url: "https://mgluggages.com",
    siteName: "MG Luggages",
    images: [
      {
        url: "/mg_image-3.jpg", // replace with your hero image
        width: 1200,
        height: 630,
        alt: "MG Luggages Premium Suitcases",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MG Luggages | Premium Travel Boxes & Suitcases",
    description:
      "MG Luggages brings you premium travel boxes and luxury suitcases designed for modern travelers.",
    images: ["/mg_image-3.jpg"], // same as OG image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}


