import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero = ({ 
  title = "PROJECT ALLECC", 
  subtitle = "Indie Game Development Studio",
  description = "Creating immersive gaming experiences that push the boundaries of imagination",
  primaryButtonText = "Discover Our Games",
  primaryButtonLink = "/lizards-vs-humans",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/about",
  showButtons = true,
  className = ""
}) => {
  return (
    <section className={`hero ${className}`}>
      <div className="hero__background">
        <div className="hero__background-gradient"></div>
        <div className="hero__background-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          {subtitle && <p className="hero__subtitle">{subtitle}</p>}
          {description && <p className="hero__description">{description}</p>}
          
          {showButtons && (
            <div className="hero__cta">
              <Link to={primaryButtonLink} className="btn btn--primary">
                {primaryButtonText}
              </Link>
              <Link to={secondaryButtonLink} className="btn btn--secondary">
                {secondaryButtonText}
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <div className="hero__scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;