
// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string;  }
> = {
	en: {
		code: 'en',
		name: 'English',
		
	},
	nl: {
		code: 'nl',
		name: 'Dutch',
		
	},
	
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
	nl: {
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
	nl: {
		blog: 'blog',
		gallery: 'gallery',
		about: 'about',
		contact: 'contact',
		faq: 'faq',
		'rock-climbing-products': 'rock-climbing-products',
		'multi-adventure': 'multi-adventure',
		'tailor-made-travel': 'tailor-made-travel',
		'terms-and-conditions': 'terms-and-conditions',
		'privacy-policy': 'privacy-policy',
		'form-tailor-made-travel': 'form-tailor-made-travel',
		'a-breathtaking-road-trip-through-the-alpujarras': 'a-breathtaking-road-trip-through-the-alpujarras',
		'rock-climbing': 'rock-climbing',
	},
	en: {
		blog: 'blog',
		gallery: 'gallery',
		about: 'about',
		contact: 'contact',
		faq: 'faq',
		'rock-climbing-products': 'rock-climbing-products',
		'multi-adventure': 'multi-adventure',
		'tailor-made-travel': 'tailor-made-travel',
		'terms-and-conditions': 'terms-and-conditions',
		'privacy-policy': 'privacy-policy',
		'form-tailor-made-travel': 'form-tailor-made-travel',
		'a-breathtaking-road-trip-through-the-alpujarras': 'a-breathtaking-road-trip-through-the-alpujarras',
		'rock-climbing': 'rock-climbing',
	},
	
};