/**
 * ============================================================
 *  EVNTIQA — SITE CONTENT CONFIG
 * ------------------------------------------------------------
 *  This is the single source of truth for all editable copy,
 *  navigation, cards, client list and contact details.
 *  Non-developers can safely edit the strings below.
 *
 *  QUICK SWAP POINTS (see README.md for details):
 *   • WhatsApp number ....... `site.whatsapp.number`  (this file)
 *   • Contact email / CTA ... `site.email` / `site.cta` (this file)
 *   • Client logos .......... `clients.logos`  +  /public/logos/*
 *   • Brand logo ............ /public/brand/logo-light.svg & logo-dark.svg
 * ============================================================
 */

import type { IconName } from '../components/icons';

export interface NavLink {
  label: string;
  href: string;
}

export interface Card {
  icon: IconName;
  title: string;
  body: string;
}

/* ----------------------------- GLOBAL ----------------------------- */
export const site = {
  name: 'Evntiqa',
  tagline: 'Content. Conversations. Engagement.',
  email: 'jackie@evntiqa.com',
  linkedin: 'https://www.linkedin.com/company/evntiqa',

  /** Primary call-to-action used across the site.
   *  To use a booking tool instead of email, change `cta.href`
   *  to e.g. 'https://calendly.com/your-handle/discovery'. */
  cta: {
    label: 'Book a Discovery Call',
    href: 'mailto:jackie@evntiqa.com?subject=Discovery%20Call%20Request',
  },

  /** Floating WhatsApp button.
   *  Replace `number` with the real one — digits only, including
   *  country code, NO "+" and NO spaces.  e.g. '14155551234'. */
  whatsapp: {
    number: '10000000000', // <-- REPLACE WITH REAL NUMBER
    message: "Hi Evntiqa, I'd like to book a discovery call.",
  },

  nav: [
    { label: 'How It Works', href: '#how' },
    { label: 'Why Evntiqa', href: '#why' },
    { label: 'Who We Help', href: '#who' },
    { label: 'Clients', href: '#clients' },
    { label: 'About', href: '#about' },
  ] satisfies NavLink[],
} as const;

/* ------------------------------ HERO ------------------------------ */
export const hero = {
  tag: 'B2B Engagement Media · Account-Based Marketing',
  titleLead: 'ABM-Powered ',
  titleHighlight: 'Executive Roundtables',
  sub: 'We help B2B technology companies engage target accounts through executive-led conversations, personalized distribution, and intent-driven engagement campaigns.',
  support:
    'We start with the target accounts and build the executive conversation around their priorities — not the other way around.',
} as const;

/* ------------------------------ TRUST ----------------------------- */
export const trust = {
  eyebrow: 'Content. Conversations. Engagement.',
  heading: 'Executive dialogues are only valuable when they reach the right audience.',
  body: 'At Evntiqa, we combine executive roundtables, account-based marketing, and personalized distribution to help B2B technology companies engage high-value target accounts and buying committees.',
  nos: ['No spray-and-pray campaigns.', 'No generic webinars.', 'No vanity registrations.'],
  yes: 'Just meaningful executive engagement.',
} as const;

/* --------------------------- HOW IT WORKS ------------------------- */
export const how = {
  eyebrow: 'How Evntiqa Works',
  heading: 'From target accounts to measurable engagement',
  steps: [
    {
      icon: 'searchPlus',
      title: 'Audience Intelligence',
      body: 'We identify and research your target accounts, buying committees, and executive personas to understand what matters most to them.',
    },
    {
      icon: 'users',
      title: 'Executive Roundtable Creation',
      body: 'We develop and produce executive-led virtual roundtables featuring industry leaders and subject matter experts around topics relevant to your audience.',
    },
    {
      icon: 'send',
      title: 'Personalized Distribution',
      body: 'Using ABM-driven outreach, we distribute the content directly to target accounts through personalized engagement campaigns.',
    },
    {
      icon: 'chart',
      title: 'Engagement Insights',
      body: 'We track account-level engagement, positive interactions, content consumption, and audience interest signals.',
    },
  ] satisfies Card[],
} as const;

/* ---------------------------- WHY EVNTIQA ------------------------- */
export const why = {
  eyebrow: 'Why Evntiqa',
  heading: 'Why B2B Marketers Work with Us',
  cards: [
    {
      icon: 'search',
      title: 'Audience Intelligence',
      body: 'Every engagement starts with account research, buying committee mapping, and executive audience intelligence.',
    },
    {
      icon: 'target',
      title: 'Audience First',
      body: 'We start with the target accounts and build the conversation around their priorities.',
    },
    {
      icon: 'chat',
      title: 'Executive-Led Content',
      body: 'Peer-driven conversations featuring industry leaders and practitioners.',
    },
    {
      icon: 'sun',
      title: 'Hyper-Personalized Distribution',
      body: 'Content delivered through personalized outreach instead of mass promotion.',
    },
    {
      icon: 'chart',
      title: 'Intent-Driven Engagement',
      body: 'Designed to generate meaningful engagement signals rather than vanity metrics.',
    },
    {
      icon: 'clock',
      title: 'On-Demand Content Strategy',
      body: 'Executive content hosted and distributed for long-term engagement beyond the live event.',
    },
  ] satisfies Card[],
} as const;

