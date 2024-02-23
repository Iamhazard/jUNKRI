import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbars/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Junkri",
  description: "A resturant websited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          inter.className
        )}>

        <main className="relative flex flex-col min-h-screen">

          <Navbar />

          {children}


          <Footer />

        </main>
      </body>

    </html>
  );
}

