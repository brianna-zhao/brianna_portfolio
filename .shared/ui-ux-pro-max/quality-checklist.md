# Quality floor checklist

Non-negotiable. Meet all of these without announcing it. Build them in as you go.

## Accessibility

- [ ] Color contrast meets WCAG AA (≥ 4.5:1 body text, ≥ 3:1 large text / UI).
- [ ] Visible keyboard focus on every interactive element (don't remove outlines without a
      replacement).
- [ ] Logical tab order; interactive things are real buttons/links, not click-handlers on
      `<div>`s.
- [ ] Images have meaningful `alt` (or `alt=""` if purely decorative).
- [ ] Text stays legible — no critical text baked into images without a real-text fallback.
- [ ] Targets are ≥ 44×44px on touch.

## Responsive

- [ ] Works from 320px up to wide desktop; no horizontal scroll.
- [ ] Type scales sensibly (`clamp()` / container queries over fixed px where it helps).
- [ ] Layout reflows rather than just shrinking; tap targets stay comfortable on mobile.
- [ ] No fixed heights that clip content when it wraps.

## Motion

- [ ] `@media (prefers-reduced-motion: reduce)` disables or tames non-essential animation.
- [ ] Animate only `transform` and `opacity` — never `width`/`height`/`top`/`left` in a loop.
- [ ] Animated elements get `will-change: transform` while active, and release it when done.
- [ ] Avoid `filter` (e.g. `drop-shadow`) and large `box-shadow` on elements that are
      actively transforming — they re-rasterize every frame.
- [ ] No layout shift (CLS): reserve space for media; don't animate layout-affecting props.

## Performance

- [ ] Image assets are sized to their display size (don't ship a 2360px image for a 90px
      logo); compress appropriately.
- [ ] Heavy embeds (`iframe`, video, maps) use `loading="lazy"` so they don't block
      first paint or compete with intro animations.
- [ ] Fonts: preconnect + `display=swap`; don't block render waiting on a webfont. Provide a
      build/fallback path so JS that depends on fonts can't hang forever.
- [ ] No long main-thread work during an intro animation (defer/lazy-load competing work).

## Code hygiene

- [ ] CSS selector specificity is predictable; section spacing isn't canceled by clashing
      `.type` vs `.element` selectors.
- [ ] No dead/duplicate assets left in the repo after a redesign.
- [ ] Semantic HTML; classes named by role.
