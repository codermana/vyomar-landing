// Single source of truth for landing-page localization.
//
// To bring a scaffolded language live:
//   1. Add its entry to `strings` below (translate every key).
//   2. Flip `languages.<code>.live` to true.
//   3. Make sure the `font` (a Google "Noto Serif <script>" family) is set.
// Nothing else changes — routes, the language switcher, and font loading all
// key off this file. English is the default (unprefixed) route; every other
// live locale is served under `/<code>/`.
//
// NOTE: the Hindi copy here is a first pass and should get a native-speaker
// review before it is treated as final.

export type Lang = 'en' | 'hi' | 'ne' | 'mr' | 'ta' | 'kn' | 'bn' | 'pa';

export interface LangMeta {
  /** Endonym shown in the language switcher. */
  native: string;
  /** English name (for aria / tooltips). */
  english: string;
  dir: 'ltr' | 'rtl';
  /** When false, no page is generated and the switcher shows it as "soon". */
  live: boolean;
  /** Google Fonts "Noto Serif <script>" family for non-Latin scripts. */
  font?: string;
}

export const DEFAULT_LANG: Lang = 'en';

export const languages: Record<Lang, LangMeta> = {
  en: { native: 'English', english: 'English', dir: 'ltr', live: true },
  hi: { native: 'हिन्दी', english: 'Hindi', dir: 'ltr', live: true, font: 'Noto Serif Devanagari' },
  ne: { native: 'नेपाली', english: 'Nepali', dir: 'ltr', live: true, font: 'Noto Serif Devanagari' },
  mr: { native: 'मराठी', english: 'Marathi', dir: 'ltr', live: false, font: 'Noto Serif Devanagari' },
  ta: { native: 'தமிழ்', english: 'Tamil', dir: 'ltr', live: false, font: 'Noto Serif Tamil' },
  kn: { native: 'ಕನ್ನಡ', english: 'Kannada', dir: 'ltr', live: false, font: 'Noto Serif Kannada' },
  bn: { native: 'বাংলা', english: 'Bengali', dir: 'ltr', live: false, font: 'Noto Serif Bengali' },
  pa: { native: 'ਪੰਜਾਬੀ', english: 'Punjabi', dir: 'ltr', live: false, font: 'Noto Serif Gurmukhi' },
};

export const liveLangs = (Object.keys(languages) as Lang[]).filter((l) => languages[l].live);
/** Live locales that need a generated `/<code>/` route (everything but the default). */
export const localizedLangs = liveLangs.filter((l) => l !== DEFAULT_LANG);

/** Build an href to `path` for `lang` (default locale is unprefixed). */
export function localizedPath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === DEFAULT_LANG ? clean : `/${lang}${clean === '/' ? '' : clean}` + (clean === '/' ? '/' : '');
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface Strings {
  meta: { title: string; description: string };
  nav: { features: string; app: string; api: string; tryApi: string };
  langLabel: string;
  soon: string;
  hero: {
    eyebrow: string;
    h1Pre: string;
    h1Highlight: string;
    h1Post: string;
    thesisHtml: string;
    comingSoon: string;
    tryApi: string;
    wheelCaptionHtml: string;
  };
  screens: {
    eyebrow: string;
    title: string;
    copy: string;
    today: { k: string; d: string };
    sky: { k: string; d: string };
  };
  features: { eyebrow: string; title: string; copy: string; items: Feature[] };
  api: {
    eyebrow: string;
    title: string;
    copy: string;
    call: string;
    status: string;
  };
  footer: {
    tagline: string;
    explore: string;
    developers: string;
    legal: string;
    privacy: string;
    terms: string;
    panchangEndpoint: string;
    apiStatus: string;
    made: string;
  };
}

