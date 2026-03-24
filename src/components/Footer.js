import React from "react";

function Footer() {
  return (
    <footer
      className="animated-gradient"
      style={{
        color: "#fff",
        textAlign: "center",
        padding: "18px 0",
        fontSize: "1rem",
        letterSpacing: "1px",
        borderRadius: "0 0 24px 24px",
        marginTop: "32px",
      }}
    >
      &copy; {new Date().getFullYear()} Atharwa Ranjan &mdash; All rights
      reserved.
      <br />
      <span style={{ fontSize: "0.95em" }}>
        Made with <span style={{ color: "#ff5252" }}>❤</span> using React!
      </span>
    </footer>
  );
}

export default Footer;
