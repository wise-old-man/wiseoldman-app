import { createStitches } from '@stitches/react';

export const { styled, getCssText, theme, globalCss } = createStitches({
  theme: {
    fontWeights: {
      regular: '400',
      bold: '700',
      black: '900'
    },
    colors: {
      gray01: '#151718',
      gray02: '#1A1D1E',
      gray03: '#202425',
      gray04: '#26292B',
      gray05: '#2B2F31',
      gray06: '#313538',
      gray07: '#3A3F42',
      gray08: '#4C5155',
      gray09: '#697177',
      gray10: '#787F85',
      gray11: '#9BA1A6',
      gray12: '#ECEDEE',

      blue01: '#0F1720',
      blue02: '#0F1B2D',
      blue03: '#10243E',
      blue04: '#102A4C',
      blue05: '#0F3058',
      blue06: '#0D3868',
      blue07: '#0A4481',
      blue08: '#0954A5',
      blue09: '#0091FF',
      blue10: '#369EFF',
      blue11: '#52A9FF',
      blue12: '#EAF6FF',

      green09: '#46A758',
      red09: '#E5484D',
      lime09: '#99D52A',
      amber09: '#FFB224',

      bg: '$gray01',
      panelBg: '$gray03',
      primary: '$blue09'
    },
    fontSizes: {
      1: '10px',
      2: '12px',
      3: '14px',
      4: '16px',
      5: '18px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '48px'
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '32px',
      8: '48px',
      9: '64px'
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px'
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999'
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '12px',
      max: '9999px'
    },
    conditions: {
      bp1: '@media (min-width: 576px)',
      bp2: '@media (min-width: 768px)',
      bp3: '@media (min-width: 992px)',
      bp4: '@media (min-width: 1200px)'
    }
  },
  utils: {
    px: () => (value: string) => ({
      paddingLeft: value,
      paddingRight: value
    })
  }
});
