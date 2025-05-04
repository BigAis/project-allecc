import './LizardsVsHumans.scss';

const LizardsVsHumans = () => {
  return (
    <div className="lizards-vs-humans">
      <section className="game-hero">
        <div className="container">
          <h1>Lizards Vs Humans</h1>
          <p className="tagline">The Battle for Earth's Future Begins</p>
        </div>
      </section>

      <section className="game-overview section">
        <div className="container">
          <div className="overview-content">
            <div className="overview__info">
              <h2>Game Overview</h2>
              <p>
                In the year 2157, Earth faces its greatest threat as an ancient reptilian civilization 
                emerges from the depths of the planet. Lizards Vs Humans is an intense FPS/TPS sci-fi 
                shooter that puts you in the middle of this epic conflict.
              </p>
              <p>
                Choose your side and fight for the survival of your species. Each faction offers unique 
                abilities, weapons, and playstyles that will determine the fate of Earth.
              </p>
              <div className="game-details">
                <div className="detail-item">
                  <h3>Genre</h3>
                  <p>FPS/TPS Sci-Fi Shooter</p>
                </div>
                <div className="detail-item">
                  <h3>Players</h3>
                  <p>Single & Multiplayer</p>
                </div>
                <div className="detail-item">
                  <h3>Platforms</h3>
                  <p>PC, Consoles</p>
                </div>
                <div className="detail-item">
                  <h3>Status</h3>
                  <p>In Development</p>
                </div>
              </div>
            </div>
            <div className="overview__visual">
              <div className="game-preview">
                <span>Game Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="game-features section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Dynamic Combat System</h3>
              <p>
                Switch seamlessly between first-person and third-person perspectives to adapt to any 
                combat situation. Use cover, special abilities, and advanced weaponry to gain the upper hand.
              </p>
            </div>
            <div className="feature-card">
              <h3>Two Unique Factions</h3>
              <p>
                Play as technologically advanced humans with cutting-edge weapons or as ancient lizards 
                with biological enhancements and unique abilities.
              </p>
            </div>
            <div className="feature-card">
              <h3>Immersive Environments</h3>
              <p>
                Battle across diverse locations from futuristic cities to ancient underground complexes, 
                each with destructible elements and strategic opportunities.
              </p>
            </div>
            <div className="feature-card">
              <h3>Strategic Gameplay</h3>
              <p>
                Capture objectives, defend crucial points, and coordinate with your team to achieve 
                victory in various game modes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="game-factions section">
        <div className="container">
          <h2>Choose Your Faction</h2>
          <div className="factions-grid">
            <div className="faction-card humans">
              <h3>Humans</h3>
              <p>
                Armed with cutting-edge technology and advanced weaponry, humans fight to protect their 
                planet and ensure the survival of their species.
              </p>
              <ul className="faction-abilities">
                <li>Advanced Exo-suits</li>
                <li>High-tech Weaponry</li>
                <li>Tactical Equipment</li>
                <li>Orbital Support</li>
              </ul>
            </div>
            <div className="faction-card lizards">
              <h3>Lizards</h3>
              <p>
                Ancient beings with natural abilities and biological enhancements, the lizards seek to 
                reclaim Earth as their ancestral home.
              </p>
              <ul className="faction-abilities">
                <li>Enhanced Agility</li>
                <li>Biological Weapons</li>
                <li>Camouflage Abilities</li>
                <li>Regenerative Powers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="game-cta section">
        <div className="container">
          <h2>Join the Battle</h2>
          <p>
            Lizards Vs Humans is currently in development. Sign up to get early access and exclusive 
            updates about the game.
          </p>
          <div className="cta-buttons">
            <button className="btn btn--primary">Sign Up for Updates</button>
            <button className="btn btn--secondary">View Gameplay Trailer</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LizardsVsHumans;