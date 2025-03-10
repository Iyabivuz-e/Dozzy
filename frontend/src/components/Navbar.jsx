// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <Sun className="h-6 w-6 text-yellow-500" />
            <Moon className="h-6 w-6 text-indigo-700 -ml-2" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-indigo-700 bg-clip-text text-transparent">
            SleepSync
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/quiz"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Take Quiz
          </Link>
          <Link
            to="/statistics"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Statistics
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            About
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-inner rounded-lg p-4 absolute left-4 right-4">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/quiz"
              className="text-gray-700 hover:text-indigo-600 transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Take Quiz
            </Link>
            <Link
              to="/statistics"
              className="text-gray-700 hover:text-indigo-600 transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Statistics
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-indigo-600 transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
