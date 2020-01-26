export default {
	colors: {
		lightGrey: '#F2F2F2',
		text: '#182628',
		primary: '#005467',
		secondary: '#B6D6CB',
		dark: 'black'
	},
	fonts: {
		body: 'Lato, sans-serif',
		heading: 'Lato, sans-serif'
	},
	fontWeights: {
		body: 300,
		subheading: 400,
		heading: 700,
		bold: 900
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125
	},
	radii: [ '5px', '20px', '32px', '40px' ],
	fontSizes: [ 12, 14, 16, 20, 24, 32, 48, 64, 72 ],
	sizes: [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ],
	space: [ 0, 4, 8, 16, 32, 64, 96, 128, 256, 512 ],
	breakpoints: [ '40em', '52em', '64em' ],
	shadows: {
		hover: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
	},
	styles: {
		h1: {
			fontFamily: 'heading',
			fontWeight: [ 'heading', null, 'bold' ],
			fontSize: [ 6, null, 7 ],
			color: 'primary',
			lineHeight: 'heading',
			margin: 0
		},
		h2: {
			fontFamily: 'heading',
			fontWeight: 'subheading',
			color: 'primary',
			fontSize: 4,
			margin: 0
		},
		h3: {
			fontFamily: 'heading',
			fontWeight: 'body',
			fontSize: [ 3, null, 4 ],
			color: 'text',
			margin: 0
		},
		h4: {
			fontFamily: 'heading',
			fontWeight: 'heading',
			fontSize: 2
		},
		h5: {
			fontFamily: 'heading',
			fontWeight: 'body',
			fontStyle: 'italic',
			color: 'primary',
			fontSize: 2
		},
		a: {
			fontFamily: 'body',
			fontWeight: 'heading',
			fontSize: 2,
			textDecoration: 'none',
			textTransform: 'uppercase',
			color: 'lightGrey'
		},
		p: {
			fontFamily: 'body',
			fontWeight: 'body',
			margin: 0,
			lineHeight: 'body'
		}
	},
	buttons: {
		primary: {
			fontFamily: 'body',
			fontWeight: 'heading',
			bg: 'primary',
			color: 'lightGrey',
			paddingY: 2,
			paddingX: 4,
			fontSize: 2,
			textTransform: 'uppercase',
			border: 'solid',
			borderColor: 'primary',
			borderRadius: 3,
			transition: 'ease-in 0.3s'
		}
	}
};
