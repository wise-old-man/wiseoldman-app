/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableCell, TableElement, TableHeaderCell, TableRow, TableWrapper } from './Table.styles';

interface TableColumn {
  key: string | number;
  label?: string;
  width?: number;
  getValue: (row: any) => string | number;
  renderCell?: (value: string | number, row: any) => React.ReactNode;
}

interface TableProps {
  rows: any[];
  columns: TableColumn[];
  emptyTableMessage?: string;
  uniqueKeySelector: (row: any) => string | number;
}

export const Table: React.FC<TableProps> = ({ uniqueKeySelector, emptyTableMessage, rows, columns }) => {
  return (
    <TableWrapper>
      <TableElement cellSpacing="0" cellPadding="0">
        <colgroup>
          {columns.map(col => (
            <col key={`colgroup/${col.key}`} width={col.width} />
          ))}
        </colgroup>
        <thead>
          <TableRow>
            {columns.map(col => (
              <TableHeaderCell key={`col-header/${col.key}`}>{col.label || col.key}</TableHeaderCell>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell style={{ width: '100%', color: 'white' }}>
                {emptyTableMessage || 'No results found.'}
              </TableCell>
            </TableRow>
          ) : (
            rows.map(row => {
              const rowUniqueKey = uniqueKeySelector(row);
              return (
                <TableRow key={`row/${rowUniqueKey}`}>
                  {columns.map(col => (
                    <TableCell key={`cell/${rowUniqueKey}/${col.key}`}>
                      {col.renderCell ? col.renderCell(col.getValue(row), row) : col.getValue(row)}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })
          )}
        </tbody>
      </TableElement>
    </TableWrapper>
  );
};
