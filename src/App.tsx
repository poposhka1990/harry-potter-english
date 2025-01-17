import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/index';
import Vocabulary from './pages/Vocabulary';
import Exercises from './pages/Exercises';
import './index.css';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showLumos, setShowLumos] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <nav className="fixed top-0 left-0 right-0 bg-[rgb(var(--bg-primary))] border-b border-[rgb(var(--text-secondary))]/10 z-10">
        <div className="max-w-[1000px] mx-auto px-4 py-4 flex justify-between items-center relative">
          <button 
            className="md:hidden text-[rgb(var(--text-primary))] p-2 hover:bg-[rgb(var(--text-secondary))]/10 rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
          
          <div 
            className={`${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 fixed md:relative top-[61px] md:top-0 left-0 right-0 md:right-auto bottom-0 md:bottom-auto
            bg-[rgb(var(--bg-primary))] md:bg-transparent border-r border-[rgb(var(--text-secondary))]/10 md:border-0
            p-4 md:p-0 transition-transform duration-300 ease-in-out
            flex flex-col md:flex-row gap-6 md:gap-8`}
          >
            <Link 
              to="/" 
              className="text-[rgb(var(--text-primary))] hover:text-[rgb(var(--text-secondary))] transition-colors px-4 py-2 rounded-lg hover:bg-[rgb(var(--text-secondary))]/10" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/vocabulary" 
              className="text-[rgb(var(--text-primary))] hover:text-[rgb(var(--text-secondary))] transition-colors px-4 py-2 rounded-lg hover:bg-[rgb(var(--text-secondary))]/10" 
              onClick={() => setIsMenuOpen(false)}
            >
              Vocabulary
            </Link>
            <Link 
              to="/exercises" 
              className="text-[rgb(var(--text-primary))] hover:text-[rgb(var(--text-secondary))] transition-colors px-4 py-2 rounded-lg hover:bg-[rgb(var(--text-secondary))]/10" 
              onClick={() => setIsMenuOpen(false)}
            >
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
                src="https://poposhka1990.github.io/harry-potter-english/src/wand.png" 
                alt="Magic wand"
              />
            </button>
            {showLumos && (
              <span className="lumos-text">Lumos!</span>
            )}
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/vocabulary" element={<Vocabulary theme={theme} />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;