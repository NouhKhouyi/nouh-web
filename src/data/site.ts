// All copy for the site, in English (default) and Spanish.
// Map geometry is shared; only the words change per language.

export type Lang = 'en' | 'es';
export type LineKey = 'ai' | 'mob' | 'com';

export const SITE_URL = 'https://nouh.is-a.dev';
export const EMAIL = 'nouhkhouyi@gmail.com';
export const GITHUB = 'https://github.com/NouhKhouyi';
export const LINKEDIN = 'https://www.linkedin.com/in/nouhkho';

export interface Station {
  n: string; // name
  d: string; // dates
  short?: string; // label under the name on the map, when it differs from d
  lines: (LineKey | 'edu')[];
  kind?: 'x' | 'ext';
  line?: LineKey;
  x: number;
  y: number;
  lbl: [number, number, 'start' | 'middle' | 'end'];
  role: string;
  t: string;
  m: [string, string][];
  extra?: Partial<Record<LineKey, string>>; // note shown on the narrow strip map
}

// Station positions on the 1060 × 360 network map.
const GEO: Record<string, Pick<Station, 'lines' | 'kind' | 'line' | 'x' | 'y' | 'lbl'>> = {
  upv: { lines: ['ai', 'mob', 'com'], kind: 'x', x: 170, y: 200, lbl: [-30, -4, 'end'] },
  upvic: { lines: ['ai'], x: 330, y: 120, lbl: [0, -38, 'middle'] },
  andi: { lines: ['ai'], x: 690, y: 120, lbl: [0, -38, 'middle'] },
  gpt: { lines: ['ai'], x: 830, y: 120, lbl: [0, 34, 'middle'] },
  imt: { lines: ['edu'], kind: 'ext', line: 'ai', x: 960, y: 60, lbl: [0, 30, 'middle'] },
  pai: { lines: ['mob'], x: 330, y: 200, lbl: [0, 34, 'middle'] },
  urb: { lines: ['mob', 'ai'], kind: 'x', x: 530, y: 200, lbl: [0, 40, 'middle'] },
  gen: { lines: ['mob'], x: 780, y: 200, lbl: [0, 34, 'middle'] },
  sig: { lines: ['com'], x: 320, y: 280, lbl: [0, 34, 'middle'] },
  sam: { lines: ['com'], x: 510, y: 280, lbl: [0, 34, 'middle'] },
  lov: { lines: ['com'], x: 720, y: 280, lbl: [0, 34, 'middle'] },
  bj: { lines: ['com'], x: 900, y: 280, lbl: [0, 34, 'middle'] },
};

export const ORDER: Record<LineKey, string[]> = {
  ai: ['upvic', 'andi', 'gpt', 'imt'],
  mob: ['pai', 'urb', 'gen'],
  com: ['sig', 'sam', 'lov', 'bj'],
};

export const PATHS: [LineKey, string][] = [
  ['ai', 'M170 200 L250 120 L450 120 L530 200 L610 120 L830 120'],
  ['mob', 'M170 200 L780 200'],
  ['com', 'M170 200 L250 280 L900 280'],
];

type StationText = Omit<Station, keyof (typeof GEO)[string]>;

