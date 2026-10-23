export type DmcContent = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    text: string[];
    cta: string;
    imageAlt: string;
  };
  badges: string[];
  intro: { eyebrow: string; title: string; text: string[] };
  specialties: {
    eyebrow: string;
    title: string;
    items: { icon: "bike" | "mountain" | "compass" | "utensils"; title: string; text: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    text: string;
    listIntro: string;
    items: string[];
    closing: string;
  };
  why: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  cta: { title: string; text: string[]; button: string };
};

const en: DmcContent = {
  metaTitle: "DMC in Andalusia – Your Partner in Spain",
  metaDescription:
    "Montaraz Outdoors & Culture is your local DMC in Andalusia, specialising in cycling holidays, hiking tours and tailor-made active travel for tour operators and travel agencies.",
  hero: {
    eyebrow: "Destination Management Company · Andalusia",
    title: "Your Partner in Spain",
    text: [
      "Montaraz Outdoors & Culture is your local DMC in Andalusia, specialising in cycling holidays, hiking tours and tailor-made active travel experiences.",
      "We work with international tour operators and travel agencies to create authentic, well-organised journeys that combine nature, local culture, gastronomy and outdoor activities.",
    ],
    cta: "Contact us to discuss a partnership",
    imageAlt: "Landscape of Andalusia, Spain",
  },
  badges: ["Based in Granada", "Licensed travel agency", "Cycling & hiking specialists"],
  intro: {
    eyebrow: "Local expertise",
    title: "Your Local DMC in Andalusia",
    text: [
      "At Montaraz Outdoors & Culture, we believe the best travel experiences go beyond the usual highlights. We help our partners discover and share the authentic side of Andalusia through carefully designed itineraries, local knowledge and meaningful encounters.",
      "As a local Destination Management Company (DMC) and licensed travel agency, we support our partners with the planning, organisation and delivery of active holidays and cultural travel programmes.",
      "Whether you are looking for a cycling holiday, a multi-day hiking tour or a tailor-made itinerary combining outdoor activities, gastronomy and culture, we work with you to develop a programme that fits your clients' interests and expectations.",
      "Based in Granada, we provide local expertise, personalised service and reliable ground arrangements to help our partners deliver memorable travel experiences in Andalusia.",
    ],
  },
  specialties: {
    eyebrow: "What we do",
    title: "Our Specialties",
    items: [
      {
        icon: "bike",
        title: "Cycling & E-Bike Holidays",
        text: "We design and organise guided and self-guided cycling holidays, from multi-day e-bike tours to road cycling, mountain biking and gravel adventures. Our services can include route planning, bike rental, accommodation, luggage transfers, support vehicles and local guiding.",
      },
      {
        icon: "mountain",
        title: "Hiking & Walking Tours",
        text: "Discover Andalusia on foot through mountain landscapes, natural parks, traditional villages and lesser-known trails. We help organise guided and self-guided hiking programmes adapted to your clients' interests, experience and pace.",
      },
      {
        icon: "compass",
        title: "Tailor-Made Active Holidays",
        text: "We create personalised itineraries for couples, families, private groups and special-interest travellers. Combine cycling, hiking, cultural visits, local gastronomy and authentic experiences into a programme designed around your clients.",
      },
      {
        icon: "utensils",
        title: "Culture, Gastronomy & Local Experiences",
        text: "We connect outdoor activities with the cultural richness of Andalusia, from traditional villages and local food producers to regional gastronomy, heritage sites and experiences with local communities.",
      },
    ],
  },
  services: {
    eyebrow: "Operations",
    title: "Ground Services & Local Support",
    text: "We help bring your itineraries together by coordinating the services and logistics needed for a smooth journey.",
    listIntro: "Depending on the programme, our services include:",
    items: [
      "Itinerary design and route development",
      "Accommodation sourcing and reservations",
      "Private transfers and transport logistics",
      "Bike rental and equipment arrangements",
      "Luggage transfers and support vehicles",
      "Local guides and outdoor activities",
      "Cultural visits, gastronomy and additional experiences",
      "On-trip coordination and operational support",
    ],
    closing:
      "We work closely with local suppliers and service providers to create coherent, carefully organised travel programmes.",
  },
  why: {
    eyebrow: "Why us",
    title: "Why Work with Montaraz?",
    subtitle: "Local knowledge, personal service and active travel expertise.",
    items: [
      {
        title: "Local expertise",
        text: "We are based in Granada and know Andalusia beyond the traditional tourist routes.",
      },
      {
        title: "Active travel specialists",
        text: "Cycling and e-bike holidays are at the heart of what we do, complemented by hiking, culture and gastronomy.",
      },
      {
        title: "Flexible and personal",
        text: "We work closely with our partners to adapt itineraries to their clients' needs, group sizes and travel styles.",
      },
      {
        title: "Hands-on organisation",
        text: "We coordinate the practical details, from routes and accommodation to transport and activities.",
      },
      {
        title: "Authentic experiences",
        text: "We focus on discovering local landscapes, traditions, food and everyday life at a relaxed pace.",
      },
      {
        title: "A complementary local partner",
        text: "We work alongside tour operators and travel agencies, bringing destination knowledge and operational support to their existing products or new travel concepts.",
      },
    ],
  },
  cta: {
    title: "Let's Create Your Next Journey in Andalusia",
    text: [
      "Are you a tour operator or travel agency looking for a reliable local partner in Spain?",
      "Whether you need a complete ground programme, a specialist cycling itinerary or support with selected services, we would be happy to discuss your ideas and explore how we can work together.",
      "Get in touch with Montaraz Outdoors & Culture to develop your next active travel experience in Andalusia.",
    ],
    button: "Contact us to discuss a partnership",
  },
};

