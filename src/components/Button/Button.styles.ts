import styled from 'styled-components';

export const ButtonSlot = styled.span`
  display: flex;

  &.--left {
    margin-right: var(--space-3);
  }

  &.--right {
    margin-left: var(--space-3);
  }
`;

export const ButtonElement = styled.button`
  appearance: none;
  cursor: pointer;
  line-height: 1;
  min-height: 45px;
  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: var(--font-3);
  border-radius: var(--radius-2);
  padding: 0 var(--space-5);

  :disabled {
    cursor: default;
  }

  &.--primary {
    color: var(--foreground);
    background-color: var(--primary);

    :hover {
      background-color: var(--blue-10);
    }

    :active {
      background-color: var(--blue-11);
    }

    :disabled {
      color: var(--gray-10);
      background-color: var(--blue-6);
    }
  }

  &.--secondary {
    color: var(--foreground);
    background-color: var(--gray-7);

    :hover {
      background-color: var(--gray-8);
    }

    :active {
      background-color: var(--gray-9);
    }

    :disabled {
      color: var(--gray-9);
      background-color: var(--gray-6);
    }
  }

  &.--link {
    color: var(--primary);
    font-weight: var(--bold);
    background-color: transparent;
    min-height: 0;
    padding: 0;

    :hover {
      color: var(--blue-11);
    }

    :active {
      color: var(--blue-9);
    }
  }

  &.--icon {
    background-color: var(--gray-7);
    padding: var(--space-3) var(--space-3);

    :hover {
      background-color: var(--gray-8);
    }

    :active {
      background-color: var(--gray-9);
    }

    :disabled {
      color: var(--gray-9);
      background-color: var(--gray-6);
    }
  }
`;
