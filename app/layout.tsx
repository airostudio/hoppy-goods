import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Hoppy Goods - Australian Brewery Merchandise",
  description: "Shop authentic brewery merchandise from 67 craft breweries across Australia. T-shirts, apparel, accessories, and more from NSW, QLD, SA, VIC, WA, TAS, ACT & NT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen bg-gray-50 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
