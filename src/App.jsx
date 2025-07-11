import './App.css';

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
        <h2 className="gradient-heading">Experience</h2>
        <div className="soundcloud-player-wrapper">
          <iframe
            width="100%"
            height="400"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/bleeding-leaves/sets/bleeding-leaves&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
      </section>

      {/* Photo Section 1 */}
      <section className="photo-section">
        <img src="/BleedingLeavesGarden.png" alt="Bleeding Leaves Garden" className="main-photo" />
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <h2 className="gradient-heading">Philosophy</h2>
        <div className="bio-text">
          Bleeding Leaves is the sonic identity of Allan Von Schenkel, a project born from the memory of a single moment in 1993 - unfolding in lyrical soundscapes, where blooming psychedelia <b>ECHOES</b> over Berlin's EDM underground.<br/>
          <br/>
          Each piece is crafted live, using dozens of oscillators layered in real time to create immersive, one-of-a-kind experiences. His career includes collaborative premieres with legends such as Karlheinz Stockhausen, Yoko Ono, and Alan Hovhaness, alongside major performances at the Smithsonian Hirshhorn Museum, the United Nations, and venues across the globe.<br/>
          <br/>
          Bleeding Leaves is driven by <b>DEEP</b> thoughts of urgent issues like the climate crisis and the future of technology, using sound to provoke reflection and sensory immersion. Based in New York's Capital District & Hudson Valley, the project invites listeners to enter a world where memory, analog synthesis and spoken word bleed into one another.
        </div>
      </section>

      {/* Photo Section 2 */}
      <section className="photo-section">
        <img src="/BleedingLeavesInstrument.png" alt="Bleeding Leaves Instrument" className="main-photo" />
      </section>

      {/* Instagram Section */}
      <section style={{ padding: '2rem 0', background: '#000', width: '100%' }}>
        {/* SnapWidget Instagram Embed */}
        <script src="https://snapwidget.com/js/snapwidget.js"></script>
        <iframe 
          src="https://snapwidget.com/embed/1102270" 
          allowtransparency="true" 
          frameBorder="0" 
          scrolling="no" 
          style={{ border: 'none', overflow: 'hidden', width: '96vw', maxWidth: '96vw', display: 'block', marginLeft: '2vw' }}
          title="Posts from Instagram"
        ></iframe>
      </section>

      {/* Synthesis Section */}
      <section className="synthesis-section">
        <h2 className="gradient-heading">Synthesis</h2>
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