const STATIONS_TEXT: Record<Lang, Record<string, StationText>> = {
  en: {
    upv: { n: 'UPV', d: '2023 – 2027', short: 'Origin, 2023', role: 'BSc Data Science, Universitat Politècnica de València', t: 'Where every line starts. Machine learning, time series, A/B testing and causal inference, data engineering, AI ethics and GDPR.', m: [['2025', 'Top Academic Performance Award']] },
    upvic: { n: 'UPV Investment Club', d: 'Until 2025', role: 'Club projects', t: "Investment projects with the university's investment club. The first stop on the finance line.", m: [] },
    andi: { n: 'AnDi research', d: 'Jan – May 2026', role: 'Co-author, team of 6', t: 'Detecting market regime changes with a multi-task Conv1D + BiLSTM network and a Bayesian decision layer: Alert, Review or Ignore.', m: [['16.85 d', 'changepoint RMSE, vs 40.99 baseline'], ['12 / 15', 'stress events matched early'], ['85.5%', 'regime accuracy']] },
    gpt: { n: 'GPTadvisor', d: 'Jun 2026 – now', role: 'AI Engineer, generative AI for wealth management', t: 'Sole technical owner and client contact for a retrieval system serving tier-1 banks. Also prototyped an LLM agent for portfolio-risk management, where every output must be traceable.', m: [['Tier-1', 'bank clients'], ['End to end', 'ingestion to integration']] },
    imt: { n: 'IMT Atlantique', d: 'France, 2026 – 27', role: 'MSc Data Science, Erasmus+', t: 'Extension under construction: a year of graduate data science in France.', m: [], extra: { ai: 'Extension under construction' } },
    pai: { n: 'Paiporta traffic', d: 'Sep – Nov 2025', role: 'Data Scientist intern, Generalitat Valenciana', t: 'Congestion-prediction prototype for Paiporta combining OpenStreetMap with traffic loop detectors, plus geospatial pipelines and dashboards.', m: [['100k+', 'traffic and sensor records']] },
    urb: { n: 'UrbanAI', d: '2025', role: 'Project lead, team of 4', t: 'Telegram reports by text or voice become tasks for community gardens and neighbourhood associations. Whisper, Gemma via Ollama, Supabase and Neo4j.', m: [['0.89', 'macro-F1, noise filter']], extra: { ai: 'Change for Urban', mob: 'Change for AI & Finance' } },
    gen: { n: 'Metro network model', d: 'Mar 2026 – now', role: 'Data Scientist intern, Generalitat Valenciana', t: 'Building the spatial base for a multimodal network of the València metropolitan area: cleaning, reprojecting, integrating and validating GTFS and OSM layers for accessibility and sustainable-mobility studies.', m: [] },
    sig: { n: 'Sigma Data Club', d: 'Sep 2023 – now', role: 'Board member & project manager', t: 'Workshops, peer mentoring and events for the UPV data science club, including a GenAI Hackathon with Lovable, GPTadvisor and MyInvestor.', m: [['140+', 'members'], ['15', 'hackathon teams']] },
    sam: { n: 'Samsung Innovation Campus', d: 'Jul 2025', role: 'University extension diploma in AI', t: 'The programme where UrbanAI was built.', m: [] },
    lov: { n: 'Lovable Campus Leader', d: 'Jan – Jul 2026', role: 'Campus Leader at UPV', t: "Ran workshops, build nights and hackathons for students, and passed their feedback to Lovable's team.", m: [] },
    bj: { n: 'Valencia BuildJam', d: '2026', role: 'Co-organiser', t: 'A build event with Startup Grind and The Terminal Hub where teams solved real business problems with AI and no-code tools.', m: [] },
  },
  es: {
    upv: { n: 'UPV', d: '2023 – 2027', short: 'Origen, 2023', role: 'Grado en Ciencia de Datos, Universitat Politècnica de València', t: 'Donde empiezan todas las líneas. Machine learning, series temporales, A/B testing e inferencia causal, ingeniería de datos, ética de la IA y RGPD.', m: [['2025', 'Premio al Mejor Expediente']] },
    upvic: { n: 'UPV Investment Club', d: 'Hasta 2025', role: 'Proyectos del club', t: 'Proyectos de inversión con el club de inversión de la universidad. La primera parada de la línea de finanzas.', m: [] },
    andi: { n: 'Investigación AnDi', d: 'Ene – May 2026', role: 'Coautor, equipo de 6', t: 'Detección de cambios de régimen en mercados con una red multitarea Conv1D + BiLSTM y una capa de decisión bayesiana: Alertar, Revisar o Ignorar.', m: [['16,85 d', 'RMSE del changepoint, frente a 40,99'], ['12 / 15', 'eventos de estrés anticipados'], ['85,5 %', 'precisión de régimen']] },
    gpt: { n: 'GPTadvisor', d: 'Jun 2026 – hoy', role: 'AI Engineer, IA generativa para gestión patrimonial', t: 'Único responsable técnico y contacto con el cliente de un sistema de recuperación de información para bancos tier-1. También he prototipado un agente LLM para gestión de riesgo de carteras, donde cada respuesta debe ser trazable.', m: [['Tier-1', 'bancos clientes'], ['De principio a fin', 'de la ingesta a la integración']] },
    imt: { n: 'IMT Atlantique', d: 'Francia, 2026 – 27', role: 'MSc Data Science, Erasmus+', t: 'Ampliación en obras: un año de máster en ciencia de datos en Francia.', m: [], extra: { ai: 'Ampliación en obras' } },
    pai: { n: 'Tráfico en Paiporta', d: 'Sep – Nov 2025', role: 'Científico de datos en prácticas, Generalitat Valenciana', t: 'Prototipo de predicción de congestión para Paiporta que combina OpenStreetMap con espiras de tráfico, además de pipelines geoespaciales y dashboards.', m: [['100k+', 'registros de tráfico y sensores']] },
    urb: { n: 'UrbanAI', d: '2025', role: 'Jefe de proyecto, equipo de 4', t: 'Avisos por Telegram, en texto o voz, que se convierten en tareas para huertos urbanos y asociaciones vecinales. Whisper, Gemma vía Ollama, Supabase y Neo4j.', m: [['0,89', 'macro-F1, filtro de ruido']], extra: { ai: 'Transbordo a Urbano', mob: 'Transbordo a IA y Finanzas' } },
    gen: { n: 'Modelo de red metropolitana', d: 'Mar 2026 – hoy', role: 'Científico de datos en prácticas, Generalitat Valenciana', t: 'Construyo la base espacial de una red multimodal para el área metropolitana de València: limpieza, reproyección, integración y validación de capas GTFS y OSM para estudios de accesibilidad y movilidad sostenible.', m: [] },
    sig: { n: 'Sigma Data Club', d: 'Sep 2023 – hoy', role: 'Miembro de la junta y project manager', t: 'Talleres, mentoría entre estudiantes y eventos del club de ciencia de datos de la UPV, entre ellos un GenAI Hackathon con Lovable, GPTadvisor y MyInvestor.', m: [['140+', 'miembros'], ['15', 'equipos en el hackathon']] },
    sam: { n: 'Samsung Innovation Campus', d: 'Jul 2025', role: 'Diploma de Extensión Universitaria en IA', t: 'El programa donde nació UrbanAI.', m: [] },
    lov: { n: 'Lovable Campus Leader', d: 'Ene – Jul 2026', role: 'Campus Leader en la UPV', t: 'Organicé talleres, build nights y hackathons para estudiantes, y trasladé su feedback al equipo de Lovable.', m: [] },
    bj: { n: 'Valencia BuildJam', d: '2026', role: 'Coorganizador', t: 'Un evento de construcción con Startup Grind y The Terminal Hub donde los equipos resolvieron problemas reales de negocio con IA y herramientas no-code.', m: [] },
  },
};

