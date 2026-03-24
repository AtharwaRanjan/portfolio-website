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
            href="https://linkedin.com/in/atharwa-ranjan"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#42a5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            atharwa-ranjan
          </a>
        </p>
        <p style={{ margin: "8px 0" }}>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/hendrix10jul"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#42a5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            hendrix10jul
          </a>
        </p>
      </div>
    </section>
  );
}
export default Contact;