const en: Strings = {
  meta: {
    title: 'Vyom AR: a Panchang you can see',
    description:
      'The Hindu Panchang, computed live from the sky: tithi, nakshatra, yoga, karana and vara derived from real astronomy, with the reasoning shown.',
  },
  nav: { features: 'Features', app: 'The app', api: 'Open API', tryApi: 'Try the API' },
  langLabel: 'Language',
  soon: 'soon',
  hero: {
    eyebrow: 'पञ्चाङ्ग · Panchang',
    h1Pre: 'A Panchang you can ',
    h1Highlight: 'see',
    h1Post: '',
    thesisHtml:
      'Sky apps let you point at the heavens and understand what you see. Vyom AR points that same immersion at the Hindu Panchang: every value answers <strong class="text-ink">why</strong> today is what it is, computed live from the Sun and the Moon.',
    comingSoon: 'iOS & Android: coming soon',
    tryApi: 'Try the open API',
    wheelCaptionHtml: 'The arc from Sun to Moon <em>is</em> the tithi, drawn live for right now.',
  },
  screens: {
    eyebrow: 'In your hand',
    title: 'The whole sky, on your phone',
    copy: 'The same computed astronomy, offline and on device. No almanac tables, no network round-trip.',
    today: { k: 'Today', d: 'The five angas for right now, each a tap away from its full derivation.' },
    sky: { k: 'Sky', d: 'The live celestial wheel: nakshatra ring, tithi ring, and the Sun-to-Moon arc.' },
  },
  features: {
    eyebrow: 'Why it is different',
    title: 'Astronomy you can check, not just consult',
    copy: 'Every number on screen is a computation you can follow back to the sky.',
    items: [
      {
        icon: 'sigma',
        title: 'Computed, never copied',
        desc: 'Every tithi, nakshatra, yoga, karana and vara is derived live from the positions of the Sun and Moon. Nothing is hand-fed from a lookup table.',
      },
      {
        icon: 'eye',
        title: 'See why, not just what',
        desc: 'The celestial wheel shows the Sun-to-Moon elongation arc that IS the tithi. Learn mode walks the actual derivation, formula by formula.',
      },
      {
        icon: 'history',
        title: 'Time machine',
        desc: 'Scrub hours, days or centuries. The Panchang recomputes from astronomy at any instant, past or future, for any place on Earth.',
      },
      {
        icon: 'sunrise',
        title: 'Muhurta windows',
        desc: 'Abhijit, Rahu Kala, Yamaganda and Gulika Kala from the true sunrise and sunset at your coordinates, not a city table.',
      },
      {
        icon: 'moon-star',
        title: 'Two skies, one truth',
        desc: 'A celestial night theme and a parchment almanac theme, both WCAG AA, in Hindi (Devanagari) and English.',
      },
      {
        icon: 'orbit',
        title: 'Choose your ayanamsa',
        desc: 'Lahiri, Raman or Krishnamurti. The app shows the value in degrees and how it shifts every sidereal quantity.',
      },
    ],
  },
  api: {
    eyebrow: 'Open API',
    title: 'Verify it yourself',
    copy: 'The astronomy in Vyom AR is verifiable against modern ephemerides. Point the public endpoint at any coordinates and read back the same angas the app computes.',
    call: 'Call the endpoint',
    status: 'API status',
  },
  footer: {
    tagline:
      'The Hindu Panchang, computed live from the sky. Every tithi, nakshatra, yoga, karana and vara is derived from real astronomy, with the reasoning shown.',
    explore: 'Explore',
    developers: 'Developers',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    panchangEndpoint: 'Panchang endpoint',
    apiStatus: 'API status',
    made: 'Made with',
  },
};

