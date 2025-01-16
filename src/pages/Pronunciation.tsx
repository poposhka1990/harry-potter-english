import { pronunciationWords } from '../data/pronunciationWords';

export default function Pronunciation() {
  return (
    <main className="mx-auto p-4 w-[1000px] max-w-[calc(100%-2rem)] text-[rgb(var(--text-primary))] text-lg leading-relaxed">
      <h1 className="text-4xl font-bold mb-8 text-center">Pronunciation Guide</h1>
      
      <div className="grid gap-6">
        {pronunciationWords.map((word, index) => (
          <div key={index} className="bg-[rgb(var(--bg-secondary))] p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">{word.word}</h2>
              <span className="text-[rgb(var(--text-secondary))] font-mono">{word.transcription}</span>
            </div>
            <p className="text-[rgb(var(--text-secondary))] mb-2">{word.translation}</p>
            <button 
              onClick={() => new Audio(word.audioUrl).play()}
              className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-light transition-colors"
            >
              Listen
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}