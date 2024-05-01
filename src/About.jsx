import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobe, faHistory, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../css/About.css';
import bg from './bg1.avif';

const About = () => {
  return (

    <div className="About">
      <div className='line'></div>
      <br /><br />
      <img src={bg} alt="News" />
     
      <div className="header">
        <h1>About Us</h1>
        <p>We are a leading online news sharing website that brings you the latest news and updates from around the world. Our mission is to provide our users with accurate and timely information, so they can stay informed and make informed decisions.</p>
      </div>
   
      <div className="section">
        <div className="icon">
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <div>
          <h2>Our Team</h2>
          <p>We have a diverse team of reporters and editors who are based in different parts of the world. This allows us to provide our users with a wide range of perspectives and insights on the news stories that matter most to them. Our team is passionate about delivering high-quality news content and upholding the highest standards of journalism.</p>
        </div>
      </div>
      <div className="section">
        <div className="icon">
          <FontAwesomeIcon icon={faGlobe} />
        </div>
        <div>
          <h2>Our Values</h2>
          <p>At our core, we believe in the power of information to transform lives and communities. We are committed to promoting transparency, accountability, and social responsibility in all that we do. We strive to be a trusted source of news and information for our users, and to make a positive impact on the world.</p>
        </div>
      </div>
      <div className="section">
        <div className="icon">
          <FontAwesomeIcon icon={faHistory} />
        </div>
        <div>
          <h2>Our History</h2>
          <p>We were founded in 2010 with the goal of providing our users with a better way to stay informed about the news. Over the years, we have grown and evolved, but our commitment to delivering high-quality news content has never wavered. Today, we are one of the most popular online news sharing websites in the world, with millions of users visiting our site each month.</p>
        </div>
      </div>
      <div className="section">
        <div className="icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>If you have any questions or comments, we would love to hear from you. You can reach us by email at <span className="contact">taskeenzehra891@gmail.com</span> or by phone at <span className="contact">0334-2905269</span>.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