const hi: Strings = {
  meta: {
    title: 'Vyom AR: एक पंचांग जिसे आप देख सकते हैं',
    description:
      'हिन्दू पंचांग, आकाश से जीवंत गणना: तिथि, नक्षत्र, योग, करण और वार वास्तविक खगोल से, तर्क सहित।',
  },
  nav: { features: 'विशेषताएँ', app: 'ऐप', api: 'खुला API', tryApi: 'API आज़माएँ' },
  langLabel: 'भाषा',
  soon: 'जल्द',
  hero: {
    eyebrow: 'पञ्चाङ्ग · पंचांग',
    h1Pre: 'एक पंचांग जिसे आप ',
    h1Highlight: 'देख',
    h1Post: ' सकते हैं',
    thesisHtml:
      'आकाश-दर्शन ऐप आपको आकाश की ओर इशारा कर के समझने देते हैं कि आप क्या देख रहे हैं। Vyom AR उसी अनुभव को हिन्दू पंचांग पर लाता है: हर मान बताता है कि आज जो है वह <strong class="text-ink">क्यों</strong> है, सूर्य और चंद्र से जीवंत रूप से गणना किया हुआ।',
    comingSoon: 'iOS और Android: जल्द आ रहा है',
    tryApi: 'खुला API आज़माएँ',
    wheelCaptionHtml: 'सूर्य से चंद्र तक का चाप <em>ही</em> तिथि है, अभी के लिए जीवंत खींचा गया।',
  },
  screens: {
    eyebrow: 'आपकी हथेली में',
    title: 'पूरा आकाश, आपके फ़ोन पर',
    copy: 'वही गणना की हुई खगोलशास्त्र, ऑफ़लाइन और डिवाइस पर। न पंचांग तालिकाएँ, न नेटवर्क।',
    today: { k: 'आज', d: 'अभी के पाँच अंग, हर एक अपनी पूरी गणना से बस एक टैप दूर।' },
    sky: { k: 'आकाश', d: 'जीवंत आकाश-चक्र: नक्षत्र वलय, तिथि वलय, और सूर्य-से-चंद्र चाप।' },
  },
  features: {
    eyebrow: 'यह अलग क्यों है',
    title: 'खगोल जिसे आप जाँच सकें, केवल देख नहीं',
    copy: 'स्क्रीन पर हर संख्या एक गणना है जिसे आप आकाश तक पीछे ले जाकर देख सकते हैं।',
    items: [
      {
        icon: 'sigma',
        title: 'गणना से, नकल नहीं',
        desc: 'हर तिथि, नक्षत्र, योग, करण और वार सूर्य और चंद्र की स्थितियों से जीवंत रूप से निकाला जाता है। कुछ भी तालिका से नहीं लिया जाता।',
      },
      {
        icon: 'eye',
        title: 'क्यों देखें, सिर्फ़ क्या नहीं',
        desc: 'आकाश-चक्र सूर्य-से-चंद्र वियुति चाप दिखाता है जो कि तिथि है। लर्न मोड असली गणना को सूत्र-दर-सूत्र समझाता है।',
      },
      {
        icon: 'history',
        title: 'काल यंत्र',
        desc: 'घंटे, दिन या सदियाँ खिसकाएँ। पंचांग किसी भी क्षण—भूत या भविष्य—के लिए, पृथ्वी के किसी भी स्थान हेतु खगोल से पुनः गणना करता है।',
      },
      {
        icon: 'sunrise',
        title: 'मुहूर्त',
        desc: 'अभिजित, राहु काल, यमगण्ड और गुलिक काल—आपके निर्देशांक पर वास्तविक सूर्योदय और सूर्यास्त से, किसी नगर-तालिका से नहीं।',
      },
      {
        icon: 'moon-star',
        title: 'दो आकाश, एक सत्य',
        desc: 'एक रात्रि-आकाश थीम और एक पांडुलिपि-पंचांग थीम, दोनों WCAG AA, हिन्दी (देवनागरी) और अंग्रेज़ी में।',
      },
      {
        icon: 'orbit',
        title: 'अपना अयनांश चुनें',
        desc: 'लाहिरी, रमन या कृष्णमूर्ति। ऐप मान को अंशों में दिखाता है और यह भी कि वह हर सायन-निरपेक्ष राशि को कैसे बदलता है।',
      },
    ],
  },
  api: {
    eyebrow: 'खुला API',
    title: 'स्वयं जाँचें',
    copy: 'Vyom AR का खगोल आधुनिक पंचांग-सारणियों (ephemerides) के विरुद्ध सत्यापन-योग्य है। सार्वजनिक एंडपॉइंट को किसी भी निर्देशांक पर लगाइए और वही अंग पढ़िए जो ऐप गणना करता है।',
    call: 'एंडपॉइंट कॉल करें',
    status: 'API स्थिति',
  },
  footer: {
    tagline:
      'हिन्दू पंचांग, आकाश से जीवंत गणना। हर तिथि, नक्षत्र, योग, करण और वार वास्तविक खगोल से निकाला गया, तर्क सहित।',
    explore: 'अन्वेषण',
    developers: 'डेवलपर',
    legal: 'कानूनी',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    panchangEndpoint: 'पंचांग एंडपॉइंट',
    apiStatus: 'API स्थिति',
    made: 'बनाया',
  },
};

