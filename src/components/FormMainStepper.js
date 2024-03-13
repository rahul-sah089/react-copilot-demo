import React, { useState } from 'react';
import Header from './Header';
import { BackTop, Breadcrumb, Button, Carousel, Col, Layout, Radio, Row, Steps } from 'antd';
import { ControlOutlined, UserOutlined, MedicineBoxOutlined, RightOutlined, TeamOutlined, FileDoneOutlined } from '@ant-design/icons';
import FormComponent from './Form';
import { Content } from 'antd/es/layout/layout';

const mainLayout = { sm: { span: 24, offset: 0 }, md: { span: 22, offset: 1 }, xl: { span: 20, offset: 2 } };
const contentStyle = {
  height: '100vh',
  color: '#000',
  lineHeight: '160px',
  textAlign: 'center',
  padding: '20px',
  background: '#ecebe5',
};

const FormMainStepper = ({ handleFormSubmit }) => {
  const [current, setCurrent] = useState(0);
  const onStepsChange = current => {
    console.log('onChange:', current);
  };
  const prev = () => {
    setCurrent(current - 1);
  }
  const next = () => {
    setCurrent(current + 1);
  }

  return (<>
    <Layout>
      <BackTop visibilityHeight={100} />
      <Header />
      <Content style={{ padding: '0 10%' }}>
        <Row justify="center">
          <Col {...mainLayout}>
            <Row justify="center">
              <Col span={24}>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Button type="link" href="/">Home</Button>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Button type="link" href="/">PHP Prior Authorization Submission</Button>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              <Col span={24}>
            <Steps
              current={current}
              onChange={onStepsChange}
            >
              <Steps.Step title="Step 1" description="Authorization type" icon={<ControlOutlined />} />
              <Steps.Step title="Step 2" description="Patient Details" icon={<UserOutlined />} />
              <Steps.Step title="Step 3" description="Request Details" icon={<MedicineBoxOutlined />} />
              <Steps.Step title="Step 4" description="Providers" icon={<TeamOutlined />} />
              <Steps.Step title="Step 5" description="Confirm Request" icon={<FileDoneOutlined />} />
            </Steps>
            <Carousel >
              <div className='steps-content'>
                <h3 style={contentStyle}>
                  <FormComponent handleFormSubmit={handleFormSubmit} />
                </h3>
              </div>
              <div className='steps-content'>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div className='steps-content'>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div className='steps-content'>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
            {/* <Button type="primary" onClick={prev}>Previous</Button>
            <Button type="primary" onClick={next}>Next</Button> */}
            <Button type="primary" size='large' htmlType='submit' icon={<RightOutlined />} onClick={next}>Submit</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  </>)
};

export default FormMainStepper;