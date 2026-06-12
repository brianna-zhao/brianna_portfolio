// Single source of truth for the Wïrk case study.
// Text is copied 1:1 from the Figma artboard (node 85:750); image keys map to
// the individual Figma frames exported into /public/wirk.

export const PROTOTYPE_URL =
  'https://www.figma.com/design/e7OFjtlqN5gZu7K19KxU7C/wirk%EF%BC%9A%EF%BC%89?node-id=0-1&t=XmvgM62jj37c24KS-1'

// Resolve a public asset against Vite's BASE_URL so it works at any sub-path.
export const asset = (name) => `${import.meta.env.BASE_URL}wirk/${name}`

export const hero = {
  tagline: 'Buy now, Wïrk later !',
  intro:
    'Wïrk is a speculative mobile payment platform that allows users to purchase products through labor instead of money. The app combines cashless payment, gig work, and AI-training microtasks into one experience.',
  image: asset('hero-mockup.png'),
}

export const projectStatement = {
  title: 'Project Statement',
  body: "The goal of this project is to design a mobile app experience that allows users to complete a purchase through Wïrk’s digital Wisa card and then repay the purchase through labor-based microtasks.\nAfter a tap-to-pay transaction, the app converts the purchase value into Wïrk Bucks, shifting the user’s balance from a monetary amount into a task-based repayment system. Users then complete AI-training tasks, such as identifying objects in images, to gradually reduce the amount they owe.\n\nFrom a UX perspective, the main challenge is translating a complex and ethically questionable payment model into an interface that feels understandable, frictionless, and engaging for users.",
  featuresTitle: 'Key Features',
  features: [
    'A tap-to-pay purchase flow',
    'A dashboard showing Wïrk Bucks owed and completed work progress',
    'A task interface for AI image-identification labor',
    'Social and referral features that encourage users to share the app and involve others in the repayment process',
  ],
}

export const persona = {
  title: 'User Persona',
  name: 'SpongeBob',
  photo: asset('spongebob.png'),
  flower: asset('flower.png'),
  jellyfish: asset('jellyfish.png'),
  demographics: [
    { label: 'Age', value: 'Early 20s' },
    { label: 'Location', value: 'Bikini Bottoms' },
    { label: 'Occupation', value: 'Cook & Jellyfish Hunter' },
    { label: 'Lifestyle', value: 'Optimistic, energetic, highly social, loves small rewards and fun digital experiences. Has ADHD' },
  ],
  needsTitle: 'User Needs',
  needs: [
    'Buy fun, cute, or useful products without feeling financial pressure upfront',
    'Complete simple tasks that feel game-like rather than stressful',
    'Track progress visually and feel rewarded after each small achievement',
    'Share app experiences with friends and invite them to participate',
    'Feel productive, appreciated, and emotionally encouraged while using the app',
  ],
  behaviourTitle: 'App Behaviour & UX Opportunities',
  behaviourIntro:
    'SpongeBob is highly motivated by playful feedback, social interaction, and competition. He is likely to stay engaged when tasks feel game-like, visually satisfying, and easy to complete.\n\nHe responds well to progress bars, streaks, playful animations, encouraging microcopy, referral rewards, and competitive leaderboards. For Wïrk, this creates opportunities to increase user engagement, session duration, and task completion through gamified task flows, social sharing features, and ranking-based motivation.\n\nHowever, because he is easily influenced by rewards, competition, and peer pressure, the interface should also clearly show Wïrk Bucks owed, work completed, remaining work hours.',
  painTitle: 'Pain Points',
  pains: [
    'Gets overwhelmed when financial information is too complex or hidden',
    'May not fully understand the long-term cost of “buy now, work later” systems',
    'Can be easily influenced by playful visuals, rewards, and social pressure',
    'May continue using an app even when the labor/reward exchange is unfair',
    'Frustrated by repetitive tasks if feedback and progress are not clear',
  ],
  motivationsTitle: 'Motivations',
  motivations: [
    { k: 'Primary Motivation', v: 'Fun and emotional rewards' },
    { k: 'Secondary Motivation', v: 'Social connection' },
    { k: 'Hidden Risk', v: 'May overlook unfair labor exchange if the interface feels playful and positive' },
  ],
  fitTitle: 'Why This Persona Fits Wïrk',
  fit:
    'SpongeBob represents a highly engaged, socially motivated, reward-sensitive user. He helps the design team evaluate whether Wïrk’s playful experience is genuinely understandable or whether the interface is masking exploitative mechanics behind fun visuals and gamification. This makes him especially useful for testing the ethical tension between user engagement and user protection.',
}

// User Flow & Possible Impact — reconstructed as a real flow component.
export const userFlow = {
  title: 'User Flow & Possible Impact',
  steps: [
    {
      label: 'Onboard',
      desc: 'Create a Wïrk account and link a tap-to-pay wallet.',
    },
    {
      label: 'Buy now',
      desc: 'Pay for products instantly with Wïrk Bucks via tap-to-pay.',
    },
    {
      label: 'Wïrk later',
      desc: 'Repay the balance through gig work & AI-training microtasks.',
    },
    {
      label: 'Earn & track',
      desc: 'Watch the dashboard ring fill as hours owed turn into hours wïrked.',
    },
    {
      label: 'Boost & share',
      desc: 'Spin, snatch W-Bucks from friends, and climb the leaderboard.',
    },
  ],
  impact:
    'The flow exposes the hidden trade of buy-now-pay-later culture: convenience up front, labor on the back end — packaged as a playful, gamified loop that keeps users engaged.',
}

