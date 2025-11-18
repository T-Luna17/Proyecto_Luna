import { useState, useEffect } from "react";

const projects = [
  {
    title: "Reforestación local",
    desc: "Únete a nuestras jornadas de plantación de árboles en parques y zonas rurales.",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Ayuda animal",
    desc: "Apoya refugios y rescates de animales abandonados o en peligro.",
    img: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
  },
  {
    title: "Educación solidaria",
    desc: "Participa en programas educativos para comunidades vulnerables.",
    img: "https://gestionsolidaria.com/wp-content/uploads/2022/03/educacion-adulto2-1023x620.jpeg",
  },
];

export default function Proyectos() {
  const [current, setCurrent] = useState(0);

  // Cambiar automáticamente cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="projects" className="projects">
      <h3>Proyectos destacados</h3>
      <div className="carousel-container">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`project-card ${i === current ? "active" : ""}`}
          >
            <img src={p.img} alt={p.title} />
            <div className="project-info">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
        <button className="carousel-btn prev" onClick={prevProject}>
          ‹
        </button>
        <button className="carousel-btn next" onClick={nextProject}>
          ›
        </button>
      </div>
    </section>
  );
}
