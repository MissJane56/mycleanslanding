import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function CheckIcon({ color = 'teal' }: { color?: string }) {
  const colorClass = color === 'indigo' ? 'text-indigo-500' : 'text-teal-500'
  return (
    <svg
      className={`w-5 h-5 ${colorClass} flex-shrink-0 mt-0.5`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-teal-600">
              MyCleans
              <span className="text-gray-800">.App</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#cleaners" className="hover:text-teal-600 transition-colors">For Cleaners</a>
            <a href="#hosts" className="hover:text-teal-600 transition-colors">For Hosts</a>
            <a href="#features" className="hover:text-teal-600 transition-colors">Features</a>
          </div>
          <a
            href="#register"
            className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
          >
            Register Interest
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-teal-950">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36 text-center">
          <span className="inline-block bg-teal-600/20 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Launching Soon
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Cleaners:{' '}
            <span className="text-teal-400">Get Paid Quicker.</span>
            <br />
            Hosts:{' '}
            <span className="text-teal-300">Get Reliable Cleaners.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            An innovative solution connecting professional cleaners and
            self-managing BnB hosts — built for trust, transparency, and smooth
            operations.
          </p>
          <div id="register" className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#cleaners"
              className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-teal-500/30 hover:scale-105"
            >
              Register Your Interest
            </a>
            <a
              href="#features"
              className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all backdrop-blur"
            >
              Suggest a Feature
            </a>
          </div>
        </div>
      </section>

      {/* DUAL AUDIENCE STRIP */}
      <section className="bg-teal-600">
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 divide-x divide-teal-500">
          <div className="flex items-center justify-center gap-3 pr-6">
            <span className="text-3xl">🧹</span>
            <span className="text-white font-bold text-lg">For Cleaners</span>
          </div>
          <div className="flex items-center justify-center gap-3 pl-6">
            <span className="text-3xl">🏠</span>
            <span className="text-white font-bold text-lg">For Hosts</span>
          </div>
        </div>
      </section>

      {/* FOR CLEANERS */}
      <section id="cleaners" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">
                For Cleaners
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Your expertise finally gets the recognition it deserves.
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Working with multiple Airbnb hosts shouldn't mean juggling
                endless text threads, chasing payments, and dealing with
                miscommunication. MyCleans.App gives you the tools you deserve.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  ['Get paid faster', 'Professional invoicing through the app — no more chasing payments.'],
                  ['Show your value', 'Document every job with photos and instant condition reports that prove your expertise.'],
                  ['Save time', 'Streamlined coordination means less admin, more actual work.'],
                  ['Build trust', 'Transparent documentation justifies your rates and showcases your professionalism.'],
                  ['Find quality clients', 'Connect with verified hosts who respect professional cleaners and want long-term relationships.'],
                  ['Grow your business', 'Build your portfolio and client base with tools that make your job easier.'],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <CheckIcon color="teal" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 flex-wrap">
                <a
                  href="#register"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-full transition-colors shadow"
                >
                  Get Started
                </a>
                <a
                  href="#features"
                  className="border border-gray-300 hover:border-teal-500 text-gray-700 hover:text-teal-600 font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 rounded-3xl p-10 shadow-sm">
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                  "When you document property conditions with photos and detailed
                  notes after each turnover, hosts can see exactly what you're
                  dealing with — whether that's guest damage, missing items, or
                  the extra effort required for a deep clean. This builds trust
                  and justifies your rates."
                </blockquote>
                <div className="border-t border-teal-200 pt-6">
                  <p className="text-gray-600 text-base leading-relaxed">
                    You're not just cleaning — you're providing critical
                    intelligence that helps hosts run better businesses, and{' '}
                    <strong className="text-teal-700">MyCleans.App</strong>{' '}
                    makes that value visible.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  {[
                    ['⚡', 'Faster Payments'],
                    ['📸', 'Photo Reports'],
                    ['🤝', 'Quality Clients'],
                  ].map(([icon, label]) => (
                    <div key={label} className="bg-white rounded-2xl p-4 shadow-sm border border-teal-100">
                      <div className="text-2xl mb-1">{icon}</div>
                      <div className="text-xs font-semibold text-gray-600">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* FOR HOSTS */}
      <section id="hosts" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            <div className="lg:w-1/2">
              <span className="inline-block text-indigo-600 text-xs font-bold uppercase tracking-widest mb-3">
                For Hosts
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Operational clarity — without outsourced management.
              </h2>
              <p className="text-gray-500 text-lg mb-4 leading-relaxed">
                Most self-managing hosts don't need a full property manager.
                Property managers charge 25% to solve problems you don't have,
                while missing the operational gaps that actually exist.
              </p>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                MyCleans.App gives you structured systems for the hard parts —
                cleaner coordination, property reporting, invoicing — without
                taking control of your revenue-generating decisions.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  ['Protect your Superhost status', 'Get instant property condition reports so you can leave accurate, timely guest reviews.'],
                  ['Claim damage protection', 'Timestamped photo evidence makes Airbnb damage claims straightforward.'],
                  ['Stop passing problem guests', 'Accurate, fact-based reviews keep the community honest.'],
                  ['Find cleaners fast', 'Browse a service provider directory — need an emergency clean? Done in minutes.'],
                  ['Streamlined invoicing', 'Approve cleaner invoices instantly and pay with one click.'],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <CheckIcon color="indigo" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 flex-wrap">
                <a
                  href="#register"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-full transition-colors shadow"
                >
                  Get Started
                </a>
                <a
                  href="#features"
                  className="border border-gray-300 hover:border-indigo-500 text-gray-700 hover:text-indigo-600 font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-3xl p-10 shadow-sm">
                <div className="bg-white rounded-2xl p-6 mb-6 border border-indigo-100 shadow-sm">
                  <div className="text-4xl font-extrabold text-indigo-600 mb-1">25%</div>
                  <div className="text-gray-600 font-medium">
                    Average property manager fee — for decisions you're already making yourself.
                  </div>
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                  "MyCleans.App gives entrepreneurial hosts operational clarity,
                  not outsourced management. Your cleaner now has the tools to
                  report on property condition instantly — and invoice you the
                  moment the clean is done."
                </blockquote>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ['🔍', 'Instant Reports', 'Fact-based guest reviews'],
                    ['📋', 'Damage Claims', 'Timestamped evidence ready'],
                    ['🗓️', 'Calendar Sync', 'Airbnb & other platforms'],
                    ['📂', 'Cleaner Directory', 'Find local help fast'],
                  ].map(([icon, title, sub]) => (
                    <div key={title} className="bg-white rounded-2xl p-4 shadow-sm border border-indigo-100">
                      <div className="text-2xl mb-1">{icon}</div>
                      <div className="text-sm font-bold text-gray-800">{title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Your workflow, redesigned.
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">
              Three powerful features that make every clean seamless — for both
              sides of the relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: '⚡',
                bg: 'bg-teal-50',
                border: 'border-teal-100',
                iconBg: 'bg-teal-100',
                title: 'Instant Reports',
                desc: "Structured and clear for owners, quick and easy for cleaners. Reporting takes seconds — a few clicks and it's done. Instantly sent to the property owner, enabling timely, accurate guest reviews. AI-powered review assistance included.",
              },
              {
                emoji: '🧾',
                bg: 'bg-indigo-50',
                border: 'border-indigo-100',
                iconBg: 'bg-indigo-100',
                title: 'Easy Invoices',
                desc: "Once a report is completed, an invoice is automatically generated for the cleaner to approve or edit before sending to the host. The host approves and it's paid — streamlining the process for both sides.",
              },
              {
                emoji: '🔧',
                bg: 'bg-violet-50',
                border: 'border-violet-100',
                iconBg: 'bg-violet-100',
                title: 'Use That Tech!',
                desc: 'Set up payment gateways and permissions for timely invoice payment. Sync Airbnb and other calendars. Set up your profile to be searchable — whether you need a cleaner or a cleaning job. Integrated tools that just work.',
              },
            ].map(({ emoji, bg, border, iconBg, title, desc }) => (
              <div
                key={title}
                className={`${bg} ${border} border rounded-3xl p-8 flex flex-col gap-4`}
              >
                <div className={`${iconBg} w-14 h-14 rounded-2xl flex items-center justify-center text-3xl`}>
                  {emoji}
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">{title}</h3>
                <p className="text-gray-600 leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-teal-600 to-indigo-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to transform how you work?
          </h2>
          <p className="text-teal-100 text-xl mb-10 max-w-2xl mx-auto">
            Join the waitlist today. Be first to experience cleaner coordination,
            instant reporting, and seamless payments — all in one app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="bg-white hover:bg-gray-50 text-teal-700 font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Register Your Interest
            </a>
            <a
              href="#features"
              className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-lg transition-all"
            >
              Suggest a Feature
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-2xl font-extrabold text-teal-400">
            MyCleans<span className="text-white">.App</span>
          </span>
          <p className="text-gray-500 text-sm text-center">
            Connecting professional cleaners and self-managing BnB hosts.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#cleaners" className="hover:text-teal-400 transition-colors">Cleaners</a>
            <a href="#hosts" className="hover:text-teal-400 transition-colors">Hosts</a>
            <a href="#features" className="hover:text-teal-400 transition-colors">Features</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