export function stations(lang: Lang): Record<string, Station> {
  const out: Record<string, Station> = {};
  for (const id of Object.keys(GEO)) out[id] = { ...GEO[id], ...STATIONS_TEXT[lang][id] } as Station;
  return out;
}

export const ui = {
  en: {
    htmlLang: 'en',
    title: 'Nouh Khouyi Etbar | Data Science student',
    description: 'Data Science student at UPV and IMT Atlantique. AI Engineer at GPTadvisor. LLMs for banking, calibrated models for finance, and data for cities.',
    nav: { work: 'Work', experience: 'Experience', about: 'About', contact: 'Contact' },
    navLabel: 'Sections',
    homeLabel: 'Nouh Khouyi, home',
    switchLabel: 'Leer en español',
    switchShort: 'ES',
    role: 'Data Science student',
    thesis: 'I build AI systems that can be audited: LLMs for banking, calibrated models for finance, and data for cities.',
    status: 'Final year at UPV, now at IMT Atlantique. Based in València, always open to new projects and to working in any environment.',
    lines: { ai: 'AI & Finance', mob: 'Urban', com: 'Community', edu: 'Study' },
    legendHint: 'Every line starts at UPV. Select a station to read it.',
    mapLabel: 'Career network map',
    underConstruction: 'Under construction',
    originNote: 'All lines start here',
    noNumbers: 'No headline numbers for this stop.',
    workTitle: 'Selected work',
    workIntro: 'Research, client work and side projects. Real data, measured results, and models that report how sure they are.',
    expTitle: 'Experience',
    expIntro: 'Work, community roles and study, most recent first.',
    workTable: 'Work and community',
    studyTable: 'Study',
    toolkit: 'Toolkit',
    aboutTitle: 'About',
    photoAlt: 'Nouh Khouyi in a Sigma Data Club T-shirt, talking with a club member at an event',
    langsLabel: 'Languages',
    contactTitle: 'Get in touch',
    contactLede: 'Always open to new projects, collaborations and roles, remote or on site. Email is the fastest way to reach me.',
    copy: 'Copy email',
    copied: 'Copied',
    copyFallback: 'Selected, press Ctrl+C',
    footer: 'Designed and built in València',
    notFoundTitle: 'Wrong platform',
    notFoundText: 'This page is not on the network. Head back to the map.',
    notFoundLink: 'Back to the home page',
  },
  es: {
    htmlLang: 'es',
    title: 'Nouh Khouyi Etbar | Estudiante de Ciencia de Datos',
    description: 'Estudiante de Ciencia de Datos en la UPV y en IMT Atlantique. AI Engineer en GPTadvisor. LLMs para banca, modelos calibrados para finanzas y datos para ciudades.',
    nav: { work: 'Proyectos', experience: 'Experiencia', about: 'Sobre mí', contact: 'Contacto' },
    navLabel: 'Secciones',
    homeLabel: 'Nouh Khouyi, inicio',
    switchLabel: 'Read in English',
    switchShort: 'EN',
    role: 'Estudiante de Ciencia de Datos',
    thesis: 'Construyo sistemas de IA que se pueden auditar: LLMs para banca, modelos calibrados para finanzas y datos para ciudades.',
    status: 'Último curso en la UPV, ahora en IMT Atlantique. Desde València, siempre abierto a nuevos proyectos y a trabajar en cualquier entorno.',
    lines: { ai: 'IA y Finanzas', mob: 'Urbano', com: 'Comunidad', edu: 'Estudios' },
    legendHint: 'Todas las líneas salen de la UPV. Elige una estación para leerla.',
    mapLabel: 'Mapa de la trayectoria',
    underConstruction: 'En obras',
    originNote: 'Aquí empiezan todas las líneas',
    noNumbers: 'Esta parada no tiene cifras destacadas.',
    workTitle: 'Proyectos',
    workIntro: 'Investigación, trabajo con clientes y proyectos propios. Datos reales, resultados medidos y modelos que dicen cuánto confían en sí mismos.',
    expTitle: 'Experiencia',
    expIntro: 'Trabajo, comunidad y estudios, de lo más reciente a lo más antiguo.',
    workTable: 'Trabajo y comunidad',
    studyTable: 'Estudios',
    toolkit: 'Herramientas',
    aboutTitle: 'Sobre mí',
    photoAlt: 'Nouh Khouyi con una camiseta de Sigma Data Club, hablando con un miembro del club en un evento',
    langsLabel: 'Idiomas',
    contactTitle: 'Hablemos',
    contactLede: 'Siempre abierto a nuevos proyectos, colaboraciones y puestos, en remoto o en presencial. El email es la forma más rápida de contactarme.',
    copy: 'Copiar email',
    copied: 'Copiado',
    copyFallback: 'Seleccionado, pulsa Ctrl+C',
    footer: 'Diseñado y construido en València',
    notFoundTitle: 'Andén equivocado',
    notFoundText: 'Esta página no está en la red. Vuelve al mapa.',
    notFoundLink: 'Volver al inicio',
  },
} as const;

