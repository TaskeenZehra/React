import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../css/Home.css'; 

const Home = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#726161');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="home-container" style={{ backgroundColor: color }}>
      {!submitted ? (
        <div className="form-container">
          <h1>Welcome to JavaScript Learning</h1>
          <p>Start your journey to become a JavaScript ninja!</p>
          <form onSubmit={handleSubmit}>
            <label>
              Your Name : 
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Choose your favorite color : 
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              />
            </label>
            <button type="submit"  style={{ backgroundColor: color }}>Start Learning</button>
          </form>
        </div>
      ) : (
        <div className="greeting">
          <h1>Hello, {name}!</h1>
          <p>Get ready to dive into the colorful world of JavaScript!</p>
          <Link to="/About" className="btn">Learn More About JavaScript</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
