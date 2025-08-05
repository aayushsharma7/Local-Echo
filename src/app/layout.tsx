import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define a CSS variable for Inter
});

export const metadata: Metadata = {
  title: "Local Echo",
  description:
    "Empowering communities to create positive change through collaborative problem-solving and civic engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {" "}
        {/* Use the Inter variable */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