export interface TimeRow { when: string; title: string; org: string; text?: string; line?: LineKey }

export const workRows: Record<Lang, TimeRow[]> = {
  en: [
    { when: 'Jun 2026 – now', title: 'AI Engineer', org: 'GPTadvisor, generative AI for wealth management.', text: 'RAG delivery for tier-1 banks and a prototype LLM agent for portfolio-risk management.', line: 'ai' },
    { when: 'Mar 2026 – now', title: 'Data Scientist intern', org: 'Generalitat Valenciana.', text: 'Geospatial base for a multimodal transport network of the València metropolitan area.', line: 'mob' },
    { when: 'Jan – Jul 2026', title: 'Lovable Campus Leader', org: 'UPV.', text: 'Workshops, build nights and hackathons; co-organised the Valencia BuildJam.', line: 'com' },
    { when: 'Sep – Nov 2025', title: 'Data Scientist intern', org: 'Generalitat Valenciana.', text: 'Congestion-prediction prototype for Paiporta from 100k+ traffic and sensor records.', line: 'mob' },
    { when: 'Sep 2024 – now', title: 'Student mentor', org: 'ETSINF, UPV.', text: 'Helping first-year students settle into university.', line: 'com' },
    { when: 'Sep 2023 – now', title: 'Board member & project manager', org: 'Sigma Data Club UPV.', text: 'Workshops for 140+ members and a GenAI Hackathon with Lovable, GPTadvisor and MyInvestor.', line: 'com' },
    { when: 'Until 2025', title: 'Club projects', org: 'UPV Investment Club.', line: 'ai' },
  ],
  es: [
    { when: 'Jun 2026 – hoy', title: 'AI Engineer', org: 'GPTadvisor, IA generativa para gestión patrimonial.', text: 'Desarrollo de un sistema RAG para bancos tier-1 y prototipo de agente LLM para gestión de riesgo de carteras.', line: 'ai' },
    { when: 'Mar 2026 – hoy', title: 'Científico de datos en prácticas', org: 'Generalitat Valenciana.', text: 'Base geoespacial para una red de transporte multimodal del área metropolitana de València.', line: 'mob' },
    { when: 'Ene – Jul 2026', title: 'Lovable Campus Leader', org: 'UPV.', text: 'Talleres, build nights y hackathons; coorganicé la Valencia BuildJam.', line: 'com' },
    { when: 'Sep – Nov 2025', title: 'Científico de datos en prácticas', org: 'Generalitat Valenciana.', text: 'Prototipo de predicción de congestión para Paiporta con más de 100k registros de tráfico y sensores.', line: 'mob' },
    { when: 'Sep 2024 – hoy', title: 'Tutor de estudiantes', org: 'ETSINF, UPV.', text: 'Acompaño a estudiantes de primero en su llegada a la universidad.', line: 'com' },
    { when: 'Sep 2023 – hoy', title: 'Miembro de la junta y project manager', org: 'Sigma Data Club UPV.', text: 'Talleres para más de 140 miembros y un GenAI Hackathon con Lovable, GPTadvisor y MyInvestor.', line: 'com' },
    { when: 'Hasta 2025', title: 'Proyectos del club', org: 'UPV Investment Club.', line: 'ai' },
  ],
};

