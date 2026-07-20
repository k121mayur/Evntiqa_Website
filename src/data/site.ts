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
  tagline: 'Global Executive Engagement Partner',
  email: 'hello@evntiqa.com',
  linkedin: 'https://www.linkedin.com/company/evntiqa',

  /** Primary call-to-action used across the site.
   *  To use a booking tool instead of email, change `cta.href`
   *  to e.g. 'https://calendly.com/your-handle/discovery'. */
  cta: {
    label: 'Talk to an Executive Engagement Advisor',
    href: 'mailto:hello@evntiqa.com?subject=Discovery%20Call%20Request',
  },

  /** Floating WhatsApp button.
   *  Replace `number` with the real one — digits only, including
   *  country code, NO "+" and NO spaces.  e.g. '14155551234'. */
  whatsapp: {
    number: '918010596600', // 
    message: "Hi Evntiqa, I'd like to book a discovery call.",
  },

  nav: [
    { label: 'What We Deliver', href: '#how' },
    { label: 'Why Evntiqa', href: '#why' },
    { label: 'Who We Help', href: '#who' },
    { label: 'Clients', href: '#clients' },
    { label: 'About', href: '#about' },
  ] satisfies NavLink[],
} as const;

/* ------------------------------ HERO ------------------------------ */
export const hero = {
  tag: 'Built For Global Enterprise Marketers',
  titleLead: 'Executive Engagement. ',
  titleHighlight: 'Solved.',
  sub: 'Through curated, invitation-only executive experiences that connect you with executive buying committees, strengthen target account relationships, and accelerate pipeline.',
  support:
    'Connecting enterprise technology companies with senior decision makers across APAC, India, the Middle East, Africa, ANZ, and the United States.',
} as const;

/* ------------------------------ TRUST ----------------------------- */
export const trust = {
  eyebrow: 'Meaningful Executive Engagement. Measurable Business Outcomes.',
  heading: 'Enterprise pipeline is built on executive relationships, not one-off campaigns.',
  body: 'Evntiqa helps enterprise technology marketing teams create meaningful executive engagement through curated, invitation-only executive experiences that connect enterprise technology companies with the decision-makers who influence strategic buying decisions.',
  nos: ['No generic event audiences.', 'No wasted event budgets.', 'No irrelevant conversations.'],
  yes: 'Better Access to the Right Decision-Makers.',
} as const;

/* --------------------------- HOW IT WORKS ------------------------- */
export const how = {
  eyebrow: 'What We Deliver',
  heading: 'Everything You Need to Engage Enterprise Decision-Makers',
  steps: [
    {
      icon: 'searchPlus',
      title: 'Executive Leadership Series',
      body: 'Build long-term executive engagement through curated leadership series that connect global enterprise technology companies with senior business and technology decision-makers around strategic industry conversations.',
    },
    {
      icon: 'users',
      title: 'Done-for-you Executive Events',
      body: 'End-to-end planning and delivery of premium, invitation-only executive events designed to strengthen target account engagement and create meaningful access to enterprise decision-makers.',
    },
    {
      icon: 'send',
      title: 'Digital Executive Engagement',
      body: 'Extend executive engagement beyond the event with personalized digital experiences that keep target accounts engaged throughout long enterprise buying journeys.',
    },
    {
      icon: 'chart',
      title: 'Executive Audience Development',
      body: 'Identify, qualify, and engage the right executive audiences for every program through strategic audience research, invitation management, and executive outreach designed for enterprise technology companies.',
    },
  ] satisfies Card[],
} as const;

/* ---------------------------- WHY EVNTIQA ------------------------- */
export const why = {
  eyebrow: 'Why Evntiqa',
  heading: 'Why Enterprise Marketers Choose Evntiqa',
  sub: 'Built for Enterprise Marketing Teams.',
  cards: [
    {
      icon: 'search',
      title: 'Curated Executive Audiences',
      body: 'Every executive experience is carefully curated to bring together the right decision-makers, not just a larger audience.',
    },
    {
      icon: 'target',
      title: 'Invitation-Only Experiences',
      body: 'Private executive experiences designed to encourage meaningful peer discussions in a trusted environment.',
    },
    {
      icon: 'chat',
      title: 'Strategic Account Focus',
      body: 'Every program is aligned with your priority accounts, buying committees, and enterprise marketing objectives.',
    },
    {
      icon: 'sun',
      title: 'End-to-End Delivery',
      body: 'From audience development and executive invitations to event execution and post-event engagement, we manage every detail.',
    },
    {
      icon: 'chart',
      title: 'Global Executive Reach',
      body: 'Engage senior business and technology leaders across APAC, India, the Middle East, Africa, ANZ, and the United States.',
    },
    {
      icon: 'clock',
      title: 'Measurable Marketing Impact',
      body: 'Designed to strengthen target account engagement, improve access to decision-makers, and support pipeline growth.',
    },
  ] satisfies Card[],
} as const;

