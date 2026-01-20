import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsHidden(true); // bajando
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false); // subiendo
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isHidden ? 'navbar--hidden' : ''}`}>
      <div className="navbar-container">
        <a className="navbar-brand" href="#hero">Roberto Coutenceau</a>

        <ul className="navbar-menu">
          <li><a href="#hero" className="navbar-link">Inicio</a></li>
          <li><a href="#services" className="navbar-link">Servicios</a></li>
          <li><a href="#about" className="navbar-link">Sobre mí</a></li>
          <li><a href="#contact" className="navbar-link">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
