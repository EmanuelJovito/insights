import { createStitches, ScaleValue } from '@stitches/react'

export const { css, styled, getCssText, globalCss, keyframes } = createStitches(
  {
    media: {
      bp1: '(max-width: 640px)',
      bp2: '(max-width: 768px)',
      bp3: '(max-width: 1200px)'
    },
    theme: {
      colors: {
        blue100: '#0275D8',
        blue500: '#37466B',
        blue900: '#192031',
        gray900: '#212529',
        gray100: '#F8F9FA',
        gray450: '#616e79',
        gray600: '#444444',
        white: '#FFFFFF'
      },
      fontSizes: {
        1: '1.6rem',
        2: '1.8rem',
        3: '2.2rem',
        4: '2.8rem',
        5: '3.6rem',
        6: '5.4rem'
      },
      fonts: {
        primary: 'Poppins, apple-system, sans-serif',
      },
      fontWeights: {
        regular: '400',
        medium: '500',
        bold: '700'
      },
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {
        1: '107px',
        2: '24px',
        3: '26px',
        4: '31px',
        5: '14px'
      },
      shadows: {
        1: '0px 2px 9px 1px rgba(0, 0, 0, 0.15)',
        2: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      zIndices: {
        1: '2',
        2: '4',
        3: '6',
        4: '8',
        5: '10'
      },
      transitions: {}
    }
  }
)

export const globalStyles = globalCss({
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box'
  },
  body: {
    size: '100%',
    backgroundColor: '#171717',
    fontFamily: '$primary',
    fontSize: '$1',
    overflowX: 'hidden',
    top: '0 !important'
  },
  a: {
    textDecoration: 'none'
  },
  html: {
    scrollBehavior: 'smooth',
    fontSize: '62.5%',

    '@bp3': {
      fontSize: '56.25%'
    },
    '@bp2': {
      fontSize: '50%'
    },
    '@bp1': {
      fontSize: '43,75%'
    }
  },
  '.goog-te-banner-frame': {
    display: 'none'
  },
  '#goog-gt-tt': {
    display: 'none'
  }
})
