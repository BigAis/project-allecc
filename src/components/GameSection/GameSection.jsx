import { Link } from 'react-router-dom';
import './GameSection.scss';

const GameSection = ({
  title,
  genre,
  description,
  features = [],
  image,
  link,
  buttonText = "Learn More",
  reverse = false
}) => {
  return (
    <section className={`game-section ${reverse ? 'game-section--reverse' : ''}`}>
      <div className="container">
        <div className="game-section__content">
          <div className="game-section__info">
            <h2>{title}</h2>
            <p className="game-section__genre">{genre}</p>
            <p className="game-section__description">{description}</p>
            
            {features.length > 0 && (
              <ul className="game-section__features">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
            
            <Link to={link} className="btn btn--primary">
              {buttonText}
            </Link>
          </div>
          
          <div className="game-section__visual">
            {image ? (
              <img src={image} alt={title} />
            ) : (
              <div className="placeholder-image">
                <span>Game Screenshot</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection;