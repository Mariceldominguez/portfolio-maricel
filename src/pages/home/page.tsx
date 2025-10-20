
import { useState } from 'react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('web');
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = {
    web: [
      {
        id: 1,
        title: 'E-commerce Fashion',
        description: 'Plataforma de comercio electrónico para marca de moda femenina con diseño responsive y experiencia de usuario optimizada.',
        image: 'https://readdy.ai/api/search-image?query=modern%20elegant%20fashion%20ecommerce%20website%20design%20with%20clean%20white%20background%2C%20minimalist%20layout%2C%20product%20showcase%2C%20professional%20photography%2C%20soft%20lighting%2C%20contemporary%20web%20interface&width=400&height=300&seq=1&orientation=landscape',
        technologies: ['React', 'Node.js', 'MongoDB'],
        fullDescription: 'Desarrollo completo de una plataforma de e-commerce especializada en moda femenina. El proyecto incluye un sistema de gestión de productos, carrito de compras, pasarela de pagos integrada y panel de administración. Se implementó un diseño responsive que garantiza una experiencia óptima en todos los dispositivos.',
        features: ['Catálogo de productos interactivo', 'Sistema de filtros avanzados', 'Carrito de compras persistente', 'Pasarela de pagos segura', 'Panel de administración', 'Diseño responsive'],
        demoUrl: '#',
        githubUrl: '#'
      },
      {
        id: 2,
        title: 'Portfolio Creativo',
        description: 'Sitio web portfolio para artista visual con galería interactiva y animaciones suaves.',
        image: 'https://readdy.ai/api/search-image?query=creative%20portfolio%20website%20design%20with%20artistic%20layout%2C%20gallery%20showcase%2C%20modern%20typography%2C%20clean%20white%20background%2C%20professional%20presentation%2C%20elegant%20visual%20hierarchy&width=400&height=300&seq=2&orientation=landscape',
        technologies: ['Vue.js', 'CSS3', 'JavaScript'],
        fullDescription: 'Portfolio personal para artista visual que incluye una galería interactiva con efectos de transición suaves, sistema de categorización de obras y formulario de contacto integrado. El diseño enfatiza la presentación visual del trabajo artístico.',
        features: ['Galería interactiva', 'Animaciones CSS personalizadas', 'Sistema de categorías', 'Lightbox para imágenes', 'Formulario de contacto', 'Optimización SEO'],
        demoUrl: '#',
        githubUrl: '#'
      },
      {
        id: 3,
        title: 'App Wellness',
        description: 'Aplicación web para bienestar y meditación con interfaz intuitiva y diseño relajante.',
        image: 'https://readdy.ai/api/search-image?query=wellness%20meditation%20app%20interface%20design%20with%20calming%20colors%2C%20peaceful%20layout%2C%20modern%20UI%20elements%2C%20clean%20white%20background%2C%20serene%20atmosphere%2C%20professional%20mobile%20app%20design&width=400&height=300&seq=3&orientation=landscape',
        technologies: ['React Native', 'Firebase', 'TypeScript'],
        fullDescription: 'Aplicación de bienestar que ofrece sesiones de meditación guiada, seguimiento de hábitos saludables y comunidad de usuarios. Incluye reproductor de audio personalizado, sistema de notificaciones y sincronización en la nube.',
        features: ['Sesiones de meditación guiada', 'Seguimiento de progreso', 'Reproductor de audio', 'Sistema de notificaciones', 'Comunidad de usuarios', 'Sincronización en la nube'],
        demoUrl: '#',
        githubUrl: '#'
      }
    ],
    branding: [
      {
        id: 4,
        title: 'Identidad Corporativa Spa',
        description: 'Desarrollo completo de marca para spa de lujo incluyendo logo, paleta de colores y aplicaciones.',
        image: 'https://readdy.ai/api/search-image?query=luxury%20spa%20branding%20design%20with%20elegant%20logo%2C%20sophisticated%20color%20palette%2C%20premium%20brand%20identity%2C%20clean%20white%20background%2C%20professional%20presentation%2C%20minimalist%20aesthetic&width=400&height=300&seq=4&orientation=landscape',
        technologies: ['Illustrator', 'Photoshop', 'InDesign'],
        fullDescription: 'Creación integral de identidad visual para spa de lujo, incluyendo diseño de logotipo, paleta de colores, tipografías corporativas y aplicaciones en diversos materiales. El proyecto abarcó desde tarjetas de presentación hasta señalética interior.',
        features: ['Diseño de logotipo', 'Manual de identidad', 'Paleta de colores', 'Tipografías corporativas', 'Aplicaciones impresas', 'Señalética'],
        demoUrl: '#',
        githubUrl: '#'
      },
      {
        id: 5,
        title: 'Marca Personal Coach',
        description: 'Creación de identidad visual para coach de vida con enfoque en empoderamiento femenino.',
        image: 'https://readdy.ai/api/search-image?query=personal%20coach%20branding%20design%20with%20empowering%20feminine%20elements%2C%20professional%20logo%20design%2C%20inspiring%20color%20scheme%2C%20clean%20white%20background%2C%20modern%20brand%20identity&width=400&height=300&seq=5&orientation=landscape',
        technologies: ['Figma', 'Illustrator', 'Canva'],
        fullDescription: 'Desarrollo de marca personal para coach especializada en empoderamiento femenino. El proyecto incluyó la creación de una identidad visual que transmite confianza, profesionalismo y calidez, aplicada en materiales digitales y físicos.',
        features: ['Identidad visual completa', 'Templates para redes sociales', 'Material promocional', 'Presentaciones corporativas', 'Papelería empresarial', 'Guía de uso de marca'],
        demoUrl: '#',
        githubUrl: '#'
      }
    ],
    ui: [
      {
        id: 6,
        title: 'App Finanzas Personales',
        description: 'Diseño de interfaz para aplicación de gestión financiera personal con dashboard intuitivo.',
        image: 'https://readdy.ai/api/search-image?query=personal%20finance%20app%20UI%20design%20with%20clean%20dashboard%2C%20modern%20interface%20elements%2C%20professional%20charts%20and%20graphs%2C%20white%20background%2C%20intuitive%20user%20experience%20design&width=400&height=300&seq=6&orientation=landscape',
        technologies: ['Figma', 'Sketch', 'Principle'],
        fullDescription: 'Diseño UX/UI completo para aplicación de finanzas personales que incluye dashboard principal, sistema de categorización de gastos, gráficos interactivos y herramientas de planificación financiera. Se realizó investigación de usuarios y testing de usabilidad.',
        features: ['Dashboard interactivo', 'Gráficos y estadísticas', 'Categorización automática', 'Planificación de presupuestos', 'Notificaciones inteligentes', 'Modo oscuro'],
        demoUrl: '#',
        githubUrl: '#'
      },
      {
        id: 7,
        title: 'Plataforma Educativa',
        description: 'Interfaz de usuario para plataforma de cursos online con enfoque en usabilidad y accesibilidad.',
        image: 'https://readdy.ai/api/search-image?query=educational%20platform%20UI%20design%20with%20modern%20learning%20interface%2C%20clean%20course%20layout%2C%20professional%20educational%20design%2C%20white%20background%2C%20user-friendly%20navigation&width=400&height=300&seq=7&orientation=landscape',
        technologies: ['Adobe XD', 'Figma', 'InVision'],
        fullDescription: 'Diseño de experiencia de usuario para plataforma educativa online que facilita el aprendizaje a distancia. Incluye sistema de cursos, seguimiento de progreso, foros de discusión y herramientas de evaluación, todo con enfoque en accesibilidad.',
        features: ['Catálogo de cursos', 'Reproductor de video integrado', 'Sistema de evaluaciones', 'Foros de discusión', 'Seguimiento de progreso', 'Certificaciones'],
        demoUrl: '#',
        githubUrl: '#'
      }
    ]
  };


  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };



  const scrollToProjects = () => {
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold text-pink-600" style={{ fontFamily: '"Pacifico", serif' }}>
              Maricel
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-[#111111] font-medium hover:text-[#E91E63] transition-colors cursor-pointer">Inicio</a>
              <a href="#sobre-mi" className="text-[#111111] font-medium hover:text-[#E91E63] transition-colors cursor-pointer">Sobre mí</a>
              <a href="#experiencia" className="text-[#111111] font-medium hover:text-[#E91E63] transition-colors cursor-pointer">Experiencia</a>
              <a href="#proyectos" className="text-[#111111] font-medium hover:text-[#E91E63] transition-colors cursor-pointer">Proyectos</a>
              <a href="#contacto" className="text-[#111111] font-medium hover:text-[#E91E63] transition-colors cursor-pointer">Contacto</a>
            </div>

            <button className="md:hidden">
              <i className="ri-menu-line text-2xl text-gray-700"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20feminine%20workspace%20with%20soft%20pastel%20pink%20and%20lavender%20tones%2C%20delicate%20floral%20elements%2C%20dreamy%20lighting%2C%20minimalist%20desk%20setup%2C%20romantic%20aesthetic%2C%20professional%20photography%2C%20clean%20white%20background%20blending%20with%20soft%20pink%20hues&width=1920&height=1080&seq=8&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-white/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="text-left">
            <div className="mb-6">
              <span className="text-pink-1000 text-lg font-medium">¡Hola!</span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-2">
                Soy <span className="text-pink-500">Maricel</span>
              </h1>
            </div>
            <p className="text-xl text-black mb-8 leading-relaxed">
              Estudiante de Diseño y Programación Web. <br />
              Creo sitios web con una mirada estética y funcional, combinando diseño visual y desarrollo front-end.
            </p>


            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all whitespace-nowrap cursor-pointer shadow-lg"
              >
                Ver mi trabajo
              </button>
            
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="img/foto3.jpg"
                  alt="Maricel Domínguez - Diseñadora UX/UI"
                  className="w-full h-full object-contain bg-white"
                  style={{ objectPosition: 'center top' }}
                />



              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                <i className="ri-palette-line text-2xl text-pink-500"></i>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="ri-code-line text-xl text-purple-500"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="py-0 bg-[#FFF9F9]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2C2C2C] mb-8">Sobre mí</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Texto Izquierdo */}
            <div>
              <p className="text-lg text-[#2C2C2C] mb-6 leading-relaxed">
                Soy estudiante de <span className="text-[#E91E63] font-medium">Diseño y Programación Web</span>,
                con interés en el diseño de marca, la ilustración y el diseño digital.
              </p>

              <p className="text-lg text-[#2C2C2C] mb-6 leading-relaxed">
                Me apasiona combinar el diseño estético con el desarrollo técnico.
                Disfruto crear sitios web con una mirada funcional y visualmente coherente,
                que comuniquen identidad y propósito.
              </p>

              <p className="text-lg text-[#2C2C2C] mb-6 leading-relaxed">
                Mi objetivo es seguir creciendo profesionalmente en el campo del diseño digital,
                donde cada proyecto represente una oportunidad para aprender, crear y conectar con personas.
              </p>

              {/* Etiquetas principales */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-gradient-to-r from-[#F8BBD0] to-[#F3E5F5] text-[#E91E63] px-4 py-2 rounded-full text-sm shadow-sm">
                  Diseño Web
                </span>
                <span className="bg-gradient-to-r from-[#E1BEE7] to-[#F8BBD0] text-[#E91E63] px-4 py-2 rounded-full text-sm shadow-sm">
                  Desarrollo Front-End
                </span>
                <span className="bg-gradient-to-r from-[#FCE4EC] to-[#E1BEE7] text-[#E91E63] px-4 py-2 rounded-full text-sm shadow-sm">
                  Diseño Digital
                </span>
              </div>
            </div>


            {/* Barra de habilidades */}
            <div className="space-y-6">
              {[
                { name: "HTML/CSS", level: 95 },
                { name: "JavaScript", level: 90 },
                { name: "React", level: 88 },
                { name: "UI/UX Design", level: 92 },
                { name: "Figma", level: 85 },
                { name: "Adobe Creative Suite", level: 87 },
                { name: "Node.js", level: 80 },
                { name: "Bootstrap", level: 82 },
                { name: "WordPress", level: 85 },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#2C2C2C] font-medium">{skill.name}</span>
                    <span className="text-[#E91E63] font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: `${skill.level}%`,
                        background: "linear-gradient(to right, #E91E63, #F8BBD0)",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experiencia"
        className="py-20 bg-gradient-to-br from-[#FCE4EC] to-[#F3E5F5]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Experiencia</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#E91E63] to-[#F8BBD0] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Diseño Web Profesional */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: "#FAD1E8", border: "2px solid #F48FB1" }}
              >
                <i className="ri-window-line text-2xl" style={{ color: "#E91E63" }}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Diseño Web Profesional
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Diseño y desarrollo sitios web modernos, adaptables y visualmente coherentes,
                combinando estética y funcionalidad para lograr una experiencia digital atractiva.
              </p>
            </div>

            {/* Desarrollo Frontend */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: "#FAD1E8", border: "2px solid #F48FB1" }}
              >
                <i className="ri-code-line text-2xl" style={{ color: "#E91E63" }}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Desarrollo Frontend
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Transformo diseños en código limpio, funcional y adaptable. Creo interfaces modernas
                que garantizan una experiencia de usuario fluida y profesional.
              </p>
            </div>

            {/* Consultoría Digital */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: "#FAD1E8", border: "2px solid #F48FB1" }}
              >
                <i className="ri-lightbulb-line text-2xl" style={{ color: "#E91E63" }}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Consultoría Digital
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Asesoro en estrategias digitales integrales para potenciar la presencia online,
                optimizar sitios web y mejorar la experiencia del usuario en cada interacción.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mis Proyectos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#E91E63] to-[#F8BBD0] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Landing page inspirada en la elegancia de la marca",
                description:
                  "Diseño web minimalista y sofisticado centrado en la presentación visual de productos premium. Ideal para marcas de moda o lujo.",
image: `${import.meta.env.BASE_URL}img/proyecto1.png`,

              },
              {
                id: 2,
                title: "Sitio web de viajes con diseño moderno y adaptable",
                description:
                  "Plataforma visual dinámica con enfoque en la experiencia del usuario y navegación fluida entre destinos turísticos.",
image: `${import.meta.env.BASE_URL}img/proyecto2.png`,
              },
              {
                id: 3,
                title: "Página de destino elegante para joyería de lujo",
                description:
                  "Landing page visualmente refinada, con tipografía elegante y un estilo moderno enfocado en piezas exclusivas.",
image: `${import.meta.env.BASE_URL}img/proyecto3.png`,
              },
              {
                id: 4,
                title: "Landing promocional cálida y funcional para una app de mascotas",
                description:
                  "Diseño amable y colorido que comunica cercanía y bienestar, ideal para marcas vinculadas al cuidado animal.",
image: `${import.meta.env.BASE_URL}img/proyecto4.png`,
              },
              {
                id: 5,
                title: "Landing page institucional para estudio de abogados",
                description:
                  "Sitio corporativo profesional con identidad sobria y estructura clara, diseñado para transmitir confianza y profesionalismo.",
image: `${import.meta.env.BASE_URL}img/proyecto5.png`,
              },
              {
                id: 6,
                title: "Landing page sobre bienestar y naturaleza",
                description:
                  "Web inspirada en la conexión con la naturaleza, combinando fotografía propia y diseño orgánico para transmitir calma y equilibrio.",
image: `${import.meta.env.BASE_URL}img/proyecto6.png`,
              },

            ].map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* --- TECNOLOGÍAS Y PROGRAMAS --- */}
      <section id="tecnologias" className="py-20 bg-[#FFF9F9]">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-[#2C2C2C] mb-10 text-center">
            Tecnologías y programas que domino
          </h3>

          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
              <h4 className="text-xl font-semibold text-[#E91E63] mb-4">
                Lenguajes de programación
              </h4>
              <ul className="space-y-2 text-[#2C2C2C]">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#E91E63] mb-4">
                Herramientas y entornos
              </h4>
              <ul className="space-y-2 text-[#2C2C2C]">
                <li>Visual Studio Code</li>
                <li>GitHub</li>
                <li>WordPress</li>
                <li>Vercel</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#E91E63] mb-4">
                Diseño y edición
              </h4>
              <ul className="space-y-2 text-[#2C2C2C]">
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Figma</li>
                <li>Canva</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#E91E63] mb-4">
                Programas de oficina
              </h4>
              <ul className="space-y-2 text-[#2C2C2C]">
                <li>Microsoft Word</li>
                <li>Microsoft PowerPoint</li>
                <li>Microsoft Excel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contacto" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-gray-300 text-lg">
              Trabajemos juntos para crear algo increíble
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Izquierda */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                “Combinemos diseño y código para crear experiencias con identidad.”
              </h3>

              <p className="text-gray-300 mb-8 leading-relaxed italic">
                “Diseño y desarrollo con alma digital.”
              </p>

              <div className="space-y-5">
                {/* GitHub */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-github-fill text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a
                      href="https://github.com/Mariceldominguez"
                      target="_blank"
                      className="text-gray-300 hover:text-pink-400 transition-colors"
                    >
                      github.com/Mariceldominguez
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-whatsapp-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a
                      href="https://wa.me/543584206714"
                      target="_blank"
                      className="text-gray-300 hover:text-pink-400 transition-colors"
                    >
                      +54 358 420 6714
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:mariceldominguez2021@gmail.com"
                      className="text-gray-300 hover:text-pink-400 transition-colors"
                    >
                      mariceldominguez2021@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-linkedin-box-fill text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/maricel-dominguez-a896542a6"
                      target="_blank"
                      className="text-gray-300 hover:text-pink-400 transition-colors"
                    >
                      linkedin.com/in/maricel-dominguez-a896542a6
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Derecha */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <form
                action="https://formspree.io/f/xgvnqegj"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label className="block font-medium mb-2 text-white">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-pink-500"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-pink-500"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 text-white">Mensaje</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-pink-500 resize-none"
                    placeholder="Contame sobre tu proyecto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
                >
                  Enviar mensaje
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-8 text-center text-white">
        <p>&copy; 2025 Maricel. Todos los derechos reservados.</p>
      </footer>

      {/* Modal de proyectos */}
      {showProjectModal && selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden">
            <button
              onClick={() => setShowProjectModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <i className="ri-close-line text-xl text-gray-600"></i>
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> a22fadb3df4f7ce39a2e0e96a2a2b841182f0aae