/* ---------------------------- WHO WE HELP ------------------------- */
export const who = {
  eyebrow: 'Who We Help',
  heading: 'Built for Modern B2B Marketing Teams',
  body: 'Evntiqa helps B2B technology companies engage target accounts through executive-led content, personalized distribution, and ABM-powered engagement programs.',
  cta: 'Engage buying committees through executive-led content.',
  cards: [
    {
      icon: 'equalizer',
      title: 'CMOs & Marketing Leaders',
      body: 'Build executive thought leadership, strengthen brand positioning, and engage strategic target accounts through peer-led executive conversations.',
    },
    {
      icon: 'globe',
      title: 'Demand Generation Teams',
      body: 'Extend the reach of your content through personalized distribution campaigns designed to drive meaningful account engagement and buying committee interaction.',
    },
    {
      icon: 'target',
      title: 'Account-Based Marketing Teams',
      body: 'Engage target accounts with executive-led content built around audience priorities, industry challenges, and buying committee interests.',
    },
    {
      icon: 'pin',
      title: 'Field Marketing Leaders',
      body: 'Support regional and strategic marketing initiatives with executive content designed to create engagement before, during, and after the event.',
    },
    {
      icon: 'briefcase',
      title: 'Content Marketing Teams',
      body: 'Transform executive insights into high-value content assets that can be repurposed across multiple campaigns, channels, and audiences.',
    },
    {
      icon: 'layers',
      title: 'Product Marketing Teams',
      body: 'Position your solutions within relevant industry conversations and connect with decision-makers through executive-led discussions.',
    },
    {
      icon: 'cpu',
      title: 'B2B SaaS Companies',
      body: 'Accelerate account engagement and executive visibility through personalized content and distribution programs designed around your ideal customer profile.',
    },
    {
      icon: 'building',
      title: 'Enterprise Technology Brands',
      body: 'Engage CIOs, CTOs, CISOs, CMOs, and buying committees through executive conversations built around the challenges and priorities that matter most.',
    },
  ] satisfies Card[],
} as const;

/* ----------------------------- CLIENTS ---------------------------- */
export interface ClientLogo {
  name: string;
  /** path under /public — replace the file (keep the name) to swap a logo */
  file: string;
}

export const clients = {
  lead: 'Trusted by leading B2B technology brands',
  sub: 'Executive engagement programs delivered for the brands buyers already know.',
  logos: [
    { name: 'Trend Micro', file: '/logos/trend-micro.png' },
    { name: 'Commvault', file: '/logos/commvault.png' },
    { name: 'Intel', file: '/logos/intel.png' },
    { name: 'ZoomInfo', file: '/logos/zoominfo.png' },
    { name: 'Board', file: '/logos/board.png' },
    { name: 'F-Secure', file: '/logos/f-secure.png' },
    { name: 'Infosys', file: '/logos/infosys.png' },
    { name: 'Informatica', file: '/logos/informatica.png' },
  ] satisfies ClientLogo[],
} as const;

/* ------------------------------ ABOUT ----------------------------- */
export interface AboutParagraph {
  /** optional bold lead-in rendered before `rest` */
  lead?: string;
  rest: string;
}

export const about = {
  eyebrow: 'About Evntiqa',
  heading: 'A B2B engagement media company.',
  stats: [
    { big: 'ABM', label: 'Account-based by design' },
    { big: 'Exec', label: 'Peer-led conversations' },
    { big: 'Intent', label: 'Signals over vanity' },
  ],
  body: [
    {
      lead: 'Evntiqa is a B2B engagement media company',
      rest: ' focused on helping technology brands build awareness, engagement, and demand within their target accounts.',
    },
    {
      rest: 'We combine audience intelligence, executive content, account-based marketing, intent-driven engagement, and personalized distribution to help marketers connect with buying committees and decision-makers across the customer journey.',
    },
    {
      rest: 'Our programs are designed to transform content into engagement, engagement into intent, and intent into meaningful pipeline opportunities through executive-led conversations, content experiences, and demand generation initiatives.',
    },
  ] satisfies AboutParagraph[],
} as const;

/* ---------------------------- FINAL CTA --------------------------- */
export const finalCta = {
  heading: 'Turn Executive Conversations into Account Engagement',
  body: 'Engage buying committees through executive-led content, personalized distribution, and ABM-powered engagement campaigns.',
} as const;

/* ------------------------------ FOOTER ---------------------------- */
export const footer = {
  companyLinks: [
    { label: 'How It Works', href: '#how' },
    { label: 'Why Evntiqa', href: '#why' },
    { label: 'Who We Help', href: '#who' },
    { label: 'About', href: '#about' },
  ] satisfies NavLink[],
  bottomLeft: '© 2026 Evntiqa. All Rights Reserved.',
  bottomRight: 'ABM-powered executive roundtables for B2B technology brands.',
} as const;