const ne: Strings = {
  meta: {
    title: 'Vyom AR: एउटा पञ्चाङ्ग जुन तपाईं देख्न सक्नुहुन्छ',
    description:
      'हिन्दू पञ्चाङ्ग, आकाशबाट प्रत्यक्ष गणना: तिथि, नक्षत्र, योग, करण र वार वास्तविक खगोलबाट, तर्कसहित।',
  },
  nav: { features: 'विशेषताहरू', app: 'एप', api: 'खुला API', tryApi: 'API चलाउनुहोस्' },
  langLabel: 'भाषा',
  soon: 'चाँडै',
  hero: {
    eyebrow: 'पञ्चाङ्ग · पात्रो',
    h1Pre: 'एउटा पञ्चाङ्ग जुन तपाईं ',
    h1Highlight: 'देख्न',
    h1Post: ' सक्नुहुन्छ',
    thesisHtml:
      'आकाश हेर्ने एपहरूले तपाईंलाई आकाशतिर देखाएर बुझ्न दिन्छन् कि तपाईं के देख्दै हुनुहुन्छ। Vyom AR त्यही अनुभवलाई हिन्दू पञ्चाङ्गमा ल्याउँछ: हरेक मानले भन्छ कि आज जे छ त्यो <strong class="text-ink">किन</strong> हो, सूर्य र चन्द्रबाट प्रत्यक्ष रूपमा गणना गरिएको।',
    comingSoon: 'iOS र Android: चाँडै आउँदै',
    tryApi: 'खुला API चलाउनुहोस्',
    wheelCaptionHtml: 'सूर्यदेखि चन्द्रसम्मको चाप <em>नै</em> तिथि हो, अहिलेको लागि प्रत्यक्ष कोरिएको।',
  },
  screens: {
    eyebrow: 'तपाईंको हातमा',
    title: 'सिङ्गो आकाश, तपाईंको फोनमा',
    copy: 'उही गणना गरिएको खगोलशास्त्र, अफलाइन र यन्त्रमै। न पात्रो तालिका, न नेटवर्क।',
    today: { k: 'आज', d: 'अहिलेको पाँच अङ्ग, हरेक आफ्नो पूर्ण गणनाबाट बस् एक ट्यापको दूरीमा।' },
    sky: { k: 'आकाश', d: 'प्रत्यक्ष आकाश-चक्र: नक्षत्र वलय, तिथि वलय, र सूर्य-देखि-चन्द्र चाप।' },
  },
  features: {
    eyebrow: 'किन फरक छ',
    title: 'खगोल जुन तपाईं जाँच्न सक्नुहुन्छ, केवल हेर्ने मात्र होइन',
    copy: 'स्क्रिनको हरेक सङ्ख्या एक गणना हो जसलाई तपाईं आकाशसम्म फर्केर हेर्न सक्नुहुन्छ।',
    items: [
      {
        icon: 'sigma',
        title: 'गणनाबाट, नक्कल कहिल्यै होइन',
        desc: 'हरेक तिथि, नक्षत्र, योग, करण र वार सूर्य र चन्द्रको स्थितिबाट प्रत्यक्ष निकालिन्छ। केही पनि तालिकाबाट लिइँदैन।',
      },
      {
        icon: 'eye',
        title: 'किन हेर्नुहोस्, केवल के मात्र होइन',
        desc: 'आकाश-चक्रले सूर्य-देखि-चन्द्र वियुति चाप देखाउँछ जुन नै तिथि हो। लर्न मोडले वास्तविक गणनालाई सूत्र-दर-सूत्र देखाउँछ।',
      },
      {
        icon: 'history',
        title: 'काल यन्त्र',
        desc: 'घण्टा, दिन वा शताब्दीहरू सार्नुहोस्। पञ्चाङ्गले कुनै पनि क्षण—भूत वा भविष्य—का लागि, पृथ्वीको कुनै पनि स्थानका लागि खगोलबाट पुनः गणना गर्छ।',
      },
      {
        icon: 'sunrise',
        title: 'मुहूर्त',
        desc: 'अभिजित, राहु काल, यमगण्ड र गुलिक काल—तपाईंको निर्देशाङ्कमा वास्तविक सूर्योदय र सूर्यास्तबाट, कुनै सहर-तालिकाबाट होइन।',
      },
      {
        icon: 'moon-star',
        title: 'दुई आकाश, एक सत्य',
        desc: 'एक रात्रि-आकाश थिम र एक पाण्डुलिपि-पात्रो थिम, दुवै WCAG AA, नेपाली (देवनागरी) र अङ्ग्रेजीमा।',
      },
      {
        icon: 'orbit',
        title: 'आफ्नो अयनांश छान्नुहोस्',
        desc: 'लाहिरी, रमन वा कृष्णमूर्ति। एपले मानलाई अंशमा देखाउँछ र यो पनि कि त्यसले हरेक सायन-निरपेक्ष राशिलाई कसरी बदल्छ।',
      },
    ],
  },
  api: {
    eyebrow: 'खुला API',
    title: 'आफैं जाँच्नुहोस्',
    copy: 'Vyom AR को खगोल आधुनिक पञ्चाङ्ग-सारणी (ephemerides) सँग सत्यापनयोग्य छ। सार्वजनिक एन्डपोइन्टलाई कुनै पनि निर्देशाङ्कमा लगाउनुहोस् र उही अङ्ग पढ्नुहोस् जुन एपले गणना गर्छ।',
    call: 'एन्डपोइन्ट कल गर्नुहोस्',
    status: 'API स्थिति',
  },
  footer: {
    tagline:
      'हिन्दू पञ्चाङ्ग, आकाशबाट प्रत्यक्ष गणना। हरेक तिथि, नक्षत्र, योग, करण र वार वास्तविक खगोलबाट निकालिएको, तर्कसहित।',
    explore: 'अन्वेषण',
    developers: 'डेभलपर',
    legal: 'कानूनी',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    panchangEndpoint: 'पञ्चाङ्ग एन्डपोइन्ट',
    apiStatus: 'API स्थिति',
    made: 'बनाइएको',
  },
};

const strings: Partial<Record<Lang, Strings>> = { en, hi, ne };

export function getT(lang: Lang): Strings {
  return strings[lang] ?? en;
}
