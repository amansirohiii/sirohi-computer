import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import App from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sirohi Computer",
  description: "Sirohi Computer, Computer Learning Institute in Gulaothi, Bulandshahr, Uttar Pradesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en" className="">
          <body className={inter.className}>
            <Providers>
            <App/>{children}
            <Footer/></Providers>
          </body>
        </html>
  );
}
