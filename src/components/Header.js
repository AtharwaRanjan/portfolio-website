function Header() {
  return (
    <header className="d-flex justify-content-center py-3 animated-gradient">
      {" "}
      <ul class="nav nav-pills">
        {" "}
        <li class="nav-item">
          <a href="#about" class="nav-link active" aria-current="page">
            About
          </a>
        </li>{" "}
        <li class="nav-item">
          <a href="#projects" class="nav-link">
            Projects
          </a>
        </li>{" "}
        <li class="nav-item">
          <a href="#skills" class="nav-link">
            Skills
          </a>
        </li>{" "}
        <li class="nav-item">
          <a href="#contact" class="nav-link">
            Contact
          </a>
        </li>{" "}
      </ul>{" "}
    </header>
  );
}
export default Header;
