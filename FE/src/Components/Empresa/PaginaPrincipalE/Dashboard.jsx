import BlogCard from "./BlogCard";

function Dashboard() {
  const blogs = [
    {
      category: "Comunidad",
      title: "Cómo liderar un voluntariado exitoso",
      desc: "Consejos para fortalecer la unión y efectividad del equipo en proyectos sociales.",
      author: "Laura Méndez",
      avatar: "FE/proyecto_fe/src/img/astronaut.png",
      comments: 12,
      views: 2300,
    },
    {
      category: "Sostenibilidad",
      title: "Pequeñas acciones, grandes impactos",
      desc: "Historias de voluntarios que transformaron comunidades con proyectos verdes.",
      author: "Carlos Rojas",
      avatar: "FE/proyecto_fe/src/img/astronaut.png",
      comments: 9,
      views: 1800,
    },
    {
      category: "Inspiración",
      title: "Voluntariado digital: ayudar desde casa",
      desc: "Cómo la tecnología abre puertas para apoyar causas desde cualquier lugar del mundo.",
      author: "Ana Torres",
      avatar: "FE/proyecto_fe/src/img/astronaut.png",
      comments: 15,
      views: 2900,
    },
  ];

  return (
    <main className="dashboard">
      {blogs.map((b, i) => (
        <BlogCard key={i} {...b} />
      ))}
    </main>
  );
}

export default Dashboard