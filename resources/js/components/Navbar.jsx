import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-light shadow z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link to="/" className="font-bold text-xl text-accent">Portofolio</Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/about" className="hover:text-accent">About</Link>
          <Link to="/projects" className="hover:text-accent">Projects</Link>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
        </div>
      </div>
    </nav>
  );
} 