import english from './en.json';
import dutch from './nl.json';

const LANG = {
	ENGLISH: 'en',
    DUTCH: 'nl',
};

export const getI18N = ({
	currentLocale = 'en',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.DUTCH) return dutch;
	if (currentLocale === LANG.ENGLISH) return english;
	return english;
};