import styled from 'styled-components';

export const AlertContainer = styled.div`
  border: 1px solid var(--gray-9);
  border-radius: var(--radius-2);
  font-size: var(--font-3);
  padding: var(--space-4);
  line-height: 1.4;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  &.--info {
    border-color: var(--blue-7);
    background: linear-gradient(90deg, rgba(0, 145, 255, 0.1) 0%, rgba(0, 145, 255, 0) 100%);

    b {
      color: var(--blue-11);
    }
  }

  &.--success {
    border-color: var(--green-7);
    background: linear-gradient(90deg, rgba(47, 162, 106, 0.1) 0%, rgba(47, 162, 106, 0) 100%);

    b {
      color: var(--green-11);
    }
  }

  &.--warning {
    border-color: var(--amber-7);
    background: linear-gradient(90deg, rgba(255, 178, 36, 0.1) 0%, rgba(255, 178, 36, 0) 100%);

    b {
      color: var(--amber-11);
    }
  }

  &.--error {
    border-color: var(--red-7);
    background: linear-gradient(90deg, rgba(229, 72, 77, 0.1) 0%, rgba(229, 72, 77, 0) 100%);

    b {
      color: var(--red-11);
    }
  }

  img {
    margin-right: var(--space-4);
  }
`;
