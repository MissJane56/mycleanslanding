import { createFileRoute } from '@tanstack/react-router'

import LegalPage from '@/components/LegalPage'
import type { LegalDoc } from '@/components/LegalPage'
import privacy from '../../content/legal/privacy-policy.json'

export const Route = createFileRoute('/privacypolicy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy | MyCleans' },
      {
        name: 'description',
        content: 'How MyCleans collects, uses and protects personal information on our website and in the MyCleans app.',
      },
    ],
  }),
  component: PrivacyPolicyPage,
})

function PrivacyPolicyPage() {
  return <LegalPage doc={privacy as LegalDoc} other={{ href: '/betaterms', label: 'Beta Terms' }} />
}
