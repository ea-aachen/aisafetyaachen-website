export const site = {
  name: 'AI Safety Aachen e.V.',
  shortName: 'AI Safety Aachen',
  tagline: 'Reducing risks from advanced AI.',
  description:
    'A student initiative in Aachen working to reduce catastrophic risks from advanced AI systems by promoting responsible AI development.',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Catalyst', href: '/catalyst' },
    { label: 'Grants', href: '/grants' },
    { label: 'Events', href: '/cal' },
    { label: 'Flyer', href: 'https://flyer.felkru.com/' },
  ],
  cta: { label: 'Join us', href: 'https://chat.whatsapp.com/Et3lbbGQ3AbCW744qmuv0L' },
  more: [] as { label: string; href: string }[],
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/ea_aachen/' },
    { label: 'WhatsApp', href: 'https://chat.whatsapp.com/Et3lbbGQ3AbCW744qmuv0L' },
  ],
  legal: [] as { label: string; href: string }[],
  address: ['Hünefeldstraße 35', '52068 Aachen', 'Deutschland'],
  contactEmail: 'mail@aisafetyaachen.org',
};
