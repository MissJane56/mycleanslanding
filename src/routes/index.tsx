import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import content from '../../content/landing.json'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

async function submitNetlifyForm(form: HTMLFormElement) {
  const body = new URLSearchParams()
  new FormData(form).forEach((value, key) => body.append(key, String(value)))
  const res = await fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })
  if (!res.ok) throw new Error('Form submission failed')
}

function Check() {
  return (
    <span className="flex-none inline-flex items-center justify-center w-6 h-6 rounded-full bg-mint text-mint-ink text-xs font-extrabold">
      ✓
    </span>
  )
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-base text-ink">
      <Check />
      <span>{children}</span>
    </div>
  )
}

function CheckLine({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-3.5">
      <span className="flex-none inline-flex items-center justify-center w-6 h-6 rounded-full bg-mint text-mint-ink text-xs font-extrabold mt-0.5">
        ✓
      </span>
      <p className="m-0 text-base leading-relaxed text-ink">
        <strong>{title}.</strong> <span className="text-muted">{desc}</span>
      </p>
    </div>
  )
}

function FeatureCard({ index, title, desc }: { index: string; title: string; desc: string }) {
  return (
    <div className="p-8 rounded border border-line bg-surface transition-transform hover:-translate-y-1">
      <div className="font-display text-sm font-bold text-primary tracking-wide">{index}</div>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{desc}</p>
    </div>
  )
}

