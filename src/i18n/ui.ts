// src/i18n/ui.ts 

export type UiText = {
    'app.name': string;
    'nav.home': string;
    'nav.test': string;
    'test.title': string;
    'test.content': string;
    'test.back': string;
    'lang.en': string;
    'lang.es': string;
   
    'about.title': string;
    'about.content': string;
};

export const DEFAULT_LANGUAGE = "en";
export const DEFAULT_PATH = "/"; 
export const LANGUAGES = { en: 'English', es: 'Español' };


const baseUi: Record<string, UiText> = {
    en: {
        'app.name': 'i18n Repro EN',
        'nav.home': 'Home',
        'nav.test': 'test',
        'test.title': 'test Page',
        'test.content': 'This is the English test page.',
        'test.back': 'Back to test',
        'lang.en': 'English',
        'lang.es': 'Spanish',
        'about.title': 'About Us (EN)',
        'about.content': 'This is the English about page content.', 
    },
    es: {
        'app.name': 'Repro i18n ES',
        'nav.home': 'Inicio',
        'nav.test': 'test',
        'test.title': 'Página del test',
        'test.content': 'Esta es la página del test en Español.',
        'test.back': 'Volver al test',
        'lang.en': 'Inglés',
        'lang.es': 'Español',
        'about.title': 'Sobre Nosotros (ES)',
        'about.content': 'Este es el contenido de la página sobre nosotros en Español.', 
    },
};


export const ui: Record<string, UiText> = {
    ...baseUi,
    '/': baseUi.en
};


export function getTranslations(lang: string | undefined): UiText {
    
    const effectiveLang = lang && baseUi[lang] ? lang : DEFAULT_LANGUAGE;
    return baseUi[effectiveLang]; // Use baseUi here
}


export function getNonDefaultLanguages(): string[] {
    return Object.keys(baseUi).filter(lang => lang !== DEFAULT_LANGUAGE); 
}


export function getLocalizedPath(path: string, lang: string | undefined): string {
    const effectiveLang = lang && ui[lang] ? lang : DEFAULT_LANGUAGE; 
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    
    if (effectiveLang === DEFAULT_LANGUAGE) {
        return normalizedPath; 
    }


    return `/${effectiveLang}${normalizedPath}`;
}

export function createNavItem(path: string, lang: string | undefined, labelKey: keyof UiText): { href: string, label: string } {
    const t = getTranslations(lang);
    return {
        href: getLocalizedPath(path, lang), 
        label: t[labelKey]
    };
}
