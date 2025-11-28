import BlogCardVoluntario from "./BlogCardVoluntario";

function DashboardVoluntario() {
  const blogs = [
    {
      category: "Voluntariado",
      title: "Cómo iniciar tu camino como voluntario",
      desc: "Primeros pasos, consejos y oportunidades para comenzar a ayudar.",
      author: "Fundación Vida",
      avatar: "FE/proyecto_fe/src/img/astronaut.png",
    },
    {
      category: "Motivación",
      title: "Testimonios que inspiran",
      desc: "Historias reales de voluntarios que lograron cambios significativos.",
      author: "Red Solidaria",
      avatar: "FE/proyecto_fe/src/img/astronaut.png",
    },
    {
      category: "Aprendizaje",
      title: "Habilidades que desarrollas al ser voluntario",
      desc: "Comunicación, liderazgo, trabajo en equipo y más.",
      author: "Impacto Global",
      avatar: "FE/proyecto_fe/src/img/astronaut.png",
    },
  ];

  return (
    <main className="dashboard">
      {blogs.map((b, index) => (
        <BlogCardVoluntario key={index} {...b} />
      ))}
    </main>
  );
}

export default DashboardVoluntario;
