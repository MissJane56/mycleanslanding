# Legal pages: the Beta Terms and the Privacy Policy

## Where they are

| What | Where |
|---|---|
| Beta Terms | `mycleans.com.au/betaterms` |
| Privacy Policy | `mycleans.com.au/privacypolicy` |
| Linked from | the site footer, the application form checkbox, "Terms apply" under the offer, the "Suggest a feature" form, and each other |

The company named in both is **MissJaneVentures Pty Ltd ACN 671838190**. The terms are governed by the laws of Queensland.

## How to change them

The text lives in `content/legal/beta-terms.json` and `content/legal/privacy-policy.json`. They aren't editable in the CMS on purpose, so wording can't change by accident. Ask Claude to change them, or edit the JSON and update its `updated` date.

The application form records which versions each person agreed to, in a `terms` field in Netlify → Forms → `waitlist` (for example "Beta Terms 9 November 2026; Privacy Policy 9 November 2026"). **Always change `updated` when you change the wording**, so that record stays accurate.

## Decisions in the Beta Terms (yours, from the 9 Nov version)

- The reward needs at least one use of the beta and one piece of feedback (clause 6.3).
- Strict confidentiality: no public screenshots or recordings without permission (clause 10).
- Liability capped at AUD $1 (clause 13.2). The indemnity is kept (clause 13.4).
- Someone who leaves the beta loses the reward (clause 14.4).
- Australia only (clause 3.1).

### Worth raising with a lawyer

- **The $1 cap** (13.2). It's unusually low, and unfair-contract-terms rules apply to standard-form contracts with consumers and small businesses.
- **"Courts of Australia"** (16.2). Contracts usually name a state or territory, such as the courts of Queensland.
- **Clause 2.3** says a launch date has been tentatively set, but nothing public gives one. Keep your public wording consistent with it.
- **Marketing and clause 6.3.** The terms make the reward conditional, so the offer in posts and on the site should not read as unconditional. The "Terms apply" link covers the basics, and "What we ask" on the site names the main condition.

## Defaults I chose when finishing the Privacy Policy

The policy had blanks, so I filled them with careful, generic wording. Change any you disagree with.

- Providers named only where known (Netlify, Stripe, Google). Email and app hosting providers are described generally, not named.
- Retention is described in words, with no fixed periods, except records the law requires (generally at least five years for tax).
- Requests and complaints are answered within 30 days.
- The app "may use essential cookies or browser storage" to keep people signed in. No advertising cookies.
- There's no section on identity verification or a postal address. Add them if the app verifies hosts or cleaners.

## When the Privacy Policy needs updating

Update it **before** you add any of these: website analytics, ad or social pixels, a mailing tool, a chat widget, embedded video, social login, or app features that collect different data. The policy says the website sets no cookies and uses no analytics. That's true today and must stay true.

## What the policy commits you to

- Answering requests to see, correct or delete information within 30 days.
- An unsubscribe link in every marketing email, and clear sender identification (Spam Act).
- Following the data breach rules (clause 10).
- Deleting data when it's no longer needed. Netlify Forms keeps submissions until you delete them, so set a reminder.
- Keeping card details out of your own systems. Stripe handles them.

## Email wording

Footer of every waitlist email (the unsubscribe link is required):

> You're receiving this because you joined the MyCleans waitlist. Beta Terms: https://mycleans.com.au/betaterms · Privacy Policy: https://mycleans.com.au/privacypolicy · Unsubscribe: [link].

Beta-day invitation:

> By using the beta you agree to the Beta Terms: https://mycleans.com.au/betaterms.
