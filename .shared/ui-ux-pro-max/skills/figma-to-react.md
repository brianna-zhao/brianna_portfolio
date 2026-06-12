---
name: figma-to-react
description: Use this skill when the user wants to recreate a Figma design as a highly interactive frontend website using React, Tailwind CSS, and animation libraries.
---

# Figma to Interactive React Frontend Skill

## Goal

Recreate the user's Figma design as a polished, responsive, highly interactive frontend website.

## Default Tech Stack

- Vite
- React
- Tailwind CSS
- Framer Motion
- Optional: GSAP if the user asks for complex scroll-based animation
- Optional: Three.js if the user asks for 3D interaction

## Workflow

1. Analyze the Figma design or screenshot.
2. Identify the page structure:
   - Hero section
   - Navigation
   - Cards
   - Content sections
   - Image areas
   - CTA buttons
   - Footer
3. Break the UI into reusable React components.
4. Match the design system:
   - Color palette
   - Typography
   - Spacing
   - Border radius
   - Shadows
   - Grid/layout rules
5. Implement responsive layout for desktop, tablet, and mobile.
6. Add interaction:
   - Hover states
   - Button microinteractions
   - Card hover effects
   - Scroll reveal animations
   - Page transitions when useful
7. Check visual accuracy against the original Figma.
8. Refactor messy code before finishing.

## Coding Rules

- Prefer clean component structure.
- Use semantic HTML.
- Use Tailwind utility classes for styling.
- Avoid unnecessary dependencies.
- Keep animation smooth and purposeful.
- Do not overcomplicate simple UI.
- Make the result easy to edit later.

## Final Check

Before finishing, verify:

- The app runs without errors.
- The layout matches the Figma design closely.
- The page is responsive.
- Interactive elements are working.
- Code is organized into readable components.