import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: var(--space-2);
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-2);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray-8);
    border-radius: var(--radius-1);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--gray-9);
  }
`;

export const Table = styled.table`
  min-width: 100%;
  border-collapse: separate;
  border-radius: var(--radius-2);
  border-spacing: 0 var(--space-2);
  margin-top: calc(var(--space-2) * -1);
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  white-space: nowrap;
  font-size: var(--font-2);
  background: var(--panel);
  padding: var(--space-4);
  height: var(--space-8);
  color: var(--foreground-low);

  .--green {
    color: var(--green-9);
  }

  .--red {
    color: var(--red-9);
  }

  .--amber {
    color: var(--amber-9);
  }

  .--lime {
    color: var(--lime-9);
  }

  &:first-child {
    -moz-border-radius-topleft: var(--radius-2);
    -moz-border-radius-bottomleft: var(--radius-2);
    -webkit-border-top-left-radius: var(--radius-2);
    -webkit-border-bottom-left-radius: var(--radius-2);
    border-bottom-left-radius: var(--radius-2);
    border-top-left-radius: var(--radius-2);
  }

  &:last-child {
    -moz-border-radius-topright: var(--radius-2);
    -moz-border-radius-bottomright: var(--radius-2);
    -webkit-border-top-right-radius: var(--radius-2);
    -webkit-border-bottom-right-radius: var(--radius-2);
    border-bottom-right-radius: var(--radius-2);
    border-top-right-radius: var(--radius-2);
  }
`;
