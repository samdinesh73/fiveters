# Fiveters Media — Website Fix List (Developer Version)

Quick reference: brand color `#9a0002` (crimson), backgrounds `#efe6dd` (cream) / `#0a0c14` (dark), font Geist. **Keep the 3D hero, custom cursor, spark effects, and color palette — those stay exactly as they are.** Everything below is content/structure fixes only.

---

## 🔴 CRITICAL — Fix These First

| # | Section | What's Wrong | What to Change | Why | Effort |
|---|---|---|---|---|---|
| 1 | Testimonials | Quotes are about ERP software ("Implementing this ERP was smooth and quick"), not marketing | Delete all 4 current testimonials. Replace with real client quotes (copy provided below in "Ready-to-Paste Copy") | Biggest trust problem on the site — visitors will notice the mismatch | 1–3 days (need client approval) |
| 2 | Trust badges | "SupaBase Certified" badge shown — that's a database tool, irrelevant to marketing | Remove it. Replace with Google Partner / Meta Business Partner / Klaviyo or HubSpot Partner badges | Wrong badge makes people question the real badges too | <1 hour |
| 3 | Mobile hero | Code has a comment: "This effect is not optimized for mobile" — 3D scene may break/lag on phones | Build a static image or short video loop as the mobile hero fallback (don't load the WebGL scene on mobile) | Most first-time visitors on some channels are mobile — broken hero = lost visitors | 2–4 days |

---

## 🟠 HIGH PRIORITY

| # | Section | What's Wrong | What to Change | Why | Effort |
|---|---|---|---|---|---|
| 4 | Hero | No numbers shown — just the headline | Add one line under the headline: `$[X]M+ generated for clients · [Y]+ campaigns scaled · [Z]x avg ROAS` | Numbers build trust faster than words | 1 day |
| 5 | Hero | Two CTAs competing (Book a Consultation / Explore Services) | Keep ONE main button ("Request Your Free Scale Audit"). Make the second option a plain text link, not a button | One clear action converts better than two competing ones | <1 day |
| 6 | Case studies | Just show client name/title, no results | Rebuild each card: **Big number result → Client name/industry → 2-line strategy summary** (template below) | People scan for numbers first — lead with the result | 3–5 days |
| 7 | Services section | Good descriptions, but no proof attached | Add one metric under each service (e.g., "`[X]`% avg traffic increase" under SEO) | Turns feature list into a results list | 1–2 days |
| 8 | Team section | Real names/job titles + illustrated/AI-style avatar images | Pick one: (A) use real photos of the team, or (B) fully commit to illustrated style for all team content, don't mix | Real name + fake-looking face = looks synthetic | 1–2 weeks (if photoshoot needed) |
| 9 | Growth Calculator | Great tool, but buried low on the page | Move it higher up — right after Case Studies, before Testimonials | It's your best lead-gen tool, don't bury it | <1 day (layout only) |

---

## 🟡 MEDIUM PRIORITY

| # | Section | What's Wrong | What to Change | Why | Effort |
|---|---|---|---|---|---|
| 10 | Process section | Steps exist but aren't named/branded | Name it **"The Fiveters Production Method"** with 5 steps: Brief → Storyboard → Shoot → Screen → Scale (details below) | A named process feels like a proprietary system, not generic steps | ~1 week |
| 11 | Service pages | All 5 services live only as homepage sections, no dedicated pages | Build one standalone page per service (SEO, Paid Ads, Web/SaaS, Email/SMS, Creative) | Needed for SEO — each service can then rank for its own keywords | 2–3 weeks |
| 12 | SEO / Schema | No structured data detected | Add Organization schema + Service schema (per service page) + Review schema (once real testimonials are live) | Helps Google (and AI search tools like ChatGPT/Gemini) understand and cite the site | 2–3 days |
| 13 | Footer | "Terms & Conditions" AND "Terms of Service" both listed (duplicate-looking), plus an "Affiliate Policy" of unclear purpose | Confirm which legal pages are actually real/current, remove the rest | Looks like leftover template clutter | <1 day |
| 14 | Stats block | Shows big numbers (revenue, ROAS) with no source | Add small text under each stat: "Based on `[X]` clients, `[timeframe]`" | Unsupported big numbers look like marketing fluff, not data | <1 day |

---

## 🟢 LOW PRIORITY / NICE-TO-HAVE

| # | Section | What to Add | Why |
|---|---|---|---|
| 15 | Case studies | Before/after slider showing old vs. new ad creative | Visually engaging, easy to share |
| 16 | Homepage/Services | "Which service do you need?" quiz | Pre-qualifies leads before sales call |
| 17 | Stats block | Animate numbers counting up on scroll | Small polish, high visual payoff |
| 18 | Case study pages | Add a line chart showing growth over time | Makes results feel real and trackable |
| 19 | Homepage | Industry filter (Ecommerce / SaaS / Local Business) to sort case studies | Helps visitors find relevant proof faster |

---

## ✅ Ideal Homepage Order (Top to Bottom)

```
1. Hero (headline + proof numbers + ONE clear CTA)
2. Trusted-By / Partner Badges (relevant ones only)
3. Stats Block (revenue, ROAS — with source note)
4. Services (each with a proof metric attached)
5. Process ("The Fiveters Production Method")
6. Case Studies (result-first cards)
7. Growth Calculator / Free Audit tool  ← moved up, was too low before
8. Testimonials (new, marketing-specific)
9. Team
10. FAQ
11. Final CTA banner
12. Blog preview (optional)
13. Footer
```

**Why this order:** build trust fast (badges, stats) → explain the offer (services, process) → prove it works (case studies) → ask for a small commitment (free audit) → reinforce with testimonials → ask for the bigger commitment (call/consultation) at the end.

---

## 📋 Ready-to-Paste Copy

**Hero**
```
Eyebrow: PERFORMANCE MARKETING, ENGINEERED LIKE A PRODUCTION
Headline: We Scale Brands Through Cinematic Digital Marketing.
Subheading: Paid media, SEO, and conversion-engineered web builds — 
produced with the precision of a film set, measured with the rigor 
of a trading desk.
Proof line: $[X]M+ generated for clients · [Y]+ campaigns scaled · [Z]x avg ROAS
Primary CTA button: Request Your Free Scale Audit
Secondary link (text only, not a button): See how we work →
```

**Case Study Card Template** (repeat for each client)
```
[+312%]  ← big number, large font
organic traffic in 90 days
Aura Cosmetics — DTC Cosmetics
Aura came to us with strong products and flat organic growth. We 
rebuilt their content architecture around buyer-intent search terms 
and rewired internal linking — turning search into their top 
acquisition channel.
[View the full breakdown →]
```

**Testimonial Template** (use real quotes, this format only)
```
"Fiveters didn't just run our ads — they rebuilt the landing pages 
driving them. Our CPA dropped [34%] in the first quarter and hasn't 
crept back up."
— [Name, Title, Company]
```

**Process Steps**
```
1. Brief — Discovery, audit, and one measurable goal agreed before 
   any spend moves.
2. Storyboard — Strategy and creative direction mapped like a 
   production, not a checklist.
3. Shoot — Campaigns built, pages engineered, creative produced.
4. Screen — Live testing, real-time optimization, weekly reviews.
5. Scale — What works gets budget. What doesn't gets cut.
```

**FAQ Starters**
```
Q: How fast will we see results?
A: Paid channels typically show signal within 2–3 weeks. SEO and 
email compound over 90+ days. We'll tell you which applies to your 
goal before you commit.

Q: Do you work with our existing in-house team?
A: Yes — we plug into existing marketing teams as often as we 
replace the need for one.

Q: What makes Fiveters different?
A: One accountable team — strategy, creative, and media — measured 
against one number you agree to before we start.
```

**Final CTA Banner**
```
Headline: Ready to see what scale actually looks like?
Subtext: Get a free audit of your SEO and paid channels — no 
obligation, no generic report, just what's actually working.
Button: Request Your Free Scale Audit
```

---

## 🖼️ Image Guidelines (Quick Reference)

| Section | Use | Don't Use |
|---|---|---|
| Hero | Keep existing 3D scene (desktop) + static poster image (mobile) | A generic stock photo |
| Trust bar | Real partner logo files (flat/mono color) | AI-generated logos |
| Services | Abstract dark illustrations, crimson accent glow, minimal geometric shapes | Generic stock business photos |
| Case studies | Real screenshots of client dashboards/ads/sites in laptop/phone mockups | Fabricated/fake-looking dashboard images |
| Team | Real photography, consistent lighting & background | Illustrated avatars paired with real names (current mismatch) |
| Growth calculator | Realistic dark-mode dashboard mockup with crimson highlights | Cartoonish or overly abstract graphics |

---

## 🔍 SEO Checklist

- [ ] Build separate landing page for each service (SEO, Paid Ads, Web/SaaS, Email/SMS, Creative)
- [ ] Add meta title + description to every new page (follow homepage's existing format — it's already good)
- [ ] Add Organization schema sitewide
- [ ] Add Service schema to each service page
- [ ] Add Review schema once real testimonials are live
- [ ] Add alt text to every image (case studies, services, team)
- [ ] Confirm hero headline/subhead text is in the actual HTML (not only rendered inside the WebGL canvas) — check "View Source"
- [ ] Write FAQ content in direct question/answer format — this also helps the site get cited by AI tools like ChatGPT and Google AI Overviews
- [ ] Start a blog with 2–3 pillar guides, each linking to a relevant service page

---

## 🚫 Do NOT Touch (Already Strong)

- Crimson / cream / dark color palette
- Geist font
- Custom cursor + spark click effects
- 3D WebGL hero concept (desktop)
- Growth Calculator / free audit tool functionality
- Existing services section copywriting style

---

## Summary: What Happens If You Only Do 3 Things

1. **Replace the testimonials.** (biggest trust issue)
2. **Fix the mobile hero fallback.** (biggest technical risk)
3. **Add proof numbers to the hero + rebuild case study cards to lead with results.** (biggest conversion lift)

Everything else in this doc can follow after.
