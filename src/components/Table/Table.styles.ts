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

export const TableElement = styled.table`
  min-width: 100%;
  overflow: hidden;
  padding-bottom: var(--space-2);
  border-radius: var(--radius-2);

  tbody {
    tr:last-child td:first-child {
      border-bottom-left-radius: var(--radius-2);
    }

    tr:last-child td:last-child {
      border-bottom-right-radius: var(--radius-2);
    }
  }
`;

export const TableRow = styled.tr``;

export const TableHeaderCell = styled.th`
  text-align: left;
  padding: var(--space-3);
  font-weight: var(--bold);
  font-size: var(--font-2);
  background: var(--gray-7);
  color: var(--foreground-low);
`;

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
`;
