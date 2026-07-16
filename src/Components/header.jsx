import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* Logo */}
    
          <img
            src="logo.png"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-[#F09818]">
            Home
          </Link>

          <Link to="/about" className="hover:text-[#F09818]">
            About
          </Link>

          <Link to="/courses" className="hover:text-[#F09818]">
            Courses
          </Link>

          <Link to="/blog" className="hover:text-[#F09818]">
            Blog
          </Link>

          <Link to="/contact" className="hover:text-[#F09818]">
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2">
          <Link
            to="/login"
            className="border px-3 py-2 rounded-lg text-sm"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-[#F09818] text-white px-3 py-2 rounded-lg text-sm"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link to="/courses" onClick={() => setIsOpen(false)}>
              Courses
            </Link>

            <Link to="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <Link
              to="/login"
              className="border px-4 py-2 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-[#F09818] text-white px-4 py-2 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;