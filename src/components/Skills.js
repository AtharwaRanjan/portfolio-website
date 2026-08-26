function Skills() {
  // Map skill names to logo filenames (place these in public/skills/)
  const skillLogos = [
    { name: "Java", src: "/java.png", alt: "Java" },
    { name: "HTML5", src: "/html5.png", alt: "HTML5" },
    { name: "JavaScript", src: "/js.png", alt: "JavaScript" },
    { name: "Tailwind CSS", src: "/tailwind.png", alt: "Tailwind CSS" },
    { name: "MongoDB", src: "/mongodb.png", alt: "MongoDB" },
    { name: "Express.js", src: "/expressjs.png", alt: "Express.js" },
    { name: "React", src: "/logo192.png", alt: "React" },
    { name: "Node.js", src: "/nodejs.png", alt: "Node.js" },
  ];

  return (
    <section id="skills">
      <h2 className="section-heading">Skills</h2>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          listStyle: "none",
          padding: 0,
          justifyContent: "center",
        }}
      >
        {skillLogos.map((skill) => (
          <li key={skill.name} className="skill-card">
            <img
              src={skill.src}
              alt={skill.alt}
              style={{
                width: "48px",
                height: "48px",
                filter: "var(--skill-logo-filter, none)",
                transition: "filter 0.3s",
              }}
            />
            <span className="skill-tooltip">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Skills;
