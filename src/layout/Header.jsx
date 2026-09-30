import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, Phone, Mail, UserRound, Heart } from 'lucide-react';
import { useState } from "react";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white text-slate-800">

      <div className="hidden items-center justify-between gap-6 bg-[#252B42] px-6 py-3 text-xs text-white lg:flex">
        <div className="flex items-center gap-4">
          <a href="tel:2255550118" className="flex items-center gap-2">
            <Phone size={14} />
            <span>(225) 555-0118</span>
          </a>

          <a href="mailto:michelle.rivera@example.com" className="flex items-center gap-2">
            <Mail size={14} />
            <span>michelle.rivera@example.com</span>
          </a>
        </div>

        <p className="font-semibold">
          Follow Us and get a chance to win 80% off
        </p>

        <span className="font-semibold">Follow Us:</span>
      </div>

      <div className="flex items-center justify-between px-6 py-6 lg:flex-nowrap lg:gap-8">
        <h1 className="text-2xl font-bold">
          <Link to="/">Bandage</Link>
        </h1>

        <div className="flex items-center gap-4 lg:order-3">
          <Link
            to='/login'
            className='hidden items-center gap-2 text-sm font-semibold text-[#23A6F0] lg:flex'
          >
            <UserRound size={18} />
            <span>Login / Register</span>
          </Link>

          <button type="button" aria-label="Ara" className="text-[#23A6F0]">
            <Search size={20} />
          </button>

          <button
            type="button"
            aria-label="Sepet"
            className="text-[#23A6F0]"
          >
            <ShoppingCart size={20} />
          </button>
          
          <button
            type="button"
            aria-label="Favoriler"
            className="hidden text-[#23A6F0] lg:flex"
          >
            <Heart size={20} />
          </button>

          <button
            type="button"
            className="lg:hidden"
            aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isMenuOpen}
            aria-controls="header-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <nav
        id="header-menu"
        aria-label="Ana menü"
        className={` ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center gap-6 pt-8 pb-12 text-2xl text-gray-500 lg:order-2 lg:flex lg:w-auto lg:flex:row lg:py-0 lg:text-sm`}
      >
        <Link to='/' onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to='/shop' onClick={() => setIsMenuOpen(false)}>Product</Link>
        <Link to='/pricing' onClick={() => setIsMenuOpen(false)}>Pricing</Link>
        <Link to='/contact' onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </nav>

    </header>
  );
}