import { Link, useLocation } from 'react-router-dom';
import '../css/sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h3><center>Dashboard</center></h3>
      <div className="sidepadding">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/About" className={location.pathname === '/About' ? 'active' : ''}>About</Link>
        <Link to="/Learn" className={location.pathname === '/Learn' ? 'active' : ''}>Learn</Link>
      </div>
    </div>
  );
};

export default Sidebar;
