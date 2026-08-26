function Projects() {
  // Replace these with your real projects!
  const projects = [
    {
      title: "Ecommerce Website- Trendkart",
      description:
        "A full-stack e-commerce web application built with React, featuring product browsing, cart management, user authentication, and a responsive UI.",
      tech: ["React", "Express.js", "Node.js", "MongoDB"],
      link: "https://github.com/AtharwaRanjan/TrendKart",
    },

    {
      title: "Resume Screening System",
      description:
        "An AI-powered resume screening system that analyzes resumes against job descriptions to identify relevant skills and rank candidates efficiently.",
      tech: ["Python", "Machine Learning", "NPL"],
      link: "https://github.com/AtharwaRanjan/resume-screening-system",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience, built with React and styled with Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      link: "https://github.com/AtharwaRanjan/portfolio-website",
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
