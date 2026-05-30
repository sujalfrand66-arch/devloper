export const site = {
  name: 'Lusux Web',
  altName: 'Lusox Web',
  handle: '9usfweb',
  tagline: 'Creative code. Powerful technology.',
  founded: 2021,
  location: 'Suratgarh, India',
  email: 'hello@lusuxweb.com',
  description:
    'Lusux Web is an independent two-brother digital studio crafting cinematic websites and powerful backend systems for ambitious brands.',
  phones: ['9983853091', '9024791337'],
  whatsapp: '8505095004',
  whatsappLink: 'https://wa.me/918505095004',
  instagram: 'https://www.instagram.com/9usfweb',
};

export const nav = [
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const heroStory = [
  'We are Lusux Web',
  'We design modern web experiences',
  'We build powerful backend systems',
  'PHP · Python · Node · MySQL',
  'Creative code. Powerful technology.',
  'Welcome to our developer studio',
];

export const services = [
  {
    no: '01',
    title: 'Web Development',
    desc: 'Pixel-precise, lightning-fast websites engineered with modern frameworks and clean, scalable architecture.',
    tags: ['Next.js', 'React', 'Performance'],
  },
  {
    no: '02',
    title: 'UI / UX Design',
    desc: 'Interfaces designed around human behaviour — intuitive, elegant, and built to convert visitors into clients.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
  },
  {
    no: '03',
    title: 'Backend & APIs',
    desc: 'Robust server systems, secure databases and well-documented APIs that scale with your business.',
    tags: ['PHP', 'Python', 'Node', 'MySQL'],
  },
  {
    no: '04',
    title: 'Motion & Experience',
    desc: 'Scroll-driven storytelling, micro-interactions and cinematic motion that make brands unforgettable.',
    tags: ['GSAP', 'Lenis', 'WebGL'],
  },
  {
    no: '05',
    title: 'Full-Stack Solutions',
    desc: 'End-to-end product builds — from first sketch to deployment, monitoring and continuous improvement.',
    tags: ['Architecture', 'DevOps', 'Cloud'],
  },
  {
    no: '06',
    title: 'Digital Strategy',
    desc: 'SEO, analytics and conversion strategy that turns a beautiful website into measurable revenue.',
    tags: ['SEO', 'Analytics', 'Growth'],
  },
];

export const stack = [
  'PHP',
  'Python',
  'Node.js',
  'MySQL',
  'React',
  'Next.js',
  'GSAP',
  'Tailwind',
  'JavaScript',
  'REST APIs',
];

export const marquee = [
  'Web Development',
  'UI/UX Design',
  'Digital Experiences',
  'Motion Design',
  'Full Stack Solutions',
  'API Development',
];

export type Project = {
  no: string;
  title: string;
  desc: string;
  category: string;
  status: string;
  url: string;
  year: string;
};

export const projects: Project[] = [
  {
    no: '01',
    title: 'JNV Suratgarh',
    desc: 'Official school site for Jawahar Navodaya Vidyalaya, Suratgarh.',
    category: 'Education',
    status: 'Live',
    url: 'http://jnvsuratgarh.org/',
    year: '2024',
  },
  {
    no: '02',
    title: 'ITI Nathusar Chopta',
    desc: 'Training institute website highlighting courses, admissions and campus life.',
    category: 'Education',
    status: 'Live',
    url: 'https://itinathusarichopta.com/',
    year: '2024',
  },
  {
    no: '03',
    title: 'LF Editor',
    desc: 'Modern web editor experience with a streamlined publishing workflow.',
    category: 'Product',
    status: 'Live',
    url: 'https://lfeditor.in/',
    year: '2023',
  },
  {
    no: '04',
    title: 'Vivan Dental',
    desc: 'Clinic site with treatments, doctor profiles and appointment call-to-actions.',
    category: 'Healthcare',
    status: 'Live',
    url: 'https://www.vivandental.com/',
    year: '2024',
  },
  {
    no: '05',
    title: 'Rajwada Furnish',
    desc: 'Premium retail furniture brand with a refined catalogue experience.',
    category: 'Retail',
    status: 'Live',
    url: 'https://www.rajwadafurnish.com/',
    year: '2023',
  },
  {
    no: '06',
    title: 'Glamour Makeover',
    desc: 'Official salon site — the best glamour makeover studio in Suratgarh.',
    category: 'Beauty',
    status: 'Live',
    url: 'http://glamourmakeover.in/',
    year: '2024',
  },
  {
    no: '07',
    title: 'Mantola Motors',
    desc: 'Automobile workshop platform for Mantola Motors with service booking.',
    category: 'Automobile',
    status: 'Live',
    url: 'https://mantola.in/',
    year: '2024',
  },
  {
    no: '08',
    title: 'Ashirvad Properties',
    desc: 'Suratgarh’s trusted property advisory with curated listings and guidance.',
    category: 'Real Estate',
    status: 'Live',
    url: 'https://suratgarhproperties.shop/',
    year: '2025',
  },
];

export const stats = [
  { value: 40, suffix: '+', label: 'Projects Shipped' },
  { value: 8, suffix: '+', label: 'Live Brands' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '★', label: 'Average Rating' },
];

export const process = [
  {
    no: '01',
    phase: 'Discover',
    title: 'Understand the vision',
    desc: 'We dive deep into your business, goals and audience to define a strategy that actually moves the needle.',
  },
  {
    no: '02',
    phase: 'Design',
    title: 'Craft the experience',
    desc: 'Every screen is designed with intention — typography, spacing, motion and hierarchy obsessed over.',
  },
  {
    no: '03',
    phase: 'Develop',
    title: 'Engineer for scale',
    desc: 'Clean, fast, maintainable code with performance and SEO baked in from the very first commit.',
  },
  {
    no: '04',
    phase: 'Deliver',
    title: 'Launch & grow',
    desc: 'We deploy, measure and refine — turning a beautiful launch into long-term, compounding growth.',
  },
];

export const testimonials = [
  {
    quote:
      'They turned our outdated website into a premium experience our patients genuinely trust. Bookings went up within weeks.',
    name: 'Dr. Vivan',
    role: 'Vivan Dental',
  },
  {
    quote:
      'Fast, professional and incredibly detail-obsessed. The site feels like it belongs to a brand ten times our size.',
    name: 'Rajwada Furnish',
    role: 'Retail Brand',
  },
  {
    quote:
      'Clean code, beautiful design and real results. Lusux Web understood exactly what our institute needed.',
    name: 'ITI Nathusar Chopta',
    role: 'Training Institute',
  },
];

export const businessTypes = [
  'E-commerce Store',
  'Business Website',
  'Portfolio Website',
  'Restaurant Website',
  'Blog Website',
  'Other',
];
