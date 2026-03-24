function Projects() {
  // Replace these with your real projects!
  const projects = [
    {
      title: "Excel Analysis Platform",
      description:
        "Uploads .xlsx files, parses data, and creates charts using React.",
      tech: ["React", "Chart.js", "XLSX.js"],
      link: "#", // Replace with your GitHub or demo link
    },
    {
      title: "Pokedex App",
      description:
        "Fetches Pokémon data and displays images, names, and stats with interactive UI.",
      tech: ["React", "CSS", "API"],
      link: "#",
    },
    {
      title: "Book Management System",
      description:
        "Java, JSP, Hibernate, and MySQL app to manage books and student marks.",
      tech: ["Java", "Hibernate", "MySQL"],
      link: "#",
    },
  ];

  return (
    <section id="projects">
      <h2 className="section-heading">Projects</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          overflowX: "auto",
          marginTop: "16px",
        }}
      >
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3
              style={{
                fontSize: "1.18rem",
                fontWeight: 700,
                marginBottom: "8px",
                letterSpacing: "0.5px",
                color: "#42a5f5",
                textShadow: "0 2px 8px rgba(66,165,245,0.08)",
              }}
            >
              {proj.title}
            </h3>
            <p>{proj.description}</p>
            <p>
              <strong>Tech: </strong>
              {proj.tech.join(", ")}
            </p>
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
