import { NextPage } from 'next';
import { Card, Table } from '@wirecore/wirestyle';

const TablePage: NextPage = () => {
  return (
    <Card hasTable>
      <Table
        data={{
          header: ['Test1', 'Test2'],
          data: [
            {
              id: { render: '1', value: '1' },
              test1: { render: '1', value: '1' },
              test2: { render: '2', value: '2' },
            },
            {
              id: { render: '1', value: '1' },
              test1: { render: '1', value: '1' },
              test2: { render: '2', value: '2' },
            },
            {
              id: { render: '1', value: '1' },
              test1: { render: '1', value: '1' },
              test2: { render: '2', value: '2' },
            },
            {
              id: { render: '1', value: '1' },
              test1: { render: '1', value: '1' },
              test2: { render: '2', value: '2' },
            },
          ],
        }}
      />
    </Card>
  );
};

export default TablePage;
