
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
          <p>Lock the MVP scope, then build the first playable run around one clear target.</p>
        </article>
        <article className="status-card">
          <h2>First Slice</h2>
          <p>Typewright plus Potion Bazaar: one class, one blueprint, one act, one encounter, one review.</p>
        </article>
        <article className="status-card">
          <h2>Design Goal</h2>
          <p>Retro workshop energy, readable systems, and a friendly loop built around momentum.</p>
        </article>
      </section>
    </main>
  );
}

export default App;
