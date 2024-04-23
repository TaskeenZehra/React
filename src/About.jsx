import '../css/About.css'; 
import { Link } from 'react-router-dom'; 

const About = () => {
  return (
    <div className="about-container">
      <header className="header">
        <h1>About JavaScript Learning</h1>
        <p>Welcome to JavaScript Learning, your ultimate destination to master JavaScript and become a coding ninja!</p>
        <p>JavaScript is one of the most popular programming languages in the world, and learning it opens up a world of opportunities in web development, mobile app development, game development, and more.</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Comprehensive Learning Paths</h2>
          <p>Our platform offers carefully curated learning paths that guide you from JavaScript basics to advanced concepts. Whether you are a beginner or an experienced developer, we have something for everyone.</p>
        </div>
        <div className="feature">
          <h2>Interactive Coding Challenges</h2>
          <p>Put your skills to the test with our interactive coding challenges. Solve real-world problems, sharpen your problem-solving skills, and gain hands-on experience.</p>
        </div>
        <div className="feature">
          <h2>Project-Based Learning</h2>
          <p>Learn by doing with our project-based approach. Build exciting projects, from simple games to dynamic web applications, and showcase your skills to the world.</p>
        </div>
      </section>
      <section className="benefits">
        <h2>Benefits of Learning JavaScript</h2>
        <ul>
          <li>JavaScript powers the interactive elements of websites, making it essential for front-end web development.</li>
          <li>With frameworks like React, Angular, and Vue.js, JavaScript is also widely used for building modern web applications.</li>
          <li>JavaScript is the language of choice for server-side development with Node.js, allowing developers to build scalable and efficient backend systems.</li>
          <li>Learning JavaScript opens up lucrative career opportunities in the tech industry, with high demand for skilled JavaScript developers.</li>
          <li>JavaScript is constantly evolving, with new features and updates being released regularly, making it an exciting language to learn and master.</li>
        </ul>
      </section>
      <footer className="footer">
        <p>Ready to take your coding skills to the next level? Join JavaScript Learning today and start your journey to JavaScript mastery!</p>
        <Link to="/Learn" className="learn-link">Learn Here!</Link>
      </footer>
    </div>
  );
};

export default About;
