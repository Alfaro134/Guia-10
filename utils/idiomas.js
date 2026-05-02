const traducirIdioma = (idioma) => {
  const traducciones = {
    // Inglés
    english: "Inglés",
    en: "Inglés",

    // Español
    spanish: "Español",
    es: "Español",

    // Francés
    french: "Francés",
    fr: "Francés",

    // Alemán
    german: "Alemán",
    de: "Alemán",

    // Italiano
    italian: "Italiano",
    it: "Italiano",

    // Portugués
    portuguese: "Portugués",
    pt: "Portugués",

    // Chino
    chinese: "Chino",
    zh: "Chino",

    // Japonés
    japanese: "Japonés",
    ja: "Japonés",

    // Coreano
    korean: "Coreano",
    ko: "Coreano",

    // Árabe
    arabic: "Árabe",
    ar: "Árabe",

    // Ruso
    russian: "Ruso",
    ru: "Ruso",

    // Hindi
    hindi: "Hindi",
    hi: "Hindi",

    // Otros idiomas comunes
    dutch: "Holandés",
    nl: "Holandés",

    swedish: "Sueco",
    sv: "Sueco",

    norwegian: "Noruego",
    no: "Noruego",

    danish: "Danés",
    da: "Danés",

    finnish: "Finés",
    fi: "Finés",

    polish: "Polaco",
    pl: "Polaco",

    czech: "Checo",
    cs: "Checo",

    hungarian: "Húngaro",
    hu: "Húngaro",

    romanian: "Rumano",
    ro: "Rumano",

    bulgarian: "Búlgaro",
    bg: "Búlgaro",

    croatian: "Croata",
    hr: "Croata",

    serbian: "Serbio",
    sr: "Serbio",

    slovenian: "Esloveno",
    sl: "Esloveno",

    estonian: "Estonio",
    et: "Estonio",

    latvian: "Letón",
    lv: "Letón",

    lithuanian: "Lituano",
    lt: "Lituano",

    greek: "Griego",
    el: "Griego",

    turkish: "Turco",
    tr: "Turco",

    hebrew: "Hebreo",
    he: "Hebreo",

    thai: "Tailandés",
    th: "Tailandés",

    vietnamese: "Vietnamita",
    vi: "Vietnamita",

    indonesian: "Indonesio",
    id: "Indonesio",

    malay: "Malayo",
    ms: "Malayo",

    filipino: "Filipino",
    tl: "Filipino",

    ukrainian: "Ucraniano",
    uk: "Ucraniano",

    belarusian: "Bielorruso",
    be: "Bielorruso",

    georgian: "Georgiano",
    ka: "Georgiano",

    armenian: "Armenio",
    hy: "Armenio",

    azerbaijani: "Azerbaiyano",
    az: "Azerbaiyano",

    kazakh: "Kazajo",
    kk: "Kazajo",

    uzbek: "Uzbeko",
    uz: "Uzbeko",

    mongolian: "Mongol",
    mn: "Mongol",

    nepali: "Nepalí",
    ne: "Nepalí",

    sinhala: "Cingalés",
    si: "Cingalés",

    burmese: "Birmano",
    my: "Birmano",

    khmer: "Jemer",
    km: "Jemer",

    lao: "Lao",
    lo: "Lao",

    tibetan: "Tibetano",
    bo: "Tibetano",

    bengali: "Bengalí",
    bn: "Bengalí",

    tamil: "Tamil",
    ta: "Tamil",

    telugu: "Telugu",
    te: "Telugu",

    marathi: "Marathi",
    mr: "Marathi",

    gujarati: "Gujarati",
    gu: "Gujarati",

    kannada: "Canarés",
    kn: "Canarés",

    malayalam: "Malayalam",
    ml: "Malayalam",

    punjabi: "Punjabi",
    pa: "Punjabi",

    urdu: "Urdu",
    ur: "Urdu",

    pashto: "Pastún",
    ps: "Pastún",

    tajik: "Tayiko",
    tg: "Tayiko",

    kyrgyz: "Kirguís",
    ky: "Kirguís",

    tajik: "Tayiko",
    tg: "Tayiko",

    turkmen: "Turcomano",
    tk: "Turcomano",

    afrikaans: "Afrikáans",
    af: "Afrikáans",

    swahili: "Suajili",
    sw: "Suajili",

    amharic: "Amárico",
    am: "Amárico",

    yoruba: "Yoruba",
    yo: "Yoruba",

    igbo: "Igbo",
    ig: "Igbo",

    hausa: "Hausa",
    ha: "Hausa",

    somali: "Somalí",
    so: "Somalí",

    oromo: "Oromo",
    om: "Oromo",

    zulu: "Zulú",
    zu: "Zulú",

    xhosa: "Xhosa",
    xh: "Xhosa",

    shona: "Shona",
    sn: "Shona",

    malagasy: "Malgache",
    mg: "Malgache",

    mauritian: "Mauriciano",
    mf: "Mauriciano",

    fiji: "Fiyiano",
    fj: "Fiyiano",

    samoan: "Samoano",
    sm: "Samoano",

    tongan: "Tongano",
    to: "Tongano",

    maori: "Maorí",
    mi: "Maorí",

    hawaiian: "Hawaiano",
    haw: "Hawaiano",

    tahitian: "Tahitiano",
    ty: "Tahitiano",

    maori: "Maorí",
    mi: "Maorí",

    // Si no encuentra traducción, devuelve el idioma original
  };

  return traducciones[idioma.toLowerCase()] || idioma;
};

export { traducirIdioma };
