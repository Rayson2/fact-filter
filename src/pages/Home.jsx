import { Link } from 'react-router-dom';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to <span>Fact Filter</span></h1>
        <p className="slogan">"Empowering truth through AI-powered verification."</p>
        <h2>Choose the format</h2>

        <div className="format-options">
          <Link to="/format/text" className="format-button">Text</Link>
          <Link to="/format/image" className="format-button">Image</Link>
          <Link to="/format/video" className="format-button">Video</Link>
          <Link to="/format/audio" className="format-button">Audio</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
