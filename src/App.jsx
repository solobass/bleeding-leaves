import './App.css';
import { HeadingBackground } from './components/custom/HeadingBackground';
import Navigation from './components/custom/Navigation';
import ScrollToTop from './components/custom/ScrollToTop';
import ScrollProgress from './components/custom/ScrollProgress';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

function App() {
  const [heroRef, heroIntersecting] = useIntersectionObserver();
  const [videoRef, videoIntersecting] = useIntersectionObserver();
  const [musicGalleryRef, musicGalleryIntersecting] = useIntersectionObserver();
  const [philosophyRef, philosophyIntersecting] = useIntersectionObserver();
  const [gallerySocialRef, gallerySocialIntersecting] = useIntersectionObserver();
  const [synthesisConnectRef, synthesisConnectIntersecting] = useIntersectionObserver();

  return (
    <div className="site-root">
      <Navigation />
      <ScrollToTop />
      <ScrollProgress />
      
      {/* Hero Section */}
      <section id="hero" ref={heroRef} className={`hero-section section-animate ${heroIntersecting ? 'animate' : ''}`}>
        <div className="hero-content stagger-item">
          <h1 className="gradient-heading hero-title">Bleeding Leaves</h1>
          <h2 className="subtitle">Live synthesis performance</h2>
        </div>
      </section>

      {/* Featured Video Section */}
      <section id="video" ref={videoRef} className={`featured-video-section section-animate ${videoIntersecting ? 'animate' : ''}`}>
        <div className="video-wrapper stagger-item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DRM_IMQuSWU?si=NpkfoyywFQ4cgRw5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-presentation"
          ></iframe>
        </div>
      </section>

      {/* Music & Gallery Section (Experience + Photo 1) */}
      <section id="music-gallery" ref={musicGalleryRef} className={`music-gallery-section section-animate ${musicGalleryIntersecting ? 'animate' : ''}`}>
        <div className="music-gallery-content">
          <div className="soundcloud-player-wrapper stagger-item">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="Bleeding Leaves SoundCloud Player"
              sandbox="allow-scripts allow-same-origin"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/bleeding-leaves/sets/bleeding-leaves&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
            ></iframe>
          </div>
          <div className="gallery-item stagger-item">
            <img src="/BleedingLeavesGarden.png" alt="Bleeding Leaves Garden" className="main-photo" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" ref={philosophyRef} className={`philosophy-section section-animate ${philosophyIntersecting ? 'animate' : ''}`}>
        <HeadingBackground>
          <h2 className="gradient-heading stagger-item">Philosophy</h2>
        </HeadingBackground>
        <div className="bio-text stagger-item">
          Bleeding Leaves is the sonic identity of Allan Von Schenkel, a project born from the memory of a perfect day in 1993 - where lyrical soundscapes <b>ECHO</b> from USA through Europe's underground.<br/>
          <br/>
          Each piece is crafted live, using dozens of oscillators layered in real time to create immersive, one-of-a-kind experiences. His career includes collaborative premieres with legends such as Karlheinz Stockhausen, Yoko Ono & Alan Hovhaness, with globetrotting performances in unconventional spaces like the Smithsonian Hirshhorn Museum and United Nations.<br/>
          <br/>
          Bleeding Leaves is driven by <b>DEEP</b> thoughts of urgent issues like the climate crisis and the future of technology, using sound to provoke reflection and sensory immersion. Based in New York's Capital District & Hudson Valley, the project invites listeners to enter a world where memory, analog synthesis and spoken word bleed into one another.
        </div>
      </section>

      {/* Gallery & Social Section (Photo 2 + Instagram) */}
      <section id="gallery-social" ref={gallerySocialRef} className={`gallery-social-section section-animate ${gallerySocialIntersecting ? 'animate' : ''}`}>
        <div className="gallery-social-content">
          <div className="gallery-item stagger-item">
            <img src="/BleedingLeavesInstrument.png" alt="Bleeding Leaves Instrument" className="main-photo" />
          </div>
          <div className="social-feed stagger-item">
            <div className="instagram-feed">
              <div className="elfsight-app-4f56b067-6e69-4723-b858-936a7744f5fc" data-elfsight-app-lazy></div>
            </div>
          </div>
        </div>
      </section>

      {/* Synthesis & Connect Section */}
      <section id="synthesis-connect" ref={synthesisConnectRef} className={`synthesis-connect-section section-animate ${synthesisConnectIntersecting ? 'animate' : ''}`}>
        <div className="synthesis-connect-content">
          <div className="synthesis-content stagger-item">
            <HeadingBackground>
              <h2 className="gradient-heading">Synthesis</h2>
            </HeadingBackground>
            <div className="prospectus-text">
              <p><strong>PROSPECTUS</strong> - Seeking performance opportunities designed for presentation within contemporary art museums and environments embracing of expansive and boundary-pushing electronic music. This project merges immersive sound design with conceptual and spatial elements, creating an experience that aligns with institutions dedicated to experimental, interdisciplinary, and avant-garde practices.</p>
            </div>
          </div>
          <div className="connect-content stagger-item">
            <p className="synthesis-subtext">Get in touch for live performances and collaborations</p>
            <a className="connect-button" href="mailto:bleedingleaves@gmail.com" rel="noopener noreferrer">Connect</a>
          </div>
          <div className="footer-content stagger-item">
            <p className="footer-text">© 2025 Bleeding Leaves. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
