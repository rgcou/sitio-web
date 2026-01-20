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
           
            <h1 className="hero-title-elite">
              <span className="title-line">Abogado especializado</span>
              <span className="title-line">en derecho digital y administrativo</span>
            </h1>
            <p className="hero-subtitle-elite">
              Brindo asesoramiento legal en materia de derecho digital, 
              de datos personales y administrativo para personas físicas, 
              comercios, pymes y organizaciones civiles.
            </p>
           
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
        
        
      </section>

      {/* Services Section */}
      <section id="services" ref={sectionRefs.services} className="services-elite">
        <div className="section-header-elite">
          <h2 className="section-title-elite">SERVICIOS ESPECIALIZADOS</h2>
         
          <div className="title-underline"></div>
        </div>
        
        <div className="services-grid-elite">

  <div className="service-card-elite">
    <div className="service-icon-elite">
      <div className="hexagon"></div>
      <span>📹</span>
    </div>
    <h3>Videovigilancia</h3>
    <p>
      Regularización legal de sistemas de cámaras en comercios, consorcios y organizaciones.
      Incluye manual/política, cartelería y gestión de registro/adecuación cuando corresponda.
    </p>
  </div>

  <div className="service-card-elite">
    <div className="service-icon-elite">
      <div className="hexagon"></div>
      <span>🗂️</span>
    </div>
    <h3>Bases de datos</h3>
    <p>
      Relevamiento de bases (clientes, empleados, proveedores), adecuación documental y
      registro/actualización ante la autoridad cuando corresponda, con textos de información
      y procedimiento básico para ejercicio de derechos.
    </p>
  </div>

  <div className="service-card-elite">
    <div className="service-icon-elite">
      <div className="hexagon"></div>
      <span>🌍</span>
    </div>
    <h3>Transferencias internacionales y proveedores</h3>
    <p>
      Revisión de flujos de datos y contratos con proveedores (cloud, SaaS, etc.),
      verificación de requisitos mínimos y documentación contractual necesaria para
      transferir datos personales al exterior.
    </p>
  </div>

  <div className="service-card-elite">
    <div className="service-icon-elite">
      <div className="hexagon"></div>
      <span>🧾</span>
    </div>
    <h3>Ejercicio de derechos</h3>
    <p>
      Representación de personas que necesiten ejercer derechos con relación a datos personales
      en manos de terceros.
    </p>
  </div>

  <div className="service-card-elite">
    <div className="service-icon-elite">
      <div className="hexagon"></div>
      <span>🌐</span>
    </div>
    <h3>Compliance web</h3>
    <p>
      Asesoramiento legal y técnico si necesitás cumplir con estándares argentinos y/o europeos
      en materia de adecuación de tu sitio web.
    </p>
  </div>

  <div className="service-card-elite">
    <div className="service-icon-elite">
      <div className="hexagon"></div>
      <span>⚖️</span>
    </div>
    <h3>Asesoramiento general</h3>
    <p>
      Acompañamiento en cuestiones frecuentes de derecho digital y derecho administrativo,
      con enfoque práctico y verificable.
    </p>
  </div>

</div>
      </section>

      
     {/* About Section */}
<section id="about" ref={sectionRefs.about} className="about-elite">
  <div className="about-container-elite">
    <div className="about-content-elite">
      <div className="section-header-elite">
        <h2 className="section-title-elite">Sobre mí</h2>
        <div className="title-underline"></div>
      </div>

      <div className="about-text-elite">
        <p>Soy abogado con foco en derecho digital, protección de datos personales y derecho administrativo.</p>

        <p>
          A lo largo de mi trayectoria trabajé en el sector público, con experiencia en los tres poderes del Estado
          (Legislativo, Ejecutivo y Judicial), realizando tareas de formulación y emisión de dictámenes en causas
          judiciales, examen de la adecuación normativa del accionar de funcionarios públicos, confección,
          redacción, análisis y asesoramiento de proyectos de ley en materia de derecho administrativo y de
          protección de datos personales, entre otras.
        </p>

        <p>
          Cursé y aprobé todas las materias de la maestría en derecho administrativo, quedándome la tesis pendiente
          debido a que decidí iniciar estudios en Ciencia de Datos en la UBA, carrera que curso actualmente
          (nivel intermedio), lo que me permite traducir problemas legales a procesos concretos y verificables.
        </p>

        <p>
          Hoy acompaño a personas, comercios, pymes y organizaciones en la regularización práctica de situaciones
          frecuentes: videovigilancia, registro y adecuación de bases de datos, transferencias
          internacionales/proveedores y ejercicio de derechos.
        </p>

        <p>
          Mi forma de trabajo se basa en la ética, discreción, sobriedad y el respeto a mis clientes. Cuando el caso
          lo requiere, coordino con especialistas técnicos.
        </p>

        <p>También publico contenidos en YouTube sobre derecho digital y protección de datos.</p>
      </div>
    </div> {/* ✅ cierra about-content-elite */}

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
