import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white text-slate-800 p-4 flex items-center justify-between px-6 py-6">
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

        <button type="button" aria-label="Menüyü aç">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}