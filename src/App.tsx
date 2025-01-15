import VocabularyCard from './components/VocabularyCard';
import './index.css';

function App() {
  return (
    <main className="mx-auto p-4 w-[1000px] max-w-[calc(100%-2rem)] text-white text-lg leading-relaxed">
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold leading-tight mb-2">
          Learn English with <span className="text-gradient">Harry Potter books</span>
        </h1>
        <p className="text-2xl text-accent-light">
          Изучайте английский по книгам Гарри Поттера
        </p>
      </div>

      <section className="my-16 p-8 rounded-2xl bg-accent-dark/20">
        <h2 className="text-3xl font-bold leading-tight mb-2">Сначала мы читаем и <span className="text-gradient">слушаем произношение</span></h2>
        <h3 className="text-3xl mb-6 text-accent-light">Pronunciation</h3>
        <div className="bg-white/5 p-8 rounded-lg">
        <p className="text-accent-light italic mt-2">Chapter 1: The Boy Who Lived</p>
          <p>
            Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to
            say that they were perfectly normal, thank you very much.
          </p>
          <p className="text-accent-light italic mt-2">
            Мистер и миссис Дурсль с Тисовой улицы, дом четыре, гордились тем,
            что они, спасибо большое, абсолютно нормальные люди.
          </p>
        </div>
      </section>

      <section className="my-16 p-8 rounded-2xl bg-accent-dark/20">
        <h2 className="text-3xl font-bold leading-tight mb-2">Затем учим новые <span className="text-gradient">слова и выражения</span></h2>
        <h3 className="text-3xl mb-6 text-accent-light">Vocabulary</h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          <VocabularyCard
            word="proud"
            translation="гордый"
            example="The Dursleys were proud of being normal."
            partOfSpeech="прилагательное"
          />
          <VocabularyCard
            word="perfectly"
            translation="совершенно"
            example="They were perfectly normal."
            partOfSpeech="наречие"
          />
          <VocabularyCard
            word="normal"
            translation="нормальный"
            example="The Dursleys considered themselves normal people."
            partOfSpeech="прилагательное"
          />
        </div>
      </section>

      <section className="my-16 p-8 rounded-2xl bg-accent-dark/20">
        <h2 className="text-3xl font-bold leading-tight mb-2">Затем закрепляем лексику <span className="text-gradient">на упражнениях</span></h2>
        <h3 className="text-3xl mb-6 text-accent-light">Exercises</h3>
        <div className="bg-white/5 p-8 rounded-lg">
          <h3 className="text-xl mb-4">Fill in the blanks</h3>
          <p>The Dursleys were _____ to say they were _____ normal.</p>
          <button className="bg-accent text-white border-none px-6 py-3 rounded-lg cursor-pointer text-base mt-4 transition-colors hover:bg-accent-light">
            Check Answers
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;