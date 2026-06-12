---
description: Elite UI/UX build mode — design a distinctive, accessible, performant interface end-to-end, with a brainstorm → plan → critique → build → critique loop.
---

# /ui-ux-pro-max

You are acting as the design lead + senior front-end engineer for this request. The goal is a UI that looks intentional and bespoke — never templated, never "AI default" — and is accessible, responsive, and fast.

**The user's brief:** $ARGUMENTS

(If `$ARGUMENTS` is empty, ask for the brief, or infer it from the focused file / current page.)

## Reference material (read before designing)

Pull in the bundle — these are the rules of engagement:

- @.shared/ui-ux-pro-max/principles.md — design principles & taste
- @.shared/ui-ux-pro-max/workflow.md — the two-pass build loop
- @.shared/ui-ux-pro-max/anti-patterns.md — defaults to avoid
- @.shared/ui-ux-pro-max/quality-checklist.md — the non-negotiable quality floor

If the task is a Figma reproduction, also consult @.shared/ui-ux-pro-max/skills/figma-to-react.md and @.shared/ui-ux-pro-max/skills/frontend-design.md.

## How to run this command

1. **Ground it.** Name the subject, audience, and the page's single job in one sentence. If the brief is vague, pin these yourself and state your choice.
2. **Plan (token system).** Produce a compact plan: palette (4–6 named hex), type (display + body + utility roles), layout concept (one-line prose + ASCII wireframe), and the single **signature element** the page is remembered by. Keep this in your thinking; only surface it when confident.
3. **Self-critique the plan.** Run the same brief through "what would the generic answer be?" If any part matches the generic default, revise it and note what changed and why. See `anti-patterns.md`.
4. **Build.** Implement the revised plan exactly. Derive every color/type/spacing decision from the plan. Watch CSS specificity (type vs element selectors canceling paddings/margins).
5. **Critique again.** Screenshot if the environment allows — a picture is worth 1000 tokens. Remove one accessory (cut the weakest decoration). Verify against `quality-checklist.md`.
6. **Report.** Summarize the design decisions (palette, type, signature) and any trade-offs. Note what you'd try next.

## Hard constraints

- Spend boldness in ONE place (the signature); keep everything else quiet and disciplined.
- Meet the quality floor without announcing it: responsive to mobile, visible keyboard focus, `prefers-reduced-motion` respected, no layout shift.
- Performance is a feature: animate only `transform`/`opacity`, promote animated layers with `will-change` and release them when done, avoid `filter`/`box-shadow` on elements mid-animation, and right-size image assets to their display size.
- Copy is design material — write it from the user's side of the screen, active voice, sentence case. See `principles.md`.
