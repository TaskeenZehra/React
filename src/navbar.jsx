
import '../css/navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-news">
        <h2 className="navbar-title">News</h2>
      </div>
      <div className="navbar-links">
        <Link to="/login" className="navbar-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;