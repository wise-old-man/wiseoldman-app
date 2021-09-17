import { styled } from '../../stitches.config';

export const IconButton = styled('button', {
  backgroundColor: '$gray07',
  appearance: 'none',
  cursor: 'pointer',
  padding: '$4',
  borderRadius: '$2',

  '& > img': {
    width: '$5'
  },

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
});
