import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import "./index.css";

type Edition = {
  name: string;
  accent: string;
  label: string;
  description: string;
  color: string;
};

const editions: Edition[] = [
  {
    name: "Neon Red",
    accent: "01",
    label: "The original icon",
    description: "A bright, bold way to play at home or on the move.",
    color: "#ed3c48",
  },
  {
    name: "Neon Blue",
    accent: "02",
    label: "Made for multiplayer",
    description: "Pass a controller, pick a team, and make the moment yours.",
    color: "#2e7de9",
  },
  {
    name: "OLED White",
    accent: "03",
    label: "A bigger picture",
    description: "A vivid screen for your biggest adventures and smallest breaks.",
    color: "#c9c8c3",
  },
];

function SwitchConsole({ color }: { color: string }) {
  return (
    <div className="console-stage" aria-label="Illustration of a Nintendo Switch console">
      <motion.div
        className="console"
        initial={{ rotate: 5, y: 20, opacity: 0 }}
        animate={{ rotate: -4, y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="joycon joycon-left" style={{ backgroundColor: color }}>
          <span className="joystick" />
          <span className="minus">−</span>
        </div>
        <div className="screen">
          <div className="screen-sun" />
          <div className="screen-mountain mountain-back" />
          <div className="screen-mountain mountain-front" />
          <div className="screen-copy">PLAY<br />TOGETHER</div>
          <div className="screen-prompt">PRESS A TO START</div>
        </div>
        <div className="joycon joycon-right" style={{ backgroundColor: color }}>
          <span className="buttons">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="plus">+</span>
        </div>
      </motion.div>
      <div className="console-shadow" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedEdition, setSelectedEdition] = useState(0);

  const selected = editions[selectedEdition];

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Nintendo Switch home">
          <span className="brand-mark">
            <span />
            <span />
          </span>
          <span>SWITCH</span>
        </a>
        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#editions" onClick={() => setMenuOpen(false)}>Editions</a>
          <a href="#moments" onClick={() => setMenuOpen(false)}>Moments</a>
          <a className="nav-cta" href="#discover" onClick={() => setMenuOpen(false)}>
            Discover <ArrowRight size={16} />
          </a>
        </div>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={14} /> A console for every kind of play</p>
          <h1>Play<br /><em>anywhere.</em></h1>
          <p className="hero-text">
            The freedom of a console at home. The freedom to take it with you.
            One joyful way to play, however your day unfolds.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#experience">
              Explore the experience <ArrowRight size={17} />
            </a>
            <a className="text-link" href="#moments">
              <span className="play-icon"><Play size={13} fill="currentColor" /></span>
              Watch the film
            </a>
          </div>
          <div className="hero-meta">
            <span>01 / 03</span>
            <span className="meta-line" />
            <span>PLAY WITHOUT LIMITS</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-label art-label-top">01 — TAKE IT<br />EVERYWHERE</div>
          <SwitchConsole color={selected.color} />
          <div className="art-label art-label-bottom">DESIGNED FOR<br /><strong>REAL LIFE</strong></div>
        </div>
        <div className="scroll-hint"><ChevronDown size={17} /> Scroll to explore</div>
      </section>

      <section className="statement" id="experience">
        <div className="shell statement-inner">
          <p className="eyebrow">More ways to play</p>
          <h2>Some days are<br /><span>made for more.</span></h2>
          <p className="statement-text">
            Switch from the big screen to the small screen in a second.
            Continue your adventure on the train, on the sofa, or wherever
            the next good idea finds you.
          </p>
          <div className="feature-grid">
            <article className="feature-card feature-card-red">
              <span className="feature-number">01</span>
              <div className="feature-graphic graphic-home"><div /></div>
              <h3>Home mode</h3>
              <p>Big-screen energy for nights in and weekends with everyone.</p>
              <a href="#discover">See how it works <ArrowRight size={15} /></a>
            </article>
            <article className="feature-card feature-card-blue">
              <span className="feature-number">02</span>
              <div className="feature-graphic graphic-handheld"><div /></div>
              <h3>Handheld mode</h3>
              <p>Your game goes wherever your day takes you next.</p>
              <a href="#discover">Find your flow <ArrowRight size={15} /></a>
            </article>
            <article className="feature-card feature-card-yellow">
              <span className="feature-number">03</span>
              <div className="feature-graphic graphic-tabletop"><div /></div>
              <h3>Tabletop mode</h3>
              <p>Put the screen down. Keep the fun going together.</p>
              <a href="#discover">Make a moment <ArrowRight size={15} /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="editions shell" id="editions">
        <div className="editions-heading">
          <div>
            <p className="eyebrow">Find your color</p>
            <h2>Pick your<br /><em>adventure.</em></h2>
          </div>
          <p>Three expressions.<br />One unmistakable feeling.</p>
        </div>
        <div className="edition-picker">
          <div className="edition-list">
            {editions.map((edition, index) => (
              <button
                key={edition.name}
                className={`edition-option ${selectedEdition === index ? "edition-selected" : ""}`}
                onClick={() => setSelectedEdition(index)}
              >
                <span className="edition-index">{edition.accent}</span>
                <span className="edition-name">{edition.name}</span>
                <ArrowRight size={17} />
              </button>
            ))}
          </div>
          <motion.div
            className="edition-preview"
            key={selected.name}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <div className="preview-circle" style={{ backgroundColor: selected.color }} />
            <div className="preview-console">
              <div className="preview-joycon" style={{ backgroundColor: selected.color }} />
              <div className="preview-screen"><span>SWITCH</span></div>
              <div className="preview-joycon" style={{ backgroundColor: selected.color }} />
            </div>
            <div className="preview-caption">
              <span>{selected.label}</span>
              <strong>{selected.description}</strong>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="moments" id="moments">
        <div className="shell moments-inner">
          <div className="moments-copy">
            <p className="eyebrow">The best part</p>
            <h2>Wherever you are,<br /><em>you're together.</em></h2>
            <p>From a quick round between stops to an all-night tournament, the best stories are the ones you play out loud.</p>
            <a className="button button-light" href="#discover">Start something <ArrowRight size={17} /></a>
          </div>
          <div className="moment-stamp">
            <span>MAKE<br />ROOM<br />FOR<br /><strong>PLAY</strong></span>
          </div>
        </div>
      </section>

      <footer className="footer shell" id="discover">
        <a className="brand" href="#top">
          <span className="brand-mark">
            <span />
            <span />
          </span>
          <span>SWITCH</span>
        </a>
        <span>Play together. Anywhere.</span>
        <span>© 2024 Nintendo</span>
      </footer>
    </main>
  );
}

export default App;