const nl: DmcContent = {
  metaTitle: "DMC in Andalusië – Uw partner in Spanje",
  metaDescription:
    "Montaraz Outdoors & Culture is uw lokale DMC in Andalusië, gespecialiseerd in fietsvakanties, wandelreizen en maatwerk actieve reizen voor touroperators en reisbureaus.",
  hero: {
    eyebrow: "Destination Management Company · Andalusië",
    title: "Uw partner in Spanje",
    text: [
      "Montaraz Outdoors & Culture is uw lokale DMC in Andalusië, gespecialiseerd in fietsvakanties, wandelreizen en actieve reizen op maat.",
      "Wij werken samen met internationale touroperators en reisbureaus om authentieke, goed georganiseerde reizen te creëren die natuur, lokale cultuur, gastronomie en buitenactiviteiten combineren.",
    ],
    cta: "Neem contact op over een samenwerking",
    imageAlt: "Landschap van Andalusië, Spanje",
  },
  badges: ["Gevestigd in Granada", "Erkend reisbureau", "Specialisten in fietsen en wandelen"],
  intro: {
    eyebrow: "Lokale expertise",
    title: "Uw lokale DMC in Andalusië",
    text: [
      "Bij Montaraz Outdoors & Culture geloven we dat de beste reiservaringen verder gaan dan de gebruikelijke hoogtepunten. Wij helpen onze partners de authentieke kant van Andalusië te ontdekken en te delen, met zorgvuldig samengestelde reisroutes, lokale kennis en betekenisvolle ontmoetingen.",
      "Als lokale Destination Management Company (DMC) en erkend reisbureau ondersteunen wij onze partners bij de planning, organisatie en uitvoering van actieve vakanties en culturele reisprogramma's.",
      "Zoekt u een fietsvakantie, een meerdaagse wandelreis of een reis op maat waarin buitenactiviteiten, gastronomie en cultuur samenkomen? Wij ontwikkelen samen met u een programma dat past bij de interesses en verwachtingen van uw klanten.",
      "Vanuit Granada bieden wij lokale expertise, persoonlijke service en betrouwbare grondafhandeling, zodat onze partners onvergetelijke reiservaringen in Andalusië kunnen aanbieden.",
    ],
  },
  specialties: {
    eyebrow: "Wat wij doen",
    title: "Onze specialiteiten",
    items: [
      {
        icon: "bike",
        title: "Fiets- en e-bikevakanties",
        text: "Wij ontwerpen en organiseren begeleide en zelfgeleide fietsvakanties, van meerdaagse e-biketochten tot wielrennen, mountainbiken en gravelavonturen. Onze diensten kunnen routeplanning, fietsverhuur, accommodatie, bagagetransport, volgwagens en lokale begeleiding omvatten.",
      },
      {
        icon: "mountain",
        title: "Wandelreizen",
        text: "Ontdek Andalusië te voet, door berglandschappen, natuurparken, traditionele dorpen en onbekende paden. Wij helpen bij het organiseren van begeleide en zelfgeleide wandelprogramma's die zijn afgestemd op de interesses, ervaring en het tempo van uw klanten.",
      },
      {
        icon: "compass",
        title: "Actieve vakanties op maat",
        text: "Wij creëren persoonlijke reisroutes voor koppels, gezinnen, privégroepen en reizigers met specifieke interesses. Combineer fietsen, wandelen, culturele bezoeken, lokale gastronomie en authentieke ervaringen in een programma dat rond uw klanten is opgebouwd.",
      },
      {
        icon: "utensils",
        title: "Cultuur, gastronomie en lokale ervaringen",
        text: "Wij verbinden buitenactiviteiten met de culturele rijkdom van Andalusië: van traditionele dorpen en lokale voedselproducenten tot regionale gastronomie, erfgoedlocaties en ontmoetingen met lokale gemeenschappen.",
      },
    ],
  },
  services: {
    eyebrow: "Operatie",
    title: "Grondafhandeling en lokale ondersteuning",
    text: "Wij brengen uw reisroutes samen door de diensten en logistiek te coördineren die nodig zijn voor een vlotte reis.",
    listIntro: "Afhankelijk van het programma omvatten onze diensten:",
    items: [
      "Ontwerp van reisroutes en routeontwikkeling",
      "Zoeken en reserveren van accommodatie",
      "Privétransfers en transportlogistiek",
      "Fietsverhuur en materiaalregelingen",
      "Bagagetransport en volgwagens",
      "Lokale gidsen en buitenactiviteiten",
      "Culturele bezoeken, gastronomie en extra ervaringen",
      "Coördinatie onderweg en operationele ondersteuning",
    ],
    closing:
      "Wij werken nauw samen met lokale leveranciers en dienstverleners om samenhangende, zorgvuldig georganiseerde reisprogramma's te creëren.",
  },
  why: {
    eyebrow: "Waarom wij",
    title: "Waarom samenwerken met Montaraz?",
    subtitle: "Lokale kennis, persoonlijke service en expertise in actieve reizen.",
    items: [
      {
        title: "Lokale expertise",
        text: "Wij zijn gevestigd in Granada en kennen Andalusië voorbij de traditionele toeristische routes.",
      },
      {
        title: "Specialisten in actieve reizen",
        text: "Fiets- en e-bikevakanties vormen de kern van ons werk, aangevuld met wandelen, cultuur en gastronomie.",
      },
      {
        title: "Flexibel en persoonlijk",
        text: "Wij werken nauw samen met onze partners om reisroutes aan te passen aan de behoeften van hun klanten, de groepsgrootte en de reisstijl.",
      },
      {
        title: "Praktische organisatie",
        text: "Wij coördineren de praktische details, van routes en accommodatie tot vervoer en activiteiten.",
      },
      {
        title: "Authentieke ervaringen",
        text: "Wij richten ons op het ontdekken van lokale landschappen, tradities, eten en het dagelijks leven, in een ontspannen tempo.",
      },
      {
        title: "Een aanvullende lokale partner",
        text: "Wij werken naast touroperators en reisbureaus en brengen bestemmingskennis en operationele ondersteuning in hun bestaande producten of nieuwe reisconcepten.",
      },
    ],
  },
  cta: {
    title: "Laten we samen uw volgende reis in Andalusië creëren",
    text: [
      "Bent u een touroperator of reisbureau op zoek naar een betrouwbare lokale partner in Spanje?",
      "Of u nu een compleet grondprogramma, een gespecialiseerde fietsroute of ondersteuning bij geselecteerde diensten nodig heeft: wij bespreken graag uw ideeën en onderzoeken hoe wij kunnen samenwerken.",
      "Neem contact op met Montaraz Outdoors & Culture om uw volgende actieve reiservaring in Andalusië te ontwikkelen.",
    ],
    button: "Neem contact op over een samenwerking",
  },
};

export const dmcContent = { en, nl } as const;
