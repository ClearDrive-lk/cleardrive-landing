import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClearDrive.lk | Transparent Vehicle Imports",
  description: "ClearDrive.lk is an IIT SDGP project for transparent vehicle importing to Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#111]`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}