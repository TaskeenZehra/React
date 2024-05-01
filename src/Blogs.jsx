import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router-dom';
import '../css/Blogs.css'; 
import crdfront from './crdfront.webp'
import crdback from './crdback.webp'
const Blog = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const blogs = [
    {
      title: "Breaking News: Earthquake Hits California",
      content: "A powerful earthquake with a magnitude of 7.2 struck California this morning, causing widespread damage and panic among residents. Authorities are assessing the situation and urging people to stay safe.",
      author: "John Doe",
      date: "April 30, 2024"
    },
    {
      title: "COVID-19 Update: Vaccine Rollout Accelerates",
      content: "As vaccination efforts continue to ramp up globally, there is hope on the horizon in the fight against COVID-19. Countries are reporting significant progress in immunizing their populations, but challenges remain in ensuring equitable distribution.",
      author: "Jane Smith",
      date: "April 29, 2024"
    },
    {
      title: "Space Exploration: NASA Rover Discovers Ancient Fossils on Mars",
      content: "In a groundbreaking discovery, NASA's Perseverance rover has found evidence of ancient microbial life on Mars. This finding has significant implications for our understanding of the universe and the search for extraterrestrial life.",
      author: "Alex Johnson",
      date: "April 28, 2024"
    },
    {
      title: "Technology Advancement: AI-Powered Robot Assists in Surgery",
      content: "A state-of-the-art surgical robot equipped with artificial intelligence technology successfully performed a complex heart surgery with minimal human intervention. This breakthrough is poised to revolutionize the field of medicine and improve patient outcomes.",
      author: "Emily Brown",
      date: "April 27, 2024"
    },
    {
      title: "Environmental News: Scientists Warn of Accelerating Climate Change",
      content: "Leading climate scientists issued a stark warning about the accelerating pace of climate change, citing rising global temperatures, extreme weather events, and melting polar ice caps. Urgent action is needed to mitigate the impacts and safeguard the planet for future generations.",
      author: "Michael Wilson",
      date: "April 26, 2024"
    }
  ];

  return (
    <div className="Blog">
      <div className='line'></div><br />
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
           <p><img src={crdfront} alt="" className='imgg'/></p>
          </div>
          <div className="card-back">
            <p><img src={crdback} alt="" className='imgg' /></p>
          </div>
        </div>
      </div>  

      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div className="blog-item" key={index}>
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-content">{blog.content}</p>
            <div className="blog-meta">
              <span className="blog-author">Author: {blog.author}</span>
              <span className="blog-date">Date: {blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
