import { createFileRoute } from '@tanstack/react-router'

import LegalPage from '@/components/LegalPage'
import type { LegalDoc } from '@/components/LegalPage'
import terms from '../../content/legal/beta-terms.json'

export const Route = createFileRoute('/betaterms')({
  head: () => ({
    meta: [
      { title: 'Beta Terms | MyCleans' },
      {
        name: 'description',
        content: 'The terms for taking part in the MyCleans beta, including the 2 years of free premium access.',
      },
    ],
  }),
  component: BetaTermsPage,
})

function BetaTermsPage() {
  return <LegalPage doc={terms as LegalDoc} other={{ href: '/privacypolicy', label: 'Privacy Policy' }} />
}
