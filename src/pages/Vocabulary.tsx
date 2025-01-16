import VocabularyCard from '../components/VocabularyCard';
import { vocabularyWords } from '../data/vocabularyWords';

export default function Vocabulary({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <main className="mx-auto p-4 w-[1000px] max-w-[calc(100%-2rem)] text-[rgb(var(--text-primary))] text-lg leading-relaxed">
      <h1 className="text-4xl font-bold mb-8 text-center">Vocabulary</h1>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {vocabularyWords.map((word, index) => (
          <VocabularyCard
            key={index}
            word={word.word}
            translation={word.translation}
            example={word.example}
            partOfSpeech={word.partOfSpeech}
            theme={theme}
          />
        ))}
      </div>
    </main>
  );
}