export type ImageAsset = {
  src: string;
  alt: string;
  position?: string;
};

export type Story = {
  slug: string;
  number: string;
  category: string;
  title: string;
  location: string;
  year: string;
  intro: string;
  cover: ImageAsset;
  gallery: ImageAsset[];
};

export const heroSlides: ImageAsset[] = [
  {
    src: "/images/hero/auto-activation.jpg",
    alt: "Convidados em uma experiência automotiva de marca",
    position: "center 54%",
  },
  {
    src: "/images/hero/branded-stage.jpg",
    alt: "Apresentação em palco com identidade visual de marca",
    position: "center 48%",
  },
  {
    src: "/images/hero/product-launch.jpg",
    alt: "Convidados em um lançamento de produto iluminado",
    position: "center 52%",
  },
  {
    src: "/images/hero/fashion-runway.jpg",
    alt: "Desfile de moda visto de cima com público ao redor",
    position: "center 45%",
  },
  {
    src: "/images/hero/fashion-finale.jpg",
    alt: "Final de desfile em uma experiência de moda",
    position: "center 45%",
  },
  {
    src: "/images/brand-events/conference-audience.jpg",
    alt: "Público acompanhando uma conferência de marca",
    position: "center 52%",
  },
];

export const stories: Story[] = [
  {
    slug: "brand-experience",
    number: "01",
    category: "Brand Experience",
    title: "Forma em movimento",
    location: "São Paulo",
    year: "2026",
    intro:
      "Luz, presença e identidade se encontram em uma experiência construída para ser vivida — e continuar existindo em imagem.",
    cover: heroSlides[0],
    gallery: [
      { src: "/images/hero/city-activation.jpg", alt: "Público diante de uma ativação urbana de marca" },
      { src: "/images/brand-events/brand-collateral.jpg", alt: "Detalhes gráficos de uma identidade de marca" },
      heroSlides[2],
      { src: "/images/brand-events/product-installation.jpg", alt: "Instalação de produto em um espaço expositivo" },
      heroSlides[1],
    ],
  },
  {
    slug: "festival-pulse",
    number: "02",
    category: "Festival",
    title: "Depois da luz",
    location: "São Paulo",
    year: "2026",
    intro:
      "Uma narrativa feita de escala, cor e encontros. O festival como paisagem viva e memória coletiva.",
    cover: { src: "/images/festivals/electric-crowd.jpg", alt: "Multidão sob luzes azuis em um festival" },
    gallery: [
      { src: "/images/festivals/confetti.jpg", alt: "Explosão de confetes sobre o público" },
      { src: "/images/festivals/night-stage.jpg", alt: "Palco de festival visto entre a multidão" },
      { src: "/images/festivals/blue-stage.jpg", alt: "Palco iluminado em azul durante festival noturno" },
    ],
  },
  {
    slug: "concert-volume",
    number: "03",
    category: "Concert",
    title: "Volume presente",
    location: "São Paulo",
    year: "2026",
    intro:
      "O palco, o artista e o público registrados no instante em que som e movimento ocupam o mesmo espaço.",
    cover: { src: "/images/concerts/performance.jpg", alt: "Performance musical vista por entre o público" },
    gallery: [
      { src: "/images/concerts/crowd-lights.jpg", alt: "Público diante de um palco iluminado" },
      { src: "/images/concerts/purple-stage.jpg", alt: "Show com iluminação violeta e mãos erguidas" },
      { src: "/images/festivals/confetti.jpg", alt: "Momento de celebração com confetes no palco" },
    ],
  },
  {
    slug: "wedding-gestures",
    number: "04",
    category: "Wedding",
    title: "Entre gestos",
    location: "São Paulo",
    year: "2026",
    intro:
      "Uma história observada de perto, com atenção aos gestos pequenos, à atmosfera e ao que acontece entre os momentos esperados.",
    cover: { src: "/images/weddings/hands.jpg", alt: "Mãos de um casal durante uma cerimônia" },
    gallery: [
      { src: "/images/weddings/reception.jpg", alt: "Brinde durante uma recepção de casamento" },
      { src: "/images/weddings/photographer.jpg", alt: "Fotógrafa registrando convidados de uma cerimônia" },
      { src: "/images/weddings/hands.jpg", alt: "Detalhe das mãos do casal" },
    ],
  },
  {
    slug: "fifteen-passage",
    number: "05",
    category: "Fifteen",
    title: "Rito de passagem",
    location: "São Paulo",
    year: "2026",
    intro:
      "Retrato, celebração e personalidade em uma noite que marca o começo de uma nova fase.",
    cover: { src: "/images/fifteen/portrait.jpg", alt: "Retrato de debutante com tiara" },
    gallery: [
      { src: "/images/fifteen/gown-detail.jpg", alt: "Detalhe de vestido de festa" },
      { src: "/images/fifteen/cake.jpg", alt: "Bolo de celebração sob luzes coloridas" },
      { src: "/images/fifteen/blue-gown.jpg", alt: "Debutante com vestido azul em ambiente externo" },
    ],
  },
];

export const eventIndex = [
  { number: "01", label: "Brand Events", image: heroSlides[3], href: "#brand-events" },
  { number: "02", label: "Festivals", image: stories[1].cover, href: "/stories/festival-pulse" },
  { number: "03", label: "Concerts", image: stories[2].cover, href: "/stories/concert-volume" },
  { number: "04", label: "Weddings", image: stories[3].cover, href: "/stories/wedding-gestures" },
  { number: "05", label: "Fifteen", image: stories[4].cover, href: "/stories/fifteen-passage" },
];

export const approachSteps = [
  {
    number: "01",
    label: "Before",
    title: "Entender antes de registrar.",
    body: "Briefing, contexto, ritmo do evento e intenção da marca orientam cada escolha visual.",
    image: { src: "/images/studio/camera-detail.jpg", alt: "Câmera preparada antes de um evento" },
  },
  {
    number: "02",
    label: "During",
    title: "Presença sem interrupção.",
    body: "Cobertura discreta, direção quando necessária e atenção constante à narrativa que acontece ao redor.",
    image: { src: "/images/studio/photographer.jpg", alt: "Fotógrafo trabalhando durante um evento" },
  },
  {
    number: "03",
    label: "After",
    title: "Curadoria que dá sentido.",
    body: "Seleção, tratamento e sequência transformam registros isolados em uma história visual coerente.",
    image: { src: "/images/studio/overhead.jpg", alt: "Equipe revisando imagens captadas em um evento" },
  },
];

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}
