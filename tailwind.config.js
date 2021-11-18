module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				'main-background': "url('https://links.papareact.com/0fm')",
			},
			screens: {
				'xs': '0px',
				// => @media (min-width: 0px) { ... }
			},
			colors: {
				searchBtn: '#ff385c',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')],
};