/* ---------------------------- WHO WE HELP ------------------------- */
export const who = {
  eyebrow: 'Who We Help',
  heading: 'Supporting Modern Enterprise Marketers',
  body: 'Designed for enterprise marketing teams responsible for engaging strategic accounts, influencing buying committees, and accelerating the pipeline.',
  cards: [
    {
      icon: 'chart',
      title: 'Field Marketing',
      body: 'Create meaningful engagement with strategic accounts through premium executive experiences that support regional marketing goals and pipeline growth.',
    },
    {
      icon: 'globe',
      title: 'Event Marketing',
      body: 'Deliver invitation-only executive events that create lasting engagement before, during, and long after the event.',
    },
    {
      icon: 'target',
      title: 'Marketing Leadership',
      body: 'Strengthen executive engagement strategies that support brand positioning, strategic growth, and measurable marketing impact.',
    },
    {
      icon: 'pin',
      title: 'Account-Based Marketing (ABM)',
      body: 'Support named account strategies with executive experiences aligned to buying committees and strategic account priorities.',
    },
    {
      icon: 'briefcase',
      title: 'Demand Generation',
      body: 'Complement demand generation programs with executive experiences that engage high-value accounts and contribute to pipeline growth.',
    },
    {
      icon: 'layers',
      title: 'Product Marketing',
      body: 'Position your solutions within executive-level industry discussions that build credibility with enterprise decision-makers.',
    },
    {
      icon: 'cpu',
      title: 'B2B SaaS Companies',
      body: 'Scale executive engagement programs that strengthen market visibility, accelerate enterprise opportunities, and support long sales cycles.',
    },
    {
      icon: 'building',
      title: 'Enterprise Technology Companies',
      body: 'Partner with Evntiqa to engage CIOs, CTOs, CISOs, CDAIOs, and other senior business and technology leaders through premium executive experiences designed for enterprise growth.',
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
  eyebrow: 'Your Global Executive Engagement Partner',
  heading: 'A B2B engagement media company.',
  stats: [
    { big: 'Content', label: '' },
    { big: 'Conversations', label: '' },
    { big: 'Engagement', label: '' },
  ],
  body: [
    {
      lead: 'Evntiqa partners with enterprise technology companies',
      rest: ' to help them build trusted relationships with senior business and technology leaders through curated executive experiences and digital executive engagement.',
    },
    {
      rest: 'We work with Field Marketing, Event Marketing, and Marketing Leadership teams to engage executive buying committees, strengthen strategic account engagement, and support long enterprise buying journeys.',
    },
    {
      rest: 'From executive leadership series and invitation-only executive events to digital executive engagement, every program is designed to help enterprise marketers create meaningful connections with the decision-makers who influence business outcomes.',
    },
  ] satisfies AboutParagraph[],
} as const;

/* ---------------------------- FINAL CTA --------------------------- */
export const finalCta = {
  heading: 'Ready to Solve Executive Engagement?',
  body: 'Let\u2019s create an executive engagement strategy that helps you reach the right decision-makers, strengthen strategic accounts, and accelerate the pipeline.',
} as const;

/* ------------------------------ FOOTER ---------------------------- */
export const footer = {
  companyLinks: [
    { label: 'What We Deliver', href: '#how' },
    { label: 'Why Evntiqa', href: '#why' },
    { label: 'Who We Help', href: '#who' },
    { label: 'About', href: '#about' },
  ] satisfies NavLink[],
  bottomLeft: '© 2026 Evntiqa. All Rights Reserved.',
  bottomRight: 'The Global Executive Engagement Partner for Enterprise Technology Companies.',
} as const;
