
// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string;  }
> = {
	en: {
		code: 'en',
		name: 'English',
		
	},
	de: {
		code: 'de',
		name: 'Deutsch',
		
	},
	
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
	de: {
		'nav.inicio': 'Home',
		'nav.blog': 'Blog',
		'nav.gallery': 'Galerij',
		'nav.about': 'Over ons',
		'nav.contact': 'Contacteer ons',
		
	},
	en: {
		'nav.inicio': 'Home',
		'nav.blog': ' Blog',
		'nav.gallery': 'Gallery',
		'nav.about': 'About Us',
		'nav.contact': 'Contact us',
		
	},
	
} as const;

export const routes = {
	de: {
		blog: 'blog',
		gallery: 'galerij',
		about: 'over_ons',
		contact: 'contacteer_ons',
		'tailor-made-travel': 'tailor-made-travel',
	},
	en: {
		blog: 'blog',
		gallery: 'gallery',
		about: 'about',
		cantact: 'contact',
		'tailor-made-travel': 'tailor-made-travel',
	},
	
};