import { useEffect, useState } from "react";

const phrases = ["Atharwa Ranjan", "A Developer"];

function About() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const isComplete = text === currentPhrase;
    const isEmpty = text === "";

    const delay = isDeleting ? 60 : isComplete ? 1500 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
      } else if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
      } else {
        setText((current) =>
          isDeleting
            ? current.slice(0, -1)
            : currentPhrase.slice(0, current.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [isDeleting, phraseIndex, text]);

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
        src="/profile.jpeg"
        alt="Profile"
        style={{
          width: 120,
          borderRadius: "50%",
          marginBottom: 20,
          // Optionally add box-shadow for separation:
          boxShadow: "0 4px 16px rgba(50,50,50,0.12)",
        }}
      />
      <h1 className="typing">
        Hi, I'm <b style={{ color: "cyan" }}>{text}</b>
      </h1>
      <p>
        Computer Science Engineering student skilled in
        <b style={{ color: "red" }}> Java</b>, <b>JavaScript</b>, <b>React</b>,
        and Data Structures & Algorithms. I enjoy building scalable web
        applications and solving real-world problems through clean, efficient
        code.
      </p>
    </div>
  );
}

export default About;
