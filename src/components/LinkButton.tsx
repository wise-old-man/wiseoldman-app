import { styled } from '../../stitches.config';

export const LinkButton = styled('a', {
  backgroundColor: 'transparent',
  appearance: 'none',
  lineHeight: 1,
  cursor: 'pointer',
  color: '$primary',
  fontWeight: '$bold',
  fontSize: '$3',
  textDecoration: 'none',

  '&:hover': {
    color: '$blue11'
  },
  '&:active': {
    color: '$primary'
  },
  '&:disabled': {
    color: '$blue06'
  }
});
