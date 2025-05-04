import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">PROJECT ALLECC</h1>
            <p className="hero__subtitle">Indie Game Development Studio</p>
            <p className="hero__description">
              Creating immersive gaming experiences that push the boundaries of imagination
            </p>
            <div className="hero__cta">
              <Link to="/lizards-vs-humans" className="btn btn--primary">
                Discover Lizards Vs Humans
              </Link>
              <Link to="/about" className="btn btn--secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-game section">
        <div className="container">
          <h2>Latest Release</h2>
          <div className="featured-game__content">
            <div className="featured-game__info">
              <h3>Lizards Vs Humans</h3>
              <p className="featured-game__genre">FPS/TPS Sci-Fi Shooter</p>
              <p className="featured-game__description">
                Experience an epic battle for survival in this intense sci-fi shooter. 
                Choose your side in the ultimate conflict between reptilian invaders 
                and humanity's last defenders.
              </p>
              <ul className="featured-game__features">
                <li>Dynamic FPS/TPS gameplay</li>
                <li>Two distinct playable factions</li>
                <li>Immersive sci-fi environments</li>
                <li>Strategic combat system</li>
              </ul>
              <Link to="/lizards-vs-humans" className="btn btn--primary">
                Learn More
              </Link>
            </div>
            <div className="featured-game__visual">
              {/* Placeholder for game screenshot */}
              <div className="placeholder-image">
                <span>Game Screenshot</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;