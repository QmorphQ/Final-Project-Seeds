
import { Paper, TableCell } from "@mui/material";
import React from "react";
import { AutoSizer, Column, Table } from 'react-virtualized';
import { useTableStyles } from "./useTableStyles";
import clsx from 'clsx';

const MuiVirtualizedTable = (props) => {
  const tableClasses = useTableStyles();
  const headerHeight = 52;
  const rowHeight = 52;
  const { columns, onRowClick, ...tableProps } = props;

  const getRowClassName = ({ index }) => {

    return clsx(tableClasses.tableRow, tableClasses.flexContainer, {
      [tableClasses.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  const cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, onRowClick } = props;
    return (
      <TableCell
        component="div"
        className={clsx(tableClasses.tableCell, tableClasses.flexContainer, {
          [tableClasses.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? 'right'
            : 'left'
        }
      >
        {cellData}
      </TableCell>
    );
  };

  const headerRenderer = ({ label, columnIndex }) => {

    return (
      <TableCell
        component="div"
        className={clsx(tableClasses.tableCell, tableClasses.flexContainer, tableClasses.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };
  return (
    <AutoSizer>
      {({ height, width }) => (
        <Table
          height={height}
          width={width}
          rowHeight={rowHeight}
          gridStyle={{
            direction: 'inherit',
          }}
          headerHeight={headerHeight}
          className={tableClasses.table}
          {...tableProps}
          rowClassName={getRowClassName}
        >
          {columns.map(({ dataKey, ...other }, index) => {
            return (
              <Column
                key={dataKey}
                headerRenderer={(headerProps) =>
                  headerRenderer({
                    ...headerProps,
                    columnIndex: index,
                  })
                }
                className={tableClasses.flexContainer}
                cellRenderer={cellRenderer}
                dataKey={dataKey}
                {...other}
              />
            );
          })}
        </Table>
      )}
    </AutoSizer>
  );
}

const PriceTable = ({quantity, currentPrice, localPrice}) => {
  const priceList = [...Array(quantity)].map((item, index) => {
    return {
      amount: index + 1,
      price: localPrice.format(currentPrice),
    }
  });

  return (
    <Paper style={{ height: 304, width: '100%' }}>
      <MuiVirtualizedTable
        rowCount={priceList.length}
        rowGetter={({ index }) => {
          console.log(priceList[index]);
          return priceList[index];
        }}
        columns={[
          {
            width: 200,
            label: 'Size',
            dataKey: 'amount',
          },
          {
            width: 120,
            label: 'Price',
            dataKey: 'price',
          },
        ]}
      />
    </Paper>
  )
}

export default PriceTable;