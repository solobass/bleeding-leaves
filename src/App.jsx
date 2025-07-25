import './App.css';
import { HeadingBackground } from './components/custom/HeadingBackground';

function App() {

  return (
    <div className="site-root">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: 'url(/moogbannershort.png)' }}>
        <div className="hero-content">
          <h1 className="gradient-heading hero-title">Bleeding Leaves</h1>
          <h2 className="subtitle">Live synthesis performance</h2>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="featured-video-section">
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DRM_IMQuSWU?si=NpkfoyywFQ4cgRw5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="soundcloud-player-wrapper">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/bleeding-leaves/sets/bleeding-leaves&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
          ></iframe>
        </div>
      </section>

      {/* Photo Section 1 */}
      <section className="photo-section">
        <img src="/BleedingLeavesGarden.png" alt="Bleeding Leaves Garden" className="main-photo" />
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <HeadingBackground>
          <h2 className="gradient-heading">Philosophy</h2>
        </HeadingBackground>
        <div className="bio-text">
          Bleeding Leaves is the sonic identity of Allan Von Schenkel, a project born from the memory of a perfect day in 1993 - where lyrical soundscapes <b>ECHO</b> from USA through Europe's underground.<br/>
          <br/>
          Each piece is crafted live, using dozens of oscillators layered in real time to create immersive, one-of-a-kind experiences. His career includes collaborative premieres with legends such as Karlheinz Stockhausen, Yoko Ono & Alan Hovhaness, with globetrotting performances in unconventional spaces like the Smithsonian Hirshhorn Museum and United Nations.<br/>
          <br/>
          Bleeding Leaves is driven by <b>DEEP</b> thoughts of urgent issues like the climate crisis and the future of technology, using sound to provoke reflection and sensory immersion. Based in New York's Capital District & Hudson Valley, the project invites listeners to enter a world where memory, analog synthesis and spoken word bleed into one another.
        </div>
      </section>

      {/* Photo Section 2 */}
      <section className="photo-section">
        <img src="/BleedingLeavesInstrument.png" alt="Bleeding Leaves Instrument" className="main-photo" />
      </section>

      {/* Instagram Section */}
      <section style={{ padding: '2rem 2rem 2rem 1rem', background: '#000', width: '100%' }}>
        {/* Elfsight Instagram Feed | Bleeding Leaves Instagram */}
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div className="elfsight-app-4f56b067-6e69-4723-b858-936a7744f5fc" data-elfsight-app-lazy></div>
      </section>

      {/* Synthesis Section */}
      <section className="synthesis-section">
        <HeadingBackground>
          <h2 className="gradient-heading">Synthesis</h2>
        </HeadingBackground>
        <div className="prospectus-text">
          <p><strong>PROSPECTUS</strong> - Seeking performance opportunities designed for presentation within contemporary art museums and environments embracing of expansive and boundary-pushing electronic music. This project merges immersive sound design with conceptual and spatial elements, creating an experience that aligns with institutions dedicated to experimental, interdisciplinary, and avant-garde practices.</p>
        </div>
      </section>

      {/* Connect Section */}
      <section className="synthesis-section">
        <p className="synthesis-subtext">Get in touch for live performances and collaborations</p>
        <a className="connect-button" href="mailto:bleedingleaves@gmail.com">Connect</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 Bleeding Leaves. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
