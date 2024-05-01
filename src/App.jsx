
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Home from './Home.jsx';
import About from './About.jsx';
import Blog from './Blogs.jsx';
import Navbar from './navbar.jsx';
import Login from './login.jsx';
import Signup from './signup.jsx';
import '../css/App.css';




const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Navbar />
        <div className="content">
        <div className="page-container">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/Home" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Blogs" element={<Blog/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;