export const earlyDesign = {
  title: 'Wireframe & Early Design',
  body:
    'The first wireframes mapped the core loop — a Hello dashboard, a tap-to-pay flow, and a Wïrk Units confirmation — before any visual styling. The goal was to lock the structure of "buy now, work later" into a few clear screens.',
  image: asset('early-wireframes.png'),
}

export const abTest = {
  title: 'A/B Test & Iteration',
  versions: [
    { label: 'Version A', image: asset('iphone-16-19.png'), frame: 'iPhone 16 - 19' },
    { label: 'Version B', image: asset('homepage-ab.png'), frame: 'Homepage' },
  ],
  note:
    'Two dashboard directions were tested with 10 participants. Version A (iPhone 16 - 19) and Version B (Homepage) both centered a progress ring around “Wïrk Today — 350 W-Bucks,” a weekly streak row, and quick actions, then split on layout density and bottom-card emphasis.',
}

export const feedback = {
  title: 'Client Feedback & User Testing',
  subtitle: 'Iteration & New Features',
  image: asset('iteration-flow.png'),
  body:
    'After the first round of user testing and client feedback, we revised the home page to create a stronger banking-inspired interface. This helped make the app feel more like a financial product while still maintaining Wïrk’s exaggerated, satirical brand personality.\n\nThe client also wanted the app to feel more engaging and memorable, with features that encouraged users to stay longer and invite others. In response, we designed a Boost page with additional engagement mechanics, including smile-based interactions, social sharing tasks, referral prompts, push notifications, and a feature that allowed users to take or “snatch” Wïrk Bucks from friends.\n\nOverall feature breadth, visual direction, and interaction design worked well. The app successfully communicated the client’s strange, playful, and chaotic product concept while maintaining a coherent mobile interface.',
}

export const assumptions = {
  title: 'Customer Assumptions & Design Response',
  paragraphs: [
    'At the beginning of the project, we assumed that our target users would be familiar with tap-to-pay, buy-now-pay-later services, gamified task systems, and social sharing features. We also assumed that users would be more willing to complete repetitive AI-training tasks if the experience felt playful, visually rewarding, and easy to track.',
    'To validate these assumptions, we conducted user research, competitor analysis, usability testing with 10 participants, and A/B testing on the dashboard and task interface. The testing helped us understand how users interpreted Wïrk Bucks, how clearly they understood their remaining work hours, and which interaction patterns encouraged them to continue using the app.',
    'Some assumptions were validated: users responded positively to clear progress tracking, playful visual feedback, and competitive features such as the leaderboard. However, we also invalidated the assumption that users would accept unclear repayment information. When the relationship between money, Wïrk Bucks, and labor was not transparent, users were more likely to feel confused or distrustful.',
    'Based on these findings, our design addressed user needs by creating a clearer dashboard, showing work owed versus work completed, simplifying the task flow, and using gamified interactions to make repetitive labor feel more engaging. At the same time, we recognized that these engagement strategies raised ethical concerns because they could encourage users to spend more time in the app without fully understanding the real value of their labor.',
  ],
}

// Final Prototype — the corresponding polished Figma frames, placed as phones.
export const prototype = {
  title: 'Final Prototype',
  screens: [
    { src: asset('dashboard-a.png'), label: 'Dashboard', frame: 'Homepage' },
    { src: asset('tap-to-pay.png'), label: 'Tap to Pay', frame: 'Pay Screen 7' },
    { src: asset('account.png'), label: 'Account', frame: 'accountpage' },
    { src: asset('connect.png'), label: 'Connect', frame: 'connect_page' },
    { src: asset('spin.png'), label: 'Spin', frame: 'spin_page' },
    { src: asset('boost.png'), label: 'Boosts', frame: 'boost' },
    { src: asset('captcha.png'), label: 'Wïrk Task', frame: 'captcha' },
    { src: asset('notification.png'), label: 'Notification', frame: 'notification' },
    { src: asset('wirkfilter.png'), label: 'Wïrk Filter', frame: 'wirkfliter' },
  ],
}

export const brand = {
  title: 'Brand Identity',
  image: asset('brand-board.png'),
  swatches: [
    { name: 'Ink', hex: '#14091F' },
    { name: 'Plum', hex: '#2C243A' },
    { name: 'Rose', hex: '#BE2E5C' },
    { name: 'Pink', hex: '#F0B8CC' },
    { name: 'Cloud', hex: '#E9E9E9' },
  ],
  type: {
    display: 'Futura Condensed Bold',
    body: 'Roboto',
  },
}

export const projects = [
  { label: 'WÏRKED', href: '../wirked.html' },
  { label: 'mushroom babe', href: '../mushroom-babe.html' },
  { label: 'EVIL Boba', href: '../evil-boba.html' },
]
