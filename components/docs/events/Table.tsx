import React, { FC, useState } from 'react';
import { useTable } from 'react-table';
import getKeyCodesList from '../../../utils/getKeyCodesList';
import diacritics from 'diacritics';

import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Input from '@material-ui/core/Input';

const Table: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const data = React.useMemo(
    () => {
      const codesData = getKeyCodesList();
    
      if (searchQuery.length !== 0) {
        const query = diacritics.remove(searchQuery.toLowerCase());

        return codesData.filter(keyCode => {
          const eventCode = diacritics.remove(keyCode.eventCode.toLowerCase());
          const eventKey = diacritics.remove((keyCode.eventKey).toString().toLowerCase());
          const keyName = diacritics.remove((keyCode.eventKey).toString().toLowerCase());

          return eventCode.includes(query) || eventKey.includes(query) || keyName.includes(query);
        })
      }
      
      return codesData;
    },
    [searchQuery]
  );
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Event code',
        accessor: 'eventCode',
      },
      {
        Header: 'Event key',
        accessor: 'eventKey',
      },
      {
        Header: 'Key code',
        accessor: 'keyCode',
      },
      {
        Header: 'Key name',
        accessor: 'keyName',
      },
      {
        Header: 'Notes',
        accessor: 'notes',
      }
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <>
    <Input
      placeholder="Search for events ..."
      onChange={e => setSearchQuery(e.target.value)}
      value={searchQuery}
      style={{ margin: 20 }}
    />
    <CssBaseline />
    <MaUTable stickyHeader={true} {...getTableProps()} aria-label="sticky table" style={{width: '100%'}}>
      <TableHead>
        {headerGroups.map(headerGroup: any => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </MaUTable>
    </>
  )
}

export default Table;
