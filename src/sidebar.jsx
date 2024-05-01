import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import '../css/sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const { isAuthenticated,logout } = useContext(AuthContext);
 
  const handleLogout = () => {
    logout();
  }

  return (
    <div className="sidebar">
      <h3><center>Dashboard</center></h3>
      <div className="sidepadding">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/About" className={location.pathname === '/About' ? 'active' : ''}>About</Link>
        <Link to="/Blogs" className={location.pathname === '/Blogs' ? 'active' : ''}>Blogs</Link>
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  );
};

export default Sidebar;
