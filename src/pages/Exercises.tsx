import { useState } from 'react';
import { vocabularyWords } from '../data/vocabularyWords';

export default function Exercises() {
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const checkAnswer = (translation: string) => {
    if (translation === vocabularyWords[currentWord].translation) {
      setScore(score + 1);
    }
    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
      if (currentWord === vocabularyWords.length - 1) {
        setGameFinished(true);
      } else {
        setCurrentWord(currentWord + 1);
      }
    }, 1500);
  };

  const getRandomTranslations = () => {
    const translations = [vocabularyWords[currentWord].translation];
    const usedIndices = new Set([currentWord]);
    
    while (translations.length < 4) {
      const randomIndex = Math.floor(Math.random() * vocabularyWords.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        translations.push(vocabularyWords[randomIndex].translation);
      }
    }
    
    return translations.sort(() => Math.random() - 0.5);
  };

  if (gameFinished) {
    return (
      <main className="mx-auto p-4 w-[1000px] max-w-[calc(100%-2rem)] text-[rgb(var(--text-primary))] text-lg leading-relaxed">
        <div className="bg-[rgb(var(--bg-secondary))] p-8 rounded-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">Game Finished!</h2>
          <p className="text-2xl mb-4">Final Score: {score}/{vocabularyWords.length}</p>
          <p className="text-xl mb-8">
            {score === vocabularyWords.length 
              ? "Perfect! You're a vocabulary master!" 
              : "Good job! Keep practicing to improve your score!"}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto p-4 w-[1000px] max-w-[calc(100%-2rem)] text-[rgb(var(--text-primary))] text-lg leading-relaxed">
      <h1 className="text-4xl font-bold mb-8 text-center">Translation Exercise</h1>
      
      <div className="bg-[rgb(var(--bg-secondary))] p-8 rounded-2xl">
        <div className="text-center mb-8">
          <p className="text-2xl mb-2">Score: {score}/{vocabularyWords.length}</p>
          <h2 className="text-3xl font-bold mb-4">{vocabularyWords[currentWord].word}</h2>
          {showResult && (
            <p className="text-xl text-green-500">
              Correct translation: {vocabularyWords[currentWord].translation}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {getRandomTranslations().map((translation, index) => (
            <button
              key={index}
              onClick={() => checkAnswer(translation)}
              disabled={showResult}
              className="bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))] p-4 rounded-lg hover:bg-accent hover:text-white transition-colors disabled:opacity-50"
            >
              {translation}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}