import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <Link href="/" className="text-xl font-bold text-[#FE7743]">
        ClearDrive.lk
      </Link>

      <div className="space-x-6 text-sm">
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/features">Features</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
