import React from 'react';
import { Card, Table } from 'antd';

const DataTable = ({ data }) => {

  const columns = data && data.length !== 0 && Object.keys(data[0])
    .filter(key => key !== 'id')
    .map(key => ({
      title: key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .replace(/([A-Z])/g, '$1')
        .replace(/\s+/g, ' ')
        .trim(),
      dataIndex: key,
      key: key,
    }));

  return (

    <div className="datatable-container">
      <Card
        title={<div style={{ textAlign: 'left', backgroundColor: 'rgb(248,248,248)' }}>Your Authorization Requests from the October 1, 2022 - December 1, 2022 </div>}
        bordered={true}
        style={{
          textAlign: 'center',
          backgroundColor: 'rgb(248,248,248)',
          alignContent: 'center',
          width: '80%',
          margin: '0 auto', // Add this line to center align the card
        }}
      >
        <Table dataSource={data} columns={columns} />
      </Card>
    </div>
  );
}



export default DataTable;
