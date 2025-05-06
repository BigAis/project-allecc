import './About.scss';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1 className="animate-on-scroll">About Project Allecc</h1>
          <p className="lead animate-on-scroll animate-on-scroll--delay-1">Pioneering the future of indie game development</p>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="about__story animate-on-scroll">
            <h2>Our Story</h2>
            <p>
              Project Allecc was founded with a vision to create immersive, innovative gaming experiences 
              that push the boundaries of storytelling and gameplay. As an independent game development 
              studio based in Thessaloniki, Greece, we combine passion, creativity, and technical expertise 
              to bring unique gaming experiences to life.
            </p>
            <p>
              Our journey began with a simple goal: to create games that we ourselves would love to play. 
              Today, we're proud to be working on ambitious projects that challenge conventional gaming 
              paradigms and offer players something truly unique.
            </p>
          </div>

          <div className="about__team">
            <h2 className="animate-on-scroll">Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member animate-on-scroll animate-on-scroll--delay-1">
                <div className="team-member__image">
                  <div className="placeholder-avatar">IP</div>
                </div>
                <h3>Ioannis Papadopoulos</h3>
                <p className="role">CEO & Lead Developer</p>
                <p className="bio">
                  With over 10 years of experience in software development and a lifelong passion for gaming, 
                  Ioannis leads our technical vision and ensures our games meet the highest standards of quality.
                </p>
              </div>
              
              <div className="team-member animate-on-scroll animate-on-scroll--delay-2">
                <div className="team-member__image">
                  <div className="placeholder-avatar">VC</div>
                </div>
                <h3>Vasilios Chilliaridis</h3>
                <p className="role">CTO & Game Designer</p>
                <p className="bio">
                  Vasilios brings creative vision and technical expertise together, designing immersive 
                  gameplay experiences and overseeing our technology stack to ensure seamless performance.
                </p>
              </div>
            </div>
          </div>

          <div className="about__philosophy">
            <h2 className="animate-on-scroll">Our Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-item animate-on-scroll">
                <h3>Innovation First</h3>
                <p>We believe in pushing boundaries and exploring new ideas in game design and technology.</p>
              </div>
              <div className="philosophy-item animate-on-scroll animate-on-scroll--delay-1">
                <h3>Player Experience</h3>
                <p>Every decision we make is focused on creating memorable experiences for our players.</p>
              </div>
              <div className="philosophy-item animate-on-scroll animate-on-scroll--delay-2">
                <h3>Quality Over Quantity</h3>
                <p>We take the time to polish every aspect of our games to ensure the best possible quality.</p>
              </div>
              <div className="philosophy-item animate-on-scroll animate-on-scroll--delay-3">
                <h3>Community Driven</h3>
                <p>We actively listen to our community and value player feedback in shaping our games.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;