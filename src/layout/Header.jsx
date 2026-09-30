import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useState } from "react";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white text-slate-800">
      <div className="flex items-center justify-between px-6 py-6">
        <h1 className="text-2xl font-bold">
          <Link to="/">Bandage</Link>
        </h1>

        <div className="flex items-center gap-4">
          <button type="button" aria-label="Ara">
            <Search size={20} />
          </button>

          <button type="button" aria-label="Sepet">
            <ShoppingCart size={20} />
          </button>

          <button 
            type="button"
            aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col items-center gap-6 pt-8 pb-12 text-2xl text-gray-500">
          <Link to='/'>Home</Link>
          <Link to='/shop'>Product</Link>
          <Link to='/pricing'>Pricing</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      )}
    </header>
  );
}