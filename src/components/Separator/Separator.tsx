import * as SeparatorPrimitive from '@radix-ui/react-separator';
import styled from 'styled-components';

export const Separator = styled(SeparatorPrimitive.Root)`
  background-color: var(--gray-8);

  &[data-orientation='horizontal'] {
    height: 1px;
    width: 100%;
  }

  &[data-orientation='vertical'] {
    height: 100%;
    width: 1px;
  }
`;