export const studyRows: Record<Lang, TimeRow[]> = {
  en: [
    { when: 'Sep 2026 – Jun 2027', title: 'MSc Data Science', org: 'IMT Atlantique, France. Erasmus+.' },
    { when: '2023 – 2027', title: 'BSc Data Science', org: 'Universitat Politècnica de València.', text: 'Top Academic Performance Award, 2025.' },
    { when: 'Jul 2025', title: 'University extension diploma in AI', org: 'Samsung Innovation Campus.' },
  ],
  es: [
    { when: 'Sep 2026 – Jun 2027', title: 'MSc Data Science', org: 'IMT Atlantique, Francia. Erasmus+.' },
    { when: '2023 – 2027', title: 'Grado en Ciencia de Datos', org: 'Universitat Politècnica de València.', text: 'Premio al Mejor Expediente, 2025.' },
    { when: 'Jul 2025', title: 'Diploma de Extensión Universitaria en IA', org: 'Samsung Innovation Campus.' },
  ],
};

export const toolkit: Record<Lang, [string, string][]> = {
  en: [
    ['Languages', 'Python, SQL, R'],
    ['Modelling', 'PyTorch, scikit-learn, XGBoost, time series, Bayesian inference'],
    ['LLMs', 'RAG, LLM agents, Ollama, Whisper'],
    ['Data and infrastructure', 'PostgreSQL and Supabase, MongoDB, Neo4j, Docker, Git, MLflow, Streamlit'],
    ['Geospatial', 'GeoPandas, GTFS, OpenStreetMap, QGIS'],
    ['Responsible AI', 'Uncertainty quantification, interpretability, human oversight, GDPR'],
  ],
  es: [
    ['Lenguajes', 'Python, SQL, R'],
    ['Modelado', 'PyTorch, scikit-learn, XGBoost, series temporales, inferencia bayesiana'],
    ['LLMs', 'RAG, agentes LLM, Ollama, Whisper'],
    ['Datos e infraestructura', 'PostgreSQL y Supabase, MongoDB, Neo4j, Docker, Git, MLflow, Streamlit'],
    ['Geoespacial', 'GeoPandas, GTFS, OpenStreetMap, QGIS'],
    ['IA responsable', 'Cuantificación de incertidumbre, interpretabilidad, supervisión humana, RGPD'],
  ],
};

