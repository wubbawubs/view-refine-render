// 25 weken aan voorbereide e-mail content voor geautomatiseerde mailings
// Afwisselend: gepersonaliseerd rapport, SEO tips, Google updates, case studies, online marketing tips

export interface WeeklyMailTemplate {
  weekNumber: number;
  type: "rapport" | "tips" | "google-update" | "case-study" | "marketing-tip";
  subject: string;
  headerTitle: string;
  headerSubtitle: string;
  greeting: string;
  sections: MailSection[];
  ctaText: string;
  personalized: boolean; // true = uses client-specific data (SEO score, keywords, optimizations)
}

interface MailSection {
  title?: string;
  content: string;
  items?: string[];
  highlight?: boolean; // renders as colored callout box
}

export const weeklyMailTemplates: WeeklyMailTemplate[] = [
  // ── WEEK 1: Gepersonaliseerd rapport ──
  {
    weekNumber: 1,
    type: "rapport",
    subject: "Je SEO Rapport | Week {{weekNumber}}",
    headerTitle: "SEO Rapport",
    headerSubtitle: "Week {{weekNumber}}",
    greeting: "Hier is je persoonlijke SEO update van deze week.",
    sections: [
      { title: "SEO Score", content: "{{seoScoreBlock}}" },
      { title: "Ranking Veranderingen", content: "{{keywordChangesBlock}}" },
      { title: "Optimalisaties", content: "{{optimizationsBlock}}" },
    ],
    ctaText: "Bekijk je dashboard",
    personalized: true,
  },

  // ── WEEK 2: SEO Tips ──
  {
    weekNumber: 2,
    type: "tips",
    subject: "3 SEO tips die je vandaag kunt toepassen",
    headerTitle: "SEO Tips van de Week",
    headerSubtitle: "Praktische tips voor betere rankings",
    greeting: "Deze week delen we drie tips die je direct kunt toepassen om je website beter vindbaar te maken.",
    sections: [
      {
        title: "1. Gebruik je belangrijkste zoekwoord in de eerste 100 woorden",
        content: "Google hecht veel waarde aan de eerste alinea van je pagina. Zorg dat je belangrijkste zoekwoord hier natuurlijk in voorkomt. Dit helpt Google begrijpen waar je pagina over gaat.",
      },
      {
        title: "2. Voeg alt-teksten toe aan al je afbeeldingen",
        content: "Afbeeldingen zonder alt-tekst zijn een gemiste kans. Beschrijf wat je ziet op de afbeelding en gebruik waar mogelijk een relevant zoekwoord. Dit helpt ook voor Google Afbeeldingen.",
      },
      {
        title: "3. Maak je URL's kort en beschrijvend",
        content: "Een URL als /diensten/loodgieter-amsterdam is veel beter dan /pagina?id=1234. Korte, beschrijvende URL's scoren beter en worden vaker aangeklikt in zoekresultaten.",
      },
    ],
    ctaText: "Meer tips in je dashboard",
    personalized: false,
  },

  // ── WEEK 3: Google Update ──
  {
    weekNumber: 3,
    type: "google-update",
    subject: "Google Update | Wat betekent dit voor jouw website?",
    headerTitle: "Google Update",
    headerSubtitle: "Blijf op de hoogte van de laatste veranderingen",
    greeting: "Google heeft recent veranderingen doorgevoerd. Hier lees je wat dit voor jouw website betekent.",
    sections: [
      {
        title: "Core Web Vitals worden belangrijker",
        content: "Google kijkt steeds meer naar hoe snel je website laadt en hoe gebruiksvriendelijk deze is. Pagina's die langzaam laden of die op mobiel slecht werken, kunnen lager gaan ranken.",
        highlight: true,
      },
      {
        title: "Wat kun je doen?",
        content: "Controleer je website snelheid via Google PageSpeed Insights. Optimaliseer afbeeldingen, minimaliseer CSS en JavaScript, en zorg voor een goede mobiele ervaring.",
        items: [
          "Test je website op pagespeed.web.dev",
          "Comprimeer afbeeldingen naar WebP formaat",
          "Vermijd grote JavaScript bestanden die laden blokkeren",
        ],
      },
    ],
    ctaText: "Bekijk je prestaties",
    personalized: false,
  },

  // ── WEEK 4: Gepersonaliseerd rapport ──
  {
    weekNumber: 4,
    type: "rapport",
    subject: "Je SEO Rapport | Week {{weekNumber}}",
    headerTitle: "SEO Rapport",
    headerSubtitle: "Week {{weekNumber}}",
    greeting: "Tijd voor je tweewekelijkse SEO update. Hier zie je hoe jouw website presteert.",
    sections: [
      { title: "SEO Score", content: "{{seoScoreBlock}}" },
      { title: "Ranking Veranderingen", content: "{{keywordChangesBlock}}" },
      { title: "Optimalisaties", content: "{{optimizationsBlock}}" },
    ],
    ctaText: "Bekijk je volledige dashboard",
    personalized: true,
  },

  // ── WEEK 5: Marketing Tip ──
  {
    weekNumber: 5,
    type: "marketing-tip",
    subject: "Waarom Google Mijn Bedrijf essentieel is",
    headerTitle: "Online Marketing Tip",
    headerSubtitle: "Vergroot je lokale zichtbaarheid",
    greeting: "Wist je dat je Google Bedrijfsprofiel een van de krachtigste gratis marketingtools is?",
    sections: [
      {
        title: "Google Bedrijfsprofiel optimaliseren",
        content: "Een volledig ingevuld Google Bedrijfsprofiel kan je zichtbaarheid in lokale zoekresultaten enorm verbeteren. Klanten zien direct je openingstijden, foto's, reviews en contactgegevens.",
        items: [
          "Vul alle categorieën en diensten in",
          "Voeg minimaal 10 foto's toe van je bedrijf",
          "Reageer op alle reviews, ook de negatieve",
          "Plaats wekelijks een update of aanbieding",
        ],
      },
      {
        title: "Reviews zijn goud waard",
        content: "Bedrijven met meer dan 20 positieve reviews ranken gemiddeld 15% hoger in lokale zoekresultaten. Vraag tevreden klanten actief om een review achter te laten.",
        highlight: true,
      },
    ],
    ctaText: "Bekijk je SEO scores",
    personalized: false,
  },

  // ── WEEK 6: Case Study ──
  {
    weekNumber: 6,
    type: "case-study",
    subject: "Van pagina 3 naar top 5 | Hoe een bakkerij dat deed",
    headerTitle: "Succesverhaal",
    headerSubtitle: "Echte resultaten van echte klanten",
    greeting: "Deze week delen we hoe een van onze klanten hun online zichtbaarheid dramatisch heeft verbeterd.",
    sections: [
      {
        title: "De uitdaging",
        content: "Een lokale bakkerij stond op pagina 3 van Google voor 'bakkerij amsterdam'. Ze hadden een mooie website, maar die was niet geoptimaliseerd voor zoekmachines.",
      },
      {
        title: "Wat we hebben gedaan",
        content: "In 3 maanden hebben we stap voor stap de website geoptimaliseerd.",
        items: [
          "Meta titels en beschrijvingen herschreven met lokale zoekwoorden",
          "Schema markup toegevoegd voor lokale bedrijfsinformatie",
          "Google Bedrijfsprofiel volledig geoptimaliseerd",
          "Interne linkstructuur verbeterd",
          "Nieuwe contentpagina's gemaakt rond populaire zoekwoorden",
        ],
      },
      {
        title: "Het resultaat",
        content: "Na 3 maanden staat de bakkerij nu in de top 5 voor hun belangrijkste zoekwoorden. Het organische verkeer is met 180% gestegen en ze ontvangen wekelijks nieuwe klanten via Google.",
        highlight: true,
      },
    ],
    ctaText: "Bekijk jouw resultaten",
    personalized: false,
  },

  // ── WEEK 7: Gepersonaliseerd rapport ──
  {
    weekNumber: 7,
    type: "rapport",
    subject: "Je SEO Rapport | Week {{weekNumber}}",
    headerTitle: "SEO Rapport",
    headerSubtitle: "Week {{weekNumber}}",
    greeting: "Je tweewekelijkse SEO update is er weer. Bekijk hoe jouw website het doet.",
    sections: [
      { title: "SEO Score", content: "{{seoScoreBlock}}" },
      { title: "Ranking Veranderingen", content: "{{keywordChangesBlock}}" },
      { title: "Optimalisaties", content: "{{optimizationsBlock}}" },
    ],
    ctaText: "Bekijk je dashboard",
    personalized: true,
  },

  // ── WEEK 8: SEO Tips ──
  {
    weekNumber: 8,
    type: "tips",
    subject: "Content is King | 3 tips voor betere SEO content",
    headerTitle: "Content Tips",
    headerSubtitle: "Schrijf content die Google en bezoekers waarderen",
    greeting: "Goede content is de basis van elke succesvolle SEO strategie. Hier zijn drie tips om je content te verbeteren.",
    sections: [
      {
        title: "1. Schrijf voor je bezoeker, niet voor Google",
        content: "De beste SEO content is content die oprecht nuttig is voor je lezer. Google wordt steeds slimmer in het herkennen van waardevolle content. Focus op het beantwoorden van vragen die je klanten hebben.",
      },
      {
        title: "2. Gebruik koppen (H2, H3) om je tekst te structureren",
        content: "Niet alleen lezers, maar ook Google leest je koppen om te begrijpen waar je pagina over gaat. Gebruik beschrijvende koppen die je zoekwoorden bevatten en de tekst logisch opdelen.",
      },
      {
        title: "3. Maak je content langer dan 1000 woorden voor belangrijke pagina's",
        content: "Uitgebreide content die een onderwerp diepgaand behandelt scoort gemiddeld beter dan korte pagina's. Maar kwaliteit boven kwantiteit: 1000 woorden onzin helpt niemand.",
      },
    ],
    ctaText: "Bekijk je content score",
    personalized: false,
  },

  // ── WEEK 9: Google Update ──
  {
    weekNumber: 9,
    type: "google-update",
    subject: "AI en zoekresultaten | Google's nieuwste veranderingen",
    headerTitle: "Google & AI Update",
    headerSubtitle: "Hoe AI de zoekresultaten verandert",
    greeting: "Google integreert steeds meer AI in de zoekresultaten. Dit is wat je moet weten.",
    sections: [
      {
        title: "AI Overzichten in zoekresultaten",
        content: "Google toont steeds vaker AI-gegenereerde samenvattingen bovenaan de zoekresultaten. Dit betekent dat je content duidelijk, gestructureerd en feitelijk correct moet zijn om hierin opgenomen te worden.",
        highlight: true,
      },
      {
        title: "Wat betekent dit voor jou?",
        content: "Je hoeft niet in paniek te raken. Websites die duidelijke, betrouwbare en goed gestructureerde informatie bieden, profiteren juist van deze verandering.",
        items: [
          "Beantwoord veelgestelde vragen duidelijk op je website",
          "Gebruik gestructureerde data (Schema markup)",
          "Zorg dat je content actueel en feitelijk correct is",
          "Focus op E-E-A-T: Ervaring, Expertise, Autoriteit, Betrouwbaarheid",
        ],
      },
    ],
    ctaText: "Bekijk je SEO prestaties",
    personalized: false,
  },

  // ── WEEK 10: Gepersonaliseerd rapport ──
  {
    weekNumber: 10,
    type: "rapport",
    subject: "Je SEO Rapport | Week {{weekNumber}}",
    headerTitle: "SEO Rapport",
    headerSubtitle: "Week {{weekNumber}}",
    greeting: "Hier is je tweewekelijkse update. We werken continu aan betere rankings voor jouw website.",
    sections: [
      { title: "SEO Score", content: "{{seoScoreBlock}}" },
      { title: "Ranking Veranderingen", content: "{{keywordChangesBlock}}" },
      { title: "Optimalisaties", content: "{{optimizationsBlock}}" },
    ],
    ctaText: "Bekijk je volledige dashboard",
    personalized: true,
  },

  // ── WEEK 11: Marketing Tip ──
  {
    weekNumber: 11,
    type: "marketing-tip",
    subject: "De kracht van interne links | Verbeter je SEO gratis",
    headerTitle: "SEO Strategie",
    headerSubtitle: "Een onderschatte maar krachtige techniek",
    greeting: "Interne links zijn een van de meest onderschatte SEO technieken. En het mooiste? Je kunt het helemaal zelf doen.",
    sections: [
      {
        title: "Waarom interne links zo belangrijk zijn",
        content: "Interne links helpen Google te begrijpen welke pagina's op je website het belangrijkst zijn. Hoe meer interne links naar een pagina wijzen, hoe belangrijker Google die pagina vindt.",
      },
      {
        title: "Praktische tips",
        content: "Hier zijn een paar eenvoudige manieren om je interne linkstructuur te verbeteren.",
        items: [
          "Link vanuit blogposts naar je diensten of productpagina's",
          "Voeg gerelateerde artikelen toe onderaan je blogposts",
          "Gebruik beschrijvende linkteksten (niet 'klik hier')",
          "Zorg dat elke belangrijke pagina minimaal 3 interne links heeft",
        ],
      },
      {
        title: "Weetje",
        content: "Wikipedia is zo goed vindbaar in Google mede dankzij hun uitgebreide interne linkstructuur. Elke pagina linkt naar tientallen andere relevante pagina's.",
        highlight: true,
      },
    ],
    ctaText: "Bekijk je linkstructuur",
    personalized: false,
  },

  // ── WEEK 12: Tips ──
  {
    weekNumber: 12,
    type: "tips",
    subject: "Snelheid telt | 3 tips voor een snellere website",
    headerTitle: "Website Snelheid",
    headerSubtitle: "Snellere websites ranken hoger",
    greeting: "Een snelle website is niet alleen fijn voor je bezoekers, het is ook een belangrijke rankingfactor voor Google.",
    sections: [
      {
        title: "1. Optimaliseer je afbeeldingen",
        content: "Afbeeldingen zijn vaak de grootste bestanden op je website. Gebruik het WebP formaat, pas de afmetingen aan en gebruik lazy loading zodat afbeeldingen pas laden als ze in beeld komen.",
      },
      {
        title: "2. Minimaliseer het aantal plugins en scripts",
        content: "Elke plugin of extern script voegt laadtijd toe. Verwijder plugins die je niet gebruikt en combineer JavaScript bestanden waar mogelijk.",
      },
      {
        title: "3. Gebruik caching",
        content: "Caching zorgt ervoor dat terugkerende bezoekers niet alles opnieuw hoeven te laden. Een goede caching-instelling kan je laadtijd met 50-80% verminderen.",
      },
    ],
    ctaText: "Check je website snelheid",
    personalized: false,
  },

  // ── WEEK 13: Gepersonaliseerd rapport ──
  {
    weekNumber: 13,
    type: "rapport",
    subject: "Je SEO Rapport | Week {{weekNumber}}",
    headerTitle: "SEO Rapport",
    headerSubtitle: "Week {{weekNumber}}",
    greeting: "Je tweewekelijkse SEO update staat klaar. Bekijk je voortgang!",
    sections: [
      { title: "SEO Score", content: "{{seoScoreBlock}}" },
      { title: "Ranking Veranderingen", content: "{{keywordChangesBlock}}" },
      { title: "Optimalisaties", content: "{{optimizationsBlock}}" },
    ],
    ctaText: "Bekijk je dashboard",
    personalized: true,
  },

  // ── WEEK 14: Case Study ──
  {
    weekNumber: 14,
    type: "case-study",
    subject: "200% meer organisch verkeer | Het verhaal van een tandarts",
    headerTitle: "Succesverhaal",
    headerSubtitle: "Van onzichtbaar naar onmisbaar",
    greeting: "Lees hoe een tandartspraktijk hun online aanwezigheid compleet heeft getransformeerd.",
    sections: [
      {
        title: "De situatie",
        content: "Een tandartspraktijk in Amsterdam had een verouderde website die amper gevonden werd in Google. Nieuwe patienten kwamen alleen via mond-tot-mondreclame.",
      },
      {
        title: "Onze aanpak",
        content: "We hebben een complete SEO strategie opgezet, gericht op lokale vindbaarheid.",
        items: [
          "Alle pagina's geoptimaliseerd met relevante zoekwoorden",
          "Nieuwe landingspagina's gemaakt voor elke behandeling",
          "Google Bedrijfsprofiel geoptimaliseerd met foto's en diensten",
          "Review strategie opgezet (nu 47 reviews met 4.8 sterren)",
          "Blog gestart met tandheelkundige tips en informatie",
        ],
      },
      {
        title: "Resultaten na 4 maanden",
        content: "Het organisch verkeer steeg met 200%. De praktijk ontvangt nu gemiddeld 15 nieuwe patienten per maand via Google, tegenover 2 voorheen. De investering in SEO was binnen 2 maanden terugverdiend.",
        highlight: true,
      },
    ],
    ctaText: "Bekijk jouw groei",
    personalized: false,
  },

  // ── WEEK 15: Google Update ──
  {
    weekNumber: 15,
    type: "google-update",
    subject: "Lokale SEO in 2025 | Wat is er veranderd?",
    headerTitle: "Lokale SEO Update",
    headerSubtitle: "Belangrijk voor lokale ondernemers",
    greeting: "Google heeft de manier waarop lokale zoekresultaten werken bijgewerkt. Dit moet je weten.",
    sections: [
      {
        title: "Proximity is nog belangrijker geworden",
        content: "Google weegt de afstand tussen de zoeker en jouw bedrijf nu nog zwaarder mee. Dit betekent dat je Google Bedrijfsprofiel nog belangrijker is dan voorheen.",
        highlight: true,
      },
      {
        title: "Reviews wegen zwaarder dan ooit",
        content: "Het aantal reviews, de kwaliteit ervan en hoe recent ze zijn, heeft nu meer invloed op je positie in de lokale zoekresultaten.",
        items: [
          "Streef naar minimaal 1 nieuwe review per week",
          "Reageer altijd binnen 24 uur op reviews",
          "Gebruik de feedback om je dienstverlening te verbeteren",
        ],
      },
      {
        title: "Service areas zijn vernieuwd",
        content: "Google heeft de manier waarop service areas werken aangepast. Bedrijven die op locatie werken (loodgieters, schoonmakers, etc.) kunnen nu gerichter hun werkgebied aangeven.",
      },
    ],
    ctaText: "Bekijk je lokale SEO score",
    personalized: false,
  },

  // ── WEEK 16: Gepersonaliseerd rapport ──
  {
    weekNumber: 16,
    type: "rapport",
    subject: "Je SEO Rapport | Week {{weekNumber}}",
    headerTitle: "SEO Rapport",
    headerSubtitle: "Week {{weekNumber}}",
    greeting: "Je tweewekelijkse update is er weer. Laten we kijken naar je voortgang.",
    sections: [
      { title: "SEO Score", content: "{{seoScoreBlock}}" },
      { title: "Ranking Veranderingen", content: "{{keywordChangesBlock}}" },
      { title: "Optimalisaties", content: "{{optimizationsBlock}}" },
    ],
    ctaText: "Bekijk je dashboard",
    personalized: true,
  },

  // ── WEEK 17: Marketing Tip ──
  {
    weekNumber: 17,
    type: "marketing-tip",
    subject: "Schema Markup | De geheime wapen voor betere zoekresultaten",
    headerTitle: "Technische SEO Tip",
    headerSubtitle: "Schema markup uitgelegd",
    greeting: "Schema markup is een van de meest effectieve maar minst gebruikte SEO technieken. Zo werkt het.",
    sections: [
      {
        title: "Wat is Schema Markup?",
        content: "Schema markup is een stukje code dat je aan je website toevoegt om Google beter te laten begrijpen wat je pagina bevat. Het resultaat? Rijkere zoekresultaten met sterren, prijzen, FAQ's en meer.",
      },
      {
        title: "Soorten Schema die je moet kennen",
        content: "Afhankelijk van je type bedrijf zijn er verschillende schema types die je kunt gebruiken.",
        items: [
          "LocalBusiness: voor bedrijven met een fysieke locatie",
          "FAQ: voor veelgestelde vragen pagina's",
          "Product: voor productpagina's met prijzen en reviews",
          "Service: voor dienstverlenende bedrijven",
          "Review: voor het tonen van sterren in zoekresultaten",
        ],
      },
      {
        title: "Het effect",
        content: "Pagina's met schema markup krijgen gemiddeld 30% meer klikken in de zoekresultaten doordat ze meer opvallen met extra informatie zoals sterren, prijzen en FAQ's.",
        highlight: true,
      },
    ],
    ctaText: "Bekijk je technische SEO",
    personalized: false,
  },

  // ── WEEK 18: Tips ──
  {
    weekNumber: 18,
    type: "tips",
    subject: "Mobiel eerst | 3 tips voor een perfecte mobiele website",
    headerTitle: "Mobiele SEO Tips",
    headerSubtitle: "60% van je bezoekers is mobiel",
    greeting: "Google gebruikt de mobiele versie van je website als basis voor ranking. Hier zijn drie tips om je mobiele ervaring te verbeteren.",
    sections: [
      {
        title: "1. Test je website op een echte telefoon",
        content: "Kijk niet alleen op je desktop hoe je website eruit ziet. Pak je telefoon en navigeer door alle pagina's. Is alles leesbaar? Zijn knoppen groot genoeg om aan te tikken? Laadt alles snel?",
      },
      {
        title: "2. Maak telefoonnummers klikbaar",
        content: "Op mobiel willen mensen direct kunnen bellen. Gebruik een tel: link zodat bezoekers met een tik kunnen bellen. Dit geldt ook voor e-mailadressen en adressen (voor navigatie).",
      },
      {
        title: "3. Vermijd pop-ups op mobiel",
        content: "Google straft websites die storende pop-ups tonen op mobiel. Als je toch een pop-up wilt gebruiken, zorg dan dat deze makkelijk weg te klikken is en niet de hele pagina bedekt.",
      },
    ],
    ctaText: "Check je mobiele score",
    personalized: false,
  },

  // ── WEEK 19: Gepersonaliseerd rapport ──
  {
    weekNumber: 19,
    type: "rapport",
    subject: "Je SEO Rapport | Week {{weekNumber}}",
    headerTitle: "SEO Rapport",
    headerSubtitle: "Week {{weekNumber}}",
    greeting: "Hier is je nieuwste SEO update. We blijven werken aan betere resultaten voor jouw website.",
    sections: [
      { title: "SEO Score", content: "{{seoScoreBlock}}" },
      { title: "Ranking Veranderingen", content: "{{keywordChangesBlock}}" },
      { title: "Optimalisaties", content: "{{optimizationsBlock}}" },
    ],
    ctaText: "Bekijk je volledige dashboard",
    personalized: true,
  },

  // ── WEEK 20: Case Study ──
  {
    weekNumber: 20,
    type: "case-study",
    subject: "Van 0 naar 500 bezoekers per maand | Een kapper vertelt",
    headerTitle: "Succesverhaal",
    headerSubtitle: "Kleine investering, groot resultaat",
    greeting: "Lees hoe een kapsalon in 5 maanden van vrijwel onzichtbaar naar 500 organische bezoekers per maand groeide.",
    sections: [
      {
        title: "Het startpunt",
        content: "Een kapsalon had een mooie website, maar kreeg bijna geen bezoekers via Google. Al het verkeer kwam via Instagram en mond-tot-mondreclame.",
      },
      {
        title: "De strategie",
        content: "We kozen voor een focus op lokale SEO en content marketing.",
        items: [
          "Landingspagina's gemaakt per dienst (balayage, knippen, kleuren)",
          "Blog gestart met haarverzorgingstips en trends",
          "Google Bedrijfsprofiel geoptimaliseerd met portfolio foto's",
          "Schema markup toegevoegd voor lokale vindbaarheid",
          "Actieve review campagne opgezet",
        ],
      },
      {
        title: "Na 5 maanden",
        content: "De website ontvangt nu 500+ organische bezoekers per maand. 35% van de nieuwe klanten geeft aan via Google te zijn gekomen. De agenda zit voller dan ooit.",
        highlight: true,
      },
    ],
    ctaText: "Bekijk jouw statistieken",
    personalized: false,
  },

  // ── WEEK 21: Google Update ──
  {
    weekNumber: 21,
    type: "google-update",
    subject: "Google's Helpful Content Update | Wat het betekent",
    headerTitle: "Google Algorithm Update",
    headerSubtitle: "Helpful Content System uitgelegd",
    greeting: "Google beloont websites die echt nuttige content bieden. Hier lees je hoe je hiervan profiteert.",
    sections: [
      {
        title: "Wat is de Helpful Content Update?",
        content: "Google's Helpful Content systeem beoordeelt of je website als geheel nuttig is voor bezoekers. Websites met veel 'dunne' of niet-helpende pagina's kunnen hierdoor lager ranken, zelfs als sommige pagina's wel goed zijn.",
        highlight: true,
      },
      {
        title: "Hoe zorg je voor helpful content?",
        content: "Focus op het maken van content die je doelgroep echt helpt.",
        items: [
          "Beantwoord vragen die je klanten regelmatig stellen",
          "Schrijf vanuit eigen ervaring en expertise",
          "Vermijd content die alleen gemaakt is om te ranken",
          "Update oude pagina's die niet meer relevant zijn",
          "Verwijder pagina's die geen waarde toevoegen",
        ],
      },
    ],
    ctaText: "Bekijk je content kwaliteit",
    personalized: false,
  },

  // ── WEEK 22: Gepersonaliseerd rapport ──
  {
    weekNumber: 22,
    type: "rapport",
    subject: "Je SEO Rapport | Week {{weekNumber}}",
    headerTitle: "SEO Rapport",
    headerSubtitle: "Week {{weekNumber}}",
    greeting: "Je tweewekelijkse SEO rapport is klaar. Bekijk je nieuwste resultaten.",
    sections: [
      { title: "SEO Score", content: "{{seoScoreBlock}}" },
      { title: "Ranking Veranderingen", content: "{{keywordChangesBlock}}" },
      { title: "Optimalisaties", content: "{{optimizationsBlock}}" },
    ],
    ctaText: "Bekijk je dashboard",
    personalized: true,
  },

  // ── WEEK 23: Marketing Tip ──
  {
    weekNumber: 23,
    type: "marketing-tip",
    subject: "Backlinks opbouwen | De ultieme gids voor beginners",
    headerTitle: "Backlink Strategie",
    headerSubtitle: "Autoriteit opbouwen door links",
    greeting: "Backlinks (links van andere websites naar jouw website) zijn nog steeds een van de belangrijkste rankingfactoren. Hier leer je hoe je ze kunt krijgen.",
    sections: [
      {
        title: "Waarom backlinks belangrijk zijn",
        content: "Elke backlink is als een 'stem' voor je website. Hoe meer kwalitatieve websites naar jou linken, hoe meer Google je website als betrouwbaar en relevant beschouwt.",
      },
      {
        title: "5 manieren om backlinks te krijgen",
        content: "Je hoeft geen SEO expert te zijn om backlinks te verzamelen.",
        items: [
          "Vraag leveranciers en partners om een link naar je website",
          "Schrijf gastblogs voor websites in je branche",
          "Meld je aan bij relevante bedrijvengidsen",
          "Maak content die mensen willen delen (infographics, onderzoeken)",
          "Reageer op relevante artikelen en forums met nuttige bijdragen",
        ],
      },
      {
        title: "Kwaliteit boven kwantiteit",
        content: "Een link van een betrouwbare, relevante website is meer waard dan 100 links van willekeurige websites. Focus op kwaliteit en relevantie.",
        highlight: true,
      },
    ],
    ctaText: "Bekijk je backlink profiel",
    personalized: false,
  },

  // ── WEEK 24: Tips ──
  {
    weekNumber: 24,
    type: "tips",
    subject: "3 veelgemaakte SEO fouten (en hoe je ze vermijdt)",
    headerTitle: "SEO Fouten Vermijden",
    headerSubtitle: "Leer van de fouten van anderen",
    greeting: "Veel ondernemers maken dezelfde SEO fouten. Hier zijn de drie meest voorkomende en hoe je ze vermijdt.",
    sections: [
      {
        title: "1. Keyword stuffing",
        content: "Je zoekwoord 20 keer op een pagina herhalen werkt averechts. Google herkent dit als spam en kan je hiervoor straffen. Gebruik je zoekwoord natuurlijk, focus op synoniemen en gerelateerde termen.",
      },
      {
        title: "2. Duplicate content",
        content: "Dezelfde tekst op meerdere pagina's plaatsen is een veelgemaakte fout. Google weet dan niet welke pagina het moet tonen en kan beide pagina's lager ranken. Maak elke pagina uniek.",
      },
      {
        title: "3. Geen meta beschrijvingen",
        content: "De meta beschrijving is het stukje tekst dat onder je titel in Google staat. Als je deze niet invult, kiest Google zelf een fragment. Dit is vaak niet de meest overtuigende tekst. Schrijf zelf pakkende meta beschrijvingen.",
      },
    ],
    ctaText: "Check je website op fouten",
    personalized: false,
  },

  // ── WEEK 25: Gepersonaliseerd rapport ──
  {
    weekNumber: 25,
    type: "rapport",
    subject: "Je SEO Rapport | Week {{weekNumber}}",
    headerTitle: "SEO Rapport",
    headerSubtitle: "Week {{weekNumber}}",
    greeting: "Hier is je tweewekelijkse SEO update. We kijken terug op de afgelopen periode en vooruit naar de volgende stappen.",
    sections: [
      { title: "SEO Score", content: "{{seoScoreBlock}}" },
      { title: "Ranking Veranderingen", content: "{{keywordChangesBlock}}" },
      { title: "Optimalisaties", content: "{{optimizationsBlock}}" },
    ],
    ctaText: "Bekijk je volledige dashboard",
    personalized: true,
  },
];

// Helper to get the template for a specific week
export const getTemplateForWeek = (weekNumber: number): WeeklyMailTemplate | undefined => {
  return weeklyMailTemplates.find(t => t.weekNumber === weekNumber);
};

// Get all templates of a specific type
export const getTemplatesByType = (type: WeeklyMailTemplate["type"]): WeeklyMailTemplate[] => {
  return weeklyMailTemplates.filter(t => t.type === type);
};

// Get template type label
export const templateTypeLabels: Record<WeeklyMailTemplate["type"], string> = {
  "rapport": "Gepersonaliseerd Rapport",
  "tips": "SEO Tips",
  "google-update": "Google Update",
  "case-study": "Succesverhaal",
  "marketing-tip": "Marketing Tip",
};

export const templateTypeEmoji: Record<WeeklyMailTemplate["type"], string> = {
  "rapport": "📊",
  "tips": "💡",
  "google-update": "🔍",
  "case-study": "🏆",
  "marketing-tip": "📈",
};
