// react component for the form to add a new authorization request to the table of requests in the app

import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Select, Row, Col, Radio, Alert } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Collapse } from 'react-collapse';
import Paragraph from 'antd/es/typography/Paragraph';

const FormComponent = ({ handleFormSubmit }) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const [formValues, setFormValues] = useState({});

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const onFormSubmit = () => {
        handleFormSubmit(formValues);
        form.resetFields();
    };

    const onFormChange = (changedValues, allValues) => {
        setFormValues(allValues);
    };

    return (
        <div className='App btn-secondary'>
            <Row>
                <Col span={24}>
                    <h4>PHP Prior Authorization Form</h4>
            <Form
                form={form}
                layout={formLayout}
                initialValues={{ layout: formLayout }}
                colon={false}
                onValuesChange={onFormChange}
                onFinish={onFormSubmit}
            >
                <Form.Item 
                label="Authorization Request" 
                name="authRequestType"
                rules={[{ required: true, message: 'Please enter an authorization request type' }]}
                >
                    <Radio.Group
                    defaultValue={formValues.authRequestType}
                    buttonStyle='solid'
                    onChange={e => setFormValues({ ...formValues, authRequestType: e.target.value })}
                    >
                        <Radio.Button value="medical">Medical</Radio.Button>
                        <Radio.Button value="bh">Behavioral Health</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Collapse isOpened={true}>
                    <Alert message={
                        <div>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed urna eu velit gravida viverra. Fusce et eros odio. Fusce posuere nisi quis diam euismod tempor. Donec lacus dolor, ultrices quis tempus id, cursus id turpis. Praesent quis viverra leo. Nulla pretium nunc quis orci gravida vehicula. Sed faucibus turpis ex, ac semper ex facilisis sed. Duis sed elit at nibh suscipit auctor. Pellentesque mattis enim urna, a varius turpis luctus non.</Paragraph>
                        </div>
                    } type="error" />
                </Collapse>
                <Form.Item 
                label="Medical Health Authorization Type" 
                name="medicalHealthAuthType"
                rules={[{ required: true, message: 'Please enter an authorization request type' }]}
                >
                    <Radio.Group
                    defaultValue={formValues.authRequestType}
                    buttonStyle='solid'
                    onChange={e => setFormValues({ ...formValues, authRequestType: e.target.value })}
                    >
                        <Radio.Button value="outpatient">Outpatient</Radio.Button>
                        <Radio.Button value="dmeopp">DME/OP</Radio.Button>
                        <Radio.Button value="inpatient-fs">Inpatient Future Stay</Radio.Button>
                        <Radio.Button value="ip-admitted">Inpatient Admitted</Radio.Button>
                        <Radio.Button value="obstay">Observation Stay</Radio.Button>
                        <Radio.Button value="snfltac">SNF/LTAC/Rehab</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Collapse isOpened={true}>
                    <Alert message={
                        <div>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed urna eu velit gravida viverra. Fusce et eros odio. Fusce posuere nisi quis diam euismod tempor. Donec lacus dolor, ultrices quis tempus id, cursus id turpis. Praesent quis viverra leo. Nulla pretium nunc quis orci gravida vehicula. Sed faucibus turpis ex, ac semper ex facilisis sed. Duis sed elit at nibh suscipit auctor. Pellentesque mattis enim urna, a varius turpis luctus non.</Paragraph>
                        </div>
                    } type="success" />
                </Collapse>
                <Form.Item 
                label="Status" 
                name="status"
                rules={[{ required: true, message: 'Please select a status' }]}
                >
                    <Select>
                        <Select.Option value="Pending">Pending</Select.Option>
                        <Select.Option value="Approved">Approved</Select.Option>
                        <Select.Option value="Denied">Denied</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Patient" name="patient">
                    <Input />
                </Form.Item>
                <Form.Item label="Service" name="service">
                    <Input />
                </Form.Item>
                <Form.Item label="Auth Type" name="authType">
                    <Select>
                        <Select.Option value="Regular">Regular</Select.Option>
                        <Select.Option value="Urgent">Urgent</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Created Date" name="createdDate">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Add Authorization Request">
                    <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                        Add
                    </Button>
                </Form.Item>
            </Form>
            </Col>
            </Row>
        </div>
    );
}

export default FormComponent;