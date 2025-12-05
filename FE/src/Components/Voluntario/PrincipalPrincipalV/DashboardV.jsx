import BlogCardVoluntario from "./BlogCardVoluntario";

function DashboardVoluntario() {
  const blogs = [
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
