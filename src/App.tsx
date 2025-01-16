import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Index from './pages';
import Pronunciation from './pages/Pronunciation';
import Vocabulary from './pages/Vocabulary';
import Exercises from './pages/Exercises';
import './index.css';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showLumos, setShowLumos] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      const audio = new Audio('https://soundbible.com/mp3/Magic%20Wand%20Noise-SoundBible.com-375928671.mp3');
      audio.volume = 0.3;
      audio.play();
      setShowLumos(true);
      setTimeout(() => setShowLumos(false), 2000);
    }
  };

  return (
    <Router>

      <nav className="fixed top-0 left-0 right-0 bg-[rgb(var(--bg-primary))] border-b border-[rgb(var(--text-secondary))]/10 z-10">
        <div className="max-w-[1000px] mx-auto px-4 py-4 flex gap-8">
          <Link to="/" className="text-[rgb(var(--text-primary))] hover:text-[rgb(var(--text-secondary))] transition-colors">
            Home
          </Link>
          <Link to="/pronunciation" className="text-[rgb(var(--text-primary))] hover:text-[rgb(var(--text-secondary))] transition-colors">
            Pronunciation
          </Link>
          <Link to="/vocabulary" className="text-[rgb(var(--text-primary))] hover:text-[rgb(var(--text-secondary))] transition-colors">
            Vocabulary
          </Link>
          <Link to="/exercises" className="text-[rgb(var(--text-primary))] hover:text-[rgb(var(--text-secondary))] transition-colors">
            Exercises
          </Link>
        </div>
        <div className="theme-toggle-container">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <img 
            src="../src/wand.png" 
            alt="Wand"
          />
        </button>
        {showLumos && (
          <span className="lumos-text">Lumos!</span>
        )}
      </div>
      </nav>

      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Index theme={theme} />} />
          <Route path="/pronunciation" element={<Pronunciation />} />
          <Route path="/vocabulary" element={<Vocabulary theme={theme} />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;