export const languages: Record<Lang, [string, string][]> = {
  en: [
    ['Spanish', 'Native'],
    ['Arabic', 'Native'],
    ['Catalan / Valencian', 'Native'],
    ['English', 'C2, Cambridge C1 Advanced (200)'],
    ['French', 'B1, learning'],
  ],
  es: [
    ['Español', 'Nativo'],
    ['Árabe', 'Nativo'],
    ['Catalán / valenciano', 'Nativo'],
    ['Inglés', 'C2, Cambridge C1 Advanced (200)'],
    ['Francés', 'B1, aprendiendo'],
  ],
};

export const about: Record<Lang, string[]> = {
  en: [
    "Five years ago I didn't know if I'd study medicine, computer science or biology. I followed my instinct into data science, and the path cleared as I walked it.",
    'In 2025 UPV gave me its Top Academic Performance Award. What I enjoy most is work with real people on the other end: a farm-tech founder sharing his sensor data, a city planning its transport, a bank that needs every answer traced to a source.',
    "Outside work I train, read, and keep one stoic rule close: do what depends on you, and accept what doesn't.",
  ],
  es: [
    'Hace cinco años no sabía si estudiar medicina, informática o biología. Hice caso a mi instinto y elegí ciencia de datos, y el camino se fue aclarando mientras lo caminaba.',
    'En 2025 la UPV me dio el Premio al Mejor Expediente. Lo que más disfruto es trabajar con personas reales al otro lado: un fundador agrotech que nos cedió sus datos de sensores, una ciudad que planifica su transporte, un banco que necesita que cada respuesta tenga su fuente.',
    'Fuera del trabajo entreno, leo y tengo presente una regla estoica: haz lo que depende de ti y acepta lo que no.',
  ],
};
