import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-elite">

      {/* Hero Section */}
      <section id="hero" className="hero-elite">
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
              comercios, pymes y organizaciones civiles en la Ciudad
              de Buenos Aires (consultar por casos en Provincia de Buenos Aires para derivación a
              abogados matriculados en dicha jurisdicción).
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
      <section id="services" className="services-elite">
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
      <section id="about" className="about-elite">
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

      {/* Contact Section */}
      <section id="contact" className="cta-elite">
        <div className="cta-background-elite">
          <div className="cta-grid"></div>
        </div>

        <div className="cta-content-elite">
          <div className="section-header-elite">
            <h2 className="section-title-elite">CONTACTO</h2>
            <div className="title-underline"></div>
          </div>

          <p>Podés escribirme por WhatsApp o por correo electrónico. Respondo a la brevedad.</p>

          <div className="cta-buttons-elite">
            <a
              className="btn-elite-primary"
              href="https://wa.me/5491176016251"
              target="_blank"
              rel="noreferrer"
              aria-label="Contactar por WhatsApp"
            >
              <span>WhatsApp</span>

              <svg
                className="whatsapp-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path
                  fill="#25D366"
                  d="M19.11 17.53c-.27-.13-1.6-.79-1.84-.88-.24-.09-.42-.13-.6.13-.18.27-.69.88-.85 1.06-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.31-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.94.92-.94 2.24 0 1.32.97 2.59 1.11 2.77.13.18 1.9 2.9 4.6 4.07.64.28 1.14.45 1.53.58.64.2 1.23.17 1.69.1.52-.08 1.6-.66 1.83-1.29.22-.63.22-1.17.16-1.29-.07-.12-.24-.2-.51-.34z"
                />
                <path
                  fill="#25D366"
                  d="M16.02 3.2c-7.05 0-12.78 5.73-12.78 12.78 0 2.25.59 4.44 1.72 6.36L3 29l6.86-1.9c1.85 1.01 3.94 1.54 6.16 1.54 7.05 0 12.78-5.73 12.78-12.78S23.07 3.2 16.02 3.2zm0 22.83c-2.05 0-4.03-.55-5.73-1.59l-.41-.24-4.07 1.13 1.09-3.97-.27-.41a10.62 10.62 0 0 1-1.7-5.76c0-5.87 4.78-10.65 10.65-10.65 5.87 0 10.65 4.78 10.65 10.65 0 5.87-4.78 10.65-10.65 10.65z"
                />
              </svg>

              <div className="btn-hover-effect"></div>
            </a>

            <div className="cta-contact-info">
              <span>Correo</span>
              <a href="mailto:rgcou@proton.me">rgcou@proton.me</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (al final del sitio) */}
      <footer className="footer-elite">
        <a href="/politica-de-privacidad.html" target="_blank" rel="noreferrer">
          Política de privacidad
        </a>
      </footer>

    </div>
  );
};

export default Home;
