interface VocabularyCardProps {
  word: string;
  translation: string;
  example: string;
  partOfSpeech: string;
}

export default function VocabularyCard({ word, translation, example, partOfSpeech }: VocabularyCardProps) {
  return (
    <div className="bg-white/5 p-6 rounded-lg border border-accent-light/20 transition-transform hover:-translate-y-0.5">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-2xl m-0 text-accent-light">{word}</h3>
        <span className="text-sm text-accent bg-accent/10 px-2 py-1 rounded">{partOfSpeech}</span>
      </div>
      <p className="text-lg my-2 text-white">{translation}</p>
      <div className="mt-4 text-sm">
        <span className="text-accent-light font-bold">Example:</span>
        <p className="mt-1 mb-0 italic">{example}</p>
      </div>
    </div>
  );
}