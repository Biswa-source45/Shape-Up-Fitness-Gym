import React, { useState } from 'react';
import { Link,NavLink} from 'react-router-dom';
import '../../App.css';
import logo from '../../assets/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black text-white shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-8 py-1 flex items-center justify-between relative z-50">
        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-22 h-22" />
          <span className="text-4xl text-red-600 mainfont font-extrabold tracking-wide hidden md:inline-block">Shape Up</span>
        </div>

        {/* Right: Navigation for desktop */}
        <nav className="hidden md:flex space-x-8 subfont text-sm font-medium">
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "text-red-500 transition" : "hover:text-red-500 transition"
    }
    end
  >
    Home
  </NavLink>
  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? "text-red-500 transition" : "hover:text-red-500 transition"
    }
  >
    About
  </NavLink>
  <NavLink
    to="/services"
    className={({ isActive }) =>
      isActive ? "text-red-500 transition" : "hover:text-red-500 transition"
    }
  >
    Services
  </NavLink>
  <NavLink
    to="/programs"
    className={({ isActive }) =>
      isActive ? "text-red-500 transition" : "hover:text-red-500 transition"
    }
  >
    Programs
  </NavLink>
  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive ? "text-red-500 transition" : "hover:text-red-500 transition"
    }
  >
    Contact Us
  </NavLink>
</nav>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-700 transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 visible py-4' : 'opacity-0 invisible h-0'} flex flex-col items-center space-y-4 subfont text-sm font-medium z-40`}>
        <Link to="/" className="hover:text-red-500 transition" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="hover:text-red-500 transition" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/services" className="hover:text-red-500 transition" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/programs" className="hover:text-red-500 transition" onClick={() => setMenuOpen(false)}>Programs</Link>
        <Link to="/contact" className="hover:text-red-500 transition" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </div>
    </header>
  );
}

export default Header;
