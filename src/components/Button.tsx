import { styled } from '../../stitches.config';

export const Button = styled('button', {
  backgroundColor: 'transparent',
  appearance: 'none',
  lineHeight: 1,
  borderRadius: '$2',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',

  '&:disabled': {
    cursor: 'default'
  },

  variants: {
    size: {
      medium: {
        fontSize: '$3',
        padding: '$4 $6',

        '& > img': {
          width: '$5',
          marginRight: '$2'
        }
      },
      large: {
        fontSize: '$4',
        padding: '$4 $7',

        '& > img': {
          width: '$6',
          marginRight: '$4'
        }
      }
    },
    variant: {
      primary: {
        color: 'white',
        backgroundColor: '$primary',

        '&:hover': {
          backgroundColor: '$blue10'
        },
        '&:active': {
          backgroundColor: '$blue11'
        },
        '&:disabled': {
          backgroundColor: '$blue06',
          color: '$gray10'
        }
      },
      secondary: {
        color: '$gray12',
        backgroundColor: '$gray07',

        '&:hover': {
          backgroundColor: '$gray08'
        },
        '&:active': {
          backgroundColor: '$gray09'
        },
        '&:disabled': {
          backgroundColor: '$gray04',
          color: '$gray09'
        }
      }
    },
    fullWidth: {
      true: {
        width: '100%'
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
});
