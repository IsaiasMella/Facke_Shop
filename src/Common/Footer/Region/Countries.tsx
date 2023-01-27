
export interface CountryType {
	code: string;
	label: string;
	languaje: string;
	suggested?: boolean;
}

export const countries: readonly CountryType[] = [
	{ code: 'AR', label: 'Argentina', languaje: 'Spanish' },
	{
		code: 'US',
		label: 'United States',
		languaje: 'English',
	}
];