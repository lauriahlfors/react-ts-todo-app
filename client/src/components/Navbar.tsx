import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-menu">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/todo">
          Todo
        </Link>
        <Link className="link" to="/info">
          Info
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
