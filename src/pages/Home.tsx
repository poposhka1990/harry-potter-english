import { chapterText } from '../data/chapterText';
import VocabularyCard from '../components/VocabularyCard';

export default function Home({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <main className="mx-auto p-4 w-[1000px] max-w-[calc(100%-2rem)] text-[rgb(var(--text-primary))] text-lg leading-relaxed">
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold leading-tight mb-2">
          Learn English with <span className="text-gradient">Harry Potter</span>
        </h1>
        <p className="text-2xl text-[rgb(var(--text-secondary))]">
          Изучайте английский через волшебный мир Гарри Поттера
        </p>
      </div>

      <section className="my-16 p-8 rounded-2xl bg-[rgb(var(--bg-secondary))]">
        <h2 className="text-3xl mb-6 text-[rgb(var(--text-secondary))]">Chapter 1: The Boy Who Lived</h2>
        <div className="bg-[rgb(var(--bg-secondary))] p-8 rounded-lg space-y-4">
          {chapterText.map((paragraph, index) => (
            <div key={index}>
              <p>{paragraph.english}</p>
              <p className="text-[rgb(var(--text-secondary))] italic mt-2">
                {paragraph.russian}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}