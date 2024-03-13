// basic react component with export default

import React from 'react';
import logo from '../logo.svg';
import { useEffect, useState } from 'react';
import Header from './Header';
import DataTable from './Table';
import { Breadcrumb, Button, Card, Col, DatePicker, Input, Row, Space } from 'antd';
import { AppstoreAddOutlined, ContactsOutlined, FundViewOutlined, HomeOutlined, SearchOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;


const Dashboard = () => {
  // Fetch data from the Node dummy API here
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  const addAuthorizationRequest = () => {
    window.location.href = '/form';
  }

  return (
    <div className="App">
      <Header />

      <br />
      <br />
      <div className="App-nav-sections">
        {/* <Space> */}
        <div style={{
          borderRadius: '2px',
          textAlign: 'center',
          // marginTop: '30px',
          // background: '#f0f2f5',
          alignContent: 'center',
          width: '80%',
          margin: '0 auto', // Add this line to center align the card
        }}>
          <Row gutter={16}>
            <Col span={8}>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Button type="link" className='breadcrumb-priorauth-text' style={{ color: "rgb(0, 0, 255)" }} href="/" icon={<HomeOutlined />}>Home</Button>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Button type="link" className='breadcrumb-priorauth-text' style={{ color: "black" }} href="/" >PHP Prior Authorization Submission</Button>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col span={16}>
              <Row gutter={16} style={{ textAlign: "center", marginBottom: "12px" }}>
                <Col span={6}>
                  <Button type="primary" className='button-border' size="large">
                    Is Authorization Required?
                  </Button>
                </Col>
                <Col span={6}>
                  <Button type="default" className='button-border' size="large" icon={<AppstoreAddOutlined />} onClick={addAuthorizationRequest}>New Authorization Request</Button>
                </Col>
                <Col span={6}>
                  <Button type="default" className='button-border' size="large" icon={<ContactsOutlined />}>New Referral</Button>
                </Col>
                <Col span={6}>
                  <Button type="default" className='button-border' size="large" icon={<FundViewOutlined />}>View referrals</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      <section className="dashboard-section">
        <div>
          <Card style={{
            borderRadius: '2px',
            textAlign: 'center',
            background: '#f0f2f5',
            alignContent: 'center',
            width: '80%',
            margin: '0 auto', // Add this line to center align the card
          }}>
            <Row gutter={16}>
              <Col span={8}>
                <Input style={{ width: '100%', border: '1px solid #ccc' }} placeholder="Request #, Patient or Member ID" prefix={<SearchOutlined />} />

              </Col>
              <Col span={8}>
                <Input style={{ width: '100%', border: '1px solid #ccc' }} placeholder="Filter by Provider" />
              </Col>
              <Col span={8}>
                <RangePicker style={{ width: '80%' }} />
                <button className="fetch-button" style={{ backgroundColor: '#a71930', borderColor: '#a71930', color: '#eee', borderRadius: '2px', textAlign: 'center' }}>Fetch</button>
              </Col>
            </Row>



          </Card>
          <DataTable data={data} />

        </div>



        {/* Display the fetched data here */}
        {/* {data.map(item => (
          <div key={item.id}>
            <p>Auth Request No: {item.authRequestNo}</p>
            <p>Status: {item.status}</p>
            <p>Patient: {item.patient}</p>
            <p>Service: {item.service}</p>
            <p>Auth Type: {item.authType}</p>
            <p>Created Date: {item.createdDate}</p>
          </div>
        ))} */}
      </section>

    </div>
  );
}

export default Dashboard;