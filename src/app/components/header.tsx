// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-[#004383] shadow-md">
      <h1 className="text-4xl font-extrabold text-white tracking-wide shadow-lg">Positive Vibes</h1>
      <nav className="flex space-x-12 mr-40">
        <Link href="/" className="text-xl  text-#333 hover:text-[#ff6f61] hover:bg-[#f8f8f8] px-3 py-2 rounded-md transition duration-300">
         Home
        </Link>
        <Link href="/blog" className="text-xl text-#333 hover:text-[#ff6f61] hover:bg-[#f8f8f8] px-3 py-2 rounded-md transition duration-300">
          Blog
        </Link>
        <Link href="/about"  className="text-xl text-#333 hover:text-[#ff6f61] hover:bg-[#f8f8f8] px-3 py-2 rounded-md transition duration-300">
        About
        </Link>
        <Link href="/contact"  className="text-xl text-#333 hover:text-[#ff6f61] hover:bg-[#f8f8f8] px-3 py-2 rounded-md transition duration-300">
         Contact
        </Link>
      </nav>
    </header>
  );
}
