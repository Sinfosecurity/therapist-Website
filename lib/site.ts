export const site = {
  name: "Haven Path Therapy",
  shortName: "Haven Path",
  clinician: {
    name: "Your Name, LMFT",
    credentials: "Licensed Marriage and Family Therapist",
    license: "License # — update in lib/site.ts",
  },
  tagline: "A calm place to begin again.",
  description:
    "Thoughtful therapy for adults navigating anxiety, relationships, grief, and life transitions. Telehealth and in-person sessions.",
  url: "https://havenpath.example",
  location: {
    city: "Your City, ST",
    serving: "Telehealth across [Your State] · In-person by appointment",
    address: "Update street address in lib/site.ts",
  },
  contact: {
    email: "hello@havenpath.example",
    phone: "(555) 010-2040",
    hours: "Monday–Thursday, 10am–6pm",
  },
  bookingUrl: "",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/approach", label: "Approach" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  specialties: [
    {
      title: "Anxiety & overwhelm",
      body: "For racing thoughts, tight chests, and the sense that you are always bracing for what comes next.",
    },
    {
      title: "Depression & numbness",
      body: "When motivation thins, joy feels far away, or everyday tasks start to cost more than they should.",
    },
    {
      title: "Relationships & attachment",
      body: "Patterns in partnership, family, and friendship — including people-pleasing, conflict, and loneliness.",
    },
    {
      title: "Life transitions",
      body: "Career change, parenthood, relocation, identity shifts, and the in-between seasons that do not have a name yet.",
    },
    {
      title: "Grief & loss",
      body: "Death, breakup, illness, or the quieter grief of a life that did not go as planned.",
    },
    {
      title: "Trauma & nervous system repair",
      body: "Support for the body that still remembers — with pacing, consent, and no pressure to retell everything at once.",
    },
  ],
  services: [
    {
      title: "Individual therapy",
      duration: "50 minutes",
      fee: "$165",
      body: "Weekly or biweekly sessions for adults. We go at a pace that respects your nervous system and your goals.",
    },
    {
      title: "Couples therapy",
      duration: "75 minutes",
      fee: "$210",
      body: "For partners who want clearer communication, repair after rupture, or help deciding what comes next.",
    },
    {
      title: "Consultation",
      duration: "20 minutes",
      fee: "Complimentary",
      body: "A brief call to see whether this is a good fit. No pressure, no intake paperwork required to start.",
    },
  ],
  approach: [
    {
      title: "Collaborative",
      body: "You are the expert on your life. I bring clinical training, curiosity, and a steady presence. We decide together what to work on.",
    },
    {
      title: "Body-aware",
      body: "Insight matters, and so does what happens in your chest, stomach, and jaw. We include the nervous system, not only the story.",
    },
    {
      title: "Culturally humble",
      body: "Identity, family history, faith, and power all shape how pain shows up. Therapy should make room for the whole of you.",
    },
  ],
  modalities: [
    "Person-centered therapy",
    "Cognitive Behavioral Therapy (CBT)",
    "Acceptance and Commitment Therapy (ACT)",
    "Emotionally Focused Therapy (EFT) informed couples work",
    "Somatic and mindfulness-based practices",
    "Trauma-informed care",
  ],
  faqs: [
    {
      q: "Do you take insurance?",
      a: "This practice is currently private-pay. Superbills are available so you can seek out-of-network reimbursement. A limited sliding scale is offered based on availability.",
    },
    {
      q: "Is this a crisis service?",
      a: "No. If you are in immediate danger, call 911. In the U.S., you can also call or text 988 for the Suicide & Crisis Lifeline. Therapy here is for ongoing, scheduled care.",
    },
    {
      q: "Do you offer telehealth?",
      a: "Yes. Secure video sessions are available for clients located in the licensed state(s) listed in the practice details. In-person sessions can be scheduled as well.",
    },
    {
      q: "How often will we meet?",
      a: "Most people begin weekly. As things stabilize we may shift to every other week. Frequency is something we revisit together.",
    },
    {
      q: "What if I am not sure therapy is for me?",
      a: "That is a good reason to book a consultation. Fit matters more than a perfect first sentence. You can ask anything, including whether another clinician might be a better match.",
    },
    {
      q: "How do cancellations work?",
      a: "Please give 24 hours’ notice. Late cancellations and missed sessions are billed at the session fee, except in emergencies.",
    },
  ],
  crisis: {
    line: "If you are in crisis or thinking about suicide, call or text 988, or go to the nearest emergency room. This website is not monitored in real time.",
  },
} as const;

export type Site = typeof site;
