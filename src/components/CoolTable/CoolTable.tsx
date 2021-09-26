/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableCell, TableRow, TableWrapper } from './CoolTable.styles';

interface CoolTableColumn {
  key: string | number;
  width?: number;
  getValue: (row: any) => string | number;
  renderCell?: (value: string | number, row: any) => React.ReactNode;
}

interface CoolTableProps {
  rows: any[];
  columns: CoolTableColumn[];
  emptyTableMessage?: string;
  uniqueKeySelector: (row: any) => string | number;
}

export const CoolTable: React.FC<CoolTableProps> = ({
  uniqueKeySelector,
  emptyTableMessage,
  rows,
  columns
}) => {
  return (
    <TableWrapper>
      <Table cellSpacing="0" cellPadding="0">
        <colgroup>
          {columns.map(col => (
            <col key={`colgroup/${col.key}`} width={col.width} />
          ))}
        </colgroup>
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
      </Table>
    </TableWrapper>
  );
};
