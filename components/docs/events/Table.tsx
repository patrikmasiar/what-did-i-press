import React, { FC } from 'react';
import { useTable } from 'react-table';
import getKeyCodesList from '../../../utils/getKeyCodesList';
import style from './table/Table.module.scss';

const Table = () => {
  const data = React.useMemo(
    () => {
      return getKeyCodesList()
    },
    []
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
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()} className={style.table}>
       <thead>
         {headerGroups.map((headerGroup: any) => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map((column: any) => (
               <th
                 {...column.getHeaderProps()}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map((row: any) => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map((cell: any) => {
                 return (
                   <td
                     {...cell.getCellProps()}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
  )
}

export default Table;
