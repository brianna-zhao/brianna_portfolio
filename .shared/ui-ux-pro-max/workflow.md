# Workflow — the two-pass loop

> brainstorm → plan → critique → build → critique again

Do most of this in your thinking. Only surface ideas to the user when you have high
confidence they'll delight.

## Pass 1 — Plan (a compact token system)

From the brief, draft:

- **Color** — the palette as 4–6 *named* hex values (e.g. `ink #14110E`, `bone #F4F1EA`,
  `signal #FF5436`). Name them by role, not just value.
- **Type** — typefaces for 2+ roles: a characterful **display** face used with restraint, a
  complementary **body** face, and a **utility** face for captions/data if needed. Define the
  scale (sizes, weights, widths, letter-spacing).
- **Layout** — the layout concept in one or two sentences, plus an **ASCII wireframe** to
  ideate and compare arrangements quickly.
- **Signature** — the single unique element this page is remembered by, embodying the brief.

### Example wireframe sketch

```
┌───────────────────────────────────────┐
│ ◐ wordmark              about  work  ☰ │
├───────────────────────────────────────┤
│                                         │
│   [ SIGNATURE: oversized kinetic title ]│
│   one-line thesis · subject's own voice │
│                                         │
├───────────────────────────────────────┤
│  ▦ work grid (asymmetric, not 3-up)     │
└───────────────────────────────────────┘
```

## Critique the plan (before any code)

Run the brief through "what's the generic answer for a page like this?" If a part of your
plan matches that default, revise it — and say what you changed and why. The brief's own
words always win: if it explicitly asks for a look, follow it exactly. Spend free axes on
choices specific to *this* subject, not on defaults. See `anti-patterns.md`.

## Pass 2 — Build

- Implement the revised plan exactly. Derive every color/type/spacing value from the tokens.
- Watch CSS specificity: type-based selectors (`.section`) and element-based ones (`.cta`)
  can silently cancel each other's padding/margins. Keep section spacing predictable.
- Build to the quality floor as you go (see `quality-checklist.md`), not as a cleanup pass.

## Critique again

- Screenshot the result if the environment supports it — a picture is worth 1000 tokens.
- Remove one accessory: cut the weakest decoration.
- Walk the quality checklist. Fix before declaring done.
- Jot a short note on what you tried and what you'd explore next, so future passes build on
  it instead of repeating it.
