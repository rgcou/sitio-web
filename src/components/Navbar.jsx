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
        // Scrolling down
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--hidden' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img 
            src="https://res.cloudinary.com/dqgjcfosx/image/upload/v1756755958/ChatGPT_Image_1_sept_2025_04_43_40_p.m._g3zz70.png" 
            alt="HARMONY - Estudio de Abogados" 
            className="logo-image"
          />
        </div>
        
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu--active' : ''}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link" onClick={closeMobileMenu}>Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link" onClick={closeMobileMenu}>Servicios</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={closeMobileMenu}>Nosotros</a>
          </li>
          <li className="navbar-item">
            <a href="#cases" className="navbar-link" onClick={closeMobileMenu}>Casos</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={closeMobileMenu}>Contacto</a>
          </li>
        </ul>
        
        <div className="navbar-buttons">
          <button className="navbar-btn navbar-btn--primary">Consulta</button>
        </div>
        
        <div 
          className={`navbar-toggle ${isMobileMenuOpen ? 'navbar-toggle--active' : ''}`}
          onClick={toggleMobileMenu}
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
