
"use client";

import Link from "next/link";
import { Heart, Menu, PhoneCall, ShoppingCart, User } from "lucide-react";
import { CiMail } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="font-sans border-b relative">
      {/* Topbar */}
      <div className="bg-violet-600 jon text-white py-2">
        <div className="container mx-auto flex justify-between items-center text-sm px-4 lg:px-0">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <CiMail />
              <p className="hidden sm:block">zistaza23@gmail.com</p>
            </div>
            <div className="hidden sm:flex items-center gap-1">
            <PhoneCall size={16} />
            <p >(1234) 567890</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select className="bg-blue-600 hover:bg-purple-400">
              <option>English</option>
              <option>Spanish</option>
              <option>Urdu</option>
            </select>
            <select className="bg-blue-600 hover:bg-purple-400">
              <option>USD</option>
              <option>EUR</option>
              <option>PKR</option>
            </select>
            <Link href="/Pages/MyAccount" className="hidden sm:flex items-center gap-1 hover:bg-pink-600">
              <p>Login</p>
              <User size={16} />
            </Link>
            <Link   href="/Pages/Error" className="hidden hover:bg-pink-600  sm:flex items-center gap-1">
              <p>Wishlist</p>
              <Heart size={16} />

            </Link>
            <Link href="/Pages/ShoppingCart" className="hidden sm:block hover:bg-pink-600">
            <ShoppingCart size={18} />
            </Link>
            <HiOutlineUser className="block sm:hidden" />
            <AiOutlineHeart className="block sm:hidden" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-4 px-4 lg:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#101750] jon">
            Hekto
          </Link>

          {/* Navigation */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10 md:flex items-center gap-6 flex-col md:flex-row md:items-center`}
          >
            <Link href="/" className="font-medium py-2 md:py-0 px-4 md:px-0 text-pink-600">
              Home<select></select>
            </Link>


<div className="relative group">
{/* Main page Link */}
<Link
    href=""
    className="font-medium py-2 md:py-0 px-4 md:px-0 hover:underline hover:text-pink-600">
    Pages
  </Link>

  {/* Dropdown Menu */}
  <div className="absolute hidden bg-white shadow-lg rounded-lg group-hover:block top-full left-0 mt-2">

  <Link
  href="/Pages/About-us"
  className="block px-2 py-1 text-blue-900 font-bold underline hover:bg-pink-400 whitespace-nowrap">
  About-us
</Link>

<Link
      href="/Pages/FAQ"
      className="block px-2 py-1 text-blue-900 font-bold underline hover:bg-pink-400 whitespace-nowrap">
      FAQ
    </Link>
  

  <Link
      href="/Pages/Ordercomplete"
      className="block px-2 py-1 text-blue-900 font-bold underline hover:bg-pink-400 whitespace-nowrap">
      OrderComplete
    </Link>
  </div>
  </div>
  


            
            <Link href="/Pages/Product" className='font-medium py-2 md:py-0 px-4 md:px-0 hover:underline hover:text-pink-600'>
              Products
            </Link>
            <Link href="/Pages/Blog" className='font-medium py-2 md:py-0 px-4 md:px-0 hover:underline hover:text-pink-600'>
              Blog
            </Link>
            <div className="relative group">
  {/* Main Shop Link */}
  <Link
    href=""
    className="font-medium py-2 md:py-0 px-4 md:px-0 hover:underline hover:text-pink-600">
    Shop
  </Link>

  {/* Dropdown Menu */}
  <div className="absolute hidden bg-white shadow-lg rounded-lg group-hover:block top-full left-0 mt-2">

  <Link
  href="/Pages/ShopList"
  className="block px-2 py-1 text-blue-900 font-bold underline hover:bg-pink-400 whitespace-nowrap">
  ShopList
</Link>

    <Link
      href="/Pages/ShopGridDefault"
      className="block px-2 py-1 text-blue-900 font-bold underline hover:bg-pink-400 whitespace-nowrap">
      ShopGridDefault
    </Link>
  </div>
</div>

            <Link href="/Pages/Contact-us" className='font-medium py-2 md:py-0 px-4 md:px-0 hover:underline hover:text-pink-600'>
            Contact
            </Link>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center">
              <input
                type="search"
                placeholder="Search"
                className="border rounded-l px-4 py-2"
              />
              <button className="rounded-l-none py-[13px] px-4 bg-pink-600 text-white hover:bg-pink-700">
                <FiSearch />
              </button>
            </div>
            <Menu
              className="block md:hidden cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden bg-white shadow px-4 py-2">
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search"
            className="flex-1 border rounded-l px-4 py-2"
          />
          <button className="rounded-l-none py-[13px] px-4 bg-pink-600 text-white hover:bg-pink-700">
            <FiSearch />
          </button>
        </div>
      </div>
    </header>
  );
}


