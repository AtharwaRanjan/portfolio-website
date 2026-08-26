function Contact() {
  return (
    <section id="contact">
      <h2 className="section-heading">Contact</h2>
      <div className="skill-card" style={{ maxWidth: 520, margin: "0 auto" }}>
        <p style={{ margin: "8px 0" }}>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:hendrix10jul@gmail.com"
            style={{
              color: "#42a5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            hendrix10jul@gmail.com
          </a>
        </p>
        <p style={{ margin: "8px 0" }}>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/atharwaranjan/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#42a5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Atharwa-Ranjan-LinkedIn
          </a>
        </p>
        <p style={{ margin: "8px 0" }}>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/AtharwaRanjan"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#42a5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Atharwa-Ranjan-GitHub
          </a>
        </p>
        <a
          href="/AtharwaRanjan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="view-cv-button"
          style={{
            display: "inline-block",
            marginTop: 16,
            padding: "10px 18px",
            backgroundColor: "#42a5f5",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: 6,
          }}
        >
          View CV
        </a>
      </div>
    </section>
  );
}
export default Contact;
