import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3>PROJECT ALLECC</h3>
            <p>Crafting the future of gaming</p>
          </div>
          
          <div className="footer__info">
            <div className="footer__team">
              <h4>Our Team</h4>
              <p>Ioannis Papadopoulos - CEO & Lead Developer</p>
              <p>Vasilios Chilliaridis - CTO & Game Designer</p>
            </div>
            
            <div className="footer__contact">
              <h4>Connect With Us</h4>
              <ul className="footer__social">
                <li><a href="#" aria-label="Twitter">Twitter</a></li>
                <li><a href="#" aria-label="Discord">Discord</a></li>
                <li><a href="#" aria-label="Steam">Steam</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>&copy; {currentYear} Project Allecc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;