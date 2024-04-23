
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Home from './Home.jsx';
import About from './About.jsx';
import Learn from './Learn.jsx';
import '../css/App.css';



const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Learn JavaScript </h2>
    </div>
  );
};

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
              <Route path="/Learn" element={<Learn/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;