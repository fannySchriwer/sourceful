export default {
  colors: {
    lightGrey: '#F2F2F2',
    text: '#182628',
    primary: '#005467',
    secondary: '#B6D6CB',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  radii: ['3px', '20px', '32px', '40px'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  shadows: {
    hover: '0 3px 4px rgba(0,0,0,0.3)',
  },
  styles: {
    a: {
      // fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 2,
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: 'lightGrey',
    },
  },
   buttons: {
    primary: {
      bg: 'primary',
      color: 'lightGrey',
      paddingY: 2,
      paddingX: 4,
      fontSize: 2,
      textTransform: 'uppercase',
      border: 'solid',
      borderColor: 'primary',
      borderRadius: 3,
       ':hover': {
         boxShadow: 'hover',
       },
        ':focus': {
         dropShadow: 'hover'
      },
       ':active': {
        boxShadow: 'hover',
       },
    },
    secondary: {
      bg: 'primary',
      color: 'lightGrey',
      paddingY: 2,
      paddingX: 4,
      fontSize: 2,
      textTransform: 'uppercase',
      border: 'solid',
      borderColor: 'primary',
      borderRadius: 3,
      transition: 'ease-in 0.3s',
       ':hover': {
         bg: 'secondary',
         borderColor: 'transparent',
         boxShadow: 'hover',
       },
       ':focus': {
        bg: 'secondary',
        borderColor: 'transparent',
        boxShadow: 'hover',
      },
       ':active': {
        bg: 'secondary',
        borderColor: 'transparent',
        boxShadow: 'hover',
      }, 
    }
  },
};
