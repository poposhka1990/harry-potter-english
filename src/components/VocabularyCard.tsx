interface VocabularyCardProps {
  word: string;
  translation: string;
  example: string;
  partOfSpeech: string;
  theme: 'dark' | 'light';
}

export default function VocabularyCard({ word, translation, example, partOfSpeech, theme }: VocabularyCardProps) {
  return (
    <div className="bg-[rgb(var(--bg-secondary))] p-6 rounded-lg border border-accent-light/20 transition-transform hover:-translate-y-0.5">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-2xl m-0 text-[rgb(var(--text-secondary))]">{word}</h3>
        <span className="text-sm text-accent bg-accent/10 px-2 py-1 rounded">{partOfSpeech}</span>
      </div>
      <p className="text-lg my-2 text-[rgb(var(--text-primary))]">{translation}</p>
      <div className="mt-4 text-sm">
        <span className="text-[rgb(var(--text-secondary))] font-bold">Example:</span>
        <p className="mt-1 mb-0 italic text-[rgb(var(--text-primary))]">{example}</p>
      </div>
    </div>
  );
}