# ui-ux-pro-max — shared bundle

Reference material backing the `/ui-ux-pro-max` Cursor command
(`.cursor/commands/ui-ux-pro-max.md`).

Keeping these as separate docs means any command, rule, or skill can `@`-reference
the same source of truth instead of duplicating guidance.

| File | What it covers |
|------|----------------|
| `principles.md` | Design taste: hero-as-thesis, typography, structure, motion, copy |
| `workflow.md` | The two-pass loop: ground → plan → critique → build → critique |
| `anti-patterns.md` | The "AI-generated default" looks to avoid, and how to test for them |
| `quality-checklist.md` | The accessibility / responsive / performance quality floor |
| `skills/frontend-design.md` | Visual design skill (distinctive, intentional UI) |
| `skills/figma-to-react.md` | Skill for recreating a Figma design as an interactive React frontend |

## How it fits together

```
/ui-ux-pro-max   (the command, invoked by the user)
      │
      ├─ reads → principles.md        (what "good" means here)
      ├─ reads → workflow.md          (how to get there)
      ├─ reads → anti-patterns.md     (what to avoid)
      └─ reads → quality-checklist.md (what must always be true)
```

For Figma-specific work, the command also points at the bundled skills in
`skills/` (`figma-to-react.md`, `frontend-design.md`).
