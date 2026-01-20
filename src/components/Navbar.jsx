import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(v => !v);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--hidden' : ''}`}>
      <div className="navbar-container">
        {/* Brand (sin logo) */}
        <div className="navbar-logo">
          <a href="#hero" className="navbar-brand" onClick={closeMobileMenu}>
            Rob Coutenceau
          </a>
        </div>

        {/* Menu */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu--active' : ''}`}>
          <li className="navbar-item">
            <a href="#hero" className="navbar-link" onClick={closeMobileMenu}>Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link" onClick={closeMobileMenu}>Servicios</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={closeMobileMenu}>Sobre mí</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={closeMobileMenu}>Contacto</a>
          </li>
        </ul>

        {/* Toggle mobile */}
        <div
          className={`navbar-toggle ${isMobileMenuOpen ? 'navbar-toggle--active' : ''}`}
          onClick={toggleMobileMenu}
          role="button"
          tabIndex={0}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

