import React, { useEffect } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ICard } from '@components/characterCard';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import useWindowPosition from '@utils/hooks/useWindowPosition';
import {
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Table as TableChakra,
} from '@chakra-ui/react';

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
    <TableContainer>
      <TableChakra variant="striped">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map(row => (
            <Tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <Tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Tfoot>
      </TableChakra>
    </TableContainer>
  );
}
