import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}

export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: string = lang) {
        const segments = path.split('/').filter(Boolean);
        const translations = routes[l as keyof typeof routes] as Record<string, string>;
        const translatedSegments = segments.map(segment =>
            defaultLang !== l && translations[segment] ? translations[segment] : segment
        );
        const translatedPath = '/' + translatedSegments.join('/');

        return `/${l}${translatedPath}`;
    };
}

export function getLocalizedPathname(
	pathname: string,
	currentLang: keyof typeof ui,
	targetLang: keyof typeof ui,
) {
	const segments = pathname.split('/').filter(Boolean);
	const contentSegments =
		segments[0] === currentLang ? segments.slice(1) : segments;
	const currentRoutes = routes[currentLang] as Record<string, string>;
	const targetRoutes = routes[targetLang] as Record<string, string>;
	const routeKeys = contentSegments.map((segment) => {
		if (currentLang === defaultLang) return segment;

		return (
			Object.entries(currentRoutes).find(([, value]) => value === segment)?.[0] ??
			segment
		);
	});
	const localizedSegments = routeKeys.map(
		(segment) => targetRoutes[segment] ?? segment,
	);

	return `/${targetLang}${localizedSegments.length ? `/${localizedSegments.join("/")}` : "/"}`;
}

export function getRouteFromUrl(url: URL): string | undefined {
	const pathname = new URL(url).pathname;
	const parts = pathname?.split('/');
	const path = parts.pop() || parts.pop();

	if (path === undefined) {
		return undefined;
	}

	const currentLang = getLangFromUrl(url);

	if (defaultLang === currentLang) {
		const route = Object.values(routes)[0];
		return route[path as keyof typeof route] !== undefined
			? route[path as keyof typeof route]
			: undefined;
	}

	const getKeyByValue = (
		obj: Record<string, string>,
		value: string
	): string | undefined => {
		return Object.keys(obj).find(key => obj[key] === value);
	};

	const reversedKey = getKeyByValue(routes[currentLang], path);

	if (reversedKey !== undefined) {
		return reversedKey;
	}

	return undefined;
}