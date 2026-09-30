import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">
        <Link to="/">Bandage Store</Link>
      </h1>
    </header>
  );
}