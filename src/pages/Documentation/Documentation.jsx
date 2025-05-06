import { useState } from 'react';
import Button from '../../components/Button/Button';
import './Documentation.scss';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      content: (
        <div className="doc-content animate-on-scroll">
          <h2>Welcome to Project Allecc Documentation</h2>
          <p>
            This documentation will guide you through our game development tools, APIs, and best practices.
            Whether you're a developer looking to contribute or a player interested in our tech stack, you'll find everything you need here.
          </p>
          <h3>Quick Start Guide</h3>
          <ol>
            <li>Clone the repository from GitHub</li>
            <li>Install dependencies with <code>npm install</code></li>
            <li>Start the development server with <code>npm run dev</code></li>
            <li>Build for production with <code>npm run build</code></li>
          </ol>
        </div>
      )
    },
    {
      id: 'game-api',
      title: 'Game API',
      content: (
        <div className="doc-content animate-on-scroll">
          <h2>Lizards Vs Humans Game API</h2>
          <p>
            Our game API provides comprehensive access to game mechanics, player data, and matchmaking systems.
          </p>
          <h3>API Endpoints</h3>
          <pre>
            <code>{`// Player Management
GET /api/v1/players/:id
POST /api/v1/players
PUT /api/v1/players/:id
DELETE /api/v1/players/:id

// Match System
POST /api/v1/matches/create
GET /api/v1/matches/:id
POST /api/v1/matches/:id/join
PUT /api/v1/matches/:id/complete`}</code>
          </pre>
          <h3>Authentication</h3>
          <p>
            All API requests require authentication. Include your API key in the Authorization header:
          </p>
          <pre>
            <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
          </pre>
          <h3>Example Request</h3>
          <pre>
            <code>{`fetch('/api/v1/players/123', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}</code>
          </pre>
        </div>
      )
    },
    {
      id: 'modding',
      title: 'Modding Support',
      content: (
        <div className="doc-content animate-on-scroll">
          <h2>Modding Framework</h2>
          <p>
            Lizards Vs Humans supports extensive modding capabilities, allowing the community to create custom content.
          </p>
          <h3>Supported Mod Types</h3>
          <ul>
            <li>Custom Weapons</li>
            <li>Character Skins</li>
            <li>Map Modifications</li>
            <li>Game Mode Extensions</li>
          </ul>
          <h3>Creating Your First Mod</h3>
          <p>
            Mods are created using our ModKit SDK. Follow these steps to get started:
          </p>
          <ol>
            <li>Download the ModKit SDK from our developer portal</li>
            <li>Create a new mod project using the template</li>
            <li>Implement your modifications</li>
            <li>Test in the development environment</li>
            <li>Publish to the Steam Workshop</li>
          </ol>
          <h3>Mod Structure</h3>
          <pre>
            <code>{`// mod.json
{
  "name": "Super Weapon Pack",
  "version": "1.0.0",
  "author": "YourName",
  "description": "Adds new weapons to the game",
  "dependencies": [],
  "assets": [
    "weapons/super_rifle.json",
    "textures/super_rifle.png"
  ]
}`}</code>
          </pre>
        </div>
      )
    },
    {
      id: 'tech-stack',
      title: 'Technology Stack',
      content: (
        <div className="doc-content animate-on-scroll">
          <h2>Our Technology Stack</h2>
          <p>
            Project Allecc leverages modern web technologies and game development tools to create immersive experiences.
          </p>
          <h3>Web Platform</h3>
          <ul>
            <li><strong>Frontend:</strong> React 19 with Vite</li>
            <li><strong>Styling:</strong> SCSS with modern CSS features</li>
            <li><strong>Routing:</strong> React Router v7</li>
            <li><strong>Deployment:</strong> GitHub Pages with CI/CD</li>
          </ul>
          <h3>Game Development</h3>
          <ul>
            <li><strong>Engine:</strong> Unreal Engine 5</li>
            <li><strong>Programming:</strong> C++ and Blueprints</li>
            <li><strong>Networking:</strong> Epic Online Services</li>
            <li><strong>Physics:</strong> Chaos Physics System</li>
          </ul>
          <h3>Development Tools</h3>
          <ul>
            <li><strong>Version Control:</strong> Git & GitHub</li>
            <li><strong>CI/CD:</strong> GitHub Actions</li>
            <li><strong>Testing:</strong> Jest & React Testing Library</li>
            <li><strong>Code Quality:</strong> ESLint & Prettier</li>
          </ul>
        </div>
      )
    },
    {
      id: 'contributing',
      title: 'Contributing',
      content: (
        <div className="doc-content animate-on-scroll">
          <h2>Contributing to Project Allecc</h2>
          <p>
            We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.
          </p>
          <h3>How to Contribute</h3>
          <ol>
            <li>Fork the repository on GitHub</li>
            <li>Create a feature branch</li>
            <li>Make your changes</li>
            <li>Submit a pull request</li>
          </ol>
          <h3>Code Standards</h3>
          <ul>
            <li>Follow ESLint configuration</li>
            <li>Write meaningful commit messages</li>
            <li>Include tests for new features</li>
            <li>Update documentation as needed</li>
          </ul>
          <h3>Pull Request Process</h3>
          <ol>
            <li>Ensure your code follows our style guidelines</li>
            <li>Update the README.md with details of changes if needed</li>
            <li>Increase version numbers in any examples files and the README.md</li>
            <li>The PR will be merged once you have the sign-off of two developers</li>
          </ol>
          <h3>Code of Conduct</h3>
          <p>
            Please note we have a code of conduct, please follow it in all your interactions with the project.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="documentation">
      <div className="documentation__header">
        <div className="container">
          <h1 className="animate-on-scroll">Documentation</h1>
          <p className="lead animate-on-scroll animate-on-scroll--delay-1">Learn about our technologies, APIs, and development practices</p>
        </div>
      </div>

      <div className="documentation__content">
        <div className="container">
          <div className="documentation__grid">
            <aside className="documentation__sidebar animate-on-scroll">
              <nav className="documentation__nav">
                <h3>Contents</h3>
                <ul>
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        className={`documentation__nav-link ${activeSection === section.id ? 'active' : ''}`}
                        onClick={() => setActiveSection(section.id)}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <main className="documentation__main">
              {sections.find(section => section.id === activeSection)?.content}
              
              <div className="documentation__actions animate-on-scroll animate-on-scroll--delay-2">
                <Button 
                  variant="secondary" 
                  size="small"
                  href="https://github.com/BigAis/project-allecc/issues"
                  icon="🐛"
                >
                  Report an Issue
                </Button>
                <Button 
                  variant="primary" 
                  size="small"
                  href="https://github.com/BigAis/project-allecc/pulls"
                  icon="🔀"
                >
                  Contribute
                </Button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;