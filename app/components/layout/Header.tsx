import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
      </nav>
    </header>
  );
}
