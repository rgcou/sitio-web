import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const sectionRefs = {
    hero: useRef(null),
    services: useRef(null),
    about: useRef(null),
    cases: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    setIsVisible(true);
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-elite">
      {/* Hero Section */}
      <section id="hero" ref={sectionRefs.hero} className="hero-elite">
        <div className="hero-background">
          <div className="particles-container" id="particles-js"></div>
          <div className="grid-lines"></div>
        </div>
        
        <div className="hero-content-elite">
          <div className={`hero-text-elite ${isVisible ? 'fade-in-up' : ''}`}>
            <div className="logo-container">
              <img 
                src="https://res.cloudinary.com/dqgjcfosx/image/upload/v1756755958/ChatGPT_Image_1_sept_2025_04_43_40_p.m._g3zz70.png" 
                alt="HARMONY - Estudio de Abogados" 
                className="elite-logo"
              />
            </div>
            <h1 className="hero-title-elite">
              <span className="title-line">PROTECCIÓN LEGAL</span>
              <span className="title-line">EN LA ERA DIGITAL</span>
            </h1>
            <p className="hero-subtitle-elite">
              Defendemos sus datos con precisión legal y tecnológica. 
              Soluciones avanzadas para riesgos digitales complejos.
            </p>
            <div className="hero-buttons-elite">
              <button className="btn-elite-primary" onClick={() => scrollToSection('services')}>
                <span>Explorar Servicios</span>
                <div className="btn-hover-effect"></div>
              </button>
              <button className="btn-elite-secondary" onClick={() => scrollToSection('contact')}>
                <span>Consulta Inmediata</span>
              </button>
            </div>
          </div>
          
          <div className="hero-visual-elite">
            <div className="data-sphere">
              <div className="sphere-core"></div>
              <div className="orbiting-data"></div>
              <div className="orbiting-data delay-1"></div>
              <div className="orbiting-data delay-2"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>DESCUBRE MÁS</span>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={sectionRefs.services} className="services-elite">
        <div className="section-header-elite">
          <h2 className="section-title-elite">SERVICIOS ESPECIALIZADOS</h2>
          <p className="section-subtitle-elite">Soluciones legales avanzadas para entornos digitales complejos</p>
          <div className="title-underline"></div>
        </div>
        
        <div className="services-grid-elite">
          <div className="service-card-elite">
            <div className="service-icon-elite">
              <div className="hexagon"></div>
              <span>🔒</span>
            </div>
            <h3>Protección de Datos</h3>
            <p>Cumplimiento normativo GDPR, LOPD, CCPA y regulaciones internacionales con enfoque preventivo.</p>
            <div className="service-cta">
              <span>Más información</span>
              <div className="arrow-line"></div>
            </div>
          </div>
          
          <div className="service-card-elite">
            <div className="service-icon-elite">
              <div className="hexagon"></div>
              <span>⚖️</span>
            </div>
            <h3>Litigio Digital</h3>
            <p>Representación legal especializada en brechas de seguridad y violaciones de datos personales.</p>
            <div className="service-cta">
              <span>Más información</span>
              <div className="arrow-line"></div>
            </div>
          </div>
          
          <div className="service-card-elite">
            <div className="service-icon-elite">
              <div className="hexagon"></div>
              <span>🌐</span>
            </div>
            <h3>Auditoría Cibernética</h3>
            <p>Evaluación exhaustiva de sistemas y procesos para identificar vulnerabilidades legales y técnicas.</p>
            <div className="service-cta">
              <span>Más información</span>
              <div className="arrow-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-elite">
        <div className="stats-container-elite">
          <div className="stat-item-elite">
            <div className="stat-number-elite" data-count="500">0</div>
            <div className="stat-label-elite">Casos Resueltos</div>
          </div>
          <div className="stat-item-elite">
            <div className="stat-number-elite" data-count="98">0</div>
            <div className="stat-label-elite">Éxito en Litigios</div>
          </div>
          <div className="stat-item-elite">
            <div className="stat-number-elite" data-count="15">0</div>
            <div className="stat-label-elite">Años de Experiencia</div>
          </div>
          <div className="stat-item-elite">
            <div className="stat-number-elite" data-count="360">0</div>
            <div className="stat-label-elite">Protección Integral</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={sectionRefs.about} className="about-elite">
        <div className="about-container-elite">
          <div className="about-content-elite">
            <div className="section-header-elite">
              <h2 className="section-title-elite">ENFOQUE HARMONY</h2>
              <p className="section-subtitle-elite">Fusión perfecta entre expertise legal y tecnológico</p>
              <div className="title-underline"></div>
            </div>
            
            <p className="about-text-elite">
              En HARMONY, redefinimos la protección legal de datos mediante la integración de 
              conocimientos jurídicos profundos con comprensión técnica avanzada. Nuestro equipo 
              multidisciplinario combina abogados especializados y expertos en ciberseguridad 
              para ofrecer soluciones integrales.
            </p>
            
            <div className="approach-list-elite">
              <div className="approach-item-elite">
                <div className="approach-number">01</div>
                <div className="approach-content">
                  <h4>Prevención Estratégica</h4>
                  <p>Implementación de protocolos proactivos para minimizar riesgos legales.</p>
                </div>
              </div>
              
              <div className="approach-item-elite">
                <div className="approach-number">02</div>
                <div className="approach-content">
                  <h4>Respuesta Inmediata</h4>
                  <p>Actuación rápida y decisiva ante incidentes de seguridad y violaciones.</p>
                </div>
              </div>
              
              <div className="approach-item-elite">
                <div className="approach-number">03</div>
                <div className="approach-content">
                  <h4>Innovación Continua</h4>
                  <p>Adaptación constante a la evolución normativa y tecnológica.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual-elite">
            <div className="floating-cube">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face right"></div>
              <div className="cube-face left"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" ref={sectionRefs.contact} className="cta-elite">
        <div className="cta-background-elite">
          <div className="cta-grid"></div>
        </div>
        
        <div className="cta-content-elite">
          <h2>¿LISTO PARA PROTEGER SU EMPRESA?</h2>
          <p>Nuestro equipo de expertos está preparado para evaluar su situación y diseñar una estrategia legal personalizada.</p>
          
          <div className="cta-buttons-elite">
            <button className="btn-elite-primary">
              <span>Solicitar Evaluación</span>
              <div className="btn-hover-effect"></div>
            </button>
            <div className="cta-contact-info">
              <span>O llámenos directamente</span>
              <a href="tel:+34000000000">+34 900 000 000</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
