
import './App.css';

function App() {
  return (
    <main className="app-shell" data-run-theme="ember-circuit">
      <section className="hero-panel">
        <p className="eyebrow">Prototype Build</p>
        <h1>RogueCode</h1>
        <p className="hero-copy">
          A code-mage roguelite where each run grows a strange little app through
          branching encounters, live previews, and launch-day chaos.
        </p>
        <div className="hero-actions">
          <button type="button" className="primary-action">
            Start Run
          </button>
          <button type="button" className="secondary-action">
            View Build Plan
          </button>
        </div>
      </section>

      <section className="status-grid" aria-label="Prototype status">
        <article className="status-card">
          <h2>Current Focus</h2>
          <p>Project skeleton first: shape the folders now so the next systems have a clean home.</p>
        </article>
        <article className="status-card">
          <h2>Current Slice</h2>
          <p>Typewright plus Potion Bazaar, organized into engine, content, map, encounter, and preview domains.</p>
        </article>
        <article className="status-card">
          <h2>Next Up</h2>
          <p>Define the content shapes so seeded runs and encounters can grow from stable contracts.</p>
        </article>
      </section>
    </main>
  );
}

export default App;
