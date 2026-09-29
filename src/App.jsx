import { useState } from 'react'
import './App.css'

const resources = [
  {
    number: '01',
    title: 'Tenancy Services',
    description: 'Guidance on bonds, repairs, notices, and your responsibilities.',
    href: 'https://www.tenancy.govt.nz/',
  },
  {
    number: '02',
    title: 'Tenancy Tribunal',
    description: 'Information about resolving a tenancy dispute in New Zealand.',
    href: 'https://www.justice.govt.nz/tribunals/tenancy/',
  },
  {
    number: '03',
    title: 'Citizens Advice Bureau',
    description: 'Free, confidential information and help finding local support.',
    href: 'https://www.cab.org.nz/',
  },
]

function App() {
  const [entry, setEntry] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setEntry({
      topic: formData.get('topic'),
      timeframe: formData.get('timeframe'),
      story: formData.get('story').trim(),
    })
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Tenancy Notes home">
          <span className="wordmark-icon" aria-hidden="true">tn</span>
          <span>tenancy notes</span>
        </a>
        <a className="topbar-link" href="#resources">Helpful resources <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> A renter-led community space</p>
          <h1>Every renter deserves to be <em>heard.</em></h1>
          <p className="hero-description">
            A place to reflect on renting experiences, share what you learned, and help
            others feel less alone.
          </p>
          <a className="primary-link" href="#share">Share your experience <span aria-hidden="true">↓</span></a>
          <div className="trust-note">
            <span aria-hidden="true">✳</span>
            <p>Thoughtful stories. Respectful conversation. Useful next steps.</p>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun"></div>
          <div className="window">
            <div className="window-sky"></div>
            <div className="window-sill"></div>
          </div>
          <div className="plant plant-one"><i></i><i></i><i></i><i></i></div>
          <div className="plant-pot"></div>
          <div className="hero-caption"><span>✳</span> Your story matters</div>
        </div>
      </section>

      <section className="principles" aria-label="Community principles">
        <article>
          <span className="principle-icon" aria-hidden="true">01</span>
          <div><h2>First-hand only</h2><p>Share what you personally experienced, in your own words.</p></div>
        </article>
        <article>
          <span className="principle-icon" aria-hidden="true">02</span>
          <div><h2>Care with details</h2><p>Leave out names, contact details, and anything that identifies another person.</p></div>
        </article>
        <article>
          <span className="principle-icon" aria-hidden="true">03</span>
          <div><h2>Support, not advice</h2><p>Listen with empathy. For legal questions, use trusted local services.</p></div>
        </article>
      </section>

      <section className="share-section" id="share">
        <div className="section-heading">
          <p className="eyebrow">A space to be heard</p>
          <h2>Put your experience into words.</h2>
          <p>Start with what happened and what you wish you had known. You can keep it brief.</p>
        </div>

        <div className="form-card">
          <div className="form-card-heading">
            <div><span className="small-label">YOUR STORY</span><h3>Share a renting experience</h3></div>
            <span className="form-sparkle" aria-hidden="true">✳</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="field-row">
              <label>
                What was it about?
                <select name="topic" defaultValue="" required>
                  <option value="" disabled>Select a topic</option>
                  <option>Repairs and maintenance</option>
                  <option>Bond or rent</option>
                  <option>Communication</option>
                  <option>Moving in or out</option>
                  <option>Something else</option>
                </select>
              </label>
              <label>
                When did it happen? <span className="optional">(optional)</span>
                <input name="timeframe" type="month" />
              </label>
            </div>
            <label>
              Your experience
              <textarea
                name="story"
                rows="6"
                minLength="20"
                maxLength="2000"
                placeholder="Focus on what you personally saw or experienced, and what helped."
                required
              />
              <span className="field-hint">20–2,000 characters. Please don’t include names or identifying details.</span>
            </label>
            <label className="guideline-check">
              <input type="checkbox" name="guidelines" required />
              <span>I’m sharing a first-hand account, and I’ve removed identifying details and claims I can’t support.</span>
            </label>
            <button className="submit-button" type="submit">Save my story <span aria-hidden="true">↗</span></button>
          </form>
          <p className="privacy-note"><span aria-hidden="true">◎</span> This demo does not send or publish submissions. Your entry is shown only in this browser session and is cleared when you refresh.</p>
        </div>

        {submitted && entry && (
          <article className="submission" aria-live="polite">
            <div className="submission-heading">
              <span className="status-pill"><span /> Saved in this session</span>
              <span className="small-label">{entry.topic}</span>
            </div>
            {entry.timeframe && <p className="submission-date">{entry.timeframe}</p>}
            <p className="submission-story">{entry.story}</p>
            <p className="submission-footnote">Only you can see this preview. It has not been sent to or published on a public site.</p>
          </article>
        )}
      </section>

      <section className="resources-section" id="resources">
        <div className="resources-heading">
          <div><p className="eyebrow">New Zealand support</p><h2>Know where to turn next.</h2></div>
          <p>Stories can help us feel connected. For practical help with a tenancy issue, these trusted services are a good place to start.</p>
        </div>
        <div className="resource-list">
          {resources.map((resource) => (
            <a className="resource-card" href={resource.href} key={resource.number} target="_blank" rel="noreferrer">
              <span className="resource-number">{resource.number}</span>
              <span className="resource-copy"><strong>{resource.title}</strong><span>{resource.description}</span></span>
              <span className="resource-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <a className="wordmark footer-wordmark" href="#top"><span className="wordmark-icon" aria-hidden="true">tn</span><span>tenancy notes</span></a>
        <p>A kinder space for better renting conversations.</p>
        <span className="footer-note">Not legal advice · Be kind, be factual</span>
      </footer>
    </main>
  )
}

export default App
