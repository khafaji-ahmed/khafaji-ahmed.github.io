module.exports = {
  siteTitle: 'Ahmed Khafaji | Software Engineering Student',
  siteDescription:
    'A software engineering student at York Univeristy, passionate about learning and helping others.',
  siteKeywords:
    'software developer, software engineer, web developer, java developer',
  siteUrl: 'https://khafaji-ahmed.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Ahmed Khafaji',
  location: 'Toronto, Canada',
  email: 'ahmedkhafaji11@gmail.com',
  github: 'https://github.com/khafaji-ahmed',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/khafaji-ahmed',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ahmed-khafaji/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    // {
    //   name: 'Reflection',
    //   url: '/#jobs',
    // },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
