import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useState } from "react";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white text-slate-800">
      <div className="flex items-center justify-between px-6 py-6 lg:flex-nowrap lg:gap-8">
        <h1 className="text-2xl font-bold">
          <Link to="/">Bandage</Link>
        </h1>

        <div className="flex items-center gap-4 lg:order-3">
          <button type="button" aria-label="Ara">
            <Search size={20} />
          </button>

          <button type="button" aria-label="Sepet">
            <ShoppingCart size={20} />
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