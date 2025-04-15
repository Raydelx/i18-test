import english from './en.json';
import deutch from './de.json';

const LANG = {
	ENGLISH: 'en',
    DEUTCH: 'de',
};

export const getI18N = ({
	currentLocale = 'en',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.DEUTCH) return deutch;
	if (currentLocale === LANG.ENGLISH) return english;
	return english;
};