function ProblemColumn({ label, points }: { label: string; points: string[] }) {
  return (
    <div>
      <span className="text-sm font-extrabold tracking-widest uppercase text-primary">{label}</span>
      <ul className="grid gap-2.5 mt-3 list-none p-0 m-0">
        {points.map((point) => (
          <li key={point} className="flex gap-2.5 text-base text-muted">
            <span className="flex-none text-primary">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

function LandingPage() {
  const [role, setRole] = useState<'cleaner' | 'host'>('cleaner')
  const [waitlistState, setWaitlistState] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')
  const [waitlistName, setWaitlistName] = useState('')

  const [showSuggest, setShowSuggest] = useState(false)
  const [suggestState, setSuggestState] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')

  async function handleWaitlistSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setWaitlistState('submitting')
    try {
      await submitNetlifyForm(form)
      setWaitlistName((new FormData(form).get('name') as string)?.trim() ?? '')
      setWaitlistState('done')
    } catch {
      setWaitlistState('error')
    }
  }

  async function handleSuggestSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSuggestState('submitting')
    try {
      await submitNetlifyForm(e.currentTarget)
      setSuggestState('done')
    } catch {
      setSuggestState('error')
    }
  }

  function closeSuggest() {
    setShowSuggest(false)
    setSuggestState('idle')
  }

  return (
    <div className="min-h-screen bg-page text-ink antialiased">
      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between gap-6 px-6 md:px-16 py-4 bg-page border-b border-line">
        <a href="#top" className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight no-underline">
          <span className="inline-flex items-center justify-center w-7.5 h-7.5 rounded-lg overflow-hidden">
            <img src="/images/logo.png" alt="MyCleans logo" className="block w-full h-full object-cover" />
          </span>
          <span className="flex flex-col leading-tight">
            <span>
              My<span className="text-primary">Cleans</span>
            </span>
            <span className="text-[11px] font-medium tracking-wide text-muted">{content.nav.tagline}</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm font-semibold">
          <a href="#cleaners" className="text-ink/80 hover:text-ink no-underline">For Cleaners</a>
          <a href="#hosts" className="text-ink/80 hover:text-ink no-underline">For Hosts</a>
          <a href="#features" className="text-ink/80 hover:text-ink no-underline">Features</a>
        </div>
        <a
          href="#register"
          className="inline-flex items-center px-5 py-2.5 rounded bg-primary text-white text-sm font-bold no-underline hover:brightness-95"
        >
          {content.nav.ctaLabel}
        </a>
      </nav>

      {/* HERO */}
      <section id="top" className="bg-page scroll-mt-20">
        <div className="max-w-[1180px] mx-auto px-6 md:px-16 pt-20 md:pt-24 pb-10 md:pb-12">
          <div className="flex flex-col items-center text-center gap-14">
            <div className="flex-1 max-w-[620px] mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-mint-ink text-xs font-bold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-mint-ink inline-block" />
                {content.hero.badge}
              </span>
              <h1 className="mt-5 font-display text-[clamp(40px,8vw,72px)] font-medium tracking-[-0.02em] leading-[1.02] text-ink">
                {content.hero.heading}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted max-w-[540px] mx-auto">{content.hero.paragraph}</p>
            </div>
            <div className="w-full max-w-[640px] mx-auto">
              <div className="rounded overflow-hidden bg-surface border border-line shadow-[0_24px_60px_rgba(10,30,22,0.13)]">
                <div className="h-1.5 bg-primary" />
                <div className="p-8 md:p-10">
                  <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-ink text-center">
                    {content.problem.heading}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-7 text-left">
                    <ProblemColumn label={content.problem.hostsLabel} points={content.problem.hostsPoints} />
                    <ProblemColumn label={content.problem.cleanersLabel} points={content.problem.cleanersPoints} />
                  </div>
                  <div className="mt-8 pt-7 border-t border-line text-center">
                    <div className="font-display text-xl font-semibold text-ink">{content.problem.closingBrand}</div>
                    <p className="mt-1 text-base text-muted">{content.problem.closingTagline}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[480px]">
              <div className="relative rounded overflow-hidden bg-surface border border-line shadow-[0_24px_60px_rgba(10,30,22,0.13)]">
                <div className="h-1.5 bg-primary" />
                <div className="px-9 pt-10 pb-5 text-center">
                  <img
                    src={content.hero.card.image}
                    alt={content.hero.card.imageAlt}
                    className="block w-13 h-13 mx-auto"
                  />
                  <h3 className="mt-4 font-display text-2xl font-medium tracking-[-0.02em] leading-tight text-ink">
                    {content.hero.card.heading}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {content.hero.card.paragraph}{' '}
                    <span className="text-ink font-semibold">{content.hero.card.highlight}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR CLEANERS */}
      <section id="cleaners" className="scroll-mt-18 bg-page">
        <div className="max-w-[1180px] mx-auto px-6 md:px-16 py-20 md:py-24">
          <div className="flex flex-wrap items-start gap-8">
            <div className="flex-1 min-w-80">
              <span className="text-sm font-extrabold tracking-widest uppercase text-primary">
                {content.cleaners.eyebrow}
              </span>
              <h2 className="mt-3.5 font-display text-4xl md:text-[50px] font-medium tracking-[-0.02em] leading-tight max-w-[14ch]">
                {content.cleaners.heading}
              </h2>
              <div className="grid gap-2.5 mt-5">
                {content.cleaners.checklist.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </div>
              <a
                href="#register"
                className="inline-flex items-center mt-7 px-6 py-3.5 rounded bg-primary text-white text-sm font-bold no-underline hover:brightness-95"
              >
                {content.cleaners.cta}
              </a>
            </div>
            <div className="flex-1 min-w-80">
              <div className="w-full rounded overflow-hidden border border-line shadow-[0_18px_44px_rgba(10,30,22,0.13)]">
                <img src={content.cleaners.image} alt={content.cleaners.imageAlt} className="block w-full h-auto" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mt-16">
            {content.cleaners.details.map((item) => (
              <CheckLine key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>

          <div className="mt-14 mx-auto max-w-[800px] rounded overflow-hidden bg-surface border border-line shadow-[0_24px_60px_rgba(10,30,22,0.13)]">
            <div className="h-1.5 bg-primary" />
            <div className="p-10 text-center">
              <p className="mx-auto text-lg leading-relaxed text-ink max-w-[62ch]">
                <span className="font-display italic text-xl md:text-2xl font-semibold">MyCleans</span>{' '}
                makes it super easy to{' '}
                <span className="font-display italic text-xl md:text-2xl font-semibold">report</span> on
                the property condition with just a few simple yes/no questions and a couple of{' '}
                <span className="font-display italic text-xl md:text-2xl font-semibold">photos</span>.
                Hosts will see{' '}
                <span className="font-display italic text-xl md:text-2xl font-semibold">exactly</span>{' '}
                what you're dealing with before you've even left the property, and realise that
                you are not just cleaning, you're{' '}
                <span className="font-display italic text-xl md:text-2xl font-semibold">
                  providing critical intelligence
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR HOSTS */}
      <section id="hosts" className="scroll-mt-18 bg-surface">
        <div className="max-w-[1180px] mx-auto px-6 md:px-16 py-20 md:py-24">
          <div className="flex flex-wrap-reverse items-start gap-8">
            <div className="flex-1 min-w-80">
              <div className="w-full rounded overflow-hidden border border-line shadow-[0_18px_44px_rgba(10,30,22,0.13)]">
                <img src={content.hosts.image} alt={content.hosts.imageAlt} className="block w-full h-auto" />
              </div>
            </div>
            <div className="flex-1 min-w-80">
              <span className="text-sm font-extrabold tracking-widest uppercase text-primary">
                {content.hosts.eyebrow}
              </span>
              <h2 className="mt-3.5 font-display text-4xl md:text-[50px] font-medium tracking-[-0.02em] leading-tight max-w-[15ch]">
                {content.hosts.heading}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted max-w-[48ch]">{content.hosts.paragraph}</p>
              <div className="grid gap-3 mt-6">
                {content.hosts.details.map((item) => (
                  <CheckLine key={item.title} title={item.title} desc={item.desc} />
                ))}
              </div>
              <a
                href="#register"
                className="inline-flex items-center mt-7 px-6 py-3.5 rounded bg-primary text-white text-sm font-bold no-underline hover:brightness-95"
              >
                {content.hosts.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="features" className="scroll-mt-18 bg-page">
        <div className="max-w-[1180px] mx-auto px-6 md:px-16 pt-20 md:pt-24 pb-10 md:pb-12">
          <div className="text-center max-w-[660px] mx-auto">
            <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary">
              {content.features.eyebrow}
            </span>
            <h2 className="mt-3.5 font-display text-4xl md:text-[50px] font-medium tracking-[-0.02em] leading-tight">
              {content.features.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{content.features.paragraph}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
            {content.features.cards.map((card) => (
              <FeatureCard key={card.index} index={card.index} title={card.title} desc={card.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" className="scroll-mt-18 bg-page">
        <div className="max-w-[700px] mx-auto px-6 md:px-16 py-20 md:py-24 text-center">
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary">{content.register.eyebrow}</span>
          <h2 className="mt-3.5 font-display text-4xl md:text-[50px] font-medium tracking-[-0.02em] leading-tight text-ink">
            {content.register.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{content.register.paragraph}</p>

          {waitlistState !== 'done' ? (
            <form
              name="waitlist"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleWaitlistSubmit}
              className="mt-9 mx-auto max-w-[520px] text-left bg-page border border-line rounded p-7"
            >
              <input type="hidden" name="form-name" value="waitlist" />
              <p className="hidden" aria-hidden="true">
                <label>
                  Don't fill this out: <input tabIndex={-1} name="bot-field" />
                </label>
              </p>
              <input type="hidden" name="role" value={role} />

              <label className="block text-sm font-bold text-ink mb-2">I am a…</label>
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                <button
                  type="button"
                  onClick={() => setRole('cleaner')}
                  className={`py-3.5 rounded font-bold text-sm cursor-pointer border-[1.5px] ${
                    role === 'cleaner' ? 'bg-primary text-white border-primary' : 'bg-transparent text-muted border-line'
                  }`}
                >
                  Cleaner
                </button>
                <button
                  type="button"
                  onClick={() => setRole('host')}
                  className={`py-3.5 rounded font-bold text-sm cursor-pointer border-[1.5px] ${
                    role === 'host' ? 'bg-primary text-white border-primary' : 'bg-transparent text-muted border-line'
                  }`}
                >
                  Host
                </button>
              </div>

              <label htmlFor="waitlist-name" className="block text-sm font-bold text-ink mb-2">
                Name
              </label>
              <input
                id="waitlist-name"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-3.5 py-3.5 rounded border border-line bg-surface text-base text-ink mb-4 outline-none focus:border-primary"
              />

              <label htmlFor="waitlist-email" className="block text-sm font-bold text-ink mb-2">
                Email
              </label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full px-3.5 py-3.5 rounded border border-line bg-surface text-base text-ink outline-none focus:border-primary"
              />

              {waitlistState === 'error' && (
                <p className="mt-2.5 text-sm font-semibold text-[#c0392b]">
                  Something went wrong — please try again, or email{' '}
                  <a href={`mailto:${content.footer.contactEmail}`} className="underline">
                    {content.footer.contactEmail}
                  </a>{' '}
                  directly.
                </p>
              )}

              <button
                type="submit"
                disabled={waitlistState === 'submitting'}
                className="w-full mt-3 py-4 rounded bg-primary text-white text-base font-bold cursor-pointer hover:brightness-95 disabled:opacity-60"
              >
                {waitlistState === 'submitting' ? content.register.submittingLabel : content.register.submitLabel}
              </button>
              <p className="mt-3.5 text-center text-xs text-muted">{content.register.formNote}</p>
            </form>
          ) : (
            <div className="mt-9 mx-auto max-w-[520px] bg-page border border-line rounded p-10">
              <div className="w-14 h-14 rounded-full bg-mint text-mint-ink flex items-center justify-center text-2xl font-extrabold mx-auto">
                ✓
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium text-ink">{content.register.successHeading}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Thanks{waitlistName ? `, ${waitlistName.split(' ')[0]}` : ''}. {content.register.successParagraph}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={() => setShowSuggest(true)}
            className="inline-flex items-center mt-7 px-7 py-4 rounded bg-transparent border-[1.5px] border-ink text-ink text-base font-bold cursor-pointer hover:bg-black/5"
          >
            {content.register.suggestCta}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-page border-t border-line">
        <div className="max-w-[1180px] mx-auto px-6 md:px-16 py-12 flex flex-col sm:flex-row flex-wrap gap-7 justify-between items-start">
          <div className="max-w-[340px]">
            <div className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded overflow-hidden">
                <img src="/images/logo.png" alt="MyCleans logo" className="block w-full h-full object-cover" />
              </span>
              <span>
                My<span className="text-primary">Cleans</span>
              </span>
            </div>
            <p className="mt-3.5 text-sm leading-relaxed text-muted">{content.footer.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-10 sm:gap-14">
            <div className="grid gap-2.5 text-sm">
              <span className="font-bold text-ink mb-0.5">The App</span>
              <a href="#cleaners" className="text-muted no-underline hover:text-ink">For Cleaners</a>
              <a href="#hosts" className="text-muted no-underline hover:text-ink">For Hosts</a>
              <a href="#features" className="text-muted no-underline hover:text-ink">Features</a>
            </div>
            <div className="grid gap-2.5 text-sm">
              <span className="font-bold text-ink mb-0.5">Get started</span>
              <a href="#register" className="text-muted no-underline hover:text-ink">Register interest</a>
              <span className="text-primary font-bold">Launching soon</span>
            </div>
            <div className="grid gap-2.5 text-sm">
              <span className="font-bold text-ink mb-0.5">Contact</span>
              <a href={`mailto:${content.footer.contactEmail}`} className="text-muted no-underline hover:text-primary">
                Email Us
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-line">
          <div className="max-w-[1180px] mx-auto px-6 md:px-16 py-4 text-sm text-muted">{content.footer.copyright}</div>
        </div>
      </footer>

      {/* SUGGEST A FEATURE MODAL */}
      {showSuggest && (
        <div
          onClick={closeSuggest}
          className="fixed inset-0 z-90 bg-black/55 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[480px] bg-page rounded border border-line shadow-2xl p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary">
                  {content.suggestModal.eyebrow}
                </span>
                <h3 className="mt-2 font-display text-2xl font-medium tracking-[-0.02em] text-ink">
                  {content.suggestModal.heading}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeSuggest}
                aria-label="Close"
                className="flex-none w-8.5 h-8.5 rounded-full border border-line bg-surface text-muted text-lg leading-none cursor-pointer hover:text-ink"
              >
                ×
              </button>
            </div>

            {suggestState !== 'done' ? (
              <form
                name="feature-suggestions"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSuggestSubmit}
                className="mt-5 text-left"
              >
                <input type="hidden" name="form-name" value="feature-suggestions" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don't fill this out: <input tabIndex={-1} name="bot-field" />
                  </label>
                </p>
                <p className="m-0 mb-4.5 text-sm leading-relaxed text-muted">{content.suggestModal.intro}</p>
                <label htmlFor="suggest-idea" className="block text-sm font-bold text-ink mb-2">
                  Your idea
                </label>
                <textarea
                  id="suggest-idea"
                  name="idea"
                  required
                  minLength={4}
                  rows={4}
                  placeholder="e.g. recurring weekly bookings, SMS reminders, multi-property dashboards…"
                  className="w-full px-3.5 py-3.5 rounded border border-line bg-surface text-base text-ink resize-vertical outline-none focus:border-primary box-border"
                />
                <label htmlFor="suggest-email" className="block text-sm font-bold text-ink mt-4 mb-2">
                  Email <span className="font-medium text-muted">(optional, if you'd like a reply)</span>
                </label>
                <input
                  id="suggest-email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  className="w-full px-3.5 py-3.5 rounded border border-line bg-surface text-base text-ink outline-none focus:border-primary box-border"
                />
                {suggestState === 'error' && (
                  <p className="mt-2.5 text-sm font-semibold text-[#c0392b]">
                    That didn't go through — please try again.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={suggestState === 'submitting'}
                  className="w-full mt-3 py-4 rounded bg-primary text-white text-base font-bold cursor-pointer hover:brightness-95 disabled:opacity-60"
                >
                  {suggestState === 'submitting' ? content.suggestModal.submittingLabel : content.suggestModal.submitLabel}
                </button>
              </form>
            ) : (
              <div className="mt-5 text-center py-5 px-2">
                <div className="w-14 h-14 rounded-full bg-mint text-mint-ink flex items-center justify-center text-2xl font-extrabold mx-auto">
                  ✓
                </div>
                <h4 className="mt-4.5 font-display text-xl font-medium text-ink">{content.suggestModal.successHeading}</h4>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{content.suggestModal.successParagraph}</p>
                <button
                  type="button"
                  onClick={closeSuggest}
                  className="mt-5 px-6.5 py-3 rounded border-[1.5px] border-line bg-transparent text-ink text-sm font-bold cursor-pointer hover:bg-surface"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
