function About() {
  return (
    <div
      className="aboutSection animated-gradient"
      style={{
        color: "#fff",
        padding: "48px 0",
        textAlign: "center",
        borderRadius: "0 0 24px 24px",
      }}
    >
      <img
        src="/profile.jpg"
        alt="Profile"
        style={{
          width: 120,
          borderRadius: "50%",
          marginBottom: 20,
          // Optionally add box-shadow for separation:
          boxShadow: "0 4px 16px rgba(50,50,50,0.12)",
        }}
      />
      <h1 className="typing">Hi, I'm Atharwa Ranjan</h1>
      <p>
        B.Tech CSE, Frontend Developer, <b style={{ color: "red" }}>Java</b>{" "}
        Enthusiast
      </p>
    </div>
  );
}

export default About;
