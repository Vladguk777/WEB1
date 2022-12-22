import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Artist Van Gogh</h1>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Biography
            </Link>
          </li>
          <li>
            <Link className="link" to="paint/">
              Paint
            </Link>
          </li>
          <li>
            <Link className="link" to="collect/">
              Collect
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
