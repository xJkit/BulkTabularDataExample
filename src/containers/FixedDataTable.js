import React, { Component } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.min.css';

class FixedDataTable extends Component {
  render() {
    const rows = [
      ['a1', 'b1', 'c1'],
      ['a2', 'b2', 'c2'],
      ['a3', 'b3', 'c3'],
    ];

    return (
      <div className="fixed-data-table">
        This is Official Facebook Fixed Data Table:
        <Table
          rowHeight={50}
          rowsCount={rows.length}
          width={500}
          height={500}
          headerHeight={50}
        >
          <Column
            header={<Cell> 第一行 header</Cell>}
            cell={<Cell>第一行內文</Cell>}
            width={200}
          />
          <Column
            header={<Cell>第二行 header </Cell>}
            cell={<Cell>第二行內文</Cell>}
            width={100}
          />
          <Column
            header={<Cell>第三行</Cell>}
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                Data for col 3: {rows[rowIndex][2]}
              </Cell>
            )}
            width={200}
          />
        </Table>
      </div>
    );
  }
}

export default FixedDataTable;
