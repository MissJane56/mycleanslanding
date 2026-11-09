import content from '../../content/landing.json'

export type LegalItem = {
  type: string
  n?: string
  text?: string
  sub?: string[]
  subStyle?: string
  head?: string[]
  rows?: string[][]
}

export type LegalDoc = {
  title: string
  updated: string
  summaryHeading?: string
  summaryNote?: string
  summary?: string[]
  sections: { heading: string; items: LegalItem[] }[]
}

const INLINE = /(\*\*[^*]+\*\*|[\w.+-]+@[\w-]+(?:\.[\w-]+)+|www\.[\w./-]*[\w/])/g

function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(INLINE).map((part, i) => {
        if (!part) return null
        if (part.startsWith('**')) {
          return (
            <strong key={i} className="font-bold">
              {part.slice(2, -2)}
            </strong>
          )
        }
        if (part.includes('@')) {
          return (
            <a key={i} href={`mailto:${part}`} className="text-primary underline">
              {part}
            </a>
          )
        }
        if (part.startsWith('www.')) {
          const own = part.startsWith('www.mycleans.com.au')
          const href = own ? part.replace('www.mycleans.com.au', '') || '/' : `https://${part}`
          return (
            <a key={i} href={href} className="text-primary underline">
              {part}
            </a>
          )
        }
        return part
      })}
    </>
  )
}

function SubList({ items, lettered }: { items: string[]; lettered: boolean }) {
  return (
    <ul className={`grid gap-2 mt-2.5 mb-0 ${lettered ? 'list-none p-0 m-0 mt-2.5' : 'list-disc pl-6'}`}>
      {items.map((t) => (
        <li key={t} className="text-base leading-relaxed text-ink">
          <Inline text={t} />
        </li>
      ))}
    </ul>
  )
}

function Item({ item }: { item: LegalItem }) {
  if (item.type === 'h3') {
    return <h3 className="mt-10 mb-1 text-xl font-bold tracking-tight text-ink">{item.text}</h3>
  }
  if (item.type === 'table') {
    return (
      <div className="mt-5 overflow-x-auto">
        <table className="w-full border-collapse text-left text-base">
          <thead>
            <tr>
              {item.head?.map((h) => (
                <th key={h} className="p-3 border border-line bg-surface font-bold text-ink">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {item.rows?.map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell} className="p-3 border border-line align-top text-ink">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  const body = (
    <div className="min-w-0">
      {item.text ? (
        <p className="m-0 text-base leading-relaxed text-ink">
          <Inline text={item.text} />
        </p>
      ) : null}
      {item.sub ? <SubList items={item.sub} lettered={item.subStyle === 'lettered'} /> : null}
    </div>
  )
  if (item.type === 'clause') {
    return (
      <div className="flex gap-4 mt-4">
        <span className="flex-none w-11 text-base font-bold text-primary">{item.n}</span>
        {body}
      </div>
    )
  }
  return <div className="mt-4">{body}</div>
}

export default function LegalPage({ doc, other }: { doc: LegalDoc; other: { href: string; label: string } }) {
  return (
    <div className="min-h-screen bg-page text-ink antialiased">
      <header className="flex items-center justify-between gap-6 px-6 md:px-16 py-4 bg-page border-b border-line">
        <a href="/" className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight no-underline">
          <span className="inline-flex items-center justify-center w-7.5 h-7.5 rounded-lg overflow-hidden">
            <img src="/images/logo.png" alt="MyCleans logo" className="block w-full h-full object-cover" />
          </span>
          <span>
            My<span className="text-primary">Cleans</span>
          </span>
        </a>
        <a href="/" className="text-sm font-semibold text-ink/80 hover:text-ink no-underline">
          ← Back to home
        </a>
      </header>

      <main className="max-w-[780px] mx-auto px-6 py-14 md:py-20 break-words">
        <h1 className="m-0 font-display text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-tight text-ink">
          {doc.title}
        </h1>
        <p className="mt-3 mb-0 text-base text-muted">Last updated: {doc.updated}</p>

        {doc.summary ? (
          <section className="mt-10 rounded border border-line bg-surface p-6 md:p-7">
            <h2 className="m-0 text-xl font-bold tracking-tight text-ink">{doc.summaryHeading}</h2>
            {doc.summaryNote ? <p className="mt-2 mb-0 text-base italic text-muted">{doc.summaryNote}</p> : null}
            <ul className="grid gap-2 mt-4 mb-0 pl-6 list-disc">
              {doc.summary.map((t) => (
                <li key={t} className="text-base leading-relaxed text-ink">
                  <Inline text={t} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {doc.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="m-0 font-display text-2xl md:text-3xl font-medium tracking-[-0.01em] text-ink">
              {section.heading}
            </h2>
            {section.items.map((item, i) => (
              <Item key={`${section.heading}-${i}`} item={item} />
            ))}
          </section>
        ))}
      </main>

      <footer className="border-t border-line">
        <div className="max-w-[1180px] mx-auto px-6 md:px-16 py-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
          <span>{content.footer.copyright}</span>
          <span className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={other.href} className="text-muted no-underline hover:text-ink">
              {other.label}
            </a>
            <a href="/" className="text-muted no-underline hover:text-ink">
              Home
            </a>
            <a href={`mailto:${content.footer.contactEmail}`} className="text-muted no-underline hover:text-ink">
              Email Us
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}
