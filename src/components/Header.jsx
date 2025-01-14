export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  );
}

function Logo() {
  return <p>Nebula-X</p>;
}

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <a href="#" className="text-decoration-underline">
            Get Started Now
          </a>
        </li>
        <li>
          <a href="#" className="custom-btn">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
