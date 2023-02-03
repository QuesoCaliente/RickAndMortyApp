import React, { useEffect } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ICard } from '@components/characterCard';
import styles from './table.module.css';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import useWindowPosition from '@utils/hooks/useWindowPosition';

const columnHelper = createColumnHelper<ICard>();

const columns = [
  columnHelper.accessor('image', {
    cell: info => <img width={100} height={100} src={info.getValue()} />,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('gender', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('status', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
];

export default function Table({
  characters,
  hasNextPage,
  nextPage,
}: {
  characters: ICard[];
  hasNextPage: boolean | undefined;
  nextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<any, unknown>>;
}) {
  const [data, setData] = React.useState(() => [...characters]);

  useEffect(() => {
    setData([...characters]);
  }, [characters]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const scrollPosition = useWindowPosition();
  useEffect(() => {
    if (scrollPosition > 80 && hasNextPage) {
      nextPage();
    }
  }, [scrollPosition]);

  return (
    <div className="p-2">
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
    </div>
  );
}
