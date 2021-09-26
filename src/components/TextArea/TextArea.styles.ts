import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
  width: 100%;
  position: relative;
  background: var(--gray-2);
  border-radius: var(--radius-2);
  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: var(--space-4);

  &.-focused {
    background: var(--gray-1);
  }
`;

export const TextAreaElement = styled.textarea`
  width: 100%;
  background: transparent;
  resize: none;
  overflow-y: hidden;
  font-family: Lato, sans-serif;
  font-size: var(--font-4);
  color: var(--foreground);

  &.-with-counter {
    width: calc(100% - var(--space-9));
  }

  ::placeholder {
    color: var(--gray-10);
  }

  :active,
  :focus {
    outline: none;
  }
`;

export const TextAreaCounter = styled.span`
  position: absolute;
  right: var(--space-4);
  top: var(--space-4);
  color: var(--gray-11);
  font-size: var(--font-2);
  padding-left: var(--space-3);
  width: auto;
`;
