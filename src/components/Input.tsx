import { useState } from 'react';
import { styled } from '../../stitches.config';

const InputWrapper = styled('div', {
  backgroundColor: '$gray01',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  borderRadius: '$2',
  overflow: 'hidden',

  '&:hover': {
    backgroundColor: '$gray02'
  },

  variants: {
    variant: {
      default: {},
      positive: {
        boxShadow: '0 0 0 1px $colors$green09'
      },
      negative: {
        boxShadow: '0 0 0 1px $colors$red09'
      }
    },

    focused: {
      true: {
        backgroundColor: '$gray02'
      }
    }
  },

  compoundVariants: [
    {
      variant: 'positive',
      focused: true,
      css: {
        boxShadow: '0 0 0 2px $colors$green09'
      }
    },
    {
      variant: 'negative',
      focused: true,
      css: {
        boxShadow: '0 0 0 2px $colors$red09'
      }
    }
  ]
});

const InputItemSlot = styled('span', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  variants: {
    variant: {
      left: { marginLeft: '$4' },
      right: { marginRight: '$4' }
    }
  }
});

const InputField = styled('input', {
  backgroundColor: 'transparent',
  padding: '$4',
  color: 'white',
  outline: 'none',
  appearance: 'none',
  fontSize: '$3',
  width: '100%'
});

interface InputProps extends React.ComponentProps<typeof InputField> {
  leftSlot?: React.ReactElement;
  rightSlot?: React.ReactElement;
  errorHighlight?: boolean;
  successHighlight?: boolean;
}

export const Input: React.FC<InputProps> = ({
  children,
  leftSlot,
  rightSlot,
  errorHighlight,
  successHighlight,
  ...props
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <InputWrapper
      focused={isFocused}
      variant={errorHighlight ? 'negative' : successHighlight ? 'positive' : undefined}
    >
      {leftSlot !== undefined && <InputItemSlot variant="left">{leftSlot}</InputItemSlot>}
      <InputField onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} {...props}>
        {children}
      </InputField>
      {rightSlot !== undefined && <InputItemSlot variant="right">{rightSlot}</InputItemSlot>}
    </InputWrapper>
  );
};
