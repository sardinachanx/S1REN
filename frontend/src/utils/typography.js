import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: [
    'Lato',
    'sans-serif',
  ],
  bodyFontFamily: ['Lato', 'sans-serif'],
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '400',
        '700',
      ],
    },
  ],
});

export default typography;