import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ClearDrive.lk – Transparent Vehicle Imports",
  description:
    "ClearDrive.lk is an IIT SDGP project for transparent vehicle importing to Sri Lanka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-[#EEEEEE] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
