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

const documentedConcerns = [
  {
    title: 'Physical security',
    detail: 'The account says master keys were left in an unsecured public letterbox for a contractor without notifying tenants. After the keys went missing, correspondence allegedly accused a tenant who was out of town of hiding them instead of arranging a locksmith.',
  },
  {
    title: 'Entry and notice practices',
    detail: 'The account alleges an unannounced entry on September 28, 2026, to photograph the living area, alongside repeated failures to provide the written notice periods required for tradespeople and inspections.',
  },
  {
    title: 'Healthy Homes documentation',
    detail: 'The account says the Healthy Homes Assessment was not supplied within 21 days and raises concerns about the timing of an August 26 report after photographs were taken in late September for an inspector.',
  },
  {
    title: 'Bond and rent accounting',
    detail: 'The account cites Tenancy Services correspondence about a bond allegedly lodged late. It also describes a September 2026 ledger showing a $1,980 partial bond, with $1,320 unaccounted for, plus incorrect lease-year credits and inaccurate “paid to” dates.',
  },
  {
    title: 'Retaliation and communication',
    detail: 'The account alleges a 14-Day Notice for rent arrears contained impossible, backdated delivery declarations and followed requests for maintenance. It also describes accusatory correspondence about asking for standard legal notice.',
  },
  {
    title: 'Maintenance response',
    detail: 'The account alleges that a formal 14-day notice about active roof leaks and dampness was not resolved, and that a leaking shower reported in July remained incomplete. It says the dampness contributed to a tenant requiring medical attention.',
  },
  {
    title: 'Contractor access',
    detail: 'The account says contractors were not given entry notices and tenants were instead asked to act as booking agents and remain home to let handymen inside.',
  },
  {
    title: 'Tenancy paperwork',
    detail: 'The account alleges that fully executed tenancy agreements were not provided to all flatmates and that lease changes were handled by manually crossing out and adding names to a PDF rather than using Change of Tenant forms.',
  },
]

const publicDecisions = [
  {
    title: 'Cutlers Limited (trading as Cutlers Property Management) — Dunedin smoke alarms',
    detail: 'Tenancy Services reports that the Tenancy Tribunal ordered Cutlers Limited to pay $6,450 in exemplary damages to MBIE on behalf of affected tenants for breaches of smoke alarm and maintenance requirements. The official summary says the Tribunal found Cutlers had acted intentionally; a fire occurred at a two-dwelling Dunedin property in September 2022, and the alarms did not activate. It also reports that the property manager recorded an upstairs alarm as compliant without testing it or recording its expiry date. The published summary describes an order against Cutlers Limited, not an individual property manager.',
    source: 'Official Tenancy Services case summary',
    href: 'https://www.tenancy.govt.nz/about-tenancy-services/news/dunedin-property-management-company-to-pay-damages-for-breaching-smoke-alarm-requirements/',
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

      <section className="concerns-section" id="about">
        <div className="concerns-heading">
          <p className="eyebrow">Tenant account · September 2026</p>
          <h2>Concerns about Bronwyn Jupp and Dunedin City Property Management.</h2>
          <p>
            The points below are a tenant-supplied account based on tenancy records and correspondence.
            They are presented as allegations and should be checked against the original documents and
            relevant New Zealand authorities before being treated as established facts.
          </p>
        </div>
        <div className="concerns-list">
          {documentedConcerns.map((concern, index) => (
            <article className="concern-card" key={concern.title}>
              <span className="concern-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{concern.title}</h3>
                <p>{concern.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <article className="decision-card article-source">
          <p className="eyebrow">Research note · working material, not for publication</p>
          <h3>Related reporting: Dunedin rental prices</h3>
          <p>
            A 2020 report by Critic Te Ārohi identifies Bronwyn Jupp as advertising a five-bedroom
            Forth Street property for $1,050 per week, excluding power and internet, with a $3,150
            bond. The article recounts student criticism of the asking price and reports that Jupp
            was approached for comment but did not respond. This is a summary of the article for
            research; it reports a rental advertisement and public reaction, not a Tenancy Tribunal
            finding.
          </p>
          <a
            href="https://www.critic.co.nz/news/article/8894/rental-properties-alarmingly-expensive"
            target="_blank"
            rel="noreferrer"
          >
            Read the Critic Te Ārohi article <span aria-hidden="true">↗</span>
          </a>
        </article>
        <article className="decision-card article-source">
          <p className="eyebrow">Research source · contents not independently reviewed</p>
          <h3>Tenancy Tribunal Order 3497776</h3>
          <p>
            The PDF was provided as a research source. Its contents and its relevance to the
            individuals or concerns described on this page have not been independently verified.
          </p>
          <a
            href="https://tenancy.sgp1.digitaloceanspaces.com/3497776-Tribunal_Order.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open Tribunal Order 3497776 (PDF) <span aria-hidden="true">↗</span>
          </a>
        </article>
      </section>

      <section className="decisions-section" aria-labelledby="decisions-heading">
        <div className="decisions-heading">
          <p className="eyebrow">Official public record</p>
          <h2 id="decisions-heading">Published Tribunal findings.</h2>
          <p>
            These summaries are attributed to the linked official source and limited to its account
            of the decision. A finding about a company is not a finding about an individual employee.
          </p>
        </div>
        <div className="decision-list">
          {publicDecisions.map((decision) => (
            <article className="decision-card" key={decision.title}>
              <h3>{decision.title}</h3>
              <p>{decision.detail}</p>
              <a href={decision.href} target="_blank" rel="noreferrer">
                {decision.source} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
        <p className="decision-note">
          No verified published court or Tribunal decision about Bronwyn Jupp was located in the
          sources checked for this update. This search result is not proof that no such decision exists.
          <a href="https://www.justice.govt.nz/tribunals/tenancy/orders/" target="_blank" rel="noreferrer">
            Search official Tribunal orders <span aria-hidden="true">↗</span>
          </a>
        </p>
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
