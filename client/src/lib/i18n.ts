import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About Me",
        projects: "Projects",
        skills: "Skills",
        certificates: "Certificates",
        contact: "Contact"
      },
      hero: {
        title: "Kinho",
        subtitle: "Programmer & Designer",
        tagline: "Transforming Ideas into Functional Digital Products",
        cta: "View My Work"
      },
      about: {
        title: "About Me",
        description: "I am a 22-year-old Computer Engineering and Technology student and a member of the Ku_kulaDevs startup. I specialize in modern digital solutions, web development using Django, Python, HTML, CSS, Java, and JavaScript, as well as UI/UX Design and full-stack systems. I also have basic knowledge of C++ and Object-Oriented Programming with Java.",
        goal: "My goal is to create impactful digital experiences that solve real-world problems."
      },
      projects: {
        title: "Projects",
        iagromoz: {
          title: "IAgroMoz",
          subtitle: "Smart Agricultural Web System",
          description: "An intelligent platform designed to assist the agricultural community.",
          features: {
            weather: "Climate Recommendations",
            assistance: "User Assistance",
            community: "Agricultural Community",
            marketplace: "Marketplace"
          }
        }
      },
      skills: {
        title: "Skills & Technologies"
      },
      certificates: {
        title: "Certificates & Honors",
        workshop_web: "Web Development Workshop - MozDevz",
        workshop_python: "Programming & Innovation Workshop - MozDevz",
        diploma: "Diploma of Honor"
      },
      contact: {
        title: "Get In Touch",
        phone: "Phone",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn"
      }
    }
  },
  pt: {
    translation: {
      nav: {
        about: "Sobre Mim",
        projects: "Projetos",
        skills: "Habilidades",
        certificates: "Certificados",
        contact: "Contacto"
      },
      hero: {
        title: "Kinho",
        subtitle: "Programador e Designer",
        tagline: "Transformando Ideias em Produtos Digitais Funcionais",
        cta: "Ver Meu Trabalho"
      },
      about: {
        title: "Sobre Mim",
        description: "Sou estudante de Engenharia Informática e Tecnologias, tenho 22 anos e faço parte da startup Ku_kulaDevs. Sou especializado em soluções digitais modernas, desenvolvimento web usando Django, Python, HTML, CSS, Java e JavaScript, Design UI/UX e sistemas full-stack. Possuo conhecimentos básicos em C++ e Programação Orientada a Objetos com Java.",
        goal: "Meu objetivo é criar experiências digitais impactantes que resolvem problemas reais."
      },
      projects: {
        title: "Projetos",
        iagromoz: {
          title: "IAgroMoz",
          subtitle: "Sistema Web Agrícola Inteligente",
          description: "Uma plataforma inteligente desenhada para assistir a comunidade agrícola.",
          features: {
            weather: "Recomendações Climáticas",
            assistance: "Assistência ao Utilizador",
            community: "Comunidade Agrícola",
            marketplace: "Marketplace"
          }
        }
      },
      skills: {
        title: "Habilidades e Tecnologias"
      },
      certificates: {
        title: "Certificados e Diplomas",
        workshop_web: "Workshop de Desenvolvimento Web - MozDevz",
        workshop_python: "Workshop de Programação e Inovação - MozDevz",
        diploma: "Diploma de Honra"
      },
      contact: {
        title: "Contacto",
        phone: "Telefone",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn"
      }
    }
  },
  es: {
    translation: {
      nav: {
        about: "Sobre Mí",
        projects: "Proyectos",
        skills: "Habilidades",
        certificates: "Certificados",
        contact: "Contacto"
      },
      hero: {
        title: "Kinho",
        subtitle: "Programador y Diseñador",
        tagline: "Transformando Ideas en Productos Digitales Funcionales",
        cta: "Ver Mi Trabajo"
      },
      about: {
        title: "Sobre Mí",
        description: "Soy estudiante de Ingeniería Informática y Tecnologías, tengo 22 años y formo parte de la startup Ku_kulaDevs. Me especializo en soluciones digitales modernas, desarrollo web usando Django, Python, HTML, CSS, Java y JavaScript, Diseño UI/UX y sistemas full-stack. Tengo conocimientos básicos en C++ y Programación Orientada a Objetos con Java.",
        goal: "Mi objetivo es crear experiencias digitales impactantes que resuelvan problemas reales."
      },
      projects: {
        title: "Proyectos",
        iagromoz: {
          title: "IAgroMoz",
          subtitle: "Sistema Web Agrícola Inteligente",
          description: "Una plataforma inteligente diseñada para asistir a la comunidad agrícola.",
          features: {
            weather: "Recomendaciones Climáticas",
            assistance: "Asistencia al Usuario",
            community: "Comunidad Agrícola",
            marketplace: "Marketplace"
          }
        }
      },
      skills: {
        title: "Habilidades y Tecnologías"
      },
      certificates: {
        title: "Certificados y Diplomas",
        workshop_web: "Taller de Desarrollo Web - MozDevz",
        workshop_python: "Taller de Programación e Innovación - MozDevz",
        diploma: "Diploma de Honor"
      },
      contact: {
        title: "Contacto",
        phone: "Teléfono",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt", // Default language based on user request language (Portuguese